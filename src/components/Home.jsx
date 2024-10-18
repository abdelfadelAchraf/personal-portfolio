import React from 'react'
import profilepic from '../assets/achraf1.jpg'
import { PROFILE } from '../constants'

const Home = () => {
  return (
    <section className='relative flex min-h-screen items-end justify-center' id='hero'>
        <img src={profilepic} alt="{profile picture} " className='absolute inset-0 z-10 h-full w-full object-cover'/>
        <section className='absolute  inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'>
           <div className=' absolute bottom-0 left-3.5 z-20 mx-4 max-w-3xl pb-20'>
                <h1 className='text-5xl font-semibold uppercase tracking-wide md:text-7xl'>
                  {PROFILE.name}
                </h1>
                <p className='pt-2 font-semibold'>{PROFILE.info}</p>
           </div>
        </section>
    </section>
  )
}

export default Home