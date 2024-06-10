import { FloatingLamp } from "@/components/ui/FloatingLamp";
import { projects } from '@/data'
import React from 'react'
import Image from "next/image";
import { FloatingCardContainer } from "./ui/FloatingCardContainer";
import { title } from "process";

const RecentProjects = () => {
  return (
    <div className='py-20 relative'>
        <h1 className='heading relative tracking-tight'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>

        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-12 mt-10'>
            {projects.map(( {id, title, des, img, iconLists, link }) => (
                <div key={id}>
                    <FloatingCardContainer 
                        title={title}
                        description={des}
                        image={img}
                        href={link}
                        iconLists={iconLists}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects