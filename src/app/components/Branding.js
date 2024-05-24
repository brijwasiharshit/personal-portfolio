import React from 'react';
import SideNav from './SideNav';

const Branding = () => {
  return (
    <div className='h-[700px] bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center'>
        <SideNav />
        <div className='text-center px-6 md:px-12'>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-4'>HEY! 😊 I AM HARSHIT BRIJWASI</h1>
            <p className='text-lg md:text-xl text-white max-w-2xl mx-auto'>
                A highly curious and enthusiastic front-end developer dedicated to transforming your imagination into visually stunning web pages.
            </p>
        </div>
    </div>
  );
}

export default Branding;
