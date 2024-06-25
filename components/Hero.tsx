import React from 'react'
import { HiArrowRight, HiArrowUpRight } from 'react-icons/hi2'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { navItems } from "@/data";


const Hero = () => {
  return (
    <div className='pb-4 pt-28' id="about">

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

                <TextGenerateEffect 
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    words="Hey, I'm Dave Boku - a Software Engineer and Product Person."
                />

                <p className='text-center md:tracking-tight mb-4 text-sm md:text-lg lg:text-2xl'> 
                    I&apos;m passionate about building products that people want.
                </p>

                <button className="px-6 py-3 mt-4 rounded-xl bg-white text-black-100 font-bold transition duration-200 hover:bg-purpleDark hover:text-white border-2 border-transparent hover:border-purpleDark">
                    <a href="mailto:davesah.bs@gmail.com" target='_blank' className='flex gap-2 items-center'>
                        Let&apos;s Meet!
                        <span><HiArrowRight /></span>
                    </a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero