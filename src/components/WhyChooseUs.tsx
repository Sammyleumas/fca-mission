import React from 'react';
import { 
  Wrench, Users, FolderCheck, Briefcase, Lightbulb, Brain, Layers, HeartHandshake, CheckCircle2, Star
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/academyData';
import { FadeInSection, FadeInDiv } from './FadeInSection';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'FolderCheck': return <FolderCheck className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6" />;
      case 'Brain': return <Brain className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      default: return <Star className="w-6 h-6" />;
    }
  };

  return (
    <FadeInSection id="why-us" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeInDiv delay={0.1} className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-[#0D47A1] text-xs font-bold uppercase tracking-wider">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>The Fusion Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Fusion Connect Academy
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Designed from the ground up to give you the practical skills, industry network, and creative confidence to thrive in the modern economy.
          </p>
        </FadeInDiv>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <FadeInDiv
              key={item.id}
              delay={0.1 + (index % 4) * 0.08}
              className="h-full"
            >
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0D47A1] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0D47A1] group-hover:text-white transition-all">
                    {getIcon(item.iconName)}
                  </div>

                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                    Feature 0{index + 1}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0D47A1] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Verified Pillar</span>
                </div>
              </div>
            </FadeInDiv>
          ))}
        </div>

      </div>
    </FadeInSection>
  );
};
