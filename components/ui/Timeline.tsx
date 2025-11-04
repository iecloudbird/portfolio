"use client";

import { useState } from "react";

interface TimelineItem {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    company: "BSc Software Design with AI for Cloud Computing",
    role: "Current Education",
    period: "2023 - Present",
    startDate: "2023",
    endDate: "Present",
    description:
      "Currently pursuing degree with focus on modern software development, artificial intelligence, and cloud computing technologies.",
    icon: "🎓",
  },
  {
    company: "Software Development Internship",
    role: "Company Name",
    period: "2023",
    startDate: "2023",
    endDate: "2023",
    description:
      "Gained hands-on experience with React, Next.js, and modern web development practices. Worked on real-world projects and collaborated with development teams.",
    icon: "💼",
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

      {/* Timeline Items */}
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative pl-16 cursor-pointer transition-all ${
              activeIndex === index
                ? "opacity-100"
                : "opacity-60 hover:opacity-80"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-4 w-5 h-5 rounded-full border-4 transition-all ${
                activeIndex === index
                  ? "bg-[#cca300] border-[#cca300] scale-125"
                  : "bg-white border-gray-300"
              }`}
            ></div>

            {/* Content Card */}
            <div
              className={`p-4 rounded-lg border-2 transition-all ${
                activeIndex === index
                  ? "bg-[#cca300]/5 border-[#cca300]"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900">
                    {item.company}
                  </h4>
                  <p className="text-sm font-semibold text-[#cca300]">
                    {item.role}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{item.period}</p>
                  {activeIndex === index && (
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Period Labels */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex justify-between text-xs text-gray-500">
          <span>2023</span>
          <span>Present</span>
        </div>
      </div>
    </div>
  );
}
