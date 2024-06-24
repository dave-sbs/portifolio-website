import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import CallToActionButton from './ui/CallToActionButton'

const Footer = () => {
  return (
    <footer className="relative w-full pt-10 pb-10" id="contact">
        <div className='relative flex flex-col items-center'>
            <h1 className='max-w-[72vw] text-center text-[30px] lg:text-[40px] md:text-4xl lg:text-5xl lg:font-bold tracking-tight lg:leading-normal'>
                Actively looking for my next adventure at <span className='text-purple'>exciting companies</span> improving the lives of people around the world.
            </h1>
            <CallToActionButton title="Would Love to Chat" href="mailto:davesah.bs@gmail.com"/>
        </div>
    </footer>
  )
}

export default Footer