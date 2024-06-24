import React from 'react'
import { HiArrowRight, HiArrowUpRight } from 'react-icons/hi2'
import { TextGenerateEffect } from './ui/TextGenerateEffect'


const Hero = () => {
  return (
    <div className='pb-4 pt-28'>
        {/* <div className="h-[45%] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0"> */}
            {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> */}
        {/* </div> */}

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
                        Let's Meet!
                        <span><HiArrowRight /></span>
                    </a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero