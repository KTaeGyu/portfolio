import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Career } from './components/Career'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { profile } from './data/profile'

export default function App() {
  return (
    <>
      <Nav />
      <div className="page">
        {/*
          프로젝트가 경력보다 앞이다 — 채용 담당자가 먼저 보는 것이 그쪽이다.
          소개(배경·학력)는 표준 구성에선 앞이지만, 앞에 두면 프로젝트가
          세 번째 화면으로 밀려서 경력 뒤로 내렸다.
        */}
        <Hero />
        <main>
          <Projects />
          <Career />
          <About />
          <Skills />
          <Contact />
        </main>
        <footer className="footer">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </div>
    </>
  )
}
