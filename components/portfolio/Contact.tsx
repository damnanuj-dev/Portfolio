"use client";

import React, { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { SocialFlipButton } from "./SocialFlipButton";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Header / Intro */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-mono-tech tracking-[0.25em] text-[#315CFF] uppercase block mb-2">
            06 // INITIATE CONTACT
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-display text-[#F3F1EA] tracking-tight font-normal leading-[0.95]">
            Have an idea? <br />
            <span className="italic text-white/90">Let&apos;s build it.</span>
          </h2>
        </div>
        <p className="text-sm font-sans text-[#8B8B86] max-w-sm leading-relaxed">
          Have a project, idea, or digital product in mind? Feel free to reach out. I&apos;m always open to discussing new engineering challenges.
        </p>
      </div>

      {/* Main CTA Box */}
      <div className="glass-panel rounded-3xl p-8 md:p-14 border border-white/10 mb-12 relative overflow-hidden">
        {/* Subtle background gradient glow */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#315CFF]/15 blur-[100px] pointer-events-none rounded-full"
          aria-hidden="true"
        />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          <div>
            <span className="text-xs font-mono-tech text-[#8B8B86] uppercase tracking-widest block mb-2">
              DIRECT INBOX
            </span>
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif-display text-[#F3F1EA] break-all">
              {profile.email}
            </div>
            <p className="text-xs font-mono-tech text-[#8B8B86] mt-2">
              TYPICAL RESPONSE TIME: WITHIN 24 HOURS
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="px-6 py-3.5 rounded-full bg-[#F3F1EA] text-black font-sans font-medium text-sm hover:bg-white transition-all flex items-center gap-2 cursor-pointer shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>START A CONVERSATION</span>
            </a>

            <button
              onClick={copyEmail}
              className="px-5 py-3.5 rounded-full glass-panel border border-white/15 text-[#F3F1EA] font-sans text-xs hover:border-white/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#C7FF41]" />
                  <span className="text-[#C7FF41]">COPIED EMAIL</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>

            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full glass-panel border border-white/15 text-[#F3F1EA] font-sans text-xs hover:border-white/30 transition-all flex items-center gap-2"
            >
              <span>VIEW GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Prominent SocialFlipButton Component */}
      <div className="mt-8">
        <div className="text-center mb-6">
          <span className="text-xs font-mono-tech tracking-[0.2em] text-[#8B8B86] uppercase">
            3D INTERACTIVE SOCIAL DOCK
          </span>
        </div>
        <SocialFlipButton />
      </div>
    </section>
  );
}
