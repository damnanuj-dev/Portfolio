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
  category: string;
  icon: React.ElementType;
  color: string;
  bgGrad: string;
}

const techStack: TechAvatar[] = [
  { id: "react", name: "React", role: "Component Architecture", category: "FRAMEWORK", icon: SiReact, color: "#61DAFB", bgGrad: "from-[#61DAFB]/20 to-transparent" },
  { id: "nextjs", name: "Next.js", role: "Full-Stack Framework", category: "FRAMEWORK", icon: SiNextdotjs, color: "#FFFFFF", bgGrad: "from-white/20 to-transparent" },
  { id: "typescript", name: "TypeScript", role: "Type-Safe Systems", category: "LANGUAGE", icon: SiTypescript, color: "#3178C6", bgGrad: "from-[#3178C6]/20 to-transparent" },
  { id: "flutter", name: "Flutter", role: "Cross-Platform Mobile", category: "MOBILE", icon: SiFlutter, color: "#02569B", bgGrad: "from-[#02569B]/20 to-transparent" },
  { id: "threejs", name: "Three.js", role: "WebGL & Spatial 3D", category: "3D / GRAPHICS", icon: SiThreedotjs, color: "#C7FF41", bgGrad: "from-[#C7FF41]/20 to-transparent" },
  { id: "python", name: "Python", role: "Data & ML Pipelines", category: "LANGUAGE", icon: SiPython, color: "#FFD43B", bgGrad: "from-[#FFD43B]/20 to-transparent" },
  { id: "tailwind", name: "Tailwind CSS", role: "Design Token Systems", category: "FRAMEWORK", icon: SiTailwindcss, color: "#38BDF8", bgGrad: "from-[#38BDF8]/20 to-transparent" },
  { id: "javascript", name: "JavaScript", role: "Dynamic Web Engines", category: "LANGUAGE", icon: SiJavascript, color: "#F7DF1E", bgGrad: "from-[#F7DF1E]/20 to-transparent" },
];

export function MaskedAvatars() {
  const [activeId, setActiveId] = useState<string>(techStack[0].id);
  const activeTech = techStack.find((tech) => tech.id === activeId) ?? techStack[0];

  return (
    <div className="w-full py-6 sm:py-10 flex flex-col items-center">
      <div className="text-center mb-8 sm:mb-10">
        <span className="text-[10px] sm:text-xs font-mono-tech tracking-[0.25em] text-[#8B8B86] uppercase block mb-2">
          TOOLS I BUILD WITH • TECH STACK
        </span>
        <p className="text-lg sm:text-xl font-sans text-[#F3F1EA] font-medium">
          <span style={{ color: activeTech.color }}>{activeTech.name}</span>{" "}
          <span className="text-[#8B8B86] text-sm font-normal">— {activeTech.role}</span>
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            const isActive = activeId === tech.id;

            return (
              <motion.button
                key={tech.id}
                type="button"
                onClick={() => setActiveId(tech.id)}
                onFocus={() => setActiveId(tech.id)}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative rounded-2xl border p-3 sm:p-4 text-left transition-all focus:outline-none ${
                  isActive
                    ? "border-white/25 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                    : "border-white/10 bg-[#101010]/70 hover:border-white/20"
                }`}
                style={{
                  boxShadow: isActive ? `0 0 25px -10px ${tech.color}80` : undefined,
                }}
                aria-label={`${tech.name} - ${tech.role}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${tech.bgGrad} opacity-60`} />
                <div className="relative z-10 flex items-center justify-between gap-2 mb-3">
                  <div
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-white/10 bg-[#121212]"
                    style={{ boxShadow: `0 0 18px -8px ${tech.color}` }}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: tech.color }} />
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/20 px-2 py-0.5 text-[9px] sm:text-[10px] font-mono-tech text-[#8B8B86]">
                    {tech.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-sans font-medium text-[#F3F1EA]">{tech.name}</h3>
                  <p className="mt-1 text-[10px] sm:text-xs font-sans text-[#8B8B86] leading-relaxed">
                    {tech.role}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
