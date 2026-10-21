import React from 'react';
import { Award, GraduationCap, Users, ShieldCheck, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative border-t border-black/[0.06] dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>05. Validation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Achievements &amp; Credentials
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Verified impact metrics, industry credentials, and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Metric Card: 3,000+ Active Users */}
          <div className="p-8 rounded-3xl bg-white/80 dark:bg-[#080c16]/90 border border-black/[0.08] dark:border-white/10 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden group shadow-xl dark:shadow-2xl backdrop-blur-2xl">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition">
              <Users className="w-24 h-24 text-cyan-500" />
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-3 font-bold">Verified Reach</div>
            <div className="text-5xl font-black text-slate-900 dark:text-white mb-2">3,000+</div>
            <div className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">Active Students on CU Now</div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Empowering first-year students at CHRIST University (Kengeri campus) with seamless orientation and daily campus guidance.
            </p>
          </div>

          {/* Credential Card: Microsoft Azure AI Fundamentals */}
          <div className="p-8 rounded-3xl bg-white/80 dark:bg-[#080c16]/90 border border-black/[0.08] dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden group shadow-xl dark:shadow-2xl backdrop-blur-2xl">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition">
              <Award className="w-24 h-24 text-indigo-500" />
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-3 font-bold">Certified Credential</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white mb-1">Microsoft Certified</div>
            <div className="text-base font-bold text-cyan-700 dark:text-cyan-300 mb-3">Azure AI Fundamentals</div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
              Demonstrated core knowledge of machine learning concepts, computer vision, natural language processing, and Azure cloud AI workloads.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Microsoft Verified Certificate</span>
            </div>
          </div>

          {/* Academic Card: CHRIST University */}
          <div className="p-8 rounded-3xl bg-white/80 dark:bg-[#080c16]/90 border border-black/[0.08] dark:border-white/10 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group shadow-xl dark:shadow-2xl backdrop-blur-2xl">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition">
              <GraduationCap className="w-24 h-24 text-purple-500" />
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 mb-3 font-bold">Education</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white mb-1">B.Tech in CSE (IoT)</div>
            <div className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">CHRIST University, Bengaluru</div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
              Specialized coursework in Microcontrollers, Cloud Computing, Edge Intelligence, Embedded Systems, and Software Engineering.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>Expected Graduation: 2027</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
