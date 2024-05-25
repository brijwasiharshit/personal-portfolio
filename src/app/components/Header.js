'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import About from './About';  // Assuming you are importing About for usage somewhere else in the page

const Header = () => {
    const [dropNav, setDropNav] = useState(false);

    return (
        <div className='p-4 bg-white flex justify-between items-center relative shadow-lg sticky top-0 z-50'>
            <div className='flex items-center gap-3'>
                <Image
                    src='/images/photo.png'
                    alt='Description of the image'
                    width={50}
                    height={50}
                    className='rounded-full border-2 border-gray-200'
                />
                <h3 className='text-gray-800 font-bold text-xl md:text-2xl'>HARSHIT BRIJWASI</h3>
            </div>

            {!dropNav ? 
                <svg 
                    onClick={() => setDropNav(!dropNav)}
                    className='inline-block md:hidden w-6 cursor-pointer' 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg> 
                : 
                <svg 
                    onClick={() => setDropNav(!dropNav)}
                    className='inline-block md:hidden w-6 cursor-pointer'
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            }

            <nav className={`${dropNav ? 'block z-10 absolute top-full right-0 mt-2 p-4 bg-white text-gray-800 rounded shadow-lg' : 'hidden'} md:inline-block md:relative md:top-0 md:mt-0 md:bg-transparent md:text-gray-800 md:shadow-none`}>
                <ul className='flex flex-col md:flex-row gap-4 md:gap-6 font-semibold'>
                    <li className='hover:text-blue-500 transition-colors hover:cursor-pointer hover:scale-110'>
                        <Link href="">
                            HOME
                        </Link>
                    </li>
                    <li className='hover:text-blue-500 transition-colors hover:cursor-pointer hover:scale-110'>
                        <Link href="#about">
                            ABOUT
                        </Link>
                    </li>
                    <li className='hover:text-blue-500 transition-colors hover:cursor-pointer hover:scale-110'>
                        <Link href="#projects">
                            PROJECTS
                        </Link>
                    </li>
                    <li className='hover:text-blue-500 transition-colors hover:cursor-pointer hover:scale-110'>
                        <Link href="#contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
