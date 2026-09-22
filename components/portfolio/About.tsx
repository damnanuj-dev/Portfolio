"use client";

import React from "react";
import { MaskedAvatars } from "./MaskedAvatars";
import { profile } from "@/data/portfolio";
import { Film, MapPin, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-mono-tech tracking-[0.25em] text-[#315CFF] uppercase block mb-2">
            03 // IDENTITY
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-display text-[#F3F1EA] tracking-tight font-normal">
            About Me
          </h2>
        </div>
        <p className="text-sm font-sans text-[#8B8B86] max-w-sm leading-relaxed">
          {profile.education} • Passionate about building functional tools, fluid micro-interactions, and creative web software.
        </p>
      </div>

      {/* Main Grid: Story + Personal Fact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Narrative Text */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-base sm:text-lg font-sans text-[#8B8B86] leading-relaxed">
          <p className="text-xl sm:text-2xl font-serif-display text-[#F3F1EA] leading-snug">
            &ldquo;I&apos;m a Computer Science student from India interested in web development, application development, and creative technology.&rdquo;
          </p>
          <p>
            I like turning ideas into digital products people actually enjoy using. Rather than just building static pages or basic clones, I focus on the tactile layer of computing — how an interface reacts to touch, how state transitions feel, and how code architecture stays maintainable as applications grow.
          </p>
          <p>
            My work spans cross-platform mobile apps with Flutter and Dart, responsive web experiences with React, Next.js, and TypeScript, and playful graphics experiments using Three.js and custom canvas shaders.
          </p>
          <p>
            When I&apos;m not writing code or debugging build pipelines, you will usually find me watching movies, analyzing cinematography, or exploring the latest open-source libraries.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono-tech text-[#8B8B86]">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-[#315CFF]" />
              <span>INDIA (GMT+5:30)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-white/10">
              <GraduationCap className="w-3.5 h-3.5 text-[#C7FF41]" />
              <span>COMPUTER SCIENCE STUDENT</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-white/10">
              <Film className="w-3.5 h-3.5 text-[#FF642E]" />
              <span>CINEMA ENTHUSIAST</span>
            </div>
          </div>
        </div>

        {/* Fact Sheet Card */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[11px] font-mono-tech tracking-widest text-[#8B8B86] uppercase block mb-4">
              CURRENT FOCUS & EXPLORATIONS
            </span>

            <div className="space-y-4">
              <div className="border-b border-white/5 pb-3">
                <span className="text-xs font-mono-tech text-[#315CFF] block">01 / PRIMARY STACK</span>
                <p className="text-sm font-sans text-[#F3F1EA] font-medium mt-1">
                  React, Next.js, TypeScript & Flutter
                </p>
              </div>

              <div className="border-b border-white/5 pb-3">
                <span className="text-xs font-mono-tech text-[#C7FF41] block">02 / ACTIVE LEARNING</span>
                <p className="text-sm font-sans text-[#F3F1EA] font-medium mt-1">
                  AI/ML Foundations, Python Data Workflows & Neural Nets
                </p>
              </div>

              <div className="border-b border-white/5 pb-3">
                <span className="text-xs font-mono-tech text-[#9C8CFF] block">03 / CREATIVE DIRECTION</span>
                <p className="text-sm font-sans text-[#F3F1EA] font-medium mt-1">
                  Kinetic typography, micro-interactions & WebGL shaders
                </p>
              </div>

              <div>
                <span className="text-xs font-mono-tech text-[#FF642E] block">04 / AVAILABILITY</span>
                <p className="text-sm font-sans text-[#F3F1EA] font-medium mt-1">
                  Open for freelance projects, internships & creative collaborations
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-[#8B8B86]">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#C7FF41] opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[#C7FF41]" />
              </span>
              STATUS: AVAILABLE
            </span>
            <span className="text-[#C7FF41]">READY TO BUILD</span>
          </div>
        </div>
      </div>

      {/* MaskedAvatars Tech Stack Component */}
      <div className="glass-panel rounded-3xl border border-white/10 p-6 md:p-10">
        <MaskedAvatars />
      </div>
    </section>
  );
}
