import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#212121] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/93fb1fe2-5726-4124-abc9-94025aa9f81f" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Feel free to contact me using the form below! </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] ' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Message' rows="10"></textarea>
            <button className='text-white border-2 hover:bg-yellow-300 hover:border-yellow-300 hover:text-black hover:font-bold px-4 py-3 my-8 mx-auto flex items-center '>Get in touch</button>
        </form>
        
    </div>
  )
}

export default Contact