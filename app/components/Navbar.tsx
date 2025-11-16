// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-4 sm:p-6 z-50">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-foreground">
          BudgetWeb
        </Link>

        {/* Navigation Links (hidden on small screens for now) */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <Link href="/portfolio" className="hover:text-primary transition-colors">Our Work</Link>
          <Link href="/process" className="hover:text-primary transition-colors">Our Process</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-primary text-foreground font-bold text-sm py-3 px-6 rounded-full hover:bg-primary-dark transition-colors"
        >
          Get a Free Quote
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;