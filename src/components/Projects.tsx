import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Navigation & Maps', 'Mobile & Operations', 'Web Platform', 'IoT & Hardware'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative border-t border-black/[0.06] dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Centered Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>02. Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Featured Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real systems built for tangible impact — from university-wide platforms to embedded IoT devices.
          </p>
        </div>

        {/* Centered Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                activeFilter === cat
                  ? 'bg-slate-950 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold shadow-lg dark:shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                  : 'bg-black/[0.04] dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-black/[0.08] dark:hover:bg-white/10 border border-black/[0.08] dark:border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Case Studies (2-Column Balanced Glass Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.filter((p) => p.featured).map((project) => (
            <div
              key={project.id}
              className="relative group rounded-3xl bg-white/80 dark:bg-[#080c16]/90 border border-black/[0.08] dark:border-white/10 hover:border-cyan-500/50 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-xl dark:shadow-2xl backdrop-blur-2xl"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{project.highlightMetric}</span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 font-normal text-sm sm:text-base mb-6 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Purpose & Problem & Contribution */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6 bg-black/[0.02] dark:bg-white/[0.02] p-4 rounded-2xl border border-black/[0.06] dark:border-white/5">
                  <div>
                    <span className="text-cyan-700 dark:text-cyan-300 font-bold block mb-0.5 font-mono text-xs uppercase tracking-wider">Problem Solved</span>
                    <span>{project.problemSolved}</span>
                  </div>
                  <div className="pt-2 border-t border-black/5 dark:border-white/5">
                    <span className="text-indigo-700 dark:text-indigo-300 font-bold block mb-0.5 font-mono text-xs uppercase tracking-wider">My Contribution</span>
                    <span>{project.contribution}</span>
                  </div>
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-black/5 dark:border-white/5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white px-4 py-2.5 rounded-xl bg-black/[0.04] dark:bg-white/5 hover:bg-black/[0.08] dark:hover:bg-white/10 border border-black/[0.08] dark:border-white/10 transition"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-950 px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 transition shadow-md hover:scale-105"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 font-mono italic">
                      Demo available upon request
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.filter((p) => !p.featured).map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white/70 dark:bg-white/[0.02] hover:bg-white/90 dark:hover:bg-white/[0.04] border border-black/[0.08] dark:border-white/10 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-cyan-600 dark:text-cyan-400 font-mono uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <Layers className="w-4 h-4 text-slate-500" />
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{project.tagline}</p>
                
                <div className="text-xs text-slate-700 dark:text-slate-300 space-y-2 mb-5 bg-black/[0.02] dark:bg-white/[0.015] p-3 rounded-xl border border-black/[0.06] dark:border-white/5">
                  <div>
                    <strong className="text-cyan-700 dark:text-cyan-300 font-semibold">Impact: </strong>
                    {project.problemSolved}
                  </div>
                  <div>
                    <strong className="text-indigo-700 dark:text-indigo-300 font-semibold">Role: </strong>
                    {project.contribution}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/5 text-[11px] font-mono text-slate-700 dark:text-slate-300 border border-black/[0.06] dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-black/5 dark:border-white/5">
                  <a
                    href={project.githubUrl || 'https://github.com/abhinavj2705'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1.5 transition font-medium"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
