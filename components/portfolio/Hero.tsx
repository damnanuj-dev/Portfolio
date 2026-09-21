"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { WaveGridBackground } from "./WaveGridBackground";
import { profile } from "@/data/portfolio";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] w-full flex flex-col justify-between pt-8 pb-16 px-6 md:px-12 overflow-hidden border-b border-white/10"
    >
      {/* 3D Wave Grid Background */}
      <WaveGridBackground />

      {/* Top Header / Metadata Bar */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-between pt-4 text-xs font-mono-tech text-[#8B8B86]">
        <div className="flex items-center gap-3">
          <span className="text-[#F3F1EA] font-semibold tracking-wider">
            {profile.mark}
          </span>
          <span className="hidden sm:inline text-white/30">/</span>
          <span className="hidden sm:inline tracking-widest">PORTFOLIO 2026</span>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <span>{profile.location.toUpperCase()}</span>
          <span className="text-white/30">•</span>
          <span>{profile.timezone}</span>
        </div>
      </div>

      {/* Center Typography & Hero Statement */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 flex flex-col items-start">
        {/* Supporting tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <span className="px-3 py-1 rounded-full text-xs font-mono-tech tracking-wider uppercase bg-white/5 border border-white/10 text-[#F3F1EA]/80 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#315CFF]" />
            CS STUDENT • INDIA
          </span>
          <span className="text-xs font-mono-tech text-[#8B8B86] tracking-widest uppercase">
            WEB / APP DEVELOPMENT
          </span>
        </motion.div>

        {/* Huge Display Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif-display text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.88] text-[#F3F1EA] tracking-tight font-normal select-none"
        >
          <span className="block">CREATIVE</span>
          <span className="block italic text-white/90">DEVELOPER</span>
        </motion.h1>

        {/* Main Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg sm:text-xl md:text-2xl font-sans font-light text-[#8B8B86] leading-relaxed"
        >
          &ldquo;{profile.heroSubstatement}&rdquo;
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("work")}
            className="px-6 py-3.5 rounded-full bg-[#F3F1EA] text-[#0A0A0A] font-sans font-medium text-sm hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <span>VIEW WORK</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3.5 rounded-full glass-panel border border-white/15 text-[#F3F1EA] font-sans font-medium text-sm hover:border-white/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            LET&apos;S TALK
          </button>
        </motion.div>
      </div>

      {/* Bottom Metadata & Scroll Cue */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-end justify-between text-xs font-mono-tech text-[#8B8B86] pt-8">
        <div>
          <span className="block text-[10px] text-white/40 uppercase tracking-widest">
            CORE FOCUS
          </span>
          <span className="text-[#F3F1EA]">ENGINEERING × DESIGN</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] tracking-wider animate-bounce">
          <span>SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#315CFF]" />
        </div>
      </div>
    </section>
  );
}
