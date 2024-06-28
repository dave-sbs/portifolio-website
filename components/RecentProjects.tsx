import { projects } from '@/data'
import React from 'react'
import { FloatingCardContainer } from "./ui/FloatingCardContainer";
import CallToActionButton from "./ui/CallToActionButton";

const RecentProjects = () => {
  return (
    <div className='py-8 relative' id="projects">
        <h1 className='heading relative tracking-tight'>
            A small selection of {' '}
            <span className='text-purple'>recent builds</span>
        </h1>

        <div className='flex flex-wrap items-center justify-center p-4 gap-12 mt-10'>
            {projects.map(( {id, title, des, img, video, iconLists, link }) => (
                <div key={id}>
                    <FloatingCardContainer 
                        title={title}
                        description={des}
                        thumbnail={img}
                        video={video} 
                        href={link}
                        iconLists={iconLists}
                    />
                </div>
            ))}
        </div>

        <div className="flex align-center justify-center p-6">
            <CallToActionButton title="View My Other Projects" href="https://github.com/dave-sbs"></CallToActionButton>
        </div>
    </div>
  )
}

export default RecentProjects