import { SectionHeader } from '../components/ui/SectionHeader';
import { achievementsData } from '../data/achievements';

export function Achievements() {
  return (
    <section id="achievements" className="section-block">
      <div className="container-editorial">
        <SectionHeader
          index="06"
          eyebrow="Achievements"
          title="Proof, not promises."
          description="Verified impact metrics, industry credentials, and academic grounding."
        />

        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {achievementsData.map((achievement) => (
            <div key={achievement.title} className="flex h-full flex-col bg-surface p-6">
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
              {achievement.note ? (
                <p className="mt-6 border-t border-line pt-3 text-[10px] uppercase tracking-[0.16em] text-faint">
                  {achievement.note}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
