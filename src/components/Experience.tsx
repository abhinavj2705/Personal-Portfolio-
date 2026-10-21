import React from 'react';
import { leadershipExperiences, verifiedSkills } from '../data/portfolioData';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-black/[0.06] dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>03. Impact &amp; Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Leadership &amp; Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Leading engineering efforts, coordinating campus initiatives, and contributing to technical societies.
          </p>
        </div>

        {/* Leadership Grid - Frosted Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {leadershipExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/75 dark:bg-white/[0.03] hover:bg-white/95 dark:hover:bg-white/[0.06] border border-black/[0.08] dark:border-white/10 hover:border-cyan-500/40 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 font-bold">
                    {exp.tag}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{exp.period}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h3>
                <div className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-3">{exp.organization}</div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{exp.description}</p>
              </div>

              <div className="pt-4 mt-5 border-t border-black/5 dark:border-white/5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Verified Leadership Role</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Technical Skills Section - Centered */}
        <div id="skills" className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono uppercase tracking-widest font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>04. Capabilities</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Verified Technical Stack
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              Tooling, frameworks, and engineering competencies applied across active production and hardware environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(verifiedSkills).map(([group, skills]) => (
              <div
                key={group}
                className="p-6 rounded-3xl bg-white/70 dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 backdrop-blur-xl transition-all space-y-4 shadow-md hover:shadow-xl"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-slate-200 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                  <span>{group}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/5 hover:bg-black/[0.08] dark:hover:bg-white/10 text-xs text-slate-700 dark:text-slate-300 border border-black/[0.06] dark:border-white/5 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
