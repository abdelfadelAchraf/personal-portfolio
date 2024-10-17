import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased h-screen'>
     <Navbar/>
      <Home/>


    
    </main>
  )
}

export default App