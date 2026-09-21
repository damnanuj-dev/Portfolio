"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MarqueeWord {
  text: string;
  accent: string;
  separator: string;
}

const words: MarqueeWord[] = [
  { text: "BUILD", accent: "#315CFF", separator: "•" },
  { text: "DESIGN", accent: "#FF642E", separator: "—" },
  { text: "CODE", accent: "#C7FF41", separator: "•" },
  { text: "CREATE", accent: "#9C8CFF", separator: "—" },
  { text: "EXPERIMENT", accent: "#F04444", separator: "•" },
  { text: "SHIP", accent: "#FFF6DF", separator: "—" },
];

export function MagneticSpotlightMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-8 md:py-12 overflow-hidden border-y border-white/10 bg-[#0A0A0A] select-none group"
    >
      {/* Magnetic Spotlight cursor glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-none z-0"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(49, 92, 255, 0.16), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Infinite Marquee Track */}
      <div className="flex w-fit overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex items-center gap-6 md:gap-10 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {/* Render twice for continuous loop */}
          {[...words, ...words, ...words, ...words].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 md:gap-10 shrink-0"
            >
              <span
                className="font-serif-display text-3xl md:text-5xl lg:text-6xl tracking-tight transition-colors duration-300 hover:scale-105"
                style={{ color: item.accent }}
              >
                {item.text}
              </span>
              <span className="font-mono-tech text-xs md:text-sm text-[#8B8B86] opacity-60">
                {item.separator}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
