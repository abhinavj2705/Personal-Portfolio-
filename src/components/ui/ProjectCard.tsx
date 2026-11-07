import type { ProjectItem } from '../../data/projects';
import { ArrowLink } from './ArrowLink';
import { Tag } from './Tag';

export function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <article className="group border-t border-line py-10 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <p className="font-mono text-[11px] tracking-[0.24em] text-accent">
            {String(index).padStart(2, '0')}
          </p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted">
            {project.category}
          </p>
          {project.highlightMetric ? (
            <p className="mt-3 text-xs text-faint">{project.highlightMetric}</p>
          ) : null}
        </div>

        <div className="lg:col-span-7">
          <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted sm:text-base">{project.tagline}</p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="eyebrow text-accent">Problem</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{project.problemSolved}</dd>
            </div>
            <div>
              <dt className="eyebrow text-accent">Contribution</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{project.contribution}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-3 lg:items-end">
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {project.githubUrl ? (
              <ArrowLink
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Source
              </ArrowLink>
            ) : null}
            {project.demoUrl ? (
              <ArrowLink
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="solid"
              >
                Live
              </ArrowLink>
            ) : (
              <span className="self-center text-xs text-faint">Demo on request</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
