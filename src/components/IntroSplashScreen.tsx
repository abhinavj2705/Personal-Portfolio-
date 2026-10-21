import React from 'react';
import { motion } from 'framer-motion';

interface IntroSplashScreenProps {
  onComplete: () => void;
}

export const IntroSplashScreen: React.FC<IntroSplashScreenProps> = ({ onComplete }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black select-none overflow-hidden"
    >
      {/* Background 3D Stylized Prism 'A' Silhouette from Image 1 */}
      <div className="absolute w-[380px] h-[460px] sm:w-[500px] sm:h-[600px] pointer-events-none flex items-center justify-center opacity-85">
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full drop-shadow-[0_0_50px_rgba(56,189,248,0.25)]"
        >
          <defs>
            <linearGradient id="introAFront" x1="15" y1="110" x2="50" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="85%" stopColor="#f43f5e" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            <linearGradient id="introABack" x1="50" y1="10" x2="85" y2="110" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#334155" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#090d16" />
            </linearGradient>
            <linearGradient id="prismEdge" x1="40" y1="45" x2="60" y2="110" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="30%" stopColor="#818cf8" />
              <stop offset="70%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>

          {/* Left Wing & Prism edge */}
          <polygon points="50,10 16,108 34,108 50,50" fill="url(#introAFront)" />
          {/* Chromatic Edge Line */}
          <polygon points="34,108 38,108 50,54 48,50" fill="url(#prismEdge)" opacity="0.9" />
          {/* Right Wing */}
          <polygon points="50,10 50,50 66,108 84,108" fill="url(#introABack)" />
          {/* Internal shadow & depth */}
          <polygon points="50,10 50,50 34,108 16,108" fill="#030712" opacity="0.6" />
        </svg>
      </div>

      {/* Floating Glowing Blue Orb at Top Left (Exact as Image 1) */}
      <div className="absolute top-[18%] left-[28%] sm:top-[16%] sm:left-[33%] w-7 h-7 rounded-full pointer-events-none">
        <div className="w-full h-full rounded-full bg-cyan-400 blur-[2px] opacity-90 shadow-[0_0_20px_#38bdf8,0_0_40px_#0284c7]" />
        <div className="absolute inset-[-4px] rounded-full border border-cyan-300/40" />
      </div>

      {/* Subtle bottom-right red particle */}
      <div className="absolute bottom-[24%] right-[24%] w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_8px_#ef4444]" />

      {/* Foreground Name Tag: Clean, Bold, Solid — Exactly as Image 1: <ABHINAV /> */}
      <div className="relative z-10 flex items-center justify-center font-extrabold tracking-tight text-center px-4">
        <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-mono text-cyan-400 font-bold mr-2 sm:mr-3 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
          &lt;
        </span>
        <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-extrabold tracking-tight">
          ABHINAV
        </span>
        <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-mono text-slate-300 font-bold ml-2 sm:ml-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          /&gt;
        </span>
      </div>

      {/* Enter Button so the user stays on this screen and enters when ready */}
      <div className="relative z-10 mt-12">
        <button
          onClick={onComplete}
          className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all transform hover:scale-105 cursor-pointer shadow-lg"
        >
          Enter Portfolio &rarr;
        </button>
      </div>

      {/* Subtle keyboard hint */}
      <div className="absolute bottom-8 text-xs tracking-widest uppercase text-slate-500 font-mono">
        Click button or press Enter to continue
      </div>
    </motion.div>
  );
};
