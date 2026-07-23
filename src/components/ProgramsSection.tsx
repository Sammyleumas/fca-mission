import React, { useState } from 'react';
import { 
  Code, Palette, Layout, Cpu, Smartphone, Sparkles, TrendingUp,
  Clapperboard, Camera, Video, Brush, FileText, Theater, ArrowRight,
  Clock, Search, Sparkle, Layers
} from 'lucide-react';
import { Course, TrackCategory } from '../types';
import { COURSES } from '../data/courses';
import { FadeInSection, FadeInDiv } from './FadeInSection';

interface ProgramsSectionProps {
  onSelectCourse: (course: Course) => void;
  selectedTrackFilter: TrackCategory | 'all';
  onTrackFilterChange: (track: TrackCategory | 'all') => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectCourse,
  selectedTrackFilter,
  onTrackFilterChange
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Clapperboard': return <Clapperboard className="w-6 h-6" />;
      case 'Camera': return <Camera className="w-6 h-6" />;
      case 'Video': return <Video className="w-6 h-6" />;
      case 'Brush': return <Brush className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Theater': return <Theater className="w-6 h-6" />;
      default: return <Code className="w-6 h-6" />;
    }
  };

  const filteredCourses = COURSES.filter((course) => {
    const matchesTrack = selectedTrackFilter === 'all' || course.track === selectedTrackFilter;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.skillsGained.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTrack && matchesSearch;
  });

  const techCourses = COURSES.filter(c => c.track === 'technology');
  const artCourses = COURSES.filter(c => c.track === 'art');

  return (
    <FadeInSection id="programs" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <FadeInDiv delay={0.1} className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/80 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-yellow-400" />
            <span>Dual-Track Academic Programs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Explore Our World-Class Courses
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Choose between our high-impact Technology Track or expressive Art Track, or combine both for comprehensive dual mastery.
          </p>
        </FadeInDiv>

        {/* Track Category Selector Tabs & Search */}
        <FadeInDiv delay={0.15} className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-slate-950/80 p-2.5 rounded-2xl border border-slate-800">
          
          {/* Tab Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => onTrackFilterChange('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedTrackFilter === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-[#0D47A1] text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              All Programs ({COURSES.length})
            </button>

            <button
              onClick={() => onTrackFilterChange('technology')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                selectedTrackFilter === 'technology'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-blue-300 hover:bg-slate-900'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Technology Track ({techCourses.length})</span>
            </button>

            <button
              onClick={() => onTrackFilterChange('art')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                selectedTrackFilter === 'art'
                  ? 'bg-amber-500 text-slate-950 font-extrabold shadow-lg'
                  : 'text-slate-400 hover:text-yellow-300 hover:bg-slate-900'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Art Track ({artCourses.length})</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course or skill..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

        </FadeInDiv>

        {/* Featured Track Overview Cards (shown when 'all' is selected) */}
        {selectedTrackFilter === 'all' && !searchQuery && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Tech Track Showcase Header Card */}
            <FadeInDiv delay={0.2} direction="right" className="bg-gradient-to-br from-blue-950 via-[#0D47A1]/80 to-slate-950 rounded-3xl p-8 border border-blue-500/30 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30 uppercase">
                  Track 01
                </span>
                <span className="text-xs text-blue-200">6 Specializations</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Technology Track</h3>
              <p className="text-slate-300 text-xs mb-6 leading-relaxed">
                Build software products, design digital user interfaces, leverage artificial intelligence automation, and lead tech growth campaigns.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {techCourses.map(c => (
                  <span key={c.id} className="text-[11px] bg-blue-900/60 border border-blue-700/50 text-blue-200 px-2.5 py-1 rounded-lg">
                    {c.title}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onTrackFilterChange('technology')}
                className="inline-flex items-center gap-2 text-xs font-bold text-yellow-300 hover:text-yellow-200 cursor-pointer"
              >
                <span>Filter Technology Track</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </FadeInDiv>

            {/* Art Track Showcase Header Card */}
            <FadeInDiv delay={0.25} direction="left" className="bg-gradient-to-br from-slate-950 via-amber-950/40 to-slate-950 rounded-3xl p-8 border border-yellow-500/30 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-bold border border-yellow-400/30 uppercase">
                  Track 02
                </span>
                <span className="text-xs text-yellow-200">6 Disciplines</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Art & Film Track</h3>
              <p className="text-slate-300 text-xs mb-6 leading-relaxed">
                Direct films, master cinematography, compose video edits, master fine art drawing, write scripts, and perform on live theatrical stages.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {artCourses.map(c => (
                  <span key={c.id} className="text-[11px] bg-yellow-950/60 border border-yellow-700/50 text-yellow-200 px-2.5 py-1 rounded-lg">
                    {c.title}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onTrackFilterChange('art')}
                className="inline-flex items-center gap-2 text-xs font-bold text-yellow-300 hover:text-yellow-200 cursor-pointer"
              >
                <span>Filter Creative Art Track</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </FadeInDiv>
          </div>
        )}

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => {
            const isTech = course.track === 'technology';
            const staggerDelay = 0.1 + (index % 6) * 0.05;
            return (
              <FadeInDiv
                key={course.id}
                delay={staggerDelay}
                className="h-full"
              >
                <div
                  onClick={() => onSelectCourse(course)}
                  className={`group bg-slate-950/90 rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full relative overflow-hidden hover:-translate-y-1.5 ${
                    isTech
                      ? 'border-slate-800 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/20'
                      : 'border-slate-800 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-900/20'
                  }`}
                >
                  {/* Popular Ribbon */}
                  {course.popular && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow">
                      <Sparkle className="w-3 h-3" />
                      <span>Popular</span>
                    </div>
                  )}

                  <div>
                    {/* Top Badge & Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl border ${
                        isTech 
                          ? 'bg-blue-900/40 border-blue-500/30 text-blue-400' 
                          : 'bg-amber-900/40 border-amber-500/30 text-yellow-400'
                      }`}>
                        {getIcon(course.iconName)}
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md border ${
                          isTech 
                            ? 'bg-blue-950 text-blue-300 border-blue-800' 
                            : 'bg-amber-950 text-yellow-300 border-amber-800'
                        }`}>
                          {isTech ? 'Technology' : 'Art Track'}
                        </span>
                        <h3 className="text-lg font-bold text-white mt-1 group-hover:text-sky-200 transition-colors">
                          {course.title}
                        </h3>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                      {course.shortDescription}
                    </p>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {course.skillsGained.slice(0, 3).map((skill, i) => (
                        <span key={i} className="text-[10px] bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded-md">
                          {skill}
                        </span>
                      ))}
                      {course.skillsGained.length > 3 && (
                        <span className="text-[10px] text-slate-400 py-0.5">
                          +{course.skillsGained.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer Metadata & CTA */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
                    </div>
                    <span className={`font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 ${
                      isTech ? 'text-blue-400' : 'text-yellow-400'
                    }`}>
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </FadeInDiv>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-slate-950 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No courses found matching "{searchQuery}".</p>
            <button 
              onClick={() => { setSearchQuery(''); onTrackFilterChange('all'); }} 
              className="mt-3 text-xs font-bold text-blue-400 underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </FadeInSection>
  );
};
