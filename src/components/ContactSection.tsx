import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MessageSquare, Copy, Check, Send, MapPin, Globe, Sparkles, Clock 
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { ContactFormData } from '../types';
import { FadeInSection, FadeInDiv } from './FadeInSection';
import { useAuth } from '../context/AuthContext';
import { saveInquiry } from '../lib/firestoreService';

interface ContactSectionProps {
  onShowToast: (message: string, type?: 'success' | 'info' | 'error') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const { user } = useAuth();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    trackInterest: 'both'
  });

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.displayName || prev.name,
        email: user.email || prev.email
      }));
    }
  }, [user]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Copy helpers
  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
      onShowToast('Email copied to clipboard!', 'success');
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
      onShowToast('Phone number copied to clipboard!', 'success');
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      onShowToast('Please fix errors in the form before submitting.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      await saveInquiry({
        fullName: formData.name,
        email: formData.email,
        trackInterest: formData.trackInterest,
        selectedCourse: formData.subject,
        message: formData.message,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Thank you! Your message and application have been securely saved to Firebase.', 'success');
      setFormData({
        name: user?.displayName || '',
        email: user?.email || '',
        subject: '',
        message: '',
        trackInterest: 'both'
      });
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
      onShowToast('Failed to save message. Please try again.', 'error');
    }
  };

  return (
    <FadeInSection id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeInDiv delay={0.1} className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-[#0D47A1] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-[#0D47A1]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Fusion Connect Academy
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Have questions about our programs, admissions, or partnerships? Reach out directly via phone, email, WhatsApp, or submit the inquiry form below.
          </p>
        </FadeInDiv>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions (5 Cols) */}
          <FadeInDiv delay={0.2} direction="right" className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md space-y-6">
              
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#0D47A1]" />
                <span>Official Contact Channels</span>
              </h3>

              {/* Email Block */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 group">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-blue-100 text-[#0D47A1] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Official Email</span>
                    <a 
                      href={`mailto:${ACADEMY_INFO.email}`} 
                      className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-[#0D47A1] transition-colors break-all mt-0.5"
                    >
                      {ACADEMY_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(ACADEMY_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#0D47A1] hover:border-blue-300 transition-all cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Block */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 group">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-amber-100 text-amber-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Admissions Line</span>
                    <a 
                      href={`tel:${ACADEMY_INFO.phone.replace(/\s+/g, '')}`} 
                      className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-[#0D47A1] transition-colors mt-0.5"
                    >
                      {ACADEMY_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(ACADEMY_INFO.phone, 'phone')}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#0D47A1] hover:border-blue-300 transition-all cursor-pointer shrink-0"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Block */}
              <a
                href={ACADEMY_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-600 text-white shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">Instant Chat</span>
                    <div className="text-xs sm:text-sm font-bold text-emerald-950">Chat on WhatsApp &rarr;</div>
                  </div>
                </div>
                <span className="text-xs font-semibold bg-emerald-200/80 px-2.5 py-1 rounded-md text-emerald-900">
                  Online
                </span>
              </a>

              {/* Campus Address Block */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="p-3 rounded-xl bg-sky-100 text-[#0D47A1] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Academy Campus</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    {ACADEMY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Monday &ndash; Saturday: 8:00 AM &ndash; 6:00 PM (WAT)</span>
              </div>

            </div>

          </FadeInDiv>

          {/* Right Column: Contact Inquiry Form (7 Cols) */}
          <FadeInDiv delay={0.3} direction="left" className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the form below and an admissions representative will reply within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Message Received!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to Fusion Connect Academy. Our admissions counselor will review your inquiry and contact you at <strong>{formData.email || 'your email'}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 ${
                      errors.name ? 'border-red-500 focus:ring-red-200 bg-red-50/20' : 'border-slate-300 focus:border-[#0D47A1] focus:ring-blue-100'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-red-500 focus:ring-red-200 bg-red-50/20' : 'border-slate-300 focus:border-[#0D47A1] focus:ring-blue-100'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Program Track Interest */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Program Track Interest
                  </label>
                  <select
                    value={formData.trackInterest}
                    onChange={(e) => setFormData({ ...formData, trackInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#0D47A1] bg-white"
                  >
                    <option value="both">Both Technology & Creative Art Tracks</option>
                    <option value="technology">Technology Track Only (Web, AI, UI/UX, Product Dev)</option>
                    <option value="art">Art Track Only (Filmmaking, Editing, Painting, Acting)</option>
                    <option value="general">General Admissions & Campus Inquiry</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Inquiry about Next Cohort Start Date"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 ${
                      errors.subject ? 'border-red-500 focus:ring-red-200 bg-red-50/20' : 'border-slate-300 focus:border-[#0D47A1] focus:ring-blue-100'
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-red-500 mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Questions <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please tell us about your educational background, goals, or questions..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 ${
                      errors.message ? 'border-red-500 focus:ring-red-200 bg-red-50/20' : 'border-slate-300 focus:border-[#0D47A1] focus:ring-blue-100'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0D47A1] to-[#1565C0] text-white text-xs font-bold shadow-lg shadow-blue-900/20 hover:opacity-95 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </FadeInDiv>

        </div>

      </div>
    </FadeInSection>
  );
};
