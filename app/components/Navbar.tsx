// src/components/Navbar.tsx - THE FINAL ANIMATED VERSION

"use client"; // Required for hooks and animations

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useScrollDirection } from '../hooks/useScrollDireaction'; // Import our new hook

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const scrollDirection = useScrollDirection();

  // useGSAP for all our animation logic
  useGSAP(() => {
    // Animate the navbar based on the scroll direction
    // We animate the 'y' property to move it up or down
    gsap.to(navbarRef.current, {
      y: scrollDirection === 'down' ? -120 : 0, // Move it up by 120px when scrolling down
      duration: 0.5,
      ease: 'power3.out',
    });

  }, [scrollDirection]); // This animation will re-run every time scrollDirection changes

  // Magnetic button effect logic
  useGSAP(() => {
    // --- CHANGE #1: TYPE ASSERTION ---
    // We use `as HTMLAnchorElement` to tell TypeScript what kind of element we are selecting.
    const ctaButton = document.querySelector('.cta-button') as HTMLAnchorElement;

    // If the button doesn't exist on the page, do nothing.
    if (!ctaButton) return;

    // The rest of the logic now works because TypeScript knows ctaButton is a proper element
    // that can have mouse events.
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = ctaButton.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(ctaButton, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.7,
        ease: 'elastic.out(1, 0.75)',
      });
    };

    const onMouseLeave = () => {
      gsap.to(ctaButton, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.75)',
      });
    };

    ctaButton.addEventListener('mousemove', onMouseMove);
    ctaButton.addEventListener('mouseleave', onMouseLeave);

    // Cleanup function
    return () => {
      ctaButton.removeEventListener('mousemove', onMouseMove);
      ctaButton.removeEventListener('mouseleave', onMouseLeave);
    };
}, []);

  return (
    // Add the ref to the header
    <header ref={navbarRef} className="fixed top-0 left-0 w-full p-4 sm:p-6 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-4xl font-bold text-black">
          <Image 
            src="/logo-budgetweb.png"
            alt='logo-image' 
            className='h-20 object-cover w-30'
            width={100}
            height={50}
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <Link href="/portfolio" className="hover:text-primary transition-colors">Our Work</Link>
          <Link href="/process" className="hover:text-primary transition-colors">Our Process</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
        </div>

        {/* CTA Button - add the className "cta-button" */}
        <Link
          href="/contact"
          className="cta-button bg-blue-600 text-white font-bold text-sm py-3 px-6 rounded-full hover:bg-primary-dark transition-colors"
        >
          Get a Free Quote
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;