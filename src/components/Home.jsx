import React from 'react'
import profilepic from '../assets/achraf1.jpg'
import { PROFILE } from '../constants'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <section className='relative flex min-h-screen items-end justify-center' id='hero'>
        <motion.img src={profilepic}  
        alt="{profile picture} " 
        className='absolute inset-0 z-10 h-full w-full object-cover' 
        initial={{opacity:0 }}
        animate={{opacity:1}}
        transition={{duration:1}}
        />  
        <section className='absolute  inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'
         initial={{opacity:0 }}
         animate={{opacity:1}}
         transition={{duration:1}}></section>

           <div className=' absolute bottom-0 left-3.5 z-20 mx-4 max-w-3xl pb-20'>
                <motion.h1 className='text-5xl font-semibold uppercase tracking-wide md:text-7xl'
                 initial={{opacity:0, x:-100 }}
                 animate={{opacity:1, x:0}}
                 transition={{duration:1, delay:0.5}}
                >
                  {PROFILE.name}
                </motion.h1>
                <motion.p className='pt-2 font-semibold'
                initial={{opacity:0 }}
                animate={{opacity:1}}
                transition={{duration:1, delay:1.5}}>{PROFILE.info}</motion.p>
           </div>
     
    </section>
  )
}

export default Home