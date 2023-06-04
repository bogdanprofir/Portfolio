import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#212121] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-300 '>About</p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hello, I am Bogdan, nice to meet you. </p>
                </div>
                <div>
                    <p>As a dedicated and proactive individual with a solid background in hospitality management and real estate, I have embraced a challenging, yet rewarding journey in the realm of web development as a freelancer for the past year. My dedication to continuous learning and a penchant for honing my skills fuels my journey in this fast-paced field. Combining my commitment to excellence with my experience in freelancing, I am constantly striving to develop cutting-edge solutions and grow as a professional. I am eager to continue to broaden my horizons in this ever-evolving field, pushing the boundaries of what's possible and setting new standards in web development.</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default About