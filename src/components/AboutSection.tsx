import React from 'react';
import { Lightbulb, Compass, ShieldCheck, Zap } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { FadeInSection, FadeInDiv } from './FadeInSection';

export const AboutSection: React.FC = () => {
  return (
    <FadeInSection id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeInDiv delay={0.1} className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#0D47A1] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#0D47A1]" />
            <span>About Fusion Connect Academy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging The Gap Between <span className="gradient-text">Engineering & Artistry</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Fusion Connect Academy is an official premier educational hub dedicated to nurturing modern creators, engineers, and digital innovators.
          </p>
        </FadeInDiv>

        {/* 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Who We Are */}
          <FadeInDiv delay={0.2} className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0D47A1] mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                Our Foundation
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-3 mb-3">Who We Are</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {ACADEMY_INFO.about.whoWeAre}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-[#0D47A1] flex items-center gap-1">
              <span>Dual-Track Philosophy</span>
            </div>
          </FadeInDiv>

          {/* Why We Exist */}
          <FadeInDiv delay={0.3} className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                Our Purpose
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-3 mb-3">Why We Exist</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {ACADEMY_INFO.about.whyWeExist}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-amber-700 flex items-center gap-1">
              <span>Dissolving Boundaries</span>
            </div>
          </FadeInDiv>

          {/* What Makes Us Different */}
          <FadeInDiv delay={0.4} className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">
                Our Edge
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-3 mb-3">What Makes Us Different</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {ACADEMY_INFO.about.whatMakesUsDifferent}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-sky-700 flex items-center gap-1">
              <span>Real Portfolio Outputs</span>
            </div>
          </FadeInDiv>

        </div>

        {/* Stats Counter Banner */}
        <FadeInDiv delay={0.5} className="mt-16 bg-gradient-to-r from-[#0D47A1] via-[#1565C0] to-[#002171] rounded-2xl p-8 sm:p-12 text-white shadow-xl shadow-blue-900/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-blue-400/30">
            {ACADEMY_INFO.stats.map((stat, idx) => (
              <div key={idx} className={`${idx > 0 ? 'pt-6 lg:pt-0' : ''}`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-yellow-300 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-sky-100 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeInDiv>

      </div>
    </FadeInSection>
  );
};
