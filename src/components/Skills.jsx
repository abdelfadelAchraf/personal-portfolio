import React from 'react'
import { SKILLS } from '../constants'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <section className="container mx-auto" id='skills'>
        <motion.h2 className='mb-12 mt-20 text-center text-4xl'
                initial={{opacity:0, x:-100  }}
                whileInView={{opacity:1, x:0 }}
                transition={{duration:1, delay:0.5}}
                viewport={{once:true}}
        >Skills</motion.h2>
        <section className='mx-2 pt-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 lg:px-20'>
          {
            SKILLS.map((skill, index) =>(
               <section key={index} className='mb-8 flex items-center justify-between'>
                <motion.section className='flex items-center'
                  initial={{opacity:0, x:-100  }}
                whileInView={{opacity:1, x:0 }}
                transition={{duration:1, delay:0.5}}
                >
                    {skill.icon}
                    <h3 className='px-6 text-xl lg:text-3xl'>{skill.name}</h3>
                </motion.section>

                <motion.section className='text-md border-b-2 border-yellow-400 font-semibold lg:text-xl'
                  initial={{opacity:0, x:100  }}
                  whileInView={{opacity:1, x:0 }}
                  transition={{duration:1, delay:0.5}}
                >
                    <span>{skill.experience}</span>
                </motion.section>
               </section>
            ))
          }
        </section>
    </section>
  )
}

export default Skills