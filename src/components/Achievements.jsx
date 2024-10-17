import React from 'react'
import video from '../assets/video.mp4'
import { ACHIEVEMENT } from '../constants'
const Achievements = () => {
  return (
    <section id='award'>
      <h2 className='mb-12 mt-20 text-center text-4xl font-serif'> Award</h2>
      <section className='mx-auto flex max-w-6xl flex-wrap'>
            <section className='w-full p-2 sm:w-1/2'>
               <video src={video} typeof='video/mp4' className='w-full rounded-lg' autoPlay muted loop playsInline></video>
            </section>

            <section className='w-full p-4 text-center sm:w-1/2'>
                  <h2 className='mb-4 text-3xl '>{ACHIEVEMENT.title}</h2>
                  <span className='mt-4 border-b border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400'>{ACHIEVEMENT.award}</span>
                  <p className='m-4 p-2 italic '>{ACHIEVEMENT.description}</p>
            </section>
      </section>
    </section>
  )
}

export default Achievements