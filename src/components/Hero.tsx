import React from 'react';
import { ArrowRight, Code, Palette, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { FadeInDiv } from './FadeInSection';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenTrack: (track: 'technology' | 'art') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenTrack }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-8 pb-16">
      {/* Background Glows & Subtle Motion Elements */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-indigo-900 to-slate-950"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-yellow-400/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Primary CTAs */}
          <FadeInDiv delay={0.1} direction="right" className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs font-semibold backdrop-blur-md shadow-inner">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-spin-slow" />
              <span>{ACADEMY_INFO.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Shape The Future Where <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-yellow-300 bg-clip-text text-transparent">
                Technology
              </span>{' '}
              Meets{' '}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-sky-300 bg-clip-text text-transparent">
                Creativity
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Fusion Connect Academy is an elite institution equipping tomorrow's leaders with cutting-edge tech mastery and visionary creative artistry. Unlocking dual-track excellence across Web & AI, Design, Filmmaking, and Fine Arts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('programs')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-[#0D47A1] to-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-900/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore Dual Programs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 font-bold text-sm hover:bg-slate-800 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact Academy</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Highlight Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-300 text-xs font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Industry Mentor-Led</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>100% Practical Studios</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Career Placement</span>
              </div>
            </div>

          </FadeInDiv>

          {/* Right Column: Interactive Dual Track Showcase Cards */}
          <FadeInDiv delay={0.2} direction="left" className="lg:col-span-5 relative space-y-4">
            
            {/* Technology Track Card */}
            <div 
              onClick={() => onOpenTrack('technology')}
              className="glass-card-dark p-6 rounded-2xl border border-blue-400/30 shadow-2xl relative overflow-hidden group hover:border-blue-400/60 transition-all cursor-pointer transform hover:-translate-y-1 duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-600/30 border border-blue-400/40 text-blue-300">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded-full border border-blue-800">
                      Track 01
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-200 transition-colors">
                      Technology Track
                    </h3>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>

              <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                Web Design, Product Dev, UI/UX, AI Automation, Graphic Design & Digital Marketing.
              </p>

              <div className="mt-4 pt-3 border-t border-blue-900/60 flex items-center justify-between text-xs text-blue-200 font-medium">
                <span>6 Specialized Courses</span>
                <span className="text-yellow-300 font-bold group-hover:underline flex items-center gap-1">
                  Explore Tech Track &rarr;
                </span>
              </div>
            </div>

            {/* Art Track Card */}
            <div 
              onClick={() => onOpenTrack('art')}
              className="glass-card-dark p-6 rounded-2xl border border-yellow-500/20 shadow-2xl relative overflow-hidden group hover:border-yellow-400/50 transition-all cursor-pointer transform hover:-translate-y-1 duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-yellow-500/20 border border-yellow-400/40 text-yellow-300">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-yellow-300 bg-yellow-950/80 px-2 py-0.5 rounded-full border border-yellow-800">
                      Track 02
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-yellow-200 transition-colors">
                      Creative Art Track
                    </h3>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>

              <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                Filmmaking, Cinematography, Video Editing, Painting & Drawing, Scriptwriting & Stage Act.
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-yellow-200 font-medium">
                <span>6 Creative Disciplines</span>
                <span className="text-yellow-300 font-bold group-hover:underline flex items-center gap-1">
                  Explore Art Track &rarr;
                </span>
              </div>
            </div>

            {/* Quick Stats Grid Bar */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-xl font-black text-blue-400">1,200+</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold mt-0.5">Students Trained</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-xl font-black text-yellow-400">94%</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold mt-0.5">Career Placement</div>
              </div>
            </div>

          </FadeInDiv>

        </div>
      </div>
    </section>
  );
};
