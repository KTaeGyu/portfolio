import { profile } from '../data/profile'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" title="연락처">
      <p className="contact__lead">
        {profile.location}에서 일하고 있습니다. 더 자세한 이야기가 필요하시면 메일로
        연락 주세요.
      </p>
      <div className="contact__links">
        <a className="button button--primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        {profile.links.map((link) => (
          <a
            key={link.href}
            className="button"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </Section>
  )
}
