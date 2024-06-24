import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

const CallToActionButton = ( {title, href}: {title: string, href: string} ) => {
  return (
    <button className="mt-8 px-8 py-4 items-center rounded-lg bg-gradient-to-b from-blue-950 to-blue-1000 text-white lg:text-lg text-sm border border-neutral-750 hover:shadow-md hover:cursor-pointer">
        <a href={href} target='_blank' className='flex gap-2 items-center'>
            {title}
            <span><HiArrowUpRight /></span>
        </a>
    </button>
  )
}      

export default CallToActionButton
