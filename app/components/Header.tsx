import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full py-6 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Only - No Text */}
        <div className="flex items-center">
          <Image
            src="/images/Logo.svg"
            alt="EatSmart Logo"
            width={40}
            height={40}
            priority
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-[#2d3e30] hover:text-[#2d3e30]/70 transition-colors text-sm font-medium px-4 py-2">
            Log In
          </button>
          <button className="bg-[#2d3e30] text-white px-6 py-2.5 rounded-full hover:bg-[#2d3e30]/90 transition-colors text-sm font-medium">
            Start For Free
          </button>
        </div>
      </div>
    </header>
  );
}

