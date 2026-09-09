import { profile } from '../data/profile'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" title="연락처">
      <p className="contact__lead">
        더 자세한 이야기가 필요하시면 메일로 연락 주세요.
      </p>
      <div className="contact__links">
        <a className="contact__link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        {profile.links.map((link) => (
          <a
            key={link.href}
            className="contact__link"
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
