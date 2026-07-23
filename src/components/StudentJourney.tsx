import React from 'react';
import { 
  FileCheck, GraduationCap, Code2, Award, Trophy, Rocket, ArrowRight, Milestone 
} from 'lucide-react';
import { STUDENT_JOURNEY } from '../data/academyData';
import { FadeInSection, FadeInDiv } from './FadeInSection';

interface StudentJourneyProps {
  onApplyClick: () => void;
}

export const StudentJourney: React.FC<StudentJourneyProps> = ({ onApplyClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck': return <FileCheck className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'Trophy': return <Trophy className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      default: return <Milestone className="w-5 h-5" />;
    }
  };

  return (
    <FadeInSection id="journey" className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeInDiv delay={0.1} className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0D47A1] text-xs font-bold uppercase tracking-wider">
            <Milestone className="w-4 h-4 text-[#0D47A1]" />
            <span>Structured Path To Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Student Journey
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From enrollment to launching your high-impact career — experience a clear, structured roadmap designed for transformational success.
          </p>
        </FadeInDiv>

        {/* 6-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {STUDENT_JOURNEY.map((step, index) => (
            <FadeInDiv
              key={step.stepNumber}
              delay={0.1 + (index % 3) * 0.08}
              className="h-full"
            >
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative hover:shadow-lg hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between h-full">
                {/* Step Number Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0D47A1] text-white flex items-center justify-center font-black shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
                      {getIcon(step.iconName)}
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#0D47A1] transition-colors">
                      0{step.stepNumber}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-2.5 py-0.5 rounded-md">
                    {step.highlight}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-[#0D47A1]">
                  <span>Phase {step.stepNumber} of 6</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </FadeInDiv>
          ))}
        </div>

        {/* Action Callout */}
        <FadeInDiv delay={0.4} className="mt-12 text-center">
          <button
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0D47A1] text-white text-xs font-bold shadow-lg shadow-blue-900/30 hover:bg-blue-800 transition-all cursor-pointer"
          >
            <span>Begin Step 1: Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </FadeInDiv>

      </div>
    </FadeInSection>
  );
};
