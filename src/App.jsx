import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased h-screen'>
     <Navbar/>
      <Home/>
      <About/>


    
    </main>
  )
}

export default App