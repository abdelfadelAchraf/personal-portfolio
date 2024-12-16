import React from 'react'
import { SKILLS } from '../constants'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <section className="container mx-auto pt-6" id='skills'>
        <h2 className='mb-12 mt-20 text-center text-4xl'
        >Skills</h2>
        <section className='mx-2 pt-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 lg:px-20'>
          {
            SKILLS.map((skill, index) =>(
               <section key={index} className='mb-8 flex items-center justify-between'>
                <section className='flex items-center'
                >
                    {skill.icon}
                    <h3 className='px-6 text-xl lg:text-3xl'>{skill.name}</h3>
                </section>

                <section className='text-md border-b-2 border-yellow-400 font-semibold lg:text-xl'
                >
                    <span>{skill.experience}</span>
                </section>
               </section>
            ))
          }
        </section>
    </section>
  )
}

export default Skills