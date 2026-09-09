import { Hero } from './components/Hero'
import { Career } from './components/Career'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { profile } from './data/profile'

export default function App() {
  return (
    <div className="page">
      <Hero />
      {/* 프로젝트가 경력보다 앞이다 — 채용 담당자가 먼저 보는 것이 그쪽이다 */}
      <main>
        <Projects />
        <Career />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  )
}
