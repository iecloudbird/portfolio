"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface HoldButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  holdDuration?: number;
  onHoldComplete?: () => void;
}

export default function HoldButton({
  className,
  holdDuration = 1500,
  onHoldComplete,
  children,
  ...props
}: HoldButtonProps) {
  const [isHovering, setIsHovering] = useState(false);

  const handleAnimationComplete = () => {
    if (isHovering && onHoldComplete) {
      onHoldComplete();
    }
  };

  return (
    <button
      className={cn(
        "relative overflow-hidden",
        "px-8 py-4 rounded-xl",
        "border-2 border-black text-black",
        "bg-white hover:text-[#cca300]",
        "font-semibold transition-colors duration-300",
        "min-w-[200px]",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: isHovering ? "100%" : "0%" }}
        transition={{
          duration: isHovering ? holdDuration / 1000 : 0.3,
          ease: isHovering ? "linear" : "easeOut",
        }}
        onAnimationComplete={handleAnimationComplete}
        className="absolute left-0 top-0 h-full bg-black"
      />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children || "Send Message"}
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>
    </button>
  );
}
