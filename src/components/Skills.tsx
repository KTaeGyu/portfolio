import { skills } from '../data/skills'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" title="기술">
      <div className="skills">
        {skills.map((group) => (
          <div key={group.category} className="skills__row">
            <div className="skills__category">{group.category}</div>
            <div className="chips">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
