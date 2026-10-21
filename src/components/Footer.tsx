import React from 'react';
import { Logo } from './Logo';
import { linkedInUrl, githubUrl, resumeUrl } from '../data/portfolioData';
import { ArrowUp, RotateCcw, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#030508] py-12 relative text-slate-400">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <div>
              <div className="text-sm font-bold text-white tracking-tight">Abhinav Jadhav</div>
              <div className="text-xs text-slate-500 font-mono">CSE (IoT) • CHRIST University, Bengaluru</div>
            </div>
          </div>

          {/* Socials & Actions */}
          <div className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-400 hover:text-cyan-400 transition"
              title="View Resume on Google Drive"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={onReplayIntro}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-400 hover:text-white transition cursor-pointer"
              title="Replay intro animation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Intro</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-center text-xs text-slate-500 font-mono text-center">
          <span>&copy; {new Date().getFullYear()} Abhinav Jadhav. Built with React &amp; TypeScript.</span>
        </div>
      </div>
    </footer>
  );
};
