import { projects } from '../data/projects'
import type { Project } from '../data/types'
import { Section } from './Section'

/** 배열 맨 앞 몇 개를 가로 전면으로 크게 보인다 — 순서가 곧 중요도라는 뜻 */
const FEATURED_COUNT = 2

function Head({ project }: { project: Project }) {
  return (
    <div className="card__head">
      <h3 className="card__title">{project.title}</h3>
      <span className="tag">{project.kind}</span>
    </div>
  )
}

function Metrics({ project }: { project: Project }) {
  if (!project.metrics || project.metrics.length === 0) return null

  return (
    <div className="metrics">
      {project.metrics.map((metric) => (
        <div key={metric.label}>
          <span className="metric__value">{metric.value}</span>
          <span className="metric__label">{metric.label}</span>
        </div>
      ))}
    </div>
  )
}

function Links({ project }: { project: Project }) {
  if (!project.links || project.links.length === 0) return null

  return (
    <div className="card__meta">
      {project.links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  )
}

function Points({ project }: { project: Project }) {
  return (
    <ul className="points">
      {project.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  )
}

function Stack({ project }: { project: Project }) {
  return (
    <div className="chips">
      {project.stack.map((tech) => (
        <span key={tech} className="chip">
          {tech}
        </span>
      ))}
    </div>
  )
}

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  const hasMetrics = Boolean(project.metrics && project.metrics.length > 0)
  const className = [
    'card',
    featured ? 'card--featured' : '',
    hasMetrics ? '' : 'card--plain',
  ]
    .filter(Boolean)
    .join(' ')

  // 전면 카드는 좌우로 갈라 한 화면에 담는다 — 세로로 길어지면 스캔이 끊긴다
  if (featured) {
    return (
      <article className={className}>
        <div className="card__split">
          <div className="card__column">
            <Head project={project} />
            <p className="card__summary">{project.summary}</p>
            <Metrics project={project} />
            <div className="card__meta">
              <span>{project.period}</span>
              <span>{project.role}</span>
            </div>
            <Links project={project} />
          </div>
          <div className="card__column">
            <Points project={project} />
            <Stack project={project} />
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className={className}>
      <Head project={project} />
      <p className="card__summary">{project.summary}</p>
      <Metrics project={project} />
      <div className="card__meta">
        <span>{project.period}</span>
        <span>{project.role}</span>
      </div>
      <Points project={project} />
      <Links project={project} />
      <Stack project={project} />
    </article>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="프로젝트">
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={index < FEATURED_COUNT}
          />
        ))}
      </div>
    </Section>
  )
}
