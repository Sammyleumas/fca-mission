import React from 'react';
import { Sparkles, ArrowRight, PhoneCall } from 'lucide-react';
import { FadeInSection, FadeInDiv } from './FadeInSection';

interface CTASectionProps {
  onNavigate: (sectionId: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
  return (
    <FadeInSection id="cta" className="py-20 bg-gradient-to-r from-blue-950 via-[#0D47A1] to-slate-950 text-white relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <FadeInDiv delay={0.1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-yellow-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span>Next Cohort Enrollment Is Open</span>
        </FadeInDiv>

        <FadeInDiv delay={0.2}>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Join The Next Generation Of <br className="hidden sm:inline" />
            <span className="text-yellow-300">Innovators & Creative Visionaries</span>
          </h2>
        </FadeInDiv>

        <FadeInDiv delay={0.3}>
          <p className="text-sky-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Take the definitive step towards mastering technology and creative arts. Build real projects, gain industry credentials, and transform your career trajectory.
          </p>
        </FadeInDiv>

        <FadeInDiv delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-yellow-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-yellow-500/20 hover:bg-yellow-300 hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Contact Academy Admissions</span>
          </button>

          <button
            onClick={() => onNavigate('programs')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore All Programs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </FadeInDiv>

      </div>
    </FadeInSection>
  );
};
