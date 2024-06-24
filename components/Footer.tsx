import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import CallToActionButton from './ui/CallToActionButton'

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
          <p className='font-light'>Designed & Built by Dave Boku</p>
          <p className='font-light'>© 2024 Dave Boku</p>
        </div>
    </footer>
  )
}

export default Footer