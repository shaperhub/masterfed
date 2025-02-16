// 'use client'
// import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Blacklogo from '../../public/blacklogo.png';
// import { useSelectedLayoutSegment } from 'next/navigation';
import ThemeToggler from '@/components/ThemeToggler';

const Navbar = () => {
  // const [nav, setNav] = useState(false);
  // const segment = useSelectedLayoutSegment();

  // const handleNav = () => {
  //   setNav(!nav)
  // }

  return (
    <nav className='fixed w-full h-16 bg-white dark:bg-mblack shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link className='' href='/'>
          <Image src={Blacklogo} alt="/" width='140' height='90' className='dark:invert' />
        </Link>
        <div className='flex'>
          {/* <ul className='hidden md:flex pr-4 uppercase'>
            <li id='portfolio' 
              className={segment == 'portfolio' 
              ? 'border-b-mpurple border-b-2 ml-8 p-0.5 text-sm' 
              : 'ml-8 p-0.5 text-sm group transition duration-300'}
              ><Link href='/portfolio' aria-labelledby='Masterfed Portfolio Page Link'>Portfolio</Link>
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-mpurple'></span>
            </li>
            <li id='contact' 
              className={segment == 'contact' 
              ? 'border-b-mpurple border-b-2 ml-8 p-0.5 text-sm' 
              : 'ml-8 p-0.5 text-sm group transition duration-300'}
              ><Link href='/contact' aria-labelledby='Masterfed Contact Page Link'>Contact</Link>
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-mpurple'></span>
            </li>
          </ul> */}
          <div className='mx-4 cursor-pointer'>
            <ThemeToggler />
          </div>

          {/* Hamburger Icon */}
          {/* <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {/* <div className={nav ? 'fixed left-[] top-0 w-full h-screen bg-black/70' : ''}> */}

        {/* Side Drawer Menu */}
        {/* <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white dark:bg-mblack p-10 ease-in duration-500' : 'fixed left-[-105%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link onClick={() => setNav(false)} href='/' className='pt-4 -ml-2'>
                <Image src={Blacklogo} width='105' height='205' alt='/' className='dark:invert' />
              </Link>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 text-sm'>Professional Full Stack Web Solutions</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <ul className='uppercase'>
              <Link href='/portfolio'>
                <li onClick={() => setNav(false)} id='portfolio' className='py-2 text-sm'>Portfolio</li>
              </Link>
              <Link href='/contact'>
                <li onClick={() => setNav(false)} id='contact' className='py-2 text-sm'>Contact</li>
              </Link> 
            </ul>
          </div>
        </div>
      </div> */}
      
    </nav>
  )
}

export default Navbar