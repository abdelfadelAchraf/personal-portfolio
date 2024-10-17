import React from 'react'
import { ABOUT } from '../constants'

const About = () => {
  return (
    <section className='container mx-auto' id='about'> 
         <h2 className='mt-20 text-center text-4xl font-semibold'>About</h2>
         <h3 className='p-4 text-6xl uppercase font-semibold lg:text-[8rem]'>{ABOUT.text1}</h3>
         <p className='mr-24 pl-4 leading-loose'>{ABOUT.text2}</p>
    </section>
  )
}

export default About