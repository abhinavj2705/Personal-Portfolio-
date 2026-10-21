import React from 'react';
import { ArrowUpRight, FileText, Mail, ChevronDown, Sparkles } from 'lucide-react';
import { resumeUrl } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden text-center"
    >
      <div className="max-w-4xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
        
        {/* Status Badge - Centered Glass Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-xl glass-panel mb-8 hover:border-cyan-500/50 transition-colors shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 tracking-wide font-mono">
            Open to New Opportunities • 2025
          </span>
        </div>

        {/* Name - Big, Centered, Clean Gradient Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.08]">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-cyan-600 dark:from-white dark:via-cyan-100 dark:to-cyan-400 bg-clip-text text-transparent">
            Abhinav Jadhav
          </span>
        </h1>

        {/* Role Subheading */}
        <div className="inline-flex items-center gap-2 text-lg sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6 tracking-tight">
          <span>Full-Stack Developer</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-mono text-sm sm:text-base">•</span>
          <span className="text-cyan-600 dark:text-cyan-400">IoT Systems Engineer</span>
        </div>

        {/* Bio Narrative */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300/90 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Building resilient web platforms, embedded IoT pipelines, and intelligent products that solve real-world problems. Pursuing B.Tech CSE (IoT) at CHRIST University, Bengaluru.
        </p>

        {/* Centered Action Buttons with Glassmorphism */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <button
            onClick={() => scrollTo('projects')}
            className="px-7 py-3 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-sm hover:bg-slate-800 dark:hover:bg-cyan-100 dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all flex items-center gap-2 cursor-pointer shadow-xl hover:scale-105"
          >
            <span>Explore Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white/80 dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium text-sm hover:bg-white dark:hover:bg-white/[0.1] hover:border-cyan-500/50 hover:text-cyan-700 dark:hover:text-white transition-all cursor-pointer flex items-center gap-2 backdrop-blur-xl shadow-md"
          >
            <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 rounded-xl bg-white/80 dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium text-sm hover:bg-white dark:hover:bg-white/[0.1] hover:border-cyan-500/50 hover:text-cyan-700 dark:hover:text-white transition-all cursor-pointer flex items-center gap-2 backdrop-blur-xl shadow-md"
          >
            <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Centered Highlights / Metrics Glassmorphism Banner */}
        <div className="w-full max-w-2xl mx-auto p-4 sm:p-5 rounded-3xl bg-white/70 dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] backdrop-blur-2xl grid grid-cols-3 gap-4 shadow-xl dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="flex flex-col items-center justify-center py-1 border-r border-black/5 dark:border-white/5">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">3,000+</div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider mt-0.5">
              Active Users
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-1 border-r border-black/5 dark:border-white/5">
            <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400">6+</div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider mt-0.5">
              Shipped Projects
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-1">
            <div className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">Azure AI</div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider mt-0.5">
              Certified
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition cursor-pointer group"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              Explore
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-400 dark:border-slate-700 group-hover:border-cyan-500 flex justify-center pt-1.5 transition-colors">
              <div className="w-1 h-2 rounded-full bg-slate-500 group-hover:bg-cyan-500 animate-scroll-dot" />
            </div>
            <ChevronDown className="w-4 h-4 animate-bounce text-slate-500 group-hover:text-cyan-500" />
          </button>
        </div>

      </div>
    </section>
  );
};
