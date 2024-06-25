import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

export default function CallToActionButton ( {title, href}: {title: string, href: string} ) {
  return (
      <button className="mt-8 px-6 py-4 items-center rounded-lg border border-b-0 flex-shrink-0 border-slate-700  text-white lg:text-[16px] text-sm"
              style={{
                background:
                  "linear-gradient(120deg, var(--slate-800), var(--slate-900)",
              }}
      >
         <a href={href} target='_blank' className='flex gap-2 items-center'>
              {title}
              <span><HiArrowUpRight /></span>
        </a>
      </button>
  )
}      
