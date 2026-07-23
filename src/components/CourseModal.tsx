import React, { useState } from 'react';
import { X, CheckCircle2, Briefcase, Clock, Award, Sparkles, Send, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnrollRequest: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  onEnrollRequest
}) => {
  if (!course) return null;

  const isTech = course.track === 'technology';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className={`p-6 sm:p-8 text-white relative ${
          isTech 
            ? 'bg-gradient-to-r from-blue-900 via-[#0D47A1] to-slate-900' 
            : 'bg-gradient-to-r from-amber-950 via-slate-900 to-amber-900'
        }`}>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <span className={`inline-block text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 border ${
            isTech 
              ? 'bg-blue-500/20 text-blue-200 border-blue-400/30' 
              : 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30'
          }`}>
            {isTech ? 'Technology Track' : 'Art Track'} Specialization
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {course.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-sky-100 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-yellow-300" />
              <span>Duration: {course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-yellow-300" />
              <span>Level: {course.level}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Overview */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
              Course Overview
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed font-normal">
              {course.overview}
            </p>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
              Learning Outcomes
            </h3>
            <div className="space-y-2">
              {course.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                    isTech ? 'text-[#0D47A1]' : 'text-amber-600'
                  }`} />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tools Gained */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
              Skills & Tools Mastered
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.skillsGained.map((skill, idx) => (
                <span 
                  key={idx}
                  className="text-xs font-medium bg-slate-100 border border-slate-200 text-slate-800 px-3 py-1 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[#0D47A1]" />
              <span>Career Opportunities</span>
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-semibold">
              {course.careerOpportunities.map((career, idx) => (
                <div key={idx} className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 text-[#0D47A1]">
                  &bull; {career}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-semibold text-xs hover:bg-slate-50 cursor-pointer"
            >
              Close Window
            </button>

            <button
              onClick={() => {
                onClose();
                onEnrollRequest(course.title);
              }}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-white shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
                isTech 
                  ? 'bg-[#0D47A1] hover:bg-blue-800 shadow-blue-900/30' 
                  : 'bg-amber-600 hover:bg-amber-700 shadow-amber-900/30'
              }`}
            >
              <span>Apply For {course.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
