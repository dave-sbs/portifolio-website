"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { IoPlayOutline } from "react-icons/io5";
import { CardBody, CardContainer, CardItem } from "./3DCardEffect";
import Link from "next/link";

export function FloatingCardContainer( {title, description, thumbnail: thumbnail, video, href, iconLists}: {title: string, description: string, thumbnail: string, video: string, href: string, iconLists: string[]}) {
    const videoRef = useRef(null);  
    return (
        <CardContainer className="inter-var h-380 w-430">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-380 rounded-xl p-6 border">
            <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
            >
                {title}
            </CardItem>
            <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
                {description}   
            </CardItem>

            <CardItem translateZ="130" className="relative w-full mt-4">
            <video
                ref={videoRef}
                src={video}
                className="h-full w-full object-contain rounded-xl group-hover/card:shadow-xl"
                loop
                muted
                playsInline
                poster={thumbnail} // Optional: Fallback image before video loads
                onMouseEnter={(e) => {
                    e.currentTarget.play();
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0; // Reset to the start of the video
                    e.currentTarget.load(); // Reload to show the poster image
                }}
            />
            <div className="absolute inset-0 flex items-start justify-end pointer-events-none group-hover/card:opacity-0 transition-opacity duration-300">
                <button className="rounded-full p-3 pointer-events-auto">
                <IoPlayOutline className="text-black" />
                </button>
            </div>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
            <div className="flex items-center justify-between">
                <CardItem
                translateZ={20}
                className="flex items-center"
                >
                {iconLists.map((icon, index) => (
                    <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                        transform: `translateX(-${5 * index * 2}px)`}}>
                    <img src={icon} alt={icon} className="p-2 "/>
                    </div>
                ))}
                </CardItem>
            </div>
            <CardItem
                translateZ={20}
                as={Link}
                href={href}
                target="__blank"
                className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white hover:bg-purpleDark hover:text-white"
            >
                Check Live Site →
            </CardItem>
            </div>
        </CardBody>
        </CardContainer>
    );
    }