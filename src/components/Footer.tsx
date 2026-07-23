import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Github, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Logo } from './Logo';
import { ACADEMY_INFO } from '../data/academyData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenTrack: (track: 'technology' | 'art') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTrack }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => onNavigate('hero')} className="cursor-pointer">
              <Logo variant="light" size="md" />
            </button>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Fusion Connect Academy is an official premier educational institution where technology and creative arts unite to empower the next generation of innovators, designers, developers, and filmmakers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {['hero', 'about', 'mission', 'programs', 'why-us', 'journey', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link)}
                    className="capitalize hover:text-white transition-colors cursor-pointer"
                  >
                    {link === 'hero' ? 'Home' : link === 'mission' ? 'Mission & Vision' : link === 'why-us' ? 'Why Choose Us' : link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Programs (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Dual Tracks
            </h4>
            <div className="space-y-2">
              <div>
                <button 
                  onClick={() => onOpenTrack('technology')}
                  className="font-bold text-blue-400 hover:underline cursor-pointer"
                >
                  Technology Track &rarr;
                </button>
                <div className="text-[11px] text-slate-500 mt-1 space-y-0.5">
                  <div>Web Design &amp; Product Dev</div>
                  <div>UI/UX &amp; AI Automation</div>
                  <div>Graphic Design &amp; Digital Marketing</div>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => onOpenTrack('art')}
                  className="font-bold text-yellow-400 hover:underline cursor-pointer"
                >
                  Creative Art Track &rarr;
                </button>
                <div className="text-[11px] text-slate-500 mt-1 space-y-0.5">
                  <div>Filmmaking &amp; Cinematography</div>
                  <div>Video Editing &amp; Scriptwriting</div>
                  <div>Fine Art &amp; Stage Performance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-2.5">
              <a href={`mailto:${ACADEMY_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="break-all">{ACADEMY_INFO.email}</span>
              </a>

              <a href={`tel:${ACADEMY_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>{ACADEMY_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-500">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{ACADEMY_INFO.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Fusion Connect Academy. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#contact" className="hover:text-slate-300">Terms of Service</a>
            <a href="#contact" className="hover:text-slate-300">Admissions Portal</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
