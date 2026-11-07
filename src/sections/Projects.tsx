import { useState } from 'react';
import { ProjectCard } from '../components/ui/ProjectCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { projectsData } from '../data/projects';
import type { ProjectCategory } from '../data/projects';

type Filter = 'All' | ProjectCategory;

const filters: Filter[] = [
  'All',
  'Full-Stack',
  'Navigation & Maps',
  'Mobile & Operations',
  'Web Platform',
  'IoT & Hardware',
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-block">
      <div className="container-editorial">
        <SectionHeader
          index="03"
          eyebrow="Projects"
          title="Selected work."
          description="Real systems built for tangible impact — from university-wide platforms to embedded IoT devices."
        />

        <div className="mb-10 flex flex-wrap gap-x-5 gap-y-2" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`text-[10px] uppercase tracking-[0.18em] transition-colors ${
                activeFilter === filter ? 'text-accent' : 'text-faint hover:text-ink'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="border-b border-line">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
