import React from 'react'
import { TESTIMONIALS } from '../constants'

const Testimonials = () => {
  return (
   <section id='testimonials' className='container mx-auto mt-20 py-16 tracking-tighter'>
       <h2 className='mb-12 text-center text-4xl font-semibold'>What people say ?</h2>
       <section className='mx-auto max-w-3xl'>
           {TESTIMONIALS.map((testimonial, index) =>(
            <section key={index} className='mx-4 mb-8 flex flex-col items-center rounded-lg border border-dotted border-gray-600 p-6 md:flex-row'>
                <img src={testimonial.image} alt={testimonial.name} className='mb-4 mr-6 h-16 w-16 rounded-full md:mb-0' />
              
              <section>
              <p className='mb-4 italic'>{testimonial.quote}</p>
              <p className='font-bold'>{testimonial.name}</p>
              <p className='text-gray-400'>{testimonial.title}</p>
              </section>
            </section>
          
           ))}
       </section>
   </section>
  )
}

export default Testimonials