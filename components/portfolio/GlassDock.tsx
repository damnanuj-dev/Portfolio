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
      className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-40 px-2 py-2 w-[calc(100vw-1rem)] max-w-[calc(100vw-1.5rem)] sm:w-auto"
    >
      <div className="glass-dock rounded-full px-1.5 sm:px-2 md:px-4 py-1.5 md:py-2 flex items-center justify-between gap-1 md:gap-2 shadow-2xl border border-white/10 w-full max-w-[280px] sm:max-w-none mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex items-center justify-center rounded-full text-xs font-mono-tech transition-[padding,color] duration-200 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-white cursor-pointer active:scale-[0.97] ${
                isActive ? "px-3 py-2 sm:px-4" : "size-10 sm:size-auto sm:px-3 sm:py-2"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="dock-indicator"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/20 shadow-inner"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}

              <div className="relative z-10 flex items-center gap-1.5 sm:gap-1.5">
                <Icon
                  className={`w-3.5 h-3.5 transition-colors ${
                    isActive ? "text-[#315CFF]" : "text-[#8B8B86]"
                  }`}
                />

                <span
                  className={`${isActive ? "inline" : "hidden"} sm:inline text-[11px] md:text-xs tracking-wider ${
                    isActive ? "text-[#F3F1EA] font-medium" : "text-[#8B8B86] hover:text-[#F3F1EA]"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
