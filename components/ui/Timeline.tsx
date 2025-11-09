"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Users } from "lucide-react";

interface TimelineItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  icon: "briefcase" | "graduation" | "users";
  current?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    company: "Technological University of the Shannon",
    role: "Student - BSc Software Design with AI",
    period: "September 2022 - Present",
    location: "Athlone, Ireland",
    description:
      "Pursuing degree with focus on modern software development, artificial intelligence, and cloud computing technologies. Building strong foundation in algorithms, data structures, and full-stack development.",
    icon: "graduation",
    current: true,
  },
  {
    company: "TUS Global",
    role: "TUS Global Ambassador",
    period: "October 2023 - Present",
    location: "Athlone, Ireland",
    description:
      "Cultivating an inclusive, connected campus culture at TUS, settling international students in new environment through hands-on leadership. Led trips across Ireland, coordinating logistics and guiding diverse groups to foster cultural exchange and team-building.",
    icon: "users",
    current: true,
  },
  {
    company: "Yahoo News",
    role: "Software Engineer Intern",
    period: "January 2025 - August 2025",
    location: "Dublin, County Dublin, Ireland",
    description:
      "Contributing to large-scale web applications and infrastructure projects. Working with modern technologies and collaborating with experienced engineers on impactful solutions.",
    icon: "briefcase",
    current: false,
  },
];

const iconMap = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  users: Users,
};

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Timeline Navigation */}
        <div className="md:w-2/5 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#cca300]/20 via-[#cca300]/50 to-[#cca300]/20" />

          {/* Timeline Items */}
          <div className="space-y-6">
            {timelineData.map((item, index) => {
              const Icon = iconMap[item.icon];
              const isSelected = selectedIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative pl-20 cursor-pointer transition-all duration-300 ${
                    isSelected ? "opacity-100" : "opacity-50 hover:opacity-75"
                  }`}
                >
                  {/* Icon Node */}
                  <div className="absolute left-0 top-0">
                    <motion.div
                      animate={
                        isSelected ? { scale: [1, 1.1, 1] } : { scale: 1 }
                      }
                      transition={{
                        duration: 2,
                        repeat: isSelected ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      {/* Pulsing Glow Effect */}
                      {isSelected && (
                        <motion.div
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.6, 0.2, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 bg-[#cca300] rounded-full blur-lg"
                        />
                      )}
                      <div
                        className={`relative w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                          isSelected
                            ? "bg-black border-black shadow-lg shadow-black/30"
                            : "bg-white/80 border-gray-300"
                        }`}
                      >
                        <Icon
                          className={`w-7 h-7 transition-colors ${
                            isSelected ? "text-[#cca300]" : "text-gray-500"
                          }`}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Compact Info */}
                  <div className="py-2">
                    {item.current && (
                      <span
                        className={`inline-block px-2 py-0.5 text-xs font-bold rounded-full mb-2 transition-colors ${
                          isSelected
                            ? "bg-black text-[#cca300]"
                            : "bg-black/50 text-gray-300"
                        }`}
                      >
                        CURRENT
                      </span>
                    )}
                    <h4
                      className={`font-bold text-base mb-1 transition-colors ${
                        isSelected ? "text-black" : "text-gray-700"
                      }`}
                    >
                      {item.role}
                    </h4>
                    <p
                      className={`text-sm font-medium transition-colors ${
                        isSelected ? "text-black/80" : "text-gray-600"
                      }`}
                    >
                      {item.company}
                    </p>
                    <p
                      className={`text-xs mt-1 transition-colors ${
                        isSelected ? "text-gray-700" : "text-gray-500"
                      }`}
                    >
                      {item.period}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Detailed Content */}
        <div className="md:w-3/5 md:pt-0 pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-black/90 backdrop-blur-sm border-2 border-black rounded-xl p-8 transition-all duration-300 shadow-xl h-full"
            >
              <div className="space-y-4">
                {timelineData[selectedIndex].current && (
                  <span className="inline-block px-3 py-1 bg-[#cca300] text-black text-xs font-bold rounded-full">
                    CURRENT POSITION
                  </span>
                )}
                <div>
                  <h3 className="text-3xl font-bold text-[#cca300] mb-2">
                    {timelineData[selectedIndex].role}
                  </h3>
                  <p className="text-white font-semibold text-xl mb-3">
                    {timelineData[selectedIndex].company}
                  </p>
                  <div className="text-gray-300 text-sm mb-4">
                    <p>{timelineData[selectedIndex].period}</p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-[#cca300]/50 to-transparent" />
                <p className="text-gray-200 leading-relaxed text-base">
                  {timelineData[selectedIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
