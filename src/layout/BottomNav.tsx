import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import {
  Briefcase,
  Code2,
  FolderGit2,
  Home,
  Mail,
  Sparkles,
  Trophy,
  UserRound,
  Users,
} from 'lucide-react';
import { sections } from '../data/nav';

const iconMap: Record<string, typeof Home> = {
  home: Home,
  about: UserRound,
  'why-me': Sparkles,
  projects: FolderGit2,
  experience: Briefcase,
  skills: Code2,
  achievements: Trophy,
  communities: Users,
  contact: Mail,
};

const scrollToSection = (id: string) => {
  const href = `#${id}`;
  if (window.__lenis) {
    window.__lenis.scrollTo(href, { offset: -72 });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export function BottomNav() {
  const [activeId, setActiveId] = useState('home');
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const listRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const next = visible[0]?.target.id;
        if (next) {
          setActiveId(next);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const list = listRef.current;
    const item = itemRefs.current[activeId];
    if (!list || !item) return;

    const target = item.offsetLeft - list.clientWidth / 2 + item.clientWidth / 2;
    list.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }, [activeId]);

  const handleNav = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setActiveId(id);
    scrollToSection(id);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] md:bottom-auto md:top-20 md:justify-end md:pr-8 md:pb-0">
      <nav
        ref={listRef}
        aria-label="Section navigation"
        className="pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full border p-1.5 shadow-[var(--nav-pill-shadow)] backdrop-blur-xl backdrop-saturate-150 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          backgroundColor: 'var(--nav-pill-bg)',
          borderColor: 'var(--nav-pill-border)',
        }}
      >
        {sections.map((section) => {
          const Icon = iconMap[section.id] ?? Home;
          const isActive = section.id === activeId;

          return (
            <a
              key={section.id}
              ref={(element) => {
                itemRefs.current[section.id] = element;
              }}
              href={`#${section.id}`}
              onClick={(event) => handleNav(event, section.id)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={section.label}
              title={section.label}
              className={`flex h-10 shrink-0 items-center justify-center rounded-full px-3 text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isActive ? 'gap-2' : 'gap-0'
              } ${
                isActive
                  ? 'bg-[var(--nav-pill-active-bg)] text-[var(--nav-pill-active-text)]'
                  : 'text-[var(--nav-pill-icon)] hover:bg-[var(--nav-pill-hover-bg)] hover:text-[var(--nav-pill-hover-text)]'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span
                className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-out ${
                  isActive ? 'max-w-[9rem] opacity-100' : 'max-w-0 opacity-0'
                }`}
              >
                {section.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
