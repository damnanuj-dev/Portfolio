"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const statement = "I build digital products where design and engineering meet.";
  const words = statement.split(" ");

  return (
    <section
      ref={containerRef}
      className="w-full py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto relative select-none"
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] font-mono-tech tracking-[0.25em] text-[#315CFF] uppercase">
          01 // PHILOSOPHY
        </span>
        <div className="h-[1px] w-12 bg-[#315CFF]/30" />
      </div>

      <div className="max-w-5xl">
        <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] text-[#F3F1EA] tracking-tight font-normal">
          {words.map((word, index) => {
            const isHighlighted =
              word.toLowerCase().includes("design") ||
              word.toLowerCase().includes("engineering");

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block mr-3 md:mr-5 ${
                  isHighlighted
                    ? "italic font-normal underline decoration-1 underline-offset-8 decoration-[#315CFF]/60"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 max-w-2xl text-base sm:text-lg font-sans text-[#8B8B86] leading-relaxed"
        >
          Technology should feel tactile, fast, and respectful of the user&apos;s attention. Every interface is constructed with strict typographic hierarchy, deliberate motion choreography, and clean modular code.
        </motion.p>
      </div>
    </section>
  );
}
