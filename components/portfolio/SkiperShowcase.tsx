"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Layers, Zap, RotateCcw } from "lucide-react";

interface InteractionCard {
  id: string;
  title: string;
  category: string;
  tag: string;
  accent: string;
  detail: string;
}

const interactionDemos: InteractionCard[] = [
  {
    id: "kinetic-01",
    title: "Tactile Kinetic Tilt",
    category: "SPRING PHYSICS",
    tag: "SKIPER-40 SPEC",
    accent: "#315CFF",
    detail: "Dynamic 3D rotational projection with specular surface highlights and damping response.",
  },
  {
    id: "kinetic-02",
    title: "Magnetic Force Field",
    category: "CURSOR ATTRACTION",
    tag: "TACTILE ENGINE",
    accent: "#FF642E",
    detail: "Vector-based gravitational pull that aligns interactive elements to cursor velocity.",
  },
  {
    id: "kinetic-03",
    title: "Spatial Audio Waveforms",
    category: "GLSL SHADER MATH",
    tag: "PROCEDURAL",
    accent: "#9C8CFF",
    detail: "Real-time FFT buffer parsing projected onto an interactive WebGL vertex grid.",
  },
];

function KineticCard({
  item,
  isActive,
  onSelect,
}: {
  item: InteractionCard;
  isActive: boolean;
  onSelect: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative p-6 md:p-8 rounded-2xl glass-panel cursor-pointer transition-all duration-300 border ${
        isActive
          ? "border-white/40 bg-white/[0.07] shadow-2xl"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-40 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
        }}
      />

      <div className="flex items-center justify-between mb-4 [transform:translateZ(20px)]">
        <span
          className="text-[10px] font-mono-tech tracking-wider uppercase px-2 py-0.5 rounded-full border"
          style={{ borderColor: `${item.accent}40`, color: item.accent }}
        >
          {item.tag}
        </span>
        <span className="text-xs font-mono-tech text-[#8B8B86]">
          {item.category}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-serif-display text-[#F3F1EA] mb-3 [transform:translateZ(30px)]">
        {item.title}
      </h3>

      <p className="text-xs font-sans text-[#8B8B86] leading-relaxed [transform:translateZ(15px)]">
        {item.detail}
      </p>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-[#8B8B86] [transform:translateZ(20px)]">
        <span className="flex items-center gap-1 text-[11px]">
          <Zap className="w-3 h-3 text-[#C7FF41]" />
          INTERACTIVE
        </span>
        <span className="text-[11px] text-[#F3F1EA] group-hover:underline">
          EXPERIMENT ↗
        </span>
      </div>
    </motion.div>
  );
}

export function SkiperShowcase() {
  const [selectedId, setSelectedId] = useState<string>("kinetic-01");
  const [damping, setDamping] = useState<number>(24);
  const activeItem = interactionDemos.find((d) => d.id === selectedId) || interactionDemos[0];

  return (
    <section className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#C7FF41]" />
            <span className="text-xs font-mono-tech tracking-[0.2em] text-[#8B8B86] uppercase">
              SKIPER UI COMPONENT • INTERACTIVE LAB
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-display text-[#F3F1EA] tracking-tight">
            Kinetic Motion & Tactile Physics
          </h2>
        </div>
        <p className="text-xs font-mono-tech text-[#8B8B86] max-w-sm">
          A demonstration of 3D spatial tilt, tactile friction algorithms, and reactive specular surfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 [perspective:1200px]">
        {interactionDemos.map((item) => (
          <KineticCard
            key={item.id}
            item={item}
            isActive={selectedId === item.id}
            onSelect={() => setSelectedId(item.id)}
          />
        ))}
      </div>

      {/* Physics controller bar */}
      <div className="mt-8 glass-panel rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 text-xs font-mono-tech text-[#8B8B86]">
        <div className="flex items-center gap-3">
          <Layers className="w-4 h-4 text-[#315CFF]" />
          <span>ACTIVE DEMO: <strong className="text-white">{activeItem.title}</strong></span>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
          <label htmlFor="spring-damping-slider" className="text-[11px] text-[#8B8B86]">SPRING DAMPING: {damping}ms</label>
          <input
            id="spring-damping-slider"
            type="range"
            min="10"
            max="50"
            value={damping}
            onChange={(e) => setDamping(Number(e.target.value))}
            className="w-28 accent-[#315CFF] cursor-pointer"
          />
          <button
            onClick={() => setDamping(24)}
            className="p-1 rounded hover:bg-white/10 text-white"
            title="Reset damping"
            aria-label="Reset spring damping"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
