import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <section className='mb-8 mt-20'>
        <section className='flex items-center justify-center'>
            <figure>
               <h1 className='mb-2 text-yellow-500 hover:text-yellow-600'>HRAF</h1>
                 <section className='mb-10 h-3 w-12 bg-yellow-400'></section>
            </figure>
        </section>

        <motion.section className='flex items-center justify-center gap-8 '
        
        initial={{opacity:0, x:100  }}
        whileInView={{opacity:1, x:0 }}
        transition={{duration:1, delay:0.2}}>
          {SOCIAL_MEDIA_LINKS.map((media, index) =>(
            <a key={index} href={media.href} target='_blank' rel='noopener noreferrer'>
                {media.icon}
            </a>
          ))}
        </motion.section>
    <motion.p className='mt-8 text-center text-sm tracking-wide text-gray-400'
      initial={{opacity:0, x:-100  }}
      whileInView={{opacity:1, x:0 }}
      transition={{duration:1, delay:0.2}}
    >
        &copy;created by Achraf Abdelfadel. All rights reserved.
    </motion.p>
    </section>
  )
}

export default Footer