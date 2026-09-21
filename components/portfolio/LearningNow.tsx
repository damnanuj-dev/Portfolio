"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Smartphone, Compass } from "lucide-react";

export function LearningNow() {
  const currentActivities = [
    {
      label: "NOW LEARNING",
      title: "AI / Machine Learning",
      description: "Neural network fundamentals, model orchestration, and integrating intelligent agentic workflows into web interfaces.",
      accent: "#315CFF",
      icon: Brain,
    },
    {
      label: "CURRENTLY BUILDING",
      title: "Web & Mobile Products",
      description: "Tactile offline-first tools and link bookmark management suites with high-performance client state.",
      accent: "#FF642E",
      icon: Smartphone,
    },
    {
      label: "EXPLORING",
      title: "Interaction Design & WebGL",
      description: "Custom physics curves, spring dynamics, GLSL noise shaders, and spatial audio interfaces.",
      accent: "#C7FF41",
      icon: Compass,
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
        {/* Subtle accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#315CFF]/60 to-transparent" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4 border-b border-white/5 pb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#315CFF]" />
            <span className="text-xs font-mono-tech tracking-[0.2em] text-[#8B8B86] uppercase">
              STATUS // WHAT I&apos;M UP TO RIGHT NOW
            </span>
          </div>
          <span className="text-xs font-mono-tech text-[#8B8B86]">
            UPDATED 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentActivities.map((act, index) => {
            const Icon = act.icon;

            return (
              <motion.div
                key={act.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" style={{ color: act.accent }} />
                  <span
                    className="text-[11px] font-mono-tech tracking-wider uppercase font-semibold"
                    style={{ color: act.accent }}
                  >
                    {act.label}
                  </span>
                </div>

                <h3 className="text-2xl font-serif-display text-[#F3F1EA]">
                  {act.title}
                </h3>

                <p className="text-xs sm:text-sm font-sans text-[#8B8B86] leading-relaxed">
                  {act.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
