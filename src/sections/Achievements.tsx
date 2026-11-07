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
            <div key={achievement.title} className="bg-surface p-7">
              {achievement.metric ? (
                <p className="font-display text-4xl tracking-tight text-accent">
                  {achievement.metric}
                </p>
              ) : null}
              <h3 className="mt-3 font-display text-xl text-ink">{achievement.title}</h3>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-faint">
                {achievement.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{achievement.description}</p>
              {achievement.note ? (
                <p className="mt-5 border-t border-line pt-3 text-[10px] uppercase tracking-[0.16em] text-faint">
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
