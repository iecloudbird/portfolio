"use client";

import { useState } from "react";
import Section from "../ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  status?: "completed" | "in-progress";
  icon?: string;
  thumbnailBg?: string;
}

interface ProjectThumbnailProps {
  project: Project;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

function ProjectThumbnail({
  project,
  index,
  isSelected,
  onClick,
}: ProjectThumbnailProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const iconMap = ["📱", "🌐", "✈️", "📊"];
  const bgGradients = [
    "from-blue-50 to-blue-100",
    "from-purple-50 to-purple-100",
    "from-green-50 to-green-100",
    "from-orange-50 to-orange-100",
  ];

  return (
    <div
      className="relative h-32 sm:h-40 md:h-48 cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={onClick}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front Face - Image */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className={`relative w-full h-full border-2 ${
              isSelected ? "border-[#cca300]" : "border-gray-200"
            } transition-all duration-300 flex items-center justify-center bg-gradient-to-br ${
              project.thumbnailBg || bgGradients[index]
            }`}
          >
            {project.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`${basePath}/images/projects/${project.imageUrl}`}
                alt={project.title}
                className={`w-full h-full ${
                  index === 2 ? "object-contain" : "object-cover"
                } transition-all duration-300 ${
                  isSelected ? "grayscale-0" : "grayscale"
                }`}
              />
            ) : (
              <div
                className={`text-7xl transition-all duration-300 ${
                  isSelected ? "grayscale-0" : "grayscale opacity-60"
                }`}
              >
                {project.icon || iconMap[index]}
              </div>
            )}

            {/* Overlay gradient for non-selected items */}
            {!isSelected && (
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300" />
            )}
          </div>

          {/* Selection Indicator on Front */}
          {isSelected && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#cca300] rounded-full z-10" />
          )}
        </div>

        {/* Back Face - Details */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div
            className={`w-full h-full bg-gray-900/90 backdrop-blur-sm border-2 rounded-xl ${
              isSelected
                ? "border-[#cca300] shadow-lg shadow-[#cca300]/30"
                : "border-gray-700"
            } p-4 flex flex-col justify-between transition-all duration-300`}
          >
            {/* Active Background */}
            {isSelected && (
              <motion.div
                layoutId="activeProject"
                className="absolute inset-0 bg-[#cca300]/5 rounded-xl"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            <div className="relative z-10 flex flex-col justify-center items-center text-center h-full space-y-2 sm:space-y-3 px-1 sm:px-2">
              <h4 className="font-bold text-sm sm:text-base md:text-xl leading-tight text-white">
                {project.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#cca300] font-medium">
                {project.subtitle}
              </p>
              <div className="flex items-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
                <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Click to view</span>
                <span className="sm:hidden">View</span>
              </div>
            </div>

            {/* Selection Indicator on Back */}
            {isSelected && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#cca300] rounded-full" />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Hackathlone Mobile App",
      subtitle: "Hackathon event management mobile app",
      description:
        "Flutter-based mobile app for managing HackAthlone events, participant engagement, and meal tracking.",
      fullDescription:
        "A Flutter mobile application designed for the HackAthlone event (NASA Space Apps Challenge) in Athlone, Ireland. It enables seamless participant coordination with features like email-based authentication, profile management (including skills and dietary preferences), QR code scanning for meal validation, interactive event timelines with Google Maps integration for navigation, smart push notifications via Firebase, and an offline-first architecture using Hive for local storage and data synchronization. Admin tools include real-time analytics, user management, and bulk notifications, ensuring smooth event operations even in low-connectivity scenarios.",
      technologies: [
        "Flutter",
        "Dart",
        "Supabase",
        "Firebase",
        "Hive",
        "Android",
        "iOS",
      ],
      githubUrl: "https://github.com/iecloudbird/hackathlone-app",
      status: "completed",
      icon: "📱",
      thumbnailBg: "from-blue-50 to-blue-100",
      imageUrl: "hackathlonew_25.png",
      videoUrl: "feature_stacked.mp4",
    },
    {
      title: "Hackathlone Website",
      subtitle: "Monorepo for event websites and registration portal",
      description:
        "Dynamic and static websites for NASA Space Apps Challenge - HackAthlone, with registration and community features.",
      fullDescription:
        "A Next.js monorepo powered by Turborepo and pnpm, managing the HackAthlone event websites. The current site (hackathlone.com) is a dynamic application with server-side rendering for real-time features like event registration, schedule management, sponsor showcases, and participant dashboards. Archived versions (e.g., 2024.hackathlone.com) are served as static sites for optimal performance. Shared packages handle reusable components, utilities, and styles, enabling efficient versioning and deployment via Vercel with remote caching for faster builds.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
      ],
      githubUrl: "https://github.com/iecloudbird/hackathlone",
      liveUrl: "https://www.hackathlone.com/",
      status: "completed",
      icon: "🌐",
      thumbnailBg: "from-purple-50 to-purple-100",
      imageUrl: "hackathlone_25.png",
      videoUrl: "hackathlone_24.mp4",
    },
    {
      title: "Way-to-India",
      subtitle: "Full-stack tourism management system",
      description:
        "Interactive platform for exploring Indian destinations, managing bookings, and user reviews.",
      fullDescription:
        "A comprehensive full-stack tourism management website focused on Indian travel experiences. Users can browse immersive destination galleries, explore tour packages, handle secure bookings, and share reviews. The backend supports data persistence and transaction handling, while the frontend delivers a responsive, engaging interface to inspire and facilitate trip planning across India's diverse landscapes and cultures. Built as a 3-week MVP for proof of concept, demonstrating rapid full-stack development capabilities.",
      technologies: ["React", "Next.js", "Express", "MySQL", "JavaScript"],
      githubUrl: "https://github.com/iecloudbird/way-to-india",
      liveUrl: "https://waytoindia.vercel.app/",
      status: "completed",
      icon: "✈️",
      thumbnailBg: "from-orange-50 to-orange-100",
      imageUrl: "wti.png",
      videoUrl: "wti.mp4",
    },
    {
      title: "Emetix",
      subtitle: "Python toolkit for AI-driven stock risk assessment",
      description:
        "Modular toolkit for financial data pipelines, ML model training, and stock analysis.",
      fullDescription:
        "Emetix is an advanced Python-based AI agent for stock market risk assessment and investment insights. It features automated data fetching from Alpha Vantage API, preprocessing pipelines for historical market data, and dual ML pipelines: an LSTM-based Discounted Cash Flow (DCF) model for time-series forecasting and a Random Forest ensemble for feature-based risk prediction. Includes comprehensive testing with pytest, model evaluation scripts, and integration with GROQ API for enhanced AI-driven analysis. Generates detailed risk reports and recommendations to empower informed trading decisions.",
      technologies: [
        "Python",
        "scikit-learn",
        "TensorFlow",
        "Keras",
        "LangChain",
      ],
      githubUrl: "https://github.com/iecloudbird/emetix",
      status: "in-progress",
      icon: "📊",
      thumbnailBg: "from-blue-50 to-blue-100",
      imageUrl: "emetix.jpg",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = projects[selectedIndex];

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Cosmic Background */}
      <ShootingStars
        minSpeed={10}
        maxSpeed={30}
        starColor="#cca300"
        trailColor="#ffd700"
      />
      <StarsBackground
        starDensity={0.0002}
        allStarsTwinkle={true}
        twinkleProbability={0.8}
        minTwinkleSpeed={0.3}
        maxTwinkleSpeed={1}
      />

      <Section id="projects" className="py-12 sm:py-20 relative z-10">
        <div className="w-full px-2 sm:px-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-300 via-white to-white">
              PROJECTS
            </span>
          </h2>

          {/* Featured Project Panel */}
          <div className="relative min-h-[700px] sm:min-h-[600px] md:min-h-[450px]">
            {/* Previous Button */}
            <button
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === 0 ? projects.length - 1 : prev - 1
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-[#cca300] border-2 border-gray-700 hover:border-[#cca300] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-black transition-colors" />
            </button>

            {/* Next Button */}
            <button
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === projects.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-[#cca300] border-2 border-gray-700 hover:border-[#cca300] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-black transition-colors" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl hover:border-[#cca300]/50 hover:shadow-[#cca300]/20 transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
                  {/* Left: Project Preview */}
                  <div className="space-y-4">
                    <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border-2 border-gray-700">
                      {selectedProject.videoUrl ? (
                        <video
                          src={`${basePath}/${selectedProject.videoUrl}`}
                          autoPlay
                          loop
                          muted
                          className="w-full h-full object-contain"
                        />
                      ) : selectedProject.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`${basePath}/images/projects/${selectedProject.imageUrl}`}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center space-y-2">
                            <div className="text-6xl">💻</div>
                            <p className="text-gray-500 font-medium">
                              Project Preview
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Status Badge */}
                      {selectedProject.status === "in-progress" && (
                        <div className="absolute top-4 right-4 bg-[#cca300] text-black px-3 py-1 rounded-full text-sm font-medium">
                          In Progress
                        </div>
                      )}
                    </div>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium border border-gray-700 hover:border-[#cca300] hover:bg-[#cca300]/10 hover:text-[#cca300] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Project Details */}
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-white">
                        {selectedProject.title}
                      </h3>
                      <p className="text-[#cca300] font-medium text-base sm:text-lg">
                        {selectedProject.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {selectedProject.fullDescription}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#cca300] text-black rounded-xl font-medium hover:bg-[#ffd700] transition-colors duration-300 shadow-md"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        View Code
                      </a>
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-800 text-white border-2 border-gray-700 rounded-xl font-medium hover:border-[#cca300] hover:bg-gray-700 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 mb-12 sm:mb-20">
            {projects.map((project, index) => (
              <ProjectThumbnail
                key={index}
                project={project}
                index={index}
                isSelected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
