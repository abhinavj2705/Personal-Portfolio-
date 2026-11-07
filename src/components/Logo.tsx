interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function Logo({ size = 44, className = '', showText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div
        className="relative flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <img
          src="/A-white.png"
          alt="Abhinav Jadhav logo"
          className="hidden h-full w-full object-contain drop-shadow-[0_0_14px_rgba(217,164,65,0.35)] dark:block"
          draggable={false}
        />
        <img
          src="/A.png"
          alt="Abhinav Jadhav logo"
          className="block h-full w-full object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] dark:hidden"
          draggable={false}
        />
        <div
          className="absolute inset-0 -z-10 rounded-full bg-accent opacity-15 blur-md transition-opacity duration-300 group-hover:opacity-30"
          aria-hidden="true"
        />
      </div>

      {showText ? (
        <span className="font-display text-base uppercase tracking-[0.14em] text-ink">
          Abhinav
        </span>
      ) : null}
    </div>
  );
}
