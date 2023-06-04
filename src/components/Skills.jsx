import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#212121] text-gray-300 w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-300 '>Skills</p>
                <p className='py-4'>Crafting Future-Ready Solutions with My Core Technologies: </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-4 py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={Html} alt="HTML icon" />
                    <p> HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={Css} alt="CSS icon" />
                    <p> CSS </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={Javascript} alt="JS icon" />
                    <p> Javascript </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={ReactImg} alt="React icon" />
                    <p> ReactJS </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={Github} alt="Github icon" />
                    <p> Github </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={Tailwind} alt="Tailwind icon" />
                    <p> Tailwind </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills