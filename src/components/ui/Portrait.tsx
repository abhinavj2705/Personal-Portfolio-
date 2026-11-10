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
      </div>
    </div>
  );
}
