
import './App.css'

import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'

export default function App() {
 
  return ( 
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
      </div>
  )
}