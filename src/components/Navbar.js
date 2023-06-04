import React, {useState} from 'react';
import Logo from '../assets/logo.svg';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#001F3F] text-gray-300 font-bold'>
        <div>
            <img src={Logo} alt="Logo"  style={{width: '140px'}}/>
        </div>

       {/* menu */}
        <div>
            <ul className='hidden md:flex'>
            <li className='hover:scale-110 hover:bg-yellow-300 hover:text-black'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:scale-110 hover:bg-yellow-300 hover:text-black'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:scale-110  hover:bg-yellow-300 hover:text-black'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:scale-110 hover:bg-yellow-300 hover:text-black'>
          <Link to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='hover:scale-110 hover:bg-yellow-300 hover:text-black'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
            </ul>
        </div>

        {/* Burger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            { !nav ? <FaBars/> : <FaTimes/> }
        </div>

        <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                             Home
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                             About
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                             Skills
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                              Projects
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                            Contact
                     </Link></li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-blue-200'
                    href="https://www.linkedin.com/in/bogdanthedeveloper/">LinkedIn
                     <FaLinkedin size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                    <a className='flex justify-between items-center w-full text-blue-200'
                    href="https://github.com/bogdanprofir">Github
                     <FaGithub size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700'>
                    <a className='flex justify-between items-center w-full text-blue-200'
                    href="mailto:bogdanthedeveloper9@gmail.com">Email 
                     <HiOutlineMail size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400'>
                    <a className='flex justify-between items-center w-full text-blue-200'
                    href="https://drive.google.com/file/d/16fNj3IWUE7FY6ekMOD3MBBOGaVoFpQjJ/view?usp=sharing">CV  
                     <BsFillPersonLinesFill size={30}/></a>
                </li>
            </ul>

        </div>
    </div>
  );
};

export default Navbar;
