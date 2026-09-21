"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "@/data/portfolio";

interface SocialItem {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: React.ElementType;
  accent: string;
  actionText: string;
}

export function SocialFlipButton() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const socials: SocialItem[] = [
    {
      id: "github",
      name: "GitHub",
      handle: "@anuj",
      url: profile.socials.github,
      icon: FaGithub,
      accent: "#F3F1EA",
      actionText: "EXPLORE REPOS",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      handle: "in/anuj",
      url: profile.socials.linkedin,
      icon: FaLinkedin,
      accent: "#315CFF",
      actionText: "LET'S CONNECT",
    },
    {
      id: "instagram",
      name: "Instagram",
      handle: "@anuj.dev",
      url: profile.socials.instagram,
      icon: FaInstagram,
      accent: "#FF642E",
      actionText: "FOLLOW VISUALS",
    },
    {
      id: "email",
      name: "Email",
      handle: profile.email,
      url: `mailto:${profile.email}`,
      icon: HiOutlineMail,
      accent: "#C7FF41",
      actionText: "SEND A MESSAGE",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {socials.map((item) => {
        const Icon = item.icon;
        const isHovered = hoveredId === item.id;

        return (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.name} - ${item.actionText}`}
            className="group relative block h-28 [perspective:1000px] select-none"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <motion.div
              className="relative w-full h-full rounded-2xl [transform-style:preserve-3d] transition-transform duration-500"
              animate={{ rotateY: isHovered ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              {/* FRONT FACE */}
              <div className="absolute inset-0 rounded-2xl glass-panel p-5 flex flex-col justify-between [backface-visibility:hidden] border border-white/10 group-hover:border-white/20 transition-colors">
                {/* Subtle accent border line glow */}
                <div
                  className="absolute top-0 left-4 right-4 h-[1px] opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                />

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech tracking-wider text-[#8B8B86] uppercase">
                    {item.name}
                  </span>
                  <Icon className="w-5 h-5 text-[#F3F1EA] transition-transform group-hover:scale-110" />
                </div>

                <div>
                  <span className="text-sm font-sans font-medium text-[#F3F1EA] truncate block">
                    {item.handle}
                  </span>
                  <span className="text-[10px] font-mono-tech text-[#8B8B86] block mt-0.5">
                    TAP TO FLIP ↗
                  </span>
                </div>
              </div>

              {/* BACK FACE */}
              <div
                className="absolute inset-0 rounded-2xl p-5 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] border shadow-lg"
                style={{
                  backgroundColor: "rgba(18, 18, 18, 0.95)",
                  borderColor: item.accent,
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-mono-tech tracking-widest uppercase font-semibold"
                    style={{ color: item.accent }}
                  >
                    EXTERNAL LINK
                  </span>
                  <span className="text-xs text-white">↗</span>
                </div>

                <div>
                  <p className="text-xs font-mono-tech font-bold tracking-wider text-white">
                    {item.actionText}
                  </p>
                  <p className="text-[10px] font-mono-tech text-[#8B8B86] truncate mt-1">
                    {item.url.replace("mailto:", "")}
                  </p>
                </div>
              </div>
            </motion.div>
          </a>
        );
      })}
    </div>
  );
}
