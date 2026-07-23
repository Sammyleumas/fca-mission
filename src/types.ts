export type TrackCategory = 'technology' | 'art';

export interface Course {
  id: string;
  title: string;
  track: TrackCategory;
  shortDescription: string;
  overview: string;
  outcomes: string[];
  careerOpportunities: string[];
  skillsGained: string[];
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  iconName: string;
  popular?: boolean;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface JourneyStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  trackInterest?: string;
}

export interface ToastMessage {
  id: string;
  text: string;
  type?: 'success' | 'info' | 'error';
}
