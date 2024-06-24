import { workExperience } from '@/data'
import React from 'react'

const Experience = () => {
  return (
    <div className='py-16 relative' id="experience">
        <h1 className='heading relative tracking-tight'>
            My {' '}
            <span className='text-purple'>work experience</span>
        </h1>

        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {workExperience.map((card) => {
                <div className='w-full'>
                    <div>
                        <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 sw-16" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Experience



