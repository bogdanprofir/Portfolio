import React from 'react'
import Gourmetica from '../assets/gourmetica.png'
import Deiso from '../assets/deiso.png'
import Formas from '../assets/formas.png'
import Lunch from '../assets/menu.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300  bg-[#212121]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-300'>Work</p>
                <p className='py-6'>Explore My Digital Canvas: Recent Creations Unveiled: </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-2  gap-4'>
                <div style={{backgroundImage: `url(${Gourmetica})`}}  
                className=' cursor-pointer shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Food blog with HTML,CSS and JS 
                        </span>
                        
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Deiso})`}}  
                className='cursor-pointer shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                    <div className='opacity-0 group-hover:opacity-100 ml-7'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Presentation website with ReactJS & Bootstrap  
                        </span>
                        
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Formas})`}}  
                className='cursor-pointer shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                    <div className='opacity-0 group-hover:opacity-100 ml-7'>
                        <span className='text-2xl font-bold text-white  tracking-wider'>
                            Massage Course Website with HTML,CSS and JS 
                        </span>
                       
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Lunch})`}}  
                className='cursor-pointer shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white ml-3 tracking-wider'>
                            Image slider with HTML,CSS and JS 
                        </span>
                       
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Work