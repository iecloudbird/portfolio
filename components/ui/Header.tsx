"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  useEffect(() => {
    // Trigger fade-in animation on load
    setIsLoaded(true);

    const handleScroll = () => {
      // Header becomes white/sticky after scrolling past hero section
      const heroHeight = window.innerHeight * 0.75; // 90vh
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 overflow-hidden ${
        isScrolled ? "bg-black shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Black overlay that slides away from left to right - reveals white underneath */}
      <div
        className={`absolute inset-0 bg-black transition-all ease-linear ${
          isLoaded ? "translate-x-full" : "translate-x-0"
        }`}
        style={{ zIndex: 10, transitionDuration: "1000ms" }}
      />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 md:px-[60px] 2xl:px-[80px] relative">
        <div className="flex items-center justify-between h-20 relative z-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src={`${basePath}/images/logo.png`}
              alt="Shean Hans Teoh"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* Desktop Navigation - Docked Right */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-base font-medium transition-colors duration-500 group ${
                  isScrolled
                    ? "text-white hover:text-[#cca300]"
                    : "text-black hover:text-[#cca300]"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cca300] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center group"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-500 group-hover:bg-[#cca300] ${
                isScrolled ? "bg-white" : "bg-black"
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-500 group-hover:bg-[#cca300] ${
                isScrolled ? "bg-white" : "bg-black"
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-500 group-hover:bg-[#cca300] ${
                isScrolled ? "bg-white" : "bg-black"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay - Hidden for now, can be enhanced later */}
      <div className="md:hidden hidden">
        <nav className="flex flex-col gap-4 p-8 bg-white border-t border-gray-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-black hover:text-[#cca300] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
