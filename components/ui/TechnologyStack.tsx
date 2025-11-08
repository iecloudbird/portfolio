"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
}

interface Dot {
  id: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  opacity: number;
}

const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 0.5 };

const technologies: Technology[] = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Storybook",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Datadog",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/datadog/datadog-original.svg",
  },
  {
    name: "Android",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
];

function generateDots(width: number, height: number, spacing: number): Dot[] {
  const dots: Dot[] = [];
  const cols = Math.ceil(width / spacing);
  const rows = Math.ceil(height / spacing);

  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      const x = col * spacing;
      const y = row * spacing;

      // Randomize opacity for variation - increased for more vivid appearance
      const pattern = (row + col) % 3;
      const baseOpacities = [0.5, 0.6, 0.7];
      const opacity = baseOpacities[pattern];

      dots.push({
        id: `dot-${row}-${col}`,
        x,
        y,
        baseX: x,
        baseY: y,
        opacity,
      });
    }
  }

  return dots;
}

function DotComponent({
  dot,
  index,
  mouseX,
  mouseY,
  repulsionRadius,
  repulsionStrength,
}: {
  dot: Dot;
  index: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  repulsionRadius: number;
  repulsionStrength: number;
}) {
  const posX = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get();
    const my = mouseY.get();

    if (!Number.isFinite(mx) || !Number.isFinite(my)) return 0;

    const dx = dot.baseX - mx;
    const dy = dot.baseY - my;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < repulsionRadius) {
      const force = (1 - distance / repulsionRadius) * repulsionStrength;
      const angle = Math.atan2(dy, dx);
      return Math.cos(angle) * force;
    }

    return 0;
  });

  const posY = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get();
    const my = mouseY.get();

    if (!Number.isFinite(mx) || !Number.isFinite(my)) return 0;

    const dx = dot.baseX - mx;
    const dy = dot.baseY - my;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < repulsionRadius) {
      const force = (1 - distance / repulsionRadius) * repulsionStrength;
      const angle = Math.atan2(dy, dx);
      return Math.sin(angle) * force;
    }

    return 0;
  });

  // Gold opacity boost on proximity
  const opacityBoost = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get();
    const my = mouseY.get();

    if (!Number.isFinite(mx) || !Number.isFinite(my)) return 0;

    const distance = Math.sqrt((dot.baseX - mx) ** 2 + (dot.baseY - my) ** 2);
    const maxDistance = repulsionRadius * 1.5;

    if (distance < maxDistance) {
      return (1 - distance / maxDistance) * 0.5;
    }

    return 0;
  });

  const x = useSpring(posX, SPRING_CONFIG);
  const y = useSpring(posY, SPRING_CONFIG);

  const baseMinOpacity = Math.max(dot.opacity * 0.6, 0.4);
  const baseMaxOpacity = Math.min(dot.opacity * 2, 1);

  return (
    <motion.div
      className="absolute rounded-full will-change-transform"
      style={{
        width: 2,
        height: 2,
        left: dot.baseX,
        top: dot.baseY,
        x,
        y,
        backgroundColor: useTransform(opacityBoost, (boost) =>
          boost > 0.2 ? "#cca300" : "#d1d5db"
        ),
      }}
      initial={{ opacity: baseMinOpacity }}
      animate={{
        opacity: [baseMinOpacity, baseMaxOpacity, baseMinOpacity],
      }}
      transition={{
        opacity: {
          duration: 0.8 + (index % 4) * 0.2,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
          delay: (index * 0.02) % 1.5,
          times: [0, 0.5, 1],
        },
      }}
    />
  );
}

export default function TechnologyStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const updateDots = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newDots = generateDots(rect.width, rect.height, 20);
      setDots(newDots);
    };

    updateDots();

    const resizeObserver = new ResizeObserver(updateDots);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(Infinity);
    mouseY.set(Infinity);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated dot pattern background */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot, index) => (
          <DotComponent
            key={dot.id}
            dot={dot}
            index={index}
            mouseX={mouseX}
            mouseY={mouseY}
            repulsionRadius={80}
            repulsionStrength={20}
          />
        ))}
      </div>

      {/* Technology grid */}
      <div className="relative z-10 grid grid-cols-4 sm:grid-cols-5 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-3 group cursor-pointer"
            title={tech.name}
          >
            <div className="relative w-14 h-14 flex items-center justify-center bg-white border-2 border-gray-200 rounded-xl p-3 group-hover:border-[#cca300] group-hover:bg-[#cca300]/5 group-hover:scale-110 transition-all duration-300 shadow-sm z-20">
              {/* Solid white background to block dots */}
              <div className="absolute inset-0 bg-white rounded-xl -z-10" />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.icon}
                alt={tech.name}
                className="relative z-10 w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
            <span className="text-xs font-medium text-gray-600 group-hover:text-[#cca300] text-center leading-tight transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
