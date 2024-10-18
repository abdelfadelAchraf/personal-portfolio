import React from 'react'
import video from '../assets/video.mp4'
import { ACHIEVEMENT } from '../constants'
import { motion } from 'framer-motion'
const Achievements = () => {
  return (
    <section id='award'>
      <motion.h2 className='mb-12 mt-20 text-center text-4xl font-serif'
       initial={{opacity:0, x:100  }}
       whileInView={{opacity:1, x:0 }}
       transition={{duration:1, delay:0.5}}
      > Award</motion.h2>
      <section className='mx-auto flex max-w-6xl flex-wrap'>
            <motion.section className='w-full p-2 sm:w-1/2'
             initial={{opacity:0, x:-100 , y:-100 }}
             whileInView={{opacity:1, x:0,y:0 }}
             transition={{duration:1, delay:0.5}}
            >
               <video src={video} typeof='video/mp4' className='w-full rounded-lg' autoPlay muted loop playsInline></video>
            </motion.section>

            <motion.section className='w-full p-4 text-center sm:w-1/2'
             initial={{opacity:0, x:100 , y:100 }}
             whileInView={{opacity:1, x:0,y:0 }}
             transition={{duration:1, delay:0.5}}
            >
                  <h2 className='mb-4 text-3xl '>{ACHIEVEMENT.title}</h2>
                  <span className='mt-4 border-b border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400'>{ACHIEVEMENT.award}</span>
                  <p className='m-4 p-2 italic '>{ACHIEVEMENT.description}</p>
            </motion.section>
      </section>
    </section>
  )
}

export default Achievements