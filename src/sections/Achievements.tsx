import { useState } from 'react';
import { CertificationsModal } from '../components/ui/CertificationsModal';
import { SectionHeader } from '../components/ui/SectionHeader';
import { achievementsData } from '../data/achievements';

export function Achievements() {
  const [certificationsOpen, setCertificationsOpen] = useState(false);

  return (
    <section id="achievements" className="section-block">
      <div className="container-editorial">
        <SectionHeader
          index="06"
          eyebrow="Achievements"
          title="Proof, not promises."
          description="Impact, industry credentials, and continuous learning."
        />

        <div className="grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
          {achievementsData.map((achievement) => {
            const content = (
              <>
                <div className="flex h-10 items-start">
                  {achievement.metric ? (
                    <p className="accent-number font-display text-4xl tracking-tight">
                      {achievement.metric}
                    </p>
                  ) : null}
                </div>
                <h3 className="mt-3 font-display text-xl text-ink md:min-h-[3.5rem]">
                  {achievement.title}
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-faint">
                  {achievement.subtitle}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {achievement.description}
                </p>

                {achievement.credentialUrl ? (
                  <a
                    href={achievement.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 border-t border-line pt-3 text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
                  >
                    {achievement.note ?? 'Verify credential'}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : achievement.note ? (
                  <p className="mt-6 border-t border-line pt-3 text-[10px] uppercase tracking-[0.16em] text-faint">
                    {achievement.note}
                    {achievement.opensCertifications ? <span aria-hidden="true"> ↗</span> : null}
                  </p>
                ) : null}
              </>
            );

            if (achievement.opensCertifications) {
              return (
                <button
                  key={achievement.title}
                  type="button"
                  onClick={() => setCertificationsOpen(true)}
                  aria-haspopup="dialog"
                  aria-label="View all certificates"
                  className="flex h-full w-full flex-col bg-surface p-6 text-left transition-colors hover:bg-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {content}
                </button>
              );
            }

            return (
              <div key={achievement.title} className="flex h-full flex-col bg-surface p-6">
                {content}
              </div>
            );
          })}
        </div>
      </div>

      <CertificationsModal
        isOpen={certificationsOpen}
        onClose={() => setCertificationsOpen(false)}
      />
    </section>
  );
}
