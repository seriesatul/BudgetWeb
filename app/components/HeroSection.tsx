"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  // Looser spring for a floaty, detached feel
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Parallax Text
  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Dynamic transforms for the "Disoriented" look
  // Image 1: Top Right, Tilted heavily Right
  const x1 = useTransform(mouseXSpring, [-0.5, 0.5], [-30, 30]);
  const y1 = useTransform(mouseYSpring, [-0.5, 0.5], [-30, 30]);
  const rotate1 = useTransform(mouseXSpring, [-0.5, 0.5], [12, 18]); // Base rotation ~15deg
  const scrollY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Image 2: Center/Left, Tilted Left (Counter-balance)
  const x2 = useTransform(mouseXSpring, [-0.5, 0.5], [40, -40]); // Moves opposite to Img 1
  const y2 = useTransform(mouseYSpring, [-0.5, 0.5], [40, -40]);
  const rotate2 = useTransform(mouseXSpring, [-0.5, 0.5], [-8, -15]); // Base rotation ~-11deg
  const scrollY2 = useTransform(scrollYProgress, [0, 1], [0, -250]); // Moves faster

  // Image 3: Bottom Far Left, Flat/Slight Tilt
  const x3 = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const y3 = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]);
  const rotate3 = useTransform(mouseXSpring, [-0.5, 0.5], [2, 8]); // Base rotation ~5deg
  const scrollY3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-16 pt-24 perspective-1000"
    >
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-between w-full max-w-7xl">

        <motion.div 
          style={{ y: yText }}
          className="relative z-30 w-full md:w-1/2 mix-blend-multiply"
        >
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-7xl sm:text-9xl lg:text-[10rem] font-extrabold text-black leading-none tracking-tighter"
            >
              Budget
            </motion.h1>
          </div>
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-7xl sm:text-9xl lg:text-[10rem] font-extrabold text-black leading-none tracking-tighter flex items-center gap-4"
            >
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
                className="text-primary origin-left inline-block"
              >
                —
              </motion.span>
              Web
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 ml-2"
          >
            <p className="max-w-[250px] text-sm font-semibold uppercase tracking-widest opacity-80 border-l-2 border-primary pl-4">
              We build websites that work for your budget, not just your brand.
            </p>
          </motion.div>
        </motion.div>

        {/* The Collage Container - Shifted slightly to allow overlap */}
        <div className="relative w-full md:w-1/2 h-[600px] mt-16 md:mt-0 pointer-events-none md:-ml-20">
          
          {/* Image 1: The Piggy Bank - Top Right, Dominant */}
          <motion.div
            style={{ x: x1, y: y1, rotate: rotate1, translateY: scrollY1 }}
            initial={{ opacity: 0, scale: 0.5, x: 100, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="absolute -top-10 -right-10 w-[70%] sm:w-[60%] z-10"
          >
            <div className="relative aspect-[4/5] w-full">
                <Image
                src="/project-image-1.avif"
                alt="Budget concept"
                fill
                className="object-cover rounded-sm shadow-2xl"
                priority
                />
            </div>
          </motion.div>

          {/* Image 2: The Laptop - Center Left, Counter-Tilted */}
          <motion.div
            style={{ x: x2, y: y2, rotate: rotate2, translateY: scrollY2 }}
            initial={{ opacity: 0, scale: 0.6, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="absolute top-[25%] right-[35%] w-[60%] sm:w-[55%] z-20"
          >
             <div className="relative aspect-[8/10] w-full">
                <Image
                src="/project-image-2.avif"
                alt="Workstation"
                fill
                className="object-cover rounded-sm shadow-2xl"
                />
            </div>
          </motion.div>

          {/* Image 3: Money Stack - Bottom Left, Way off axis */}
          <motion.div
            style={{ x: x3, y: y3, rotate: rotate3, translateY: scrollY3 }}
            initial={{ opacity: 0, scale: 0.5, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="absolute -bottom-20 -left-[20%] w-[45%] sm:w-[40%] z-30"
          >
             <div className="relative aspect-[8/10] w-full">
                <Image
                src="/project-image-3.avif"
                alt="Savings"
                fill
                className="object-cover rounded-sm shadow-xl grayscale-[50%]"
                />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;