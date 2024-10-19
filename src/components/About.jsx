import React from 'react'
import { ABOUT } from '../constants'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <section className='container mx-auto' id='about'> 
         <motion.h2 className='mt-20 text-center text-4xl font-semibold'
         initial={{opacity:0, y:-20  }}
         whileInView={{opacity:1, y:0 }}
         transition={{duration:.5}}
         viewport={{once:true}}
         >About</motion.h2>
         <motion.h3 className='p-4 md:text-[6rem] sm:text-[3rem] text-6xl uppercase font-semibold lg:text-[8rem]'
          initial={{opacity:0, x:-20  }}
          whileInView={{opacity:1, x:0 }}
          transition={{duration:1}}
          viewport={{once:true}}
         >{ABOUT.text1}</motion.h3>
         <motion.p className='mr-24 pl-4 leading-loose'
          initial={{opacity:0, x:100  }}
          whileInView={{opacity:1, x:0 }}
          transition={{duration:1}}
          viewport={{once:true}}
         >{ABOUT.text2}</motion.p>
    </section>
  )
}

export default About