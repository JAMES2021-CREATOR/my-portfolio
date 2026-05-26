import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    <About />
    </>
  )
}

export default App
