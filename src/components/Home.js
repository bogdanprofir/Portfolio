import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#212121]'>
     {/* Container */}
     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className=' text-yellow-300 '>Hello, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Bogdan Profir</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> I'm a FrontEnd Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a skilled frontend developer specializing in crafting stunning and user-friendly websites. From pixel-perfect designs to seamless interactions, I bring your ideas to life using the latest technologies. Let's collaborate to create visually striking, fast-loading, and responsive websites that engage and convert your audience.</p>
        <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:text-black hover:font-bold hover:bg-yellow-300 hover:border-yellow-300'>
        <Link to='contact' smooth={true} duration={500}>
        Ready for a Tech Talk? Connect Today
          </Link>
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-4' />
        </span>
        </button>
        </div>
     </div>
     
    </div>
  )
}

export default Home