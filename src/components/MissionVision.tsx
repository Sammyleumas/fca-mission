import React from 'react';
import { Target, Eye, Check, Milestone, Compass } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { FadeInSection, FadeInDiv } from './FadeInSection';

export const MissionVision: React.FC = () => {
  return (
    <FadeInSection id="mission" className="py-20 bg-white relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <FadeInDiv delay={0.1} className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0D47A1] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#0D47A1]" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Mission & Future Vision
          </h2>
          <p className="text-slate-600 text-base">
            Driven by clear purpose and a bold roadmap to redefine technology and arts education globally.
          </p>
        </FadeInDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Mission Card */}
          <FadeInDiv delay={0.2} direction="right" className="relative bg-gradient-to-br from-blue-900 via-[#0D47A1] to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-blue-900/20 overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-yellow-300">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-200 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-700/50">
                  OUR MISSION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                To Empower Global Innovators & Creative Visionaries
              </h3>

              <p className="text-sky-100 text-base sm:text-lg leading-relaxed font-light">
                "{ACADEMY_INFO.mission}"
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-800/80 space-y-2.5 text-xs text-sky-200">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-yellow-400" />
                <span>Industry-aligned dual-track curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-yellow-400" />
                <span>Practical studio mastery over passive theory</span>
              </div>
            </div>
          </FadeInDiv>

          {/* Vision Statement with Timeline Visuals */}
          <FadeInDiv delay={0.3} direction="left" className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                  OUR VISION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                Setting The Global Benchmark in Tech & Arts
              </h3>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal mb-8">
                "{ACADEMY_INFO.vision}"
              </p>

              {/* Vision Timeline Milestones */}
              <div className="space-y-4 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
                  <Milestone className="w-4 h-4 text-[#0D47A1]" />
                  <span>Strategic Roadmap</span>
                </div>

                <div className="relative pl-6 border-l-2 border-blue-200 space-y-4">
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#0D47A1] ring-4 ring-blue-100"></span>
                    <span className="text-xs font-bold text-[#0D47A1]">Phase 1: Dual-Track Foundation</span>
                    <p className="text-xs text-slate-600 mt-0.5">Establishing physical & digital studio cohorts in Tech & Creative Arts.</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-amber-100"></span>
                    <span className="text-xs font-bold text-amber-800">Phase 2: Global Studio Incubator</span>
                    <p className="text-xs text-slate-600 mt-0.5">Connecting student productions with international film & software labs.</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></span>
                    <span className="text-xs font-bold text-emerald-800">Phase 3: AI-Driven Creative Hub</span>
                    <p className="text-xs text-slate-600 mt-0.5">Pioneering hybrid human-AI creative direction and venture launchpads.</p>
                  </div>
                </div>
              </div>
            </div>

          </FadeInDiv>

        </div>

      </div>
    </FadeInSection>
  );
};
