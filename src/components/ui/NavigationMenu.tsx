"use client";

import { useState } from "react";

export function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blendMode, setBlendMode] = useState<'difference' | 'exclusion' | 'multiply' | 'screen' | 'overlay'>('difference');

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#playlist", label: "Huntr/x" },
    { href: "#playlist", label: "SajaBoys" },
    { href: "#shop", label: "Shop" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const cycleBlendMode = () => {
    const modes: Array<'difference' | 'exclusion' | 'multiply' | 'screen' | 'overlay'> = ['difference', 'exclusion', 'multiply', 'screen', 'overlay'];
    const currentIndex = modes.indexOf(blendMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setBlendMode(modes[nextIndex]);
  };

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
       
                 {navItems.map((item) => (
           <button
             key={item.href}
             onClick={() => scrollToSection(item.href)}
             className="text-black font-semibold transition-all duration-200 relative group"
             style={{ mixBlendMode: blendMode }}
           >
             {item.label}
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full" style={{ mixBlendMode: blendMode }}></span>
           </button>
         ))}
 
      </div>

             {/* Mobile Menu Button */}
       <div className="md:hidden">
         <button
           onClick={() => setIsMenuOpen(!isMenuOpen)}
           className="text-black transition-all duration-200"
           style={{ mixBlendMode: blendMode }}
         >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 rounded-lg shadow-lg border border-gray-200 py-2 z-50 md:hidden bg-black/90 backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
        
        
        </div>
      )}
    </nav>
  );
}