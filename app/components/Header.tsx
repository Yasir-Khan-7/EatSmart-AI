'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 md:py-6 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Only - No Text */}
        <div className="flex items-center">
          <Image
            src="/images/Logo.svg"
            alt="EatSmart Logo"
            width={32}
            height={32}
            className="md:w-10 md:h-10"
            priority
          />
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <a href="#recipes" className="text-[#2d3e30] hover:text-[#2d3e30]/70 transition-colors text-sm font-medium">
            Recipes
          </a>
          <a href="#blog" className="text-[#2d3e30] hover:text-[#2d3e30]/70 transition-colors text-sm font-medium">
            Blog
          </a>
          <a href="#support" className="text-[#2d3e30] hover:text-[#2d3e30]/70 transition-colors text-sm font-medium">
            Customer Support
          </a>
        </nav>

        {/* Action Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <button className="hidden lg:block text-[#2d3e30] hover:text-[#2d3e30]/70 transition-colors text-sm font-medium px-3 lg:px-4 py-2">
            Log In
          </button>
          <button className="bg-[#2d3e30] text-white px-4 sm:px-5 lg:px-6 py-2 lg:py-2.5 rounded-full hover:bg-[#2d3e30]/90 transition-colors text-xs sm:text-sm font-medium">
            Start For Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#2d3e30]/5 transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-4 pt-6 pb-4 px-4">
              <a href="#recipes" className="text-[#2d3e30] hover:text-[#2d3e30]/70 transition-colors text-sm font-medium py-2">
                Recipes
              </a>
              <a href="#blog" className="text-[#2d3e30] hover:text-[#2d3e30]/70 transition-colors text-sm font-medium py-2">
                Blog
              </a>
              <a href="#support" className="text-[#2d3e30] hover:text-[#2d3e30]/70 transition-colors text-sm font-medium py-2">
                Customer Support
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-[#2d3e30]/10">
                <button className="text-[#2d3e30] hover:text-[#2d3e30]/70 transition-colors text-sm font-medium py-2 text-left">
                  Log In
                </button>
                <button className="bg-[#2d3e30] text-white px-6 py-2.5 rounded-full hover:bg-[#2d3e30]/90 transition-colors text-sm font-medium w-full">
                  Start For Free
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

