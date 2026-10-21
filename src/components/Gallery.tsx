import React, { useState } from 'react';
import { Camera, Calendar, MapPin, Sparkles, Play, Pause, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

interface GalleryMoment {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
  accent: string;
}

export const Gallery: React.FC = () => {
  // Pre-configured moments with high-quality tech/campus photos.
  // Abhinav can replace any imageUrl with his own photo path (e.g., '/gallery/my-photo.jpg' or external URL).
  const [moments] = useState<GalleryMoment[]>([
    {
      id: 1,
      title: 'DevSoc Tech Hackathon',
      category: 'Developer Community',
      date: '2025 - Present',
      location: 'CHRIST University',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80',
      description: 'Mentoring peers, evaluating project submissions, and organizing developer workshops with DevSoc.',
      accent: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10'
    },
    {
      id: 2,
      title: 'University Cultural Festival',
      category: 'Campus Culture',
      date: 'Culture Team',
      location: 'Bengaluru Campus',
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=700&q=80',
      description: 'Leading stage coordination, student engagement, and university-wide festival operations.',
      accent: 'text-purple-400 border-purple-500/30 bg-purple-500/10'
    },
    {
      id: 3,
      title: 'CU Now Campus Launch',
      category: 'Product Deployment',
      date: 'Orientation 2024',
      location: 'Kengeri Campus',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
      description: 'Deploying the CU Now guidance application to over 3,000+ newly admitted university students.',
      accent: 'text-blue-400 border-blue-500/30 bg-blue-500/10'
    },
    {
      id: 4,
      title: 'IEEE CS Symposium',
      category: 'Technical Workshop',
      date: 'Symposium',
      location: 'CHRIST University',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80',
      description: 'Hands-on hardware and software demonstrations at IEEE Computer Society conferences.',
      accent: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10'
    },
    {
      id: 5,
      title: 'Student Welfare Office',
      category: 'Campus Leadership',
      date: 'SWO Council',
      location: 'CHRIST University',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80',
      description: 'Student induction, campus mentoring, and student body representation.',
      accent: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
    },
    {
      id: 6,
      title: 'Sports & Athletics Meet',
      category: 'Athletics & Teams',
      date: 'Sports Council',
      location: 'Bengaluru',
      imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80',
      description: 'Athletic coordination, university representation, and track & field operations.',
      accent: 'text-rose-400 border-rose-500/30 bg-rose-500/10'
    },
  ]);

  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [selectedMoment, setSelectedMoment] = useState<GalleryMoment | null>(null);
  const [activeCenterIndex, setActiveCenterIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'wheel' | 'grid'>('wheel');

  // Radius for circular positioning (in pixels)
  const radius = 230;
  const count = moments.length;

  return (
    <section id="gallery" className="py-24 relative border-t border-black/[0.06] dark:border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>06. Campus Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Life &amp; Community
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A revolving wheel of university leadership, hackathons, product rollouts, and campus memories.
          </p>

          {/* Interactive Mode & Controls Toggle */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-4 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] border border-black/[0.08] dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 transition flex items-center gap-1.5 cursor-pointer"
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{isPaused ? 'Resume Rotation' : 'Pause Rotation'}</span>
            </button>

            <button
              onClick={() => setViewMode(viewMode === 'wheel' ? 'grid' : 'wheel')}
              className="px-4 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] border border-black/[0.08] dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 transition cursor-pointer"
            >
              {viewMode === 'wheel' ? 'Switch to Grid View' : 'Switch to Wheel View'}
            </button>
          </div>
        </div>

        {/* 1. HUGE ROTATING BIG WHEEL VIEW */}
        {viewMode === 'wheel' && (
          <div className="relative py-12 flex justify-center items-center select-none overflow-visible">
            
            {/* The Big Wheel Outer Bounds (~620px diameter) */}
            <div 
              className="relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] md:w-[620px] md:h-[620px] flex items-center justify-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Outer Decorative Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 dark:border-cyan-400/25 pointer-events-none" />
              <div className="absolute inset-8 rounded-full border border-black/[0.04] dark:border-white/[0.04] pointer-events-none" />
              <div className="absolute inset-20 rounded-full border border-dashed border-indigo-500/20 pointer-events-none" />

              {/* ROTATING SPOKES & CARDS CONTAINER */}
              <div 
                className={`absolute inset-0 flex items-center justify-center animate-spin-wheel ${
                  isPaused ? 'pause-spin' : ''
                }`}
              >
                {moments.map((moment, idx) => {
                  const angle = (idx * 360) / count;
                  // Use CSS trigonometric transform for circle placement
                  return (
                    <div
                      key={moment.id}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                      }}
                    >
                      {/* Counter-spinning item to keep photo upright at all times! */}
                      <div
                        className={`animate-counter-spin ${isPaused ? 'pause-spin' : ''}`}
                      >
                        <div
                          onClick={() => setSelectedMoment(moment)}
                          className="group relative -translate-x-1/2 -translate-y-1/2 w-28 sm:w-36 md:w-44 rounded-2xl p-2 sm:p-2.5 bg-white/80 dark:bg-[#080d1a]/85 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-400 shadow-xl hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300 cursor-pointer hover:scale-110"
                        >
                          {/* Photo Thumbnail */}
                          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 relative mb-2">
                            <img
                              src={moment.imageUrl}
                              alt={moment.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-1 left-1.5 text-[9px] font-mono text-cyan-300 font-bold drop-shadow">
                              {moment.category}
                            </div>
                          </div>

                          {/* Caption */}
                          <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white truncate">
                            {moment.title}
                          </div>
                          <div className="flex items-center gap-1 text-[9px] text-slate-500 font-mono mt-0.5">
                            <MapPin className="w-2.5 h-2.5 shrink-0" />
                            <span className="truncate">{moment.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CENTER HUB of the Big Wheel */}
              <div className="relative z-20 w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-white/90 dark:bg-[#060a14]/90 backdrop-blur-2xl border-2 border-cyan-500/30 dark:border-cyan-400/30 shadow-[0_0_40px_rgba(56,189,248,0.25)] flex flex-col items-center justify-center p-4 text-center">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-1.5 sm:mb-2 animate-pulse">
                  <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                  Campus Wheel
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-mono mt-0.5">
                  Click any photo
                </div>
                <div className="mt-2 text-[9px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                  {isPaused ? '• PAUSED •' : '• SPINNING •'}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* 2. ALTERNATIVE STANDARD GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moments.map((moment) => (
              <div
                key={moment.id}
                onClick={() => setSelectedMoment(moment)}
                className="rounded-3xl overflow-hidden bg-white/80 dark:bg-[#080d1a]/85 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-cyan-400 shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  <img
                    src={moment.imageUrl}
                    alt={moment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${moment.accent} backdrop-blur-md`}>
                      {moment.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {moment.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {moment.description}
                  </p>

                  <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{moment.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{moment.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EXPANDED PHOTO LIGHTBOX MODAL */}
        {selectedMoment && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedMoment(null)}
          >
            <div 
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden bg-white dark:bg-[#090d16] border border-black/10 dark:border-white/10 shadow-2xl p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMoment(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-black/10 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Display */}
              <div className="rounded-2xl overflow-hidden aspect-video bg-slate-900 mb-6 shadow-inner">
                <img
                  src={selectedMoment.imageUrl}
                  alt={selectedMoment.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border ${selectedMoment.accent}`}>
                    {selectedMoment.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {selectedMoment.date}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {selectedMoment.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedMoment.description}
                </p>

                <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <MapPin className="w-4 h-4 text-cyan-500" />
                  <span>{selectedMoment.location}</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
