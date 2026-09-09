import { profile } from '../data/profile'

/** 화면 순서와 같아야 한다 — 어긋나면 눌렀을 때 엉뚱한 데로 간다 */
const SECTIONS = [
  { id: 'projects', label: '프로젝트' },
  { id: 'career', label: '경력' },
  { id: 'about', label: '소개' },
  { id: 'skills', label: '기술' },
  { id: 'contact', label: '연락처' },
]

export function Nav() {
  return (
    <nav className="nav" aria-label="주요 구역">
      <div className="nav__inner">
        <a className="nav__home" href="#top">
          {profile.name}
        </a>
        <ul className="nav__links">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a className="nav__link" href={`#${section.id}`}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
