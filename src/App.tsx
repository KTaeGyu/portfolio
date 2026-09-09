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
      <main>
        <Career />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  )
}
