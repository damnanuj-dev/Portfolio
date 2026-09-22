"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Sparkles, Layers, Cpu, Compass, Copy, Check } from "lucide-react";

interface ProjectFragment {
  id: string;
  project: string;
  subtitle: string;
  metric: string;
  accent: string;
  icon: React.ElementType;
  codeSnippet: string;
  notes: string[];
  badges: string[];
  colSpan: string;
}

const fragments: ProjectFragment[] = [
  {
    id: "frag-01",
    project: "FocusLoop",
    subtitle: "OFFLINE HABIT & HAPTICS ENGINE",
    metric: "0ms LATENCY",
    accent: "#315CFF",
    icon: Terminal,
    codeSnippet: `// SQLite Local Storage Loop
final db = await openDatabase('focusloop.db');
final sessions = await db.query(
  'sessions',
  where: 'completed = ?',
  whereArgs: [1]
);`,
    notes: ["Tactile micro-interactions", "Riverpod state isolation", "Zero cloud tracking"],
    badges: ["OFFLINE SYNC", "LOW LATENCY", "ON-DEVICE"],
    colSpan: "lg:col-span-7",
  },
  {
    id: "frag-02",
    project: "LinkLoom",
    subtitle: "INDEXEDDB FUZZY CACHE",
    metric: "12ms SEARCH",
    accent: "#FF642E",
    icon: Layers,
    codeSnippet: `const index = new IndexService({
  tokenize: 'forward',
  resolution: 9
});
const hits = await index.search(query);`,
    notes: ["Instant keyboard shortcuts", "Cached OpenGraph metadata", "Nested research layers"],
    badges: ["FAST FILTER", "INDEXEDDB", "SEARCH"],
    colSpan: "lg:col-span-5",
  },
  {
    id: "frag-03",
    project: "VeryO",
    subtitle: "SPATIAL AUDIO FFT ANALYZER",
    metric: "60 FPS GLSL",
    accent: "#9C8CFF",
    icon: Sparkles,
    codeSnippet: `analyser.getByteFrequencyData(dataArray);
mesh.material.uniforms.uTime.value = t;
mesh.material.uniforms.uFreq.value = dataArray[12];`,
    notes: ["Web Audio API streaming", "Dynamic GLSL shaders", "Spatial particle motion"],
    badges: ["GLSL NOISE", "REAL TIME", "AUDIO"],
    colSpan: "lg:col-span-5",
  },
  {
    id: "frag-04",
    project: "Snapling",
    subtitle: "MARKDOWN PARSER & ARCHIVE",
    metric: "< 45ms COLD START",
    accent: "#C7FF41",
    icon: Cpu,
    codeSnippet: `class QuickCaptureEngine {
  void commitBuffer(String raw) {
    _streamController.add(MarkdownAST.parse(raw));
  }
}`,
    notes: ["Zero-friction capture", "Offline sync pipeline", "Adaptive type rhythm"],
    badges: ["COLD START", "MARKDOWN", "ARCHIVE"],
    colSpan: "lg:col-span-7",
  },
  {
    id: "frag-05",
    project: "VoidLab",
    subtitle: "INTERACTION EXPERIMENTS & SHADERS",
    metric: "PROCEDURAL",
    accent: "#F04444",
    icon: Compass,
    codeSnippet: `// Custom Spring Physics Cursor
const spring = { stiffness: 320, damping: 24, mass: 0.6 };
applyForce(cursor, target, spring);`,
    notes: ["Canvas 2D particles", "Fluid motion choreography", "Experimental UI systems"],
    badges: ["PROCEDURAL", "PHYSICS", "CANVAS"],
    colSpan: "lg:col-span-12",
  },
];

export function StaggeredGrid() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (snippet: string, id: string) => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1600);
    } catch {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1600);
    }
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-[10px] sm:text-xs font-mono-tech tracking-[0.2em] text-[#8B8B86] uppercase block mb-1">
            EXPLORATION UNIVERSE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display text-[#F3F1EA] tracking-tight">
            Architectural Fragments & Experiments
          </h2>
        </div>
        <p className="text-[10px] sm:text-xs font-mono-tech text-[#8B8B86] max-w-xs">
          Internal mechanics, snippets, and performance notes behind the builds.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        {fragments.map((frag, index) => {
          const Icon = frag.icon;

          return (
            <motion.div
              key={frag.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
              className={`${frag.colSpan} glass-panel rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-between border border-white/10 hover:border-white/25 transition-all group relative overflow-hidden`}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${frag.accent}, transparent)`,
                }}
              />

              <div>
                <div className="flex items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Icon className="w-4 h-4 shrink-0" style={{ color: frag.accent }} />
                    <span className="text-[10px] sm:text-xs font-mono-tech tracking-wider text-[#8B8B86] truncate">
                      {frag.subtitle}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(frag.codeSnippet, frag.id)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-2 py-1 text-[10px] font-mono-tech text-[#F3F1EA] transition hover:border-white/20"
                    aria-label={`Copy ${frag.project} snippet`}
                  >
                    {copiedId === frag.id ? <Check className="w-3 h-3 text-[#C7FF41]" /> : <Copy className="w-3 h-3" />}
                    {copiedId === frag.id ? "COPIED" : "COPY"}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-2xl sm:text-3xl font-serif-display text-[#F3F1EA]">
                    {frag.project}
                  </h3>
                  <span
                    className="text-[10px] sm:text-[11px] font-mono-tech px-2.5 py-1 rounded-full border border-white/10 whitespace-nowrap"
                    style={{ color: frag.accent }}
                  >
                    {frag.metric}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {frag.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/10 bg-[#101010] px-2 py-1 text-[9px] font-mono-tech tracking-[0.18em] text-[#8B8B86]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="bg-[#0D0D0D] border border-white/5 rounded-xl p-3 sm:p-4 my-4 font-mono-tech text-[10px] sm:text-xs text-[#8B8B86] overflow-x-auto leading-relaxed whitespace-pre-wrap sm:whitespace-pre">
                  <pre className="min-w-max">
                    <code>{frag.codeSnippet}</code>
                  </pre>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 mt-2">
                <div className="flex flex-wrap gap-2">
                  {frag.notes.map((note, nIdx) => (
                    <span
                      key={nIdx}
                      className="text-[10px] sm:text-[11px] font-mono-tech text-[#8B8B86] bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5"
                    >
                      ✓ {note}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
