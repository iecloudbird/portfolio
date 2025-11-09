"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past hero section
      const heroHeight = window.innerHeight * 0.9; // 90vh
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{ zIndex: 9999 }}
      className="fixed bottom-8 right-8 p-4 bg-[#cca300] text-black rounded-full shadow-lg hover:bg-[#ffd700] hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer"
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
