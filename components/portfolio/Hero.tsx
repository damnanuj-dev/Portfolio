"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Search, Sparkles } from "lucide-react";
import { WaveGridBackground } from "./WaveGridBackground";
import { profile } from "@/data/portfolio";

function useIndiaTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

    setTime(format());
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export function Hero() {
  const localTime = useIndiaTime();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] w-full flex flex-col justify-between pt-8 pb-16 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-white/10"
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

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C7FF41]/25 bg-[#C7FF41]/10 px-2.5 py-1 text-[10px] tracking-widest text-[#C7FF41]">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#C7FF41] opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[#C7FF41]" />
            </span>
            AVAILABLE
          </span>
          <span className="hidden md:inline">{profile.location.toUpperCase()}</span>
          {localTime ? (
            <>
              <span className="hidden md:inline text-white/30">•</span>
              <span className="tabular-nums">{localTime} IST</span>
            </>
          ) : null}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
            className="inline-flex md:hidden items-center justify-center size-8 rounded-full border border-white/10 text-[#F3F1EA] cursor-pointer"
            aria-label="Open command palette"
          >
            <Search className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[10px] tracking-widest text-[#8B8B86] hover:border-white/25 hover:text-[#F3F1EA] transition-[border-color,color] duration-200 cursor-pointer"
            aria-label="Open command palette"
          >
            <Search className="size-3" />
            ⌘K
          </button>
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
          className="font-serif-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.88] text-[#F3F1EA] tracking-tight font-normal select-none text-balance"
        >
          <span className="block">CREATIVE</span>
          <span className="block italic text-white/90">DEVELOPER</span>
        </motion.h1>

        {/* Main Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg sm:text-xl md:text-2xl font-sans font-light text-[#8B8B86] leading-relaxed text-pretty"
        >
          &ldquo;{profile.heroSubstatement}&rdquo;
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <button
            onClick={() => scrollTo("work")}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#F3F1EA] text-[#0A0A0A] font-sans font-medium text-sm hover:bg-white transition-[background-color,transform] duration-200 ease-out hover:scale-[1.02] active:scale-[0.97] shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>VIEW WORK</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full glass-panel border border-white/15 text-[#F3F1EA] font-sans font-medium text-sm hover:border-white/30 transition-[border-color,transform] duration-200 ease-out hover:scale-[1.02] active:scale-[0.97] cursor-pointer"
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

        <div className="flex flex-col items-end gap-2">
          <p className="hidden md:flex items-center gap-2 text-[11px] tracking-wider text-[#8B8B86]">
            Press
            <kbd className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 text-[#F3F1EA]">⌘K</kbd>
            to navigate
          </p>
          <div className="flex items-center gap-2 text-[11px] tracking-wider">
            <span>SCROLL DOWN</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#315CFF]" />
          </div>
        </div>
      </div>
    </section>
  );
}
