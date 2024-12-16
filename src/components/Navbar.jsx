import React, { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, px } from 'framer-motion';
const Navbar = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false);
    

   /*===================togggle the state===================*/
   const ToggleMenu =()=>{
    setIsMenuOpen(!isMenuOpen);
   }
/** {NAVIGATION_LINKS.map((item,index) =>(
                    <li key={index}>
                        <a href={item.href} onClick={(e) =>handleLinkClick(e,item.href)} className='text-sm hover:text-yellow-400'>
                            {item.label}
                        </a>
                    </li>
                ))} */
   /**===================For smooth scrolling ==========================*/
   const handleLinkClick =(event , href)=>{
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if(targetElement){
        const offset = -85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY + offset;
        window.scrollTo({
            top:offsetPosition,
            behavior:'smooth',
        })
    }
    setIsMenuOpen(false);
   }
  
  return (
    <nav className='fixed left-0 right-0 top-4 z-50'>
        <section className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black py-3  lg:flex'>
            <div className='flex justify-between gap-6'>
                <div>
                    {/**<img src={logo} alt="logo" width={90} className='m-2' /> */}
                   <a href=""><h1 className='mr-14 text-yellow-500 hover:text-yellow-900 transition'>HRAF</h1></a>
                </div>
            </div>

            <ul className='flex items-center gap-4'>
               
                <li><a href="/"  className='text-sm hover:text-yellow-400'>Home</a></li>
                <li><a href="#about"  className='text-sm hover:text-yellow-400'>about</a></li>
                <li><a href="#projects"  className='text-sm hover:text-yellow-400'>Projects</a></li>
                <li><a href="#skills"  className='text-sm hover:text-yellow-400'>skills</a></li>
                <li><a href="#contact"  className='text-sm hover:text-yellow-400'>contact</a></li>
            </ul>
        </section>

       
       {/**===============Mobile menu ========================= */}
       <section className='rounded-lg lg:hidden'>
          <div className='flex items-center justify-between'>
             <div>
                <a href=""><h1 className=' m-2 text-yellow-500 hover:text-yellow-900 transition'>HRAF</h1></a>
             </div>
             <div className='flex items-center '>
                <button className='focus:outline-none lg:hidden' onClick={ToggleMenu}>
                {isMenuOpen ? (
                        <FaTimes className='mr-7 h-6 w-5 text-yellow-500'/>
                    ) : (
                        <FaBars className='mr-7 h-6 w-5 text-yellow-500'/>
                    )}
                </button>
             </div>
          </div>
          {isMenuOpen && (
            <motion.ul className='ml-4 mr-8 mt-4 flex flex-col gap-4 bg-black w-max py-2 px-2 rounded' 
            initial={{opacity:0 , x:-100 }}
            whileInView={{opacity:1,x :0 }}
            transition={{duration:.5}}
            viewport={{once:true}}
            >
                  {NAVIGATION_LINKS.map((item,index) =>(
                    <li key={index} className=' p-2 hover:text-yellow-300'>
                        <a href={item.href} onClick={(e) =>handleLinkClick(e,item.href)} className='block w-full text-xl font-semibold text-white'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </motion.ul>
          )}
       </section>
    </nav>
  )
}

export default Navbar