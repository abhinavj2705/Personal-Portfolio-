import { SectionHeader } from '../components/ui/SectionHeader';
import { experienceData } from '../data/experience';

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

        <div className="border-t border-line">
          {experienceData.map((item) => (
            <article
              key={`${item.role}-${item.organization}`}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="eyebrow text-accent">{item.period}</p>
                <p className="mt-2 text-xs text-faint">{item.tag}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-xl text-ink">{item.role}</h3>
                <p className="mt-1 text-sm text-accent">{item.organization}</p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
