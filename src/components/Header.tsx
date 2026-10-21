import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenCommandPalette: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#040711]/85 backdrop-blur-2xl border-b border-black/[0.08] dark:border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 glass-panel">
        <div className="flex items-center justify-between h-16">

          {/* Left: Logo + Name */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group"
            aria-label="Abhinav Home"
          >
            <Logo size={30} showText={false} />
            <span className="font-bold text-slate-900 dark:text-white text-sm tracking-wide group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              Abhinav Jadhav
            </span>
          </a>

          {/* Center/Right: Nav Links (desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.05] transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              type="button"
              className="ml-2 px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.10] border border-black/[0.08] dark:border-white/10 text-slate-700 dark:text-slate-300 transition-all flex items-center gap-1.5 cursor-pointer text-xs font-medium"
              title={theme === 'dark' ? 'Switch to Light theme' : 'Switch to Dark theme'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                  <span className="font-mono">Dark</span>
                </>
              )}
            </button>

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              type="button"
              className="ml-1 px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.10] border border-black/[0.08] dark:border-white/10 transition-all text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 font-mono"
              title="Open command palette"
            >
              ⌘K
            </button>
          </nav>

          {/* Mobile Actions: Theme + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#070a12]/98 backdrop-blur-2xl border-b border-black/[0.08] dark:border-white/[0.08] px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
