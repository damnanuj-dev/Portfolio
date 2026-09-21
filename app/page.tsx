"use client";

import React from "react";
import { Loader } from "@/components/portfolio/Loader";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Hero } from "@/components/portfolio/Hero";
import { Intro } from "@/components/portfolio/Intro";
import { StatsCounter } from "@/components/portfolio/StatsCounter";
import { FeaturedWork } from "@/components/portfolio/FeaturedWork";
import { StaggeredGrid } from "@/components/portfolio/StaggeredGrid";
import { MagneticSpotlightMarquee } from "@/components/portfolio/MagneticSpotlightMarquee";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { LearningNow } from "@/components/portfolio/LearningNow";
import { SkiperShowcase } from "@/components/portfolio/SkiperShowcase";
import { Process } from "@/components/portfolio/Process";
import { Contact } from "@/components/portfolio/Contact";
import { AnimatedFooter } from "@/components/ui/animated-footer";
import { GlassDock } from "@/components/portfolio/GlassDock";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#0A0A0A] text-[#F3F1EA] overflow-x-hidden selection:bg-[#315CFF] selection:text-white">
      {/* Anime.js Loader */}
      <Loader />

      {/* Custom Spring Cursor for Desktop */}
      <CustomCursor />

      {/* Hero with Three.js WaveGridBackground */}
      <Hero />

      {/* Editorial Intro Statement */}
      <Intro />

      {/* Statistics Counter */}
      <StatsCounter />

      {/* Featured Work (FocusLoop, LinkLoom) */}
      <FeaturedWork />

      {/* Staggered Experimental Project Universe */}
      <StaggeredGrid />

      {/* Magnetic Spotlight Marquee */}
      <MagneticSpotlightMarquee />

      {/* About Section with MaskedAvatars Tech Stack */}
      <About />

      {/* Technical Skills Directory */}
      <Skills />

      {/* Current Activities / Learning */}
      <LearningNow />

      {/* Skiper UI Component - Kinetic Tactile Physics Showcase */}
      <SkiperShowcase />

      {/* Execution Process (Think, Design, Build, Refine) */}
      <Process />

      {/* Contact Section with SocialFlipButton */}
      <Contact />

      {/* VengeanceUI Interactive ASCII Animated Footer */}
      <AnimatedFooter
        headingLines={["ANUJ"]}
        className="h-[480px] sm:h-[560px] md:h-[640px] w-full border-t border-white/10"
      />

      {/* Glass Dock Primary Navigation */}
      <GlassDock />
    </main>
  );
}
