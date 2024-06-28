"use client";

import { techStack1, techStack2 } from "@/data";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

export default function TechStack() {
return (
    <>
        <div className='py-8 relative' id="tech">
            <h1 className='heading relative tracking-tight py-4'>
                Tech Stack
            </h1>

            <div className="h-[20vh] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={techStack1}
                    direction="right"
                    speed="normal"
                />
            </div>

            <div className="h-[20vh] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={techStack2}
                    direction="left"
                    speed="normal"
                />
            </div>
        </div>
    </>
  );
}