"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/data/portfolio";
import { Code, Smartphone, Database, Wrench, Sparkles } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  development: Code,
  mobile: Smartphone,
  backend: Database,
  tools: Wrench,
  learning: Sparkles,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((cat) => cat.category === activeCategory);

  return (
    <section id="skills" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-mono-tech tracking-[0.25em] text-[#315CFF] uppercase block mb-2">
            04 // CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-display text-[#F3F1EA] tracking-tight font-normal">
            Technical Skills
          </h2>
        </div>
        <p className="text-sm font-sans text-[#8B8B86] max-w-sm leading-relaxed">
          Curated tooling and programming languages I use daily to build robust, scalable, and responsive digital experiences.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-1.5 rounded-full text-xs font-mono-tech transition-all cursor-pointer ${
            activeCategory === "all"
              ? "bg-white text-black font-semibold"
              : "glass-panel text-[#8B8B86] hover:text-white border border-white/10"
          }`}
        >
          ALL CATEGORIES
        </button>
        {skillsData.map((cat) => {
          const Icon = categoryIcons[cat.category] || Code;
          const isActive = activeCategory === cat.category;

          return (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono-tech transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-black font-semibold"
                  : "glass-panel text-[#8B8B86] hover:text-white border border-white/10"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grouped Cards */}
      <div className="space-y-12">
        {filteredCategories.map((group) => {
          const Icon = categoryIcons[group.category] || Code;

          return (
            <div key={group.title} className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#8B8B86] uppercase tracking-widest">
                <Icon className="w-4 h-4 text-[#315CFF]" />
                <span>{group.title}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-sans font-medium text-[#F3F1EA] group-hover:text-white">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded-full bg-white/[0.04] text-[#8B8B86] border border-white/5 uppercase">
                          {skill.tag}
                        </span>
                      </div>
                      <p className="text-xs font-sans text-[#8B8B86] leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tech">
                      <span className="text-white/40">PROFICIENCY</span>
                      <span className="text-[#315CFF]">{skill.level}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
