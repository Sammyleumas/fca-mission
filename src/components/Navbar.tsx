import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, FileText } from 'lucide-react';
import { Logo } from './Logo';
import { ACADEMY_INFO } from '../data/academyData';
import { useAuth } from '../context/AuthContext';
import { UserApplicationsModal } from './UserApplicationsModal';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Mission & Vision', href: 'mission' },
    { name: 'Programs', href: 'programs' },
    { name: 'Why Us', href: 'why-us' },
    { name: 'Journey', href: 'journey' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    onNavigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <UserApplicationsModal 
        isOpen={isPortalOpen} 
        onClose={() => setIsPortalOpen(false)} 
      />

      {/* Top Banner with Quick Contact Info */}
      <div className="bg-[#0D47A1] text-white text-xs py-2 px-4 font-medium hidden md:block border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`mailto:${ACADEMY_INFO.email}`} className="flex items-center gap-1.5 hover:text-sky-200 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>{ACADEMY_INFO.email}</span>
            </a>
            <a href={`tel:${ACADEMY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-sky-200 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>{ACADEMY_INFO.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
            <span className="text-yellow-200 font-semibold">Admissions Open for Next Cohort</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-lg shadow-slate-900/5 py-3' : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-200/80'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('hero')} 
              className="flex items-center text-left focus:outline-none group cursor-pointer"
            >
              <Logo size="md" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#0D47A1] text-white shadow-md shadow-blue-900/20'
                        : 'text-slate-700 hover:text-[#0D47A1] hover:bg-white'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* CTA Button & Portal Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsPortalOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-800 text-xs font-bold hover:bg-slate-200 transition-all cursor-pointer"
                title="Student Applications Portal"
              >
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'User'} className="w-5 h-5 rounded-full" />
                ) : (
                  <FileText className="w-4 h-4 text-[#0D47A1]" />
                )}
                <span>{user ? 'My Portal' : 'Student Portal'}</span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0D47A1] to-[#1565C0] text-white text-xs font-bold shadow-md shadow-blue-900/20 hover:opacity-95 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Apply / Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsPortalOpen(true)}
                className="p-2.5 rounded-xl bg-blue-50 text-[#0D47A1] border border-blue-200 font-bold text-xs flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4" />
                <span>Portal</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-1.5 pt-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0D47A1] text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-[#0D47A1]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => { setIsMobileMenuOpen(false); setIsPortalOpen(true); }}
                className="w-full text-center py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#0D47A1]" />
                <span>Student Applications Portal</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-3 rounded-xl bg-[#0D47A1] text-white font-bold text-xs shadow-md shadow-blue-900/20"
              >
                Apply / Contact Academy
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
