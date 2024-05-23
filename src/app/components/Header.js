'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
    const [dropNav, setDropNav] = useState(false);

    return (
        <div className='p-4 bg-gradient-to-r from-blue-500 to-purple-500 flex justify-between items-center relative'>
            <div className='flex items-center gap-3'>
                <Image
                    src='/images/photo.png'
                    alt='Description of the image'
                    width={50}
                    height={50}
                    className='rounded-full border-2 border-white'
                />
                <h3 className='text-white font-bold text-xl md:text-2xl'>HARSHIT BRIJWASI</h3>
            </div>

            {dropNav === false ? 
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

            <nav className={`${dropNav ? 'block z-10 absolute top-full right-0 mt-2 p-4 bg-white text-black rounded shadow-lg' : 'hidden'} md:inline-block md:relative md:top-0 md:mt-0 md:bg-transparent md:text-white md:shadow-none`}>
                <ul className='flex flex-col md:flex-row gap-4 md:gap-6 font-semibold'>
                    <li className='hover:text-gray-300 transition-colors hover:cursor-pointer hover:scale-110'>HOME</li>
                    <li className='hover:text-gray-300 transition-colors hover:cursor-pointer hover:scale-110'>ABOUT</li>
                    <li className='hover:text-gray-300 transition-colors hover:cursor-pointer hover:scale-110'>PROJECTS</li>
                    <li className='hover:text-gray-300 transition-colors hover:cursor-pointer hover:scale-110'>CONTACT</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
