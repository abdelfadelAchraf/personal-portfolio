import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/skills'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased h-screen'>
     <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Achievements/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    
    </main>
  )
}

export default App