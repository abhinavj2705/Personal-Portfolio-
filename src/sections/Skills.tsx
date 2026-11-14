import { SectionHeader } from '../components/ui/SectionHeader';
import { TechIcon } from '../components/icons/TechIcon';
import { primarySkills, additionalSkills } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="container-editorial">
        <SectionHeader
          index="05"
          eyebrow="Technical Arsenal"
          title="The stack I build with."
          description="The technologies I reach for first, backed by a broad set of supporting tools and frameworks."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {primarySkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center gap-4 border border-line bg-surface px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent-soft hover:shadow-surface"
            >
              <div className="flex items-center gap-2 text-ink transition-colors duration-300 group-hover:text-accent">
                {skill.icons.map((icon) => (
                  <TechIcon key={icon} name={icon} className="h-8 w-8" />
                ))}
              </div>
              <p className="font-display text-sm tracking-tight text-ink">{skill.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-line bg-surface p-6 sm:mt-12 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-muted">Also Familiar With</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {additionalSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line px-3.5 py-1.5 text-xs text-muted transition-colors duration-200 hover:border-line-strong hover:text-ink"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
