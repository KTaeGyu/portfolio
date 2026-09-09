import { career } from '../data/career'
import { Section } from './Section'

export function Career() {
  return (
    <Section id="career" title="경력">
      <div className="career">
        {career.map((entry) => (
          <article key={entry.organization + entry.period} className="career__item">
            <div className="career__period">{entry.period}</div>
            <div>
              <h3 className="career__org">{entry.organization}</h3>
              <p className="career__role">{entry.role}</p>
              <ul className="points">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
