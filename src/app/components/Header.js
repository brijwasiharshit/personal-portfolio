import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='p-4 bg-gradient-to-r from-blue-500 to-purple-500 flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <Image 
          src='/images/photo.png' 
          alt='Description of the image' 
          width={50} 
          height={50} 
          className='rounded-full border-2 border-white'
        />
        <h3 className='text-white font-bold text-2xl'>HARSHIT BRIJWASI</h3>
      </div>
      <nav>
        <ul className='flex gap-6 text-white font-semibold '>
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
