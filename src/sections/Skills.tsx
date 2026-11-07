import { SectionHeader } from '../components/ui/SectionHeader';
import { skillsData } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="container-editorial">
        <SectionHeader
          index="05"
          eyebrow="Skills"
          title="Capabilities."
          description="Tooling, frameworks, and engineering competencies applied across active production and hardware environments."
        />

        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((group) => (
            <div key={group.title} className="bg-surface p-6">
              <h3 className="eyebrow text-accent">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item} className="border-b border-line pb-2 last:border-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
