import Sidebar from '@/components/Sidebar'
import CallToActionButton from '@/components/ui/CallToActionButton'
import Link from 'next/link'
import React from 'react'

import { FaGithub, FaHome, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const design = () => {
const links = [
    { href: 'https://github.com/dave-sbs', icon: <FaGithub size={24} />},
    { href: 'https://www.linkedin.com/in/dawit-dave-boku-10b7a6252/', icon: <FaLinkedin size={24} /> },
    { href: 'https://mailto:davesah.bs@gmail.com', icon: <MdEmail size={24} />},
    ];

  return (
    <main className='flex h-screen w-screen bg-black-100'>
        <div className="opacity-0 md:opacity-100">
            <Sidebar links={links} side="left"/>
        </div>
        {/* <div className='ml-2 mt-20'>
            
        </div> */}
        <div className="ml-2 mr-2 mt-20 sm:ml-6 sm:mr-6 flex-1 bg-black-100 flex flex-col justify-center items-center overflow-clip mx-auto sm:px-10">
            <h1 className='text-4xl font-bold'>Design Page Will Be Finished Very Soon!</h1>
            <p className='text-xl pt-4'>In the meantime, please feel free to check out the GitHub Repo.</p>
            <CallToActionButton href='https://github.com/dave-sbs' title='GitHub Repo'/>
            <div className='py-4 flex items-center justify-center gap-2'>
                <span><FaHome /></span>
                <Link href='/' className='text-lg underline'>Back to Home</Link>
            </div>
        </div>
    </main>
  )
}

export default design