import React from 'react';
import { Cpu, Globe, Rocket, Users, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      title: 'Full-Stack Engineering',
      desc: 'Developing scalable web platforms from responsive, pixel-perfect frontends to resilient APIs and databases.',
      gradient: 'from-cyan-500/10 to-transparent'
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: 'IoT & Hardware Systems',
      desc: 'Architecting connected edge hardware, microcontrollers, and real-time MQTT telemetry pipelines.',
      gradient: 'from-indigo-500/10 to-transparent'
    },
    {
      icon: <Rocket className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      title: 'Product & Entrepreneurship',
      desc: 'Bridging engineering rigor with real-world user empathy to build authentic products that people actually use.',
      gradient: 'from-violet-500/10 to-transparent'
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: 'Leadership & Community',
      desc: 'Active student leader across DevSoc, SWO, University Culture Team, and IEEE Computer Society.',
      gradient: 'from-emerald-500/10 to-transparent'
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-black/[0.06] dark:border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>01. Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Engineering software with purpose, clarity, and an eye for exceptional user experience.
          </p>
        </div>

        {/* Narrative Card - Glassmorphism */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-white/75 dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] backdrop-blur-2xl shadow-xl dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-5 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed text-center">
            <p>
              I am pursuing my <strong className="text-slate-900 dark:text-white font-semibold">B.Tech in Computer Science and Engineering (IoT)</strong> at <strong className="text-slate-900 dark:text-white font-semibold">CHRIST University, Bengaluru</strong>. My focus lies at the intersection of modern full-stack web applications and connected embedded devices.
            </p>
            <p>
              I believe technology is most rewarding when it solves tangible everyday frictions. That philosophy drove me to build <span className="text-cyan-600 dark:text-cyan-400 font-medium">CU Now</span>, an orientation and campus life platform that helped <span className="text-slate-900 dark:text-white font-semibold">3,000+ university freshers</span> navigate college effortlessly.
            </p>
            <p>
              Beyond technical development, I actively drive campus culture and technical communities through leadership roles in DevSoc, IEEE Computer Society, and the Student Welfare Office.
            </p>
          </div>
        </div>

        {/* Pillars Grid - Symmetrical 2x2 Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/70 dark:bg-white/[0.03] hover:bg-white/90 dark:hover:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 group relative overflow-hidden shadow-md hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-black/[0.04] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
