import { SectionHeader } from '../components/ui/SectionHeader';
import { communitiesData } from '../data/communities';

export function Communities() {
  return (
    <section id="communities" className="section-block">
      <div className="container-editorial">
        <SectionHeader
          index="07"
          eyebrow="Communities"
          title="Where I contribute."
          description="Technical societies and campus communities where I learn, organize, and build with others."
        />

        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {communitiesData.map((community) => (
            <article key={community.organization} className="bg-surface p-7">
              <p className="eyebrow text-accent">{community.tag}</p>
              <h3 className="mt-3 font-display text-lg text-ink">{community.organization}</h3>
              <p className="mt-1 text-sm text-muted">{community.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{community.description}</p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-faint">
                {community.period}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
