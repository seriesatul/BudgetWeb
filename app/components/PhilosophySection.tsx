// src/components/PhilosophySection.tsx - Fully Responsive

"use client";

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection = () => {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        // A simple fade-in for the entire text block
        gsap.from(container.current, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        });
    }, { scope: container });

    return (
        <section 
            ref={container} 
            className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto text-center relative">
                
                {/* Doodles for decoration - Responsive sizing and positioning */}
                <Image 
                    src="/doodle-1.gif"
                    alt="scribble arrow"
                    width={80}
                    height={80}
                    className="absolute top-4 left-2 sm:top-6 sm:left-4 md:top-8 md:left-8 lg:top-10 lg:left-12 xl:left-20 w-12 sm:w-14 md:w-16 lg:w-20 h-auto opacity-80 sm:opacity-90 md:opacity-100"
                />
                <Image 
                    src="/doodle-2.gif"
                    alt="lightning bolt doodle"
                    width={100}
                    height={100}
                    className="absolute bottom-4 right-2 sm:bottom-6 sm:right-4 md:bottom-8 md:right-8 lg:bottom-10 lg:right-12 xl:right-20 w-14 sm:w-16 md:w-20 lg:w-24 h-auto opacity-80 sm:opacity-90 md:opacity-100"
                />

                {/* Main Text Content - Fully Responsive Typography */}
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight sm:leading-tight md:leading-tight lg:leading-none tracking-tight sm:tracking-tighter">
                    <p className="text-black mb-1 sm:mb-2">
                        We don't follow
                    </p>
                    <p className="text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                        "Old Rules".
                    </p>
                    
                    {/* Grey text for contrast with spacing */}
                    <p className="text-black mb-1 sm:mb-2 mt-4 sm:mt-5 md:mt-6 lg:mt-8">
                        We use tech and creativity
                    </p>
                    <p className="text-black">
                        to build our own path.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;