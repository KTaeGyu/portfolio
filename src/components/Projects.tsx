import type { Project } from '../data/types'
import { Section } from './Section'

function Head({ project }: { project: Project }) {
  return (
    <div className="card__head">
      <h3 className="card__title">{project.title}</h3>
      <span className="tag">{project.kind}</span>
    </div>
  )
}

/** 결과가 넷 중 가장 먼저 읽혀야 해서 화면에서도 위에 온다 */
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="field">
      <h4 className="field__label">{label}</h4>
      {children}
    </div>
  )
}

function Problem({ project }: { project: Project }) {
  return (
    <Field label="문제">
      <p className="field__body">{project.problem}</p>
    </Field>
  )
}

/** 경력이 짧을 때 가장 팔리는 칸이라 「한 일」보다 먼저 온다 */
function Decision({ project }: { project: Project }) {
  if (!project.decision) return null

  return (
    <Field label="판단">
      <p className="field__body">{project.decision}</p>
    </Field>
  )
}

function Approach({ project }: { project: Project }) {
  return (
    <Field label="한 일">
      <ul className="points">
        {project.approach.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Field>
  )
}

function Learned({ project }: { project: Project }) {
  if (!project.learned) return null

  return (
    <Field label="배운 점">
      <p className="field__body">{project.learned}</p>
    </Field>
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

function Meta({ project }: { project: Project }) {
  return (
    <div className="card__meta">
      <span>{project.period}</span>
      <span>{project.role}</span>
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
            <Problem project={project} />
            <Decision project={project} />
            <Meta project={project} />
            <Links project={project} />
          </div>
          <div className="card__column">
            <Approach project={project} />
            <Learned project={project} />
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
      <Problem project={project} />
      <Decision project={project} />
      <Approach project={project} />
      <Learned project={project} />
      <Meta project={project} />
      <Links project={project} />
      <Stack project={project} />
    </article>
  )
}

type Props = {
  id: string
  title: string
  items: Project[]
  /** 앞에서 몇 개를 가로 전면으로 크게 보일지 — 순서가 곧 중요도라는 뜻 */
  featuredCount: number
}

export function Projects({ id, title, items, featuredCount }: Props) {
  return (
    <Section id={id} title={title}>
      <div className="projects">
        {items.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={index < featuredCount}
          />
        ))}
      </div>
    </Section>
  )
}
