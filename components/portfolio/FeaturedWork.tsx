"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";

export function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  const featuredProjects = projects.filter(
    (project) =>
      project.featured &&
      !["voidlab", "snapling", "veryo"].includes(project.slug.toLowerCase())
  );

  return (
    <section id="work" className="w-full py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 border-b border-white/10 pb-8">
        <div>
          <span className="text-[10px] sm:text-xs font-mono-tech tracking-[0.25em] text-[#315CFF] uppercase block mb-2">
            02 // SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-display text-[#F3F1EA] tracking-tight font-normal text-balance">
            Featured Projects
          </h2>
        </div>
        <p className="text-sm font-sans text-[#8B8B86] max-w-md leading-relaxed text-pretty">
          Shipped products with a clear job: keep people focused, keep research organized, and keep the interface out of the way.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        {featuredProjects.map((project) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative rounded-3xl glass-panel border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
              data-cursor="project"
            >
              <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 lg:grid-cols-12 lg:gap-8 lg:p-10 xl:p-12 items-center">
                <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-5 sm:space-y-6">
                  <div>
                    <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono-tech text-[#8B8B86] mb-4">
                      <span className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: project.accentColor }}
                        />
                        PROJECT {project.id}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif-display text-[#F3F1EA] tracking-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-wider text-[#8B8B86] mt-2">
                      {project.category} • {project.role}
                    </p>

                    <p className="text-sm sm:text-base font-sans text-[#8B8B86] leading-relaxed mt-5 sm:mt-6 text-pretty">
                      {project.description}
                    </p>

                    {project.outcomes && (
                      <dl className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                        {project.outcomes.map((outcome) => (
                          <div key={outcome.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-2.5 sm:px-3 py-2.5">
                            <dt className="text-[10px] font-mono-tech uppercase tracking-wider text-[#8B8B86]">
                              {outcome.label}
                            </dt>
                            <dd className="mt-1 text-[11px] sm:text-sm text-[#F3F1EA] leading-snug">
                              {outcome.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] sm:text-xs font-mono-tech text-[#8B8B86] bg-white/[0.04] px-2.5 sm:px-3 py-1 rounded-full border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6 sm:mt-8">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-full bg-white text-black font-sans font-medium text-[11px] sm:text-xs hover:bg-[#F3F1EA] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>DETAILS & ARCHITECTURE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-4 py-2.5 rounded-full glass-panel border border-white/10 text-white hover:border-white/30 transition-colors flex items-center justify-center gap-2"
                          aria-label={`Open live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-[11px] sm:text-xs font-sans font-medium">LIVE DEMO</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors bg-[#111]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent opacity-60" />

                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono-tech tracking-wider uppercase backdrop-blur-md border border-white/10 text-white"
                    style={{ backgroundColor: "rgba(10, 10, 10, 0.75)" }}
                  >
                    {project.category}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-white/20 p-5 sm:p-8 z-10 shadow-2xl bg-[#0D0D0D]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#8B8B86] mb-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: selectedProject.accentColor }}
                />
                <span>PROJECT {selectedProject.id}</span>
                <span>•</span>
                <span>{selectedProject.year}</span>
              </div>

              <h2 id="project-dialog-title" className="text-3xl sm:text-4xl font-serif-display text-[#F3F1EA] mb-1">
                {selectedProject.title}
              </h2>
              <p className="text-xs font-mono-tech text-[#315CFF] uppercase tracking-wider mb-6">
                {selectedProject.role}
              </p>

              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 text-sm font-sans text-[#F3F1EA]/90 leading-relaxed mb-8">
                <h4 className="text-xs font-mono-tech text-[#8B8B86] uppercase tracking-wider">
                  ARCHITECTURE & PURPOSE
                </h4>
                <p>{selectedProject.longDescription}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-mono-tech text-[#8B8B86] uppercase tracking-wider mb-3">
                  TECHNOLOGIES USED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono-tech bg-white/5 border border-white/10 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/10">
                <span className="text-xs font-mono-tech text-[#8B8B86]">
                  STATUS: COMPLETED & ACTIVE
                </span>
                <div className="flex items-center gap-3">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-white text-black font-sans text-xs font-medium hover:bg-[#F3F1EA] transition-colors flex items-center gap-1.5"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
