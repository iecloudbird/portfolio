"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const handleMobileMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

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
              src={`${basePath}/images/${
                isScrolled ? "logow.png" : "logo.png"
              }`}
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
            onClick={handleMobileMenuClick}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center group relative z-30"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-2 bg-[#cca300]"
                  : isScrolled
                  ? "bg-white group-hover:bg-[#cca300]"
                  : "bg-black group-hover:bg-[#cca300]"
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-0"
                  : isScrolled
                  ? "bg-white group-hover:bg-[#cca300]"
                  : "bg-black group-hover:bg-[#cca300]"
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-2 bg-[#cca300]"
                  : isScrolled
                  ? "bg-white group-hover:bg-[#cca300]"
                  : "bg-black group-hover:bg-[#cca300]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-sm transition-all duration-300 z-[100] ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6 p-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="text-2xl font-semibold text-white hover:text-[#cca300] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
