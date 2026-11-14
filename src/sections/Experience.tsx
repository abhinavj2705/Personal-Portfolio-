import { SectionHeader } from '../components/ui/SectionHeader';
import { Tag } from '../components/ui/Tag';
import { experienceData, leadershipData } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="container-editorial">
        <SectionHeader
          index="04"
          eyebrow="Experience"
          title="Roles and responsibilities."
          description="Leading engineering efforts, coordinating campus initiatives, and contributing to technical communities."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {experienceData.map((item, index) => (
            <article
              key={`${item.role}-${item.organization}`}
              className="relative flex h-full flex-col border border-line bg-surface p-7 transition-colors duration-300 hover:border-line-strong"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-accent" aria-hidden="true" />

              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] tracking-[0.24em] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.active ? (
                  <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    Active
                  </span>
                ) : (
                  <span className="text-[10px] uppercase tracking-[0.16em] text-faint">
                    {item.period}
                  </span>
                )}
              </div>

              <h3 className="mt-5 font-display text-xl text-ink">{item.role}</h3>
              <p className="mt-1 text-sm text-accent">{item.organization}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>

              <div className="mt-6 border-t border-line pt-4">
                <Tag>{item.tag}</Tag>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-4 text-muted">
            <span className="eyebrow">Leadership &amp; Involvement</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>

          <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-3">
            {leadershipData.map((item) => (
              <div key={`${item.role}-${item.organization}`} className="bg-surface p-6">
                <h4 className="font-display text-base text-ink">{item.role}</h4>
                <p className="mt-1 text-sm text-accent">{item.organization}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
