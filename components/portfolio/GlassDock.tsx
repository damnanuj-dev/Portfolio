"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, User, Cpu, Mail } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "hero", label: "HOME", icon: Home },
  { id: "work", label: "WORK", icon: Briefcase },
  { id: "about", label: "ABOUT", icon: User },
  { id: "skills", label: "SKILLS", icon: Cpu },
  { id: "contact", label: "CONTACT", icon: Mail },
];

export function GlassDock() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Main Navigation"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-3 py-2"
    >
      <div className="glass-dock rounded-full px-2 md:px-4 py-1.5 md:py-2 flex items-center gap-1 md:gap-2 shadow-2xl border border-white/10">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-mono-tech transition-colors duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              {isActive && (
                <motion.div
                  layoutId="dock-indicator"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/20 shadow-inner"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}

              <Icon
                className={`w-3.5 h-3.5 relative z-10 transition-colors ${
                  isActive ? "text-[#315CFF]" : "text-[#8B8B86]"
                }`}
              />

              <span
                className={`relative z-10 text-[11px] md:text-xs tracking-wider transition-colors ${
                  isActive ? "text-[#F3F1EA] font-medium" : "text-[#8B8B86] hover:text-[#F3F1EA]"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
