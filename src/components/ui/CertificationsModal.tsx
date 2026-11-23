import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { certifications } from '../../data/certifications';

interface CertificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CertificationsModal({ isOpen, onClose }: CertificationsModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-backdrop px-4 py-10 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="certifications-title"
        className="w-full max-w-2xl border border-line-strong bg-surface shadow-surface"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line p-5 sm:p-6">
          <div>
            <p className="eyebrow text-accent">Credential library</p>
            <h2 id="certifications-title" className="mt-2 font-display text-2xl text-ink">
              Certifications
            </h2>
            <p className="mt-1 text-sm text-muted">
              {certifications.length} certificates and programs completed.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close certifications"
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <ul
          data-lenis-prevent
          className="grid max-h-[60vh] gap-px overflow-y-auto bg-line p-px sm:grid-cols-2"
        >
          {certifications.map((certification) => (
            <li
              key={`${certification.name}-${certification.issuer}`}
              className="bg-surface p-4"
            >
              <p className="text-sm leading-snug text-ink">{certification.name}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-faint">
                {certification.issuer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
