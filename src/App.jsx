import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased h-screen'>
     <Navbar/>
      <Home/>
      <About/>
      <Projects/>

    
    </main>
  )
}

export default App