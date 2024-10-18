import React from 'react'
import { TESTIMONIALS } from '../constants'
import { motion } from 'framer-motion'
const Testimonials = () => {
  return (
   <section id='testimonials' className='container mx-auto mt-20 py-16 tracking-tighter'>
       <motion.h2 className='mb-12 text-center text-4xl font-semibold'
          initial={{opacity:0, x:-100  }}
          whileInView={{opacity:1, x:0 }}
          transition={{duration:1, delay:0.5}}
       >What people say ?</motion.h2>
       <section className='mx-auto max-w-3xl'>
           {TESTIMONIALS.map((testimonial, index) =>(
            <motion.section key={index} className='mx-4 mb-8 flex flex-col items-center rounded-lg border border-dotted border-gray-600 p-6 md:flex-row'
            initial={{opacity:0, y:-100  }}
            whileInView={{opacity:1, y:0 }}
            transition={{duration:1, delay:0.5}}
            >
                <img src={testimonial.image} alt={testimonial.name} className='mb-4 mr-6 h-16 w-16 rounded-full md:mb-0' />
              
              <section>
              <p className='mb-4 italic'>{testimonial.quote}</p>
              <p className='font-bold'>{testimonial.name}</p>
              <p className='text-gray-400'>{testimonial.title}</p>
              </section>
            </motion.section>
          
           ))}
       </section>
   </section>
  )
}

export default Testimonials