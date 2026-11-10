import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Logo } from '../components/Logo';
import { useTheme } from '../theme/ThemeContext';
import { profile } from '../data/profile';

interface HeaderProps {
  onOpenCommandPalette: () => void;
}

const scrollToSection = (href: string) => {
  if (window.__lenis) {
    window.__lenis.scrollTo(href, { offset: -72 });
    return;
  }
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: 'smooth' });
};

export function Header({ onOpenCommandPalette }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
            scrollToSection('#home');
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
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="hidden h-9 items-center gap-2 border border-line px-3 font-mono text-[11px] text-muted transition-colors hover:border-accent hover:text-accent sm:flex"
            aria-label="Open command palette"
          >
            <span>⌘K</span>
          </button>
        </div>
      </div>
    </header>
  );
}
