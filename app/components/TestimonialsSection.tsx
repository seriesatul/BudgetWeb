// src/components/TestimonialsSection.tsx - Fully Responsive

"use client";

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  packageType: string;
  color: string;
}

interface TestimonialCardProps extends Testimonial {
  className?: string;
  style?: React.CSSProperties; 
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  company, 
  packageType, 
  color, 
  className = '',
  style 
}) => (
  <div 
    className={`shrink-0 w-[260px] sm:w-[280px] md:w-[300px] lg:w-[350px] p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between shadow-xl sm:shadow-2xl transition-shadow duration-300 ${className}`}
    style={{ 
      backgroundColor: color, 
      height: '460px',
      ...style 
    }}
  >
    <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
      "{quote}"
    </p>
    <div className="mt-4 sm:mt-5 md:mt-6">
      <p className="font-bold text-white text-lg sm:text-xl">{name}</p>
      <p className="text-xs sm:text-sm text-white/80 mt-1 sm:mt-2">{company} — {packageType}</p>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      quote: "The Productive package gave us structure and speed. We had a working MVP in days, not weeks.",
      name: "Rohan Sharma",
      company: "PixelBridge Studios",
      packageType: "Productive",
      color: "#E76F51"
    },
    {
      quote: "Our vague concept turned into a polished brand story and a stunning website. The Creative package was worth every rupee.",
      name: "Priya Menon",
      company: "Aurora Learning Hub",
      packageType: "Creative",
      color: "#1D3557"
    },
    {
      quote: "They handled everything from design to deployment. The final product feels premium and still loads lightning fast.",
      name: "Anjali Gupta",
      company: "Northwind Analytics",
      packageType: "Creative",
      color: "#FF6B6B"
    },
    {
      quote: "Deadlines were tight, but they never compromised on quality. The Productive package kept everyone aligned and focused.",
      name: "Vikram Singh",
      company: "MacroStack Technologies",
      packageType: "Productive",
      color: "#2A9D8F"
    },
    {
      quote: "They didn't just build what we asked for—they challenged our assumptions and shipped something better.",
      name: "Aarav Verma",
      company: "BrightLeaf Media",
      packageType: "Creative",
      color: "#F4A261"
    },
    {
      quote: "The team understood our business quickly and translated it into a clean, conversion-focused UI.",
      name: "Kritika Nair",
      company: "Horizon Legal Partners",
      packageType: "Productive",
      color: "#3F37C9"
    },
    {
      quote: "Every review call felt purposeful. We always knew what was done, what was next, and why.",
      name: "Siddharth Jain",
      company: "ClimbUp Fitness",
      packageType: "Productive",
      color: "#FF8600"
    },
    {
      quote: "Our old site looked dated. Now it feels bold, fresh, and actually reflects our brand personality.",
      name: "Mahima Rao",
      company: "EverGreen Organics",
      packageType: "Creative",
      color: "#0F7173"
    },
    {
      quote: "They balanced aesthetics with performance. The pages look great and still load super fast on mobile.",
      name: "Rahul Khanna",
      company: "NovaEdge SaaS",
      packageType: "Productive",
      color: "#D7263D"
    },
    {
      quote: "The Creative package helped us redesign our entire funnel visuals. Our engagement metrics went up immediately.",
      name: "Sneha Kulkarni",
      company: "StorySpark Studio",
      packageType: "Creative",
      color: "#0081A7"
    }
  ];

  // Responsive Y-offset logic
  const getUniqueYOffset = (index: number) => {
    // Mobile-friendly pattern with smaller offsets
    const pattern = [50, 120, -40, 80, 0, 100]; 
    return pattern[index % pattern.length];
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!rowRef.current || !sectionRef.current) return;
      
      const totalWidth = rowRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      gsap.to(rowRef.current, {
        x: () => -(totalWidth - viewportWidth), 
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, 
          invalidateOnRefresh: true,
        }
      });
    });
    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-gray-50"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-gray-900 leading-tight">
          Don't just take our word for it.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          See what our clients have to say about their experience.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        <div 
          ref={rowRef}
          className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 w-max"
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => {
            const yOffset = getUniqueYOffset(index);
            
            return (
              <TestimonialCard 
                key={index} 
                {...testimonial} 
                style={{ transform: `translateY(${yOffset}px)` }}
              />
            );
          })}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-24 lg:w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default TestimonialsSection;