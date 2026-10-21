import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 32, className = '', showText = false }) => {
  return (
    <div className={`flex items-center gap-2.5 cursor-pointer group select-none ${className}`}>
      {/* Stylized 'A' Emblem */}
      <div 
        className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]"
        >
          <defs>
            <linearGradient id="logoGradLeft" x1="10" y1="88" x2="50" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
            <linearGradient id="logoGradRight" x1="50" y1="10" x2="90" y2="88" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="logoCore" x1="50" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>

          {/* Background facet shadow */}
          <polygon points="50,10 16,86 48,68" fill="url(#logoCore)" opacity="0.8" />
          
          {/* Left Wing with Iridescent Prism */}
          <polygon points="50,10 18,86 32,86 50,42" fill="url(#logoGradLeft)" />
          
          {/* Right Facet */}
          <polygon points="50,10 50,42 68,86 82,86" fill="url(#logoGradRight)" />
          
          {/* Crossbar Accent */}
          <polygon points="34,62 66,62 61,54 39,54" fill="#ffffff" opacity="0.9" />
          
          {/* Top Apex Node */}
          <circle cx="50" cy="12" r="3.5" fill="#38bdf8" />
        </svg>

        {/* Ambient Halo */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md -z-10 group-hover:bg-cyan-400/40 transition-colors" />
      </div>

      {showText && (
        <span className="font-extrabold text-white tracking-wider text-base uppercase group-hover:text-cyan-400 transition-colors">
          ABHINAV
        </span>
      )}
    </div>
  );
};
