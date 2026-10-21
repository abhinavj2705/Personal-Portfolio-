import React from 'react';

/**
 * Global layout wrapper with premium ambient glow, clean typography defaults,
 * and unified background supporting dark and light themes with glassmorphism.
 */
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#040711] text-slate-900 dark:text-slate-100 selection:bg-cyan-400 selection:text-black relative overflow-x-hidden font-sans transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dark mode glows */}
        <div className="hidden dark:block">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-cyan-500/[0.09] via-indigo-500/[0.05] to-transparent blur-[140px]" />
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[800px] h-[700px] bg-gradient-to-b from-blue-600/[0.05] via-purple-600/[0.04] to-transparent blur-[160px]" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-cyan-600/[0.06] to-transparent blur-[150px]" />
          <div 
            className="absolute inset-0 opacity-[0.025]" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        {/* Light mode glows - subtle, elegant, standard light aesthetic */}
        <div className="block dark:hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-cyan-200/40 via-blue-100/30 to-transparent blur-[140px]" />
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[800px] h-[700px] bg-gradient-to-b from-indigo-100/30 via-slate-100/50 to-transparent blur-[160px]" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-cyan-100/40 to-transparent blur-[150px]" />
          <div 
            className="absolute inset-0 opacity-[0.035]" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen items-center">
        {children}
      </div>
    </div>
  );
};
