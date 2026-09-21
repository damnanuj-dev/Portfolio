"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Sparkles, Layers, Cpu, Compass } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectFragment {
  id: string;
  project: string;
  subtitle: string;
  metric: string;
  accent: string;
  icon: React.ElementType;
  codeSnippet: string;
  notes: string[];
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
    notes: ["Tactile micro-interactions", "Riverpod state isolation", "Strictly zero cloud tracking"],
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
    notes: ["Instant keyboard shortcuts (⌘K)", "Automated OpenGraph metadata caching", "Hierarchical tag collections"],
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
    notes: ["Web Audio API streaming", "Dynamic GLSL vertex noise shaders", "Spatial particle responsiveness"],
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
    notes: ["Zero-friction gesture capture", "Offline sync pipeline", "Adaptive typography spacing"],
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
    notes: ["Canvas 2D particle simulation", "Fluid physics choreography", "Experimental UI explorations"],
    colSpan: "lg:col-span-12",
  },
];

export function StaggeredGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const cards = sectionRef.current.querySelectorAll(".stagger-card");
    const ctx = gsap.context(() => {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 85%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto relative"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-mono-tech tracking-[0.2em] text-[#8B8B86] uppercase block mb-1">
            EXPLORATION UNIVERSE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-display text-[#F3F1EA] tracking-tight">
            Architectural Fragments & Experiments
          </h2>
        </div>
        <p className="text-xs font-mono-tech text-[#8B8B86] max-w-xs">
          Internal mechanics, snippets, and performance notes behind the builds.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {fragments.map((frag) => {
          const Icon = frag.icon;

          return (
            <div
              key={frag.id}
              className={`stagger-card ${frag.colSpan} glass-panel rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-white/10 hover:border-white/25 transition-all group relative overflow-hidden`}
            >
              {/* Subtle top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${frag.accent}, transparent)`,
                }}
              />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" style={{ color: frag.accent }} />
                    <span className="text-xs font-mono-tech tracking-wider text-[#8B8B86]">
                      {frag.subtitle}
                    </span>
                  </div>
                  <span
                    className="text-[10px] font-mono-tech px-2 py-0.5 rounded-full border border-white/10"
                    style={{ color: frag.accent }}
                  >
                    {frag.metric}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-serif-display text-[#F3F1EA] mb-4">
                  {frag.project}
                </h3>

                {/* Code Snippet Box */}
                <div className="bg-[#0D0D0D] border border-white/5 rounded-xl p-4 my-4 font-mono-tech text-xs text-[#8B8B86] overflow-x-auto leading-relaxed">
                  <pre>
                    <code>{frag.codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Development Notes */}
              <div className="border-t border-white/5 pt-4 mt-2">
                <div className="flex flex-wrap gap-2">
                  {frag.notes.map((note, nIdx) => (
                    <span
                      key={nIdx}
                      className="text-[11px] font-mono-tech text-[#8B8B86] bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5"
                    >
                      ✓ {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
