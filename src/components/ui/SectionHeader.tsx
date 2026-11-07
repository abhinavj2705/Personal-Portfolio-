interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <header className={`mb-12 max-w-3xl md:mb-16 ${className}`}>
      <div className="flex items-center gap-3 text-muted">
        <span className="font-mono text-[11px] tracking-[0.24em] text-accent">{index}</span>
        <span className="h-px w-10 bg-accent" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
