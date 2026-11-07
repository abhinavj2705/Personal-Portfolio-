import { SectionHeader } from '../components/ui/SectionHeader';
import { whyMeData } from '../data/whyMe';

export function WhyMe() {
  return (
    <section id="why-me" className="section-block">
      <div className="container-editorial">
        <SectionHeader
          index="02"
          eyebrow="Why Me"
          title="What I bring to a team."
          description="A short, honest case for the way I work — grounded in shipped products, range, and follow-through."
        />

        <div className="border-t border-line">
          {whyMeData.map((point, index) => (
            <div
              key={point.title}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <span className="font-mono text-[11px] tracking-[0.24em] text-accent md:col-span-1">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl text-ink md:col-span-4">{point.title}</h3>
              <p className="text-sm leading-relaxed text-muted md:col-span-7">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
