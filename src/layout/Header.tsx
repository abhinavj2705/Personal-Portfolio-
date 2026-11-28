import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { Logo } from '../components/Logo';
import { SignatureThemeSwitch } from '../components/SignatureThemeSwitch';
import { profile } from '../data/profile';
import { scrollToTarget } from '../utils/scroll';

interface HeaderProps {
  onOpenCommandPalette: () => void;
  isCommandPaletteOpen: boolean;
}

const shortcutLabel = /Mac|iPhone|iPad/.test(navigator.userAgent) ? '⌘K' : 'Ctrl K';

export function Header({ onOpenCommandPalette, isCommandPaletteOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? 'glass-panel border-line' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-editorial flex h-[72px] items-center justify-between gap-6">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            scrollToTarget(0);
          }}
          className="group flex items-center gap-3"
          aria-label={`${profile.name} — home`}
        >
          <Logo size={34} />
          <span className="hidden font-display text-sm uppercase tracking-[0.16em] text-ink sm:block">
            {profile.name}
          </span>
        </a>

        <div className="flex items-center gap-1.5">
          <SignatureThemeSwitch compact />

          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="flex h-9 items-center gap-2 border border-line px-2.5 font-mono text-[11px] text-muted transition-colors hover:border-accent hover:text-accent sm:px-3"
            aria-label="Open command palette"
            aria-expanded={isCommandPaletteOpen}
            aria-controls="command-palette"
          >
            <Search className="h-4 w-4 sm:hidden" aria-hidden="true" />
            <span className="hidden sm:inline">{shortcutLabel}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
