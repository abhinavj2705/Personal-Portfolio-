import { profile } from '../../data/profile';

export function Portrait({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute -inset-3 border border-accent opacity-40"
        aria-hidden="true"
      />
      <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
        <img
          src={profile.portrait}
          alt={`Portrait of ${profile.name}`}
          className="h-full w-full object-cover object-[center_22%]"
          loading="eager"
        />
        <div className="portrait-shade absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
          <div>
            <p className="eyebrow text-accent">Portrait</p>
            <p className="mt-1 font-display text-sm text-ink">{profile.name}</p>
          </div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted">{profile.location}</p>
        </div>
      </div>
    </div>
  );
}
