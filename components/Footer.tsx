import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import CallToActionButton from './ui/CallToActionButton';
import MobileSidebar from './MobileSidebar';

import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const links = [
  { href: 'https://github.com/dave-sbs', icon: <FaGithub size={24} />},
  { href: 'https://www.linkedin.com/in/dawit-dave-boku-10b7a6252/', icon: <FaLinkedin size={24} /> },
  { href: 'https://mailto:davesah.bs@gmail.com', icon: <MdEmail size={24} />},
];

const Footer = () => {
  return (
    <footer className="relative w-full pt-10 pb-2" id="contact">
        <div className='relative flex flex-col items-center'>
            <h1 className='max-w-[72vw] text-center text-[60px] lg:text-[72px] font-bold tracking-tight lg:leading-normal'>
              Get In Touch
            </h1>
            <h2 className='max-w-[72vw] text-center text-[20px] mt-8 lg:text-[32px] md:text-4xl lg:text-5xl lg:font-bold tracking-tight lg:leading-normal'>
                I am <span className='text-purple'>actively looking</span> for my next adventure at <span className='text-purple'>exciting companies</span> improving the lives of people around the world.
            </h2>
            <CallToActionButton title="Would Love to Chat" href="mailto:davesah.bs@gmail.com"/>
        </div>
        <div className='flex flex-col gap-0.5 mb-2 mt-40 items-center justify-start'>
          <MobileSidebar links={links} />
          <p className='font-light'>Designed & Built by Dave Boku</p>
          <p className='font-light'>© 2024 Dave Boku</p>
        </div>
    </footer>
  )
}

export default Footer