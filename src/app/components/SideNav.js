import Link from 'next/link';
import React from 'react';
import LinkedinSVG from './assets/LinkedinSVG';
import GithubSVG from './assets/GithubSVG';
import InstagramSVG from './assets/InstagramSVG';
import ResumeSVG from './assets/ResumeSVG';

const SideNav = () => {
  return (
    
        <ul className=' flex flex-col absolute left-0 md:p-2 hidden md:block rounded-lg bg-slate-100'>
          <Link href={'https://www.linkedin.com/in/harshit-brijwasi-303774138/'}>
          <li className='hover:scale-125'>
            <LinkedinSVG />
            </li></Link>
            
            <Link href={'https://github.com/brijwasiharshit'}>
            <li className='hover:scale-125'>
            <GithubSVG />

            </li>
            </Link>
           
           <Link href={'instagram.com'}>
           <li className='hover:scale-125'>
      <InstagramSVG />
            </li>
           </Link>
            
            <Link href={'https://drive.google.com/file/d/1zx1TId2UEJT__xiBiUVkS1M6PXBdH7XZ/view?usp=drive_link'}>
            <li className='hover:scale-125'>
            <ResumeSVG />

            </li>
            </Link>
            
        </ul>
    
  )
}

export default SideNav;