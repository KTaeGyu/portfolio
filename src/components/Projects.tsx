import { projects } from '../data/projects'
import type { Project } from '../data/types'
import { Section } from './Section'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <div className="card__head">
        <h3 className="card__title">{project.title}</h3>
        <span className="tag">{project.kind}</span>
      </div>

      <p className="card__summary">{project.summary}</p>

      <div className="card__meta">
        <span>{project.period}</span>
        <span>{project.role}</span>
      </div>

      {project.metrics && project.metrics.length > 0 && (
        <div className="metrics">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <span className="metric__value">{metric.value}</span>
              <span className="metric__label">{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      <ul className="points">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {project.links && project.links.length > 0 && (
        <div className="card__meta">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      )}

      <div className="chips">
        {project.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="프로젝트">
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
