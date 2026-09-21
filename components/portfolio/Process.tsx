"use client";

import React from "react";
import { motion } from "framer-motion";
import { processStages } from "@/data/portfolio";

export function Process() {
  return (
    <section className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-mono-tech tracking-[0.25em] text-[#315CFF] uppercase block mb-2">
            05 // WORKFLOW
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-display text-[#F3F1EA] tracking-tight font-normal">
            Execution Process
          </h2>
        </div>
        <p className="text-sm font-sans text-[#8B8B86] max-w-sm leading-relaxed">
          How I approach problem solving from initial abstract idea to polished, high-performance production releases.
        </p>
      </div>

      {/* Process Stages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {processStages.map((stage, idx) => (
          <motion.div
            key={stage.step}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            className="p-6 md:p-8 rounded-3xl glass-panel border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Accent bar on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity"
              style={{
                background: `linear-gradient(90deg, transparent, ${stage.accent}, transparent)`,
              }}
            />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif-display text-4xl text-[#8B8B86] group-hover:text-[#F3F1EA] transition-colors">
                  {stage.step}
                </span>
                <span
                  className="text-[10px] font-mono-tech uppercase tracking-widest px-2.5 py-1 rounded-full border"
                  style={{ borderColor: `${stage.accent}40`, color: stage.accent }}
                >
                  {stage.phase}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-serif-display text-[#F3F1EA] mb-3">
                {stage.title}
              </h3>

              <p className="text-xs sm:text-sm font-sans text-[#8B8B86] leading-relaxed">
                {stage.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tech text-[#8B8B86]">
              <span>STAGE // 0{idx + 1}</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stage.accent }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
