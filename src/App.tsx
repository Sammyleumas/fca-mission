import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MissionVision } from './components/MissionVision';
import { ProgramsSection } from './components/ProgramsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StudentJourney } from './components/StudentJourney';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { ScrollToTop } from './components/ScrollToTop';
import { ToastContainer } from './components/Toast';
import { Course, TrackCategory, ToastMessage } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedTrackFilter, setSelectedTrackFilter] = useState<TrackCategory | 'all'>('all');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Toast notification trigger
  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Open track filter from hero or footer
  const handleOpenTrack = (track: TrackCategory) => {
    setSelectedTrackFilter(track);
    handleNavigate('programs');
  };

  // Handle enrollment request from modal
  const handleEnrollRequest = (courseTitle: string) => {
    showToast(`Inquiry initiated for ${courseTitle}. Redirecting to contact form...`, 'info');
    handleNavigate('contact');
  };

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'mission', 'programs', 'why-us', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-[#0D47A1] selection:text-white">
      
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} />

      {/* Sticky Glass Navbar */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero 
          onNavigate={handleNavigate} 
          onOpenTrack={handleOpenTrack} 
        />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3 & 4. Mission & Vision Statements */}
        <MissionVision />

        {/* 5. Dual-Track Academic Programs & Courses */}
        <ProgramsSection 
          onSelectCourse={(course) => setSelectedCourse(course)}
          selectedTrackFilter={selectedTrackFilter}
          onTrackFilterChange={(track) => setSelectedTrackFilter(track)}
        />

        {/* 6. Why Choose Fusion Connect Academy */}
        <WhyChooseUs />

        {/* 7. Student Journey Timeline */}
        <StudentJourney 
          onApplyClick={() => handleNavigate('contact')} 
        />

        {/* 8. Call To Action Banner */}
        <CTASection 
          onNavigate={handleNavigate} 
        />

        {/* 9. Contact Section with Phone, Email, WhatsApp, Form & Map */}
        <ContactSection 
          onShowToast={showToast} 
        />

      </main>

      {/* 10. Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenTrack={handleOpenTrack} 
      />

      {/* Course Detail Modal */}
      <CourseModal 
        course={selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
        onEnrollRequest={handleEnrollRequest} 
      />

      {/* Scroll To Top Button */}
      <ScrollToTop />

    </div>
  );
}
