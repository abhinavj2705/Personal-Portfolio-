import { ArrowUp } from 'lucide-react';
import { Logo } from '../components/Logo';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { sections } from '../data/nav';
import { profile } from '../data/profile';

const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  if (window.__lenis) {
    window.__lenis.scrollTo(0);
    return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function Footer() {
  return (
    <footer className="border-t border-line pb-28 pt-12 md:pb-12">
      <div className="container-editorial">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="group inline-flex">
              <Logo size={40} />
            </div>
            <p className="mt-4 font-display text-lg text-ink">{profile.name}</p>
            <p className="mt-1 text-sm text-muted">
              {profile.role} · {profile.degree}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{profile.summary}</p>
          </div>

          <nav className="md:col-span-4" aria-label="Footer">
            <p className="eyebrow text-accent">Navigate</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted">
              {sections
                .filter((section) => section.id !== 'home')
                .map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="transition-colors hover:text-accent"
                  >
                    {section.label}
                  </a>
                ))}
            </div>
          </nav>

          <div className="md:col-span-3">
            <p className="eyebrow text-accent">Elsewhere</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {currentYear} {profile.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
