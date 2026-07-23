import React, { useEffect, useState } from 'react';
import { X, FileText, Clock, CheckCircle, AlertCircle, LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { subscribeToUserInquiries, InquiryData } from '../lib/firestoreService';

interface UserApplicationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserApplicationsModal: React.FC<UserApplicationsModalProps> = ({ isOpen, onClose }) => {
  const { user, signInWithGoogle, logout } = useAuth();
  const [inquiries, setInquiries] = useState<InquiryData[]>([]);
  const [loadingInquiries, setLoadingInquiries] = useState<boolean>(true);

  useEffect(() => {
    if (!user) {
      setInquiries([]);
      setLoadingInquiries(false);
      return;
    }

    setLoadingInquiries(true);
    const unsubscribe = subscribeToUserInquiries(user.uid, (data) => {
      setInquiries(data);
      setLoadingInquiries(false);
    });

    return () => unsubscribe();
  }, [user]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-950 via-[#0D47A1] to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-yellow-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">My Student Portal</h2>
              <p className="text-xs text-blue-200">Firebase Firestore Realtime Sync</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Info Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          {user ? (
            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.displayName || 'User'} className="w-9 h-9 rounded-full border border-blue-200" />
              ) : (
                <div className="w-9 h-9 rounded-full bg-blue-100 text-[#0D47A1] flex items-center justify-center font-bold text-sm">
                  <UserIcon className="w-5 h-5" />
                </div>
              )}
              <div>
                <p className="text-xs font-bold text-slate-900">{user.displayName || 'Signed In Student'}</p>
                <p className="text-[11px] text-slate-500">{user.email}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <span>Sign in with Google to sync your application history across devices.</span>
            </div>
          )}

          {user ? (
            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D47A1] text-white text-xs font-bold hover:bg-blue-800 transition-all cursor-pointer shadow"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V13.4h6.887c-.58 2.319-2.738 3.778-5.112 3.778-3.13 0-5.672-2.541-5.672-5.672s2.542-5.672 5.672-5.672c1.458 0 2.784.55 3.784 1.458l2.378-2.378C18.665 3.52 15.65 2.5 12.24 2.5 7.01 2.5 2.76 6.75 2.76 11.98s4.25 9.48 9.48 9.48c5.46 0 9.1-3.84 9.1-9.28 0-.61-.06-1.18-.16-1.9H12.24z"/>
              </svg>
              <span>Sign In with Google</span>
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {!user ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0D47A1] mx-auto flex items-center justify-center">
                <UserIcon className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Sign in to view your applications</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Applications and admissions inquiries submitted through Fusion Connect Academy are linked to your account in Firebase.
              </p>
              <button
                onClick={signInWithGoogle}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0D47A1] text-white text-xs font-bold shadow-lg hover:bg-blue-800 transition-all cursor-pointer"
              >
                <span>Continue with Google</span>
              </button>
            </div>
          ) : loadingInquiries ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-8 h-8 border-3 border-[#0D47A1] border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-xs text-slate-500">Fetching live record from Firestore...</p>
            </div>
          ) : inquiries.length === 0 ? (
            <div className="text-center py-12 space-y-3 bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-6">
              <FileText className="w-10 h-10 text-slate-400 mx-auto" />
              <h4 className="text-sm font-bold text-slate-800">No Applications Submitted Yet</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                When you submit an application or admissions query, your record will appear here in real-time.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                Your Submitted Applications ({inquiries.length})
              </h4>
              {inquiries.map((inquiry) => (
                <div key={inquiry.id} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#0D47A1] uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-md">
                      {inquiry.trackInterest} Track
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      <Clock className="w-3 h-3" />
                      <span>{inquiry.status || 'pending'}</span>
                    </span>
                  </div>

                  {inquiry.selectedCourse && (
                    <p className="text-sm font-bold text-slate-900">
                      Selected Program: <span className="text-[#0D47A1]">{inquiry.selectedCourse}</span>
                    </p>
                  )}

                  <p className="text-xs text-slate-600 line-clamp-2 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    "{inquiry.message}"
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                    <span>Contact Email: {inquiry.email}</span>
                    <span className="flex items-center gap-1 text-emerald-600 font-bold">
                      <CheckCircle className="w-3 h-3" />
                      <span>Synced to Cloud</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 text-center shrink-0">
          <p className="text-[11px] text-slate-500">
            Secured by Firebase Firestore Authentication & Rules
          </p>
        </div>
      </div>
    </div>
  );
};
