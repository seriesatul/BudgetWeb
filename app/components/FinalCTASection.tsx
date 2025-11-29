// src/components/FinalCTASection.tsx - Fully Responsive
import Link from 'next/link';
import React from 'react';

const FinalCTASection = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-primary">
            <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-9xl xl:text-9xl 2xl:text-8xl font-extrabold leading-tight sm:leading-tight md:leading-tight lg:leading-none mb-4 sm:mb-5 md:mb-6">
                    Tired of confusing quotes?
                </h2>
                <p className="mt-4 sm:mt-5 md:mt-6 max-w-2xl font-semibold sm:font-bold mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-2">
                    Let's talk. We provide clear, upfront pricing with no surprises.
                    Get a free, no-obligation quote for your project today.
                </p>
                <Link 
                    href="/contact" 
                    className="inline-block mt-6 sm:mt-8 md:mt-10 bg-foreground text-background font-bold text-sm sm:text-base md:text-lg py-3 px-6 sm:py-3.5 sm:px-8 md:py-4 md:px-10 rounded-full hover:bg-black hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                    Get My Free Quote
                </Link>
            </div>
        </section>
    );
};

export default FinalCTASection;