"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
  SiPython,
  SiJavascript,
  SiTailwindcss,
  SiThreedotjs,
} from "react-icons/si";

interface TechAvatar {
  id: string;
  name: string;
  role: string;
  icon: React.ElementType;
  color: string;
  bgGrad: string;
}

const techStack: TechAvatar[] = [
  {
    id: "react",
    name: "React",
    role: "Component Architecture",
    icon: SiReact,
    color: "#61DAFB",
    bgGrad: "from-[#61DAFB]/20 to-transparent",
  },
  {
    id: "nextjs",
    name: "Next.js",
    role: "Full-Stack Framework",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    bgGrad: "from-white/20 to-transparent",
  },
  {
    id: "typescript",
    name: "TypeScript",
    role: "Type-Safe Systems",
    icon: SiTypescript,
    color: "#3178C6",
    bgGrad: "from-[#3178C6]/20 to-transparent",
  },
  {
    id: "flutter",
    name: "Flutter",
    role: "Cross-Platform Mobile",
    icon: SiFlutter,
    color: "#02569B",
    bgGrad: "from-[#02569B]/20 to-transparent",
  },
  {
    id: "threejs",
    name: "Three.js",
    role: "WebGL & Spatial 3D",
    icon: SiThreedotjs,
    color: "#C7FF41",
    bgGrad: "from-[#C7FF41]/20 to-transparent",
  },
  {
    id: "python",
    name: "Python",
    role: "Data & ML Pipelines",
    icon: SiPython,
    color: "#FFD43B",
    bgGrad: "from-[#FFD43B]/20 to-transparent",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    role: "Design Token Systems",
    icon: SiTailwindcss,
    color: "#38BDF8",
    bgGrad: "from-[#38BDF8]/20 to-transparent",
  },
  {
    id: "javascript",
    name: "JavaScript",
    role: "Dynamic Web Engines",
    icon: SiJavascript,
    color: "#F7DF1E",
    bgGrad: "from-[#F7DF1E]/20 to-transparent",
  },
];

export function MaskedAvatars() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const activeTech = techStack.find((t) => t.id === hoveredId) || techStack[0];

  return (
    <div className="w-full py-12 flex flex-col items-center">
      {/* Label & Active Description */}
      <div className="text-center mb-8">
        <span className="text-xs font-mono-tech tracking-[0.25em] text-[#8B8B86] uppercase block mb-2">
          TOOLS I BUILD WITH • TECH STACK
        </span>
        <p className="text-lg md:text-xl font-sans text-[#F3F1EA] font-medium">
          {activeTech ? (
            <span>
              <span style={{ color: activeTech.color }}>{activeTech.name}</span>{" "}
              <span className="text-[#8B8B86] text-sm font-normal">
                — {activeTech.role}
              </span>
            </span>
          ) : (
            "Hover to explore stack"
          )}
        </p>
      </div>

      {/* Overlapping circular avatar stack with rotating text ring */}
      <div className="relative flex items-center justify-center p-4">
        <div className="flex items-center -space-x-3 md:-space-x-4 overflow-visible py-4">
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            const isHovered = hoveredId === tech.id;
            const isDimmed = hoveredId !== null && !isHovered;

            return (
              <motion.button
                key={tech.id}
                onMouseEnter={() => setHoveredId(tech.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(tech.id)}
                onBlur={() => setHoveredId(null)}
                animate={{
                  y: isHovered ? -16 : 0,
                  scale: isHovered ? 1.25 : isDimmed ? 0.92 : 1,
                  filter: isDimmed ? "blur(2px) grayscale(50%)" : "blur(0px) grayscale(0%)",
                  opacity: isDimmed ? 0.45 : 1,
                  zIndex: isHovered ? 30 : idx + 1,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative group rounded-full p-1 focus:outline-none"
                aria-label={`${tech.name} - ${tech.role}`}
              >
                {/* Outer Glass Ring */}
                <div
                  className="w-14 h-14 md:w-18 md:h-18 rounded-full flex items-center justify-center relative overflow-hidden bg-[#121212] border border-white/15 shadow-xl transition-colors"
                  style={{
                    boxShadow: isHovered
                      ? `0 12px 30px -4px ${tech.color}40, 0 0 0 2px ${tech.color}`
                      : "0 8px 16px -4px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Subtle inner gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${tech.bgGrad} opacity-30 group-hover:opacity-70 transition-opacity`}
                  />

                  {/* Icon */}
                  <Icon
                    className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-transform group-hover:scale-110"
                    style={{ color: tech.color }}
                  />
                </div>

                {/* Micro tooltip pill on hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.85 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0A0A0A] border border-white/20 px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech text-white shadow-lg pointer-events-none"
                  >
                    {tech.name}
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
