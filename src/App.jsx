import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import Skills from './component/Skills.jsx'
import Projects from './component/Projects.jsx'
import Contact from './component/Contact.jsx'
import Footer from './component/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
