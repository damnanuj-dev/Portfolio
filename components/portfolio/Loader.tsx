"use client";

import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface LoaderProps {
  onComplete?: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? 400 : 1400;

    const counter = { val: 0 };

    const loaderEl = loaderRef.current;
    const markEl = markRef.current;
    const subtextEl = subtextRef.current;
    const progressLineEl = progressLineRef.current;

    const tl = anime.timeline({
      easing: "easeOutExpo",
      complete: () => {
        // Animate out loader overlay
        if (loaderEl) {
          anime({
            targets: loaderEl,
            opacity: [1, 0],
            translateY: [0, -20],
            duration: 500,
            easing: "easeInOutQuad",
            complete: () => {
              setIsFinished(true);
              onComplete?.();
            },
          });
        } else {
          setIsFinished(true);
          onComplete?.();
        }
      },
    });

    // Mark & Subtitle reveal
    tl.add({
      targets: [markEl, subtextEl],
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 500,
      delay: anime.stagger(100),
      easing: "easeOutCubic",
    })
      .add(
        {
          targets: counter,
          val: 100,
          round: 1,
          duration: duration,
          easing: "easeInOutQuad",
          update: () => {
            setPercent(Math.floor(counter.val));
          },
        },
        "-=300"
      )
      .add(
        {
          targets: progressLineEl,
          scaleX: [0, 1],
          duration: duration,
          easing: "easeInOutQuad",
        },
        "-=" + duration
      );

    return () => {
      anime.remove([loaderEl, markEl, subtextEl, progressLineEl, counter]);
    };
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <aside
      aria-label="Loading Screen"
      ref={loaderRef}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0A0A0A] p-8 md:p-14 text-[#F3F1EA] select-none pointer-events-auto"
    >
      <div className="flex justify-between items-center text-xs font-mono-tech tracking-widest text-[#8B8B86]">
        <span>EDITION 2026</span>
        <span>INDEX / PORTFOLIO</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 text-center my-auto">
        <h1
          ref={markRef}
          className="font-serif-display text-5xl md:text-8xl tracking-tight font-normal text-[#F3F1EA]"
        >
          ANUJ®
        </h1>
        <p
          ref={subtextRef}
          className="font-mono-tech text-xs tracking-[0.25em] uppercase text-[#8B8B86]"
        >
          LOADING EXPERIENCE
        </p>

        {/* Progress Bar Container */}
        <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mt-6 relative">
          <div
            ref={progressLineRef}
            className="h-full w-full bg-[#315CFF] origin-left scale-x-0"
          />
        </div>
      </div>

      <div className="flex justify-between items-end text-sm font-mono-tech text-[#8B8B86]">
        <div>
          <span className="text-[10px] tracking-wider block text-white/40">STATUS</span>
          <span className="text-xs text-[#C7FF41]">INITIALIZING ASSETS</span>
        </div>
        <div className="text-2xl md:text-3xl font-mono-tech text-[#F3F1EA] tabular-nums tracking-tighter">
          {percent.toString().padStart(2, "0")} <span className="text-sm text-[#8B8B86]">/ 100</span>
        </div>
      </div>
    </aside>
  );
}
