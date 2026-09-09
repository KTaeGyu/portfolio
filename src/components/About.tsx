import { about } from '../data/about'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="소개">
      <div className="about">
        <div className="about__text">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </div>

        <div className="about__facts">
          <div className="about__group">
            <h3 className="about__label">학력</h3>
            <ul className="about__list">
              {about.education.map((entry) => (
                <li key={entry.name}>
                  <span className="about__name">{entry.name}</span>
                  <span className="about__meta">
                    {entry.period} · {entry.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about__group">
            <h3 className="about__label">자격증</h3>
            <ul className="about__list">
              {about.certifications.map((entry) => (
                <li key={entry.name}>
                  <span className="about__name">{entry.name}</span>
                  <span className="about__meta">
                    {entry.issuer} · {entry.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
