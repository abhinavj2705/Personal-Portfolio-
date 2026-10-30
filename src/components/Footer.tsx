import React from 'react';
import { Logo } from './Logo';
import { linkedInUrl, githubUrl, resumeUrl } from '../data/portfolioData';
import { ArrowUp, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full mt-auto border-t border-slate-200/70 dark:border-white/[0.06] bg-slate-50 dark:bg-[#030508] py-12 relative text-slate-500 dark:text-slate-400 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3.5">
            <Logo size={42} />
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">Abhinav Jadhav</div>
              <div className="text-xs text-slate-500 dark:text-slate-500 font-mono">CSE (IoT) • CHRIST University, Bengaluru</div>
            </div>
          </div>

          {/* Socials & Actions */}
          <div className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              title="View Resume on Google Drive"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-500 font-mono">
          <span>&copy; {new Date().getFullYear()} Abhinav Jadhav. All rights reserved.</span>
          <span>Built with React &amp; TypeScript</span>
        </div>
      </div>
    </footer>
  );
};
