import React from 'react'
import { PROJECTS } from '../constants'
import Cards from './Cards'
import { motion } from 'framer-motion'



const Projects = () => {
  return (
    <section id="projects">
        <motion.h2 className='mt-20 text-center text-4xl font-semibold'
         initial={{opacity:0, x:100  }}
         whileInView={{opacity:1, x:0 }}
         transition={{duration:1, delay:0.5}}
         viewport={{once:true}}
        >Projects</motion.h2>
        <section className='flex flex-wrap justify-center py-8'>
            {PROJECTS.map((item,index) =>(
                <motion.div key={index} 
                initial={{opacity:0, y:100  }}
                whileInView={{opacity:1, y:0 }}
                transition={{duration:1, delay:0.5}}
                viewport={{once:true}}
                >
                    <Cards image={item.image} title={item.title} subtitle={item.subtitle} link="#"/>
                </motion.div>
            ))}
        </section>
    </section>
  )
}

export default Projects