import React, { useEffect, useState, useRef } from 'react';
import { Search, ExternalLink, Code2, User, Award, Briefcase, Mail, Image as ImageIcon, X, FileText } from 'lucide-react';
import { linkedInUrl, githubUrl, resumeUrl } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  category: 'Sections' | 'Projects' | 'Links';
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const openLink = (url: string) => {
    onClose();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const commands: CommandItem[] = [
    // Sections
    { id: 'about', title: 'About', subtitle: 'Background, education at CHRIST University, interests', icon: <User className="w-4 h-4 text-cyan-400" />, category: 'Sections', action: () => scrollTo('about') },
    { id: 'projects', title: 'Projects', subtitle: 'CU Now, CU Nav, Restaurant Inventory & more', icon: <Code2 className="w-4 h-4 text-cyan-400" />, category: 'Sections', action: () => scrollTo('projects') },
    { id: 'experience', title: 'Experience & Leadership', subtitle: 'DevSoc Lead, SWO, University Culture Team', icon: <Briefcase className="w-4 h-4 text-cyan-400" />, category: 'Sections', action: () => scrollTo('experience') },
    { id: 'achievements', title: 'Achievements & Impact', subtitle: '3,000+ active users, Azure AI credential', icon: <Award className="w-4 h-4 text-cyan-400" />, category: 'Sections', action: () => scrollTo('achievements') },
    { id: 'gallery', title: 'Gallery', subtitle: 'Event photographs, community & campus life', icon: <ImageIcon className="w-4 h-4 text-cyan-400" />, category: 'Sections', action: () => scrollTo('gallery') },
    { id: 'contact', title: 'Contact Info', subtitle: 'Get in touch directly or send a message', icon: <Mail className="w-4 h-4 text-cyan-400" />, category: 'Sections', action: () => scrollTo('contact') },

    // Featured Projects
    { id: 'cu-now', title: 'Project: CU Now', subtitle: 'Campus orientation app (3,000+ users)', icon: <Code2 className="w-4 h-4 text-indigo-400" />, category: 'Projects', action: () => scrollTo('projects') },
    { id: 'cu-nav', title: 'Project: CU Nav', subtitle: 'Live guided campus map & navigation', icon: <Code2 className="w-4 h-4 text-indigo-400" />, category: 'Projects', action: () => scrollTo('projects') },

    // Links
    { id: 'resume', title: 'View Resume (Google Drive)', subtitle: 'Open Abhinav\'s resume in Google Drive', icon: <FileText className="w-4 h-4 text-cyan-400" />, category: 'Links', action: () => openLink(resumeUrl) },
    { id: 'github', title: 'GitHub Profile', subtitle: 'abhinavj2705', icon: <ExternalLink className="w-4 h-4 text-violet-400" />, category: 'Links', action: () => openLink(githubUrl) },
    { id: 'linkedin', title: 'LinkedIn Profile', subtitle: 'abhinav-jadhav-', icon: <ExternalLink className="w-4 h-4 text-violet-400" />, category: 'Links', action: () => openLink(linkedInUrl) },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-[#090d16] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search sections, projects, or links..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none text-sm md:text-base font-normal"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition ${
                    isSelected ? 'bg-cyan-500/15 text-white border border-cyan-500/30' : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-400'}`}>
                      {cmd.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{cmd.title}</div>
                      <div className="text-xs text-slate-400">{cmd.subtitle}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-2 py-0.5 rounded bg-white/5">
                    {cmd.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
