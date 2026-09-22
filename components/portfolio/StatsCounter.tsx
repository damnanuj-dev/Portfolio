"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/portfolio";

function CounterItem({
  value,
  suffix,
  label,
  subtext,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  subtext: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const raf = requestAnimationFrame(() => setDisplayVal(value));
      return () => cancelAnimationFrame(raf);
    }

    const start = 0;
    const end = value;
    const duration = 1500;
    const startTime = performance.now();

    let animationFrameId: number;
    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quartic
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * ease);
      setDisplayVal(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayVal(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative p-5 sm:p-6 md:p-8 glass-panel rounded-2xl flex flex-col justify-between border border-white/10 group hover:border-white/20 transition-all"
    >
      <div className="flex items-baseline justify-between mb-4">
        <span className="text-[11px] font-mono-tech tracking-widest text-[#8B8B86]">
          {`0${index + 1} //`}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF] opacity-70 group-hover:scale-125 transition-transform" />
      </div>

      <div className="my-3">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-display text-[#F3F1EA] tracking-tight">
          {displayVal}
          <span className="text-[#315CFF] font-sans text-xl sm:text-2xl md:text-3xl ml-1">
            {suffix}
          </span>
        </div>
        <p className="font-mono-tech text-xs tracking-wider uppercase text-[#F3F1EA] mt-2 font-medium">
          {label}
        </p>
      </div>

      <p className="text-xs text-[#8B8B86] font-sans leading-relaxed mt-2 border-t border-white/5 pt-3">
        {subtext}
      </p>
    </motion.div>
  );
}

export function StatsCounter() {
  return (
    <section className="w-full py-16 border-y border-white/10 relative bg-[#0A0A0A]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-mono-tech tracking-[0.2em] text-[#8B8B86] uppercase">
            METRICS & DEVELOPMENT FACTS
          </span>
          <span className="text-xs font-mono-tech text-[#8B8B86]">
            HONEST OVERVIEW
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <CounterItem
              key={stat.label}
              index={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              subtext={stat.subtext}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
