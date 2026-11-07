import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import {
  Award,
  Briefcase,
  Code2,
  ExternalLink,
  FileText,
  Home,
  Layers,
  Mail,
  Search,
  Sparkles,
  User,
  Users,
  X,
} from 'lucide-react';
import { sections } from '../data/nav';
import { projectsData } from '../data/projects';
import { profile } from '../data/profile';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  category: 'Sections' | 'Projects' | 'Links';
  action: () => void;
}

const iconClassName = 'h-4 w-4';

const sectionIcons: Record<string, ReactNode> = {
  home: <Home className={iconClassName} />,
  about: <User className={iconClassName} />,
  'why-me': <Sparkles className={iconClassName} />,
  projects: <Code2 className={iconClassName} />,
  experience: <Briefcase className={iconClassName} />,
  skills: <Layers className={iconClassName} />,
  achievements: <Award className={iconClassName} />,
  communities: <Users className={iconClassName} />,
  contact: <Mail className={iconClassName} />,
};

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (id: string) => {
    onClose();
    window.setTimeout(() => {
      if (window.__lenis) {
        window.__lenis.scrollTo(`#${id}`, { offset: -72 });
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const openLink = (url: string) => {
    onClose();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const commands: CommandItem[] = [
    ...sections.map((section) => ({
      id: section.id,
      title: section.label,
      subtitle: `Jump to ${section.label}`,
      icon: sectionIcons[section.id] ?? <Layers className={iconClassName} />,
      category: 'Sections' as const,
      action: () => scrollTo(section.id),
    })),
    ...projectsData.map((project) => ({
      id: `project-${project.id}`,
      title: project.title,
      subtitle: project.tagline,
      icon: <Code2 className={iconClassName} />,
      category: 'Projects' as const,
      action: () => scrollTo('projects'),
    })),
    {
      id: 'resume',
      title: 'View resume',
      subtitle: 'Open the resume in Google Drive',
      icon: <FileText className={iconClassName} />,
      category: 'Links',
      action: () => openLink(profile.resumeUrl),
    },
    {
      id: 'github',
      title: 'GitHub profile',
      subtitle: 'abhinavj2705',
      icon: <ExternalLink className={iconClassName} />,
      category: 'Links',
      action: () => openLink(profile.githubUrl),
    },
    {
      id: 'linkedin',
      title: 'LinkedIn profile',
      subtitle: 'abhinav-jadhav',
      icon: <ExternalLink className={iconClassName} />,
      category: 'Links',
      action: () => openLink(profile.linkedInUrl),
    },
  ];

  const filteredCommands = commands.filter(
    (command) =>
      command.title.toLowerCase().includes(query.toLowerCase()) ||
      command.subtitle.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (!isOpen) return;
    setQuery('');
    setSelectedIndex(0);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelectedIndex(
          (prev) => (prev + 1) % (filteredCommands.length || 1),
        );
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelectedIndex(
          (prev) =>
            (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1),
        );
      } else if (event.key === 'Enter') {
        event.preventDefault();
        filteredCommands[selectedIndex]?.action();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-backdrop px-4 pt-24 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden border border-line-strong bg-surface shadow-surface"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
          <Search className="h-5 w-5 shrink-0 text-faint" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search sections, projects, or links..."
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-ink placeholder:text-faint focus:outline-none md:text-base"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-muted transition-colors hover:text-accent"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-80 space-y-1 overflow-y-auto p-2" data-lenis-prevent>
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-faint">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredCommands.map((command, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={command.id}
                  onClick={() => command.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex cursor-pointer items-center justify-between gap-3 border px-3.5 py-2.5 transition-colors ${
                    isSelected
                      ? 'border-accent bg-accent-soft text-ink'
                      : 'border-transparent text-muted hover:bg-raised'
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center ${
                        isSelected
                          ? 'bg-accent text-accent-contrast'
                          : 'bg-raised text-muted'
                      }`}
                    >
                      {command.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-ink">
                        {command.title}
                      </div>
                      <div className="truncate text-xs text-muted">{command.subtitle}</div>
                    </div>
                  </div>
                  <span className="shrink-0 border border-line px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-faint">
                    {command.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-line bg-background px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
          <div className="flex items-center gap-2">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
