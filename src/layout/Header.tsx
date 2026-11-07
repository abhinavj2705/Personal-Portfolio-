import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Logo } from '../components/Logo';
import { useTheme } from '../theme/ThemeContext';
import { desktopNav, sections } from '../data/nav';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(`#${id}`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'border-line bg-nav backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-editorial flex h-[72px] items-center justify-between gap-6">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            handleNav('home');
          }}
          className="group flex items-center gap-3"
          aria-label={`${profile.name} — home`}
        >
          <Logo size={34} />
          <span className="hidden font-display text-sm uppercase tracking-[0.16em] text-ink sm:block">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted lg:flex" aria-label="Primary">
          {desktopNav.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) => {
                event.preventDefault();
                handleNav(section.id);
              }}
              className="transition-colors hover:text-accent"
            >
              {section.label}
            </a>
          ))}
        </nav>

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

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center border border-line text-muted transition-colors hover:border-accent hover:text-accent lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-line bg-nav backdrop-blur-xl lg:hidden">
          <nav className="container-editorial grid gap-1 py-4" aria-label="Mobile">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleNav(section.id);
                }}
                className="flex items-center justify-between py-2.5 text-sm text-muted transition-colors hover:text-accent"
              >
                <span>{section.label}</span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                  {section.index}
                </span>
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
