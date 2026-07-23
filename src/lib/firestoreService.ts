import { 
  collection, doc, setDoc, getDocs, query, where, orderBy, onSnapshot, getDocFromServer, serverTimestamp 
} from 'firebase/firestore';
import { db, auth } from './firebase';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export async function testFirestoreConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}

export interface InquiryData {
  id?: string;
  userId?: string;
  fullName: string;
  email: string;
  phone?: string;
  trackInterest: string;
  selectedCourse?: string;
  message: string;
  status?: 'pending' | 'reviewed' | 'contacted';
  createdAt?: any;
}

export async function saveInquiry(data: InquiryData): Promise<string> {
  const path = 'inquiries';
  try {
    const inquiryRef = doc(collection(db, path));
    const inquiryId = inquiryRef.id;
    const payload = {
      id: inquiryId,
      userId: auth.currentUser ? auth.currentUser.uid : 'guest',
      fullName: data.fullName.trim().slice(0, 100),
      email: data.email.trim().slice(0, 100),
      phone: (data.phone || '').trim().slice(0, 30),
      trackInterest: data.trackInterest.trim().slice(0, 50),
      selectedCourse: (data.selectedCourse || '').trim().slice(0, 100),
      message: data.message.trim().slice(0, 1000),
      status: 'pending',
      createdAt: serverTimestamp()
    };
    await setDoc(inquiryRef, payload);
    return inquiryId;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
    throw error;
  }
}

export function subscribeToUserInquiries(userId: string, callback: (inquiries: InquiryData[]) => void) {
  const path = 'inquiries';
  if (!userId) {
    callback([]);
    return () => {};
  }
  
  const q = query(
    collection(db, path),
    where('userId', '==', userId)
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const items: InquiryData[] = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data() as InquiryData;
        items.push({
          ...data,
          id: docSnap.id
        });
      });
      callback(items);
    },
    (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
    }
  );
}

export async function syncUserProfile(user: any) {
  if (!user) return;
  const path = `users/${user.uid}`;
  try {
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      displayName: (user.displayName || '').slice(0, 100),
      email: (user.email || '').slice(0, 100),
      photoURL: (user.photoURL || '').slice(0, 500),
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}
