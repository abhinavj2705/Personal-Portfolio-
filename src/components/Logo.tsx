import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

/**
 * Logo component using the custom A.png image from public/.
 * Blends seamlessly with both dark and light themes:
 *  - Dark mode: logo is naturally dark-bodied with gold outline → looks great on dark bg
 *  - Light mode: we apply a CSS filter to invert + adjust so it reads well on light bg
 */
export const Logo: React.FC<LogoProps> = ({ size = 44, className = '', showText = false }) => {
  return (
    <div className={`flex items-center gap-3 cursor-pointer group select-none ${className}`}>
      {/* Logo Image with reversed theme gradient */}
      <div
        className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0"
        style={{ width: size, height: size }}
      >
        {/* Dark Theme: White logo with subtle cyan glow */}
        <img
          src="/A-white.png"
          alt="Abhinav Logo"
          className="hidden dark:block w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(56,189,248,0.45)] transition-all duration-300"
          draggable={false}
        />

        {/* Light Theme: Black logo with crisp shadow */}
        <img
          src="/A.png"
          alt="Abhinav Logo"
          className="block dark:hidden w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-300"
          draggable={false}
        />

        {/* Ambient Halo behind logo */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/15 dark:bg-cyan-400/25 blur-md -z-10 group-hover:bg-cyan-400/35 transition-colors duration-300 pointer-events-none" />
      </div>

      {showText && (
        <span className="font-extrabold text-slate-900 dark:text-white tracking-wider text-base uppercase group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          ABHINAV
        </span>
      )}
    </div>
  );
};
