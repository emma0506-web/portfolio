import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">跳到主内容</a>
      <div className="app">
        <Nav />
        <main id="main">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}
