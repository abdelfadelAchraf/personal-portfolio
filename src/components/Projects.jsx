import React from 'react'
import { PROJECTS } from '../constants'
import Cards from './Cards'

const Projects = () => {
  return (
    <section id="projects">
        <h2 className='mt-20 text-center text-4xl font-semibold'>Projects</h2>
        <section className='flex flex-wrap justify-center py-8'>
            {PROJECTS.map((item,index) =>(
                <div key={index}>
                    <Cards image={item.image} title={item.title} subtitle={item.subtitle} link="#"/>
                </div>
            ))}
        </section>
    </section>
  )
}

export default Projects