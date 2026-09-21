"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, type Project } from "@/data/portfolio";

export function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter only featured projects, excluding voidlab, snapling, and veryo
  const featuredProjects = projects.filter(
    (project) =>
      project.featured &&
      !["voidlab", "snapling", "veryo"].includes(project.slug.toLowerCase())
  );

  return (
    <section id="work" className="w-full py-28 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-mono-tech tracking-[0.25em] text-[#315CFF] uppercase block mb-2">
            02 // SELECTED WORK
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-display text-[#F3F1EA] tracking-tight font-normal">
            Featured Projects
          </h2>
        </div>
        <p className="text-sm font-sans text-[#8B8B86] max-w-md leading-relaxed">
          Tactile applications and digital systems engineered with modern web and mobile frameworks. Focused on utility and craft.
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-16 md:gap-24">
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
              {/* Project Card Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 lg:p-12 items-center">
                {/* Left Information Column */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                  <div>
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between text-xs font-mono-tech text-[#8B8B86] mb-4">
                      <span className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: project.accentColor }}
                        />
                        PROJECT {project.id}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif-display text-[#F3F1EA] tracking-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs font-mono-tech uppercase tracking-wider text-[#8B8B86] mt-1">
                      {project.category} • {project.role}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base font-sans text-[#8B8B86] leading-relaxed mt-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono-tech text-[#8B8B86] bg-white/[0.04] px-3 py-1 rounded-full border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 mt-8">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-5 py-2.5 rounded-full bg-white text-black font-sans font-medium text-xs hover:bg-[#F3F1EA] transition-all flex items-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>DETAILS & ARCHITECTURE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full glass-panel border border-white/10 text-white hover:border-white/30 transition-colors"
                          aria-label={`Open live link for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full glass-panel border border-white/10 text-white hover:border-white/30 transition-colors"
                          aria-label={`Open GitHub for ${project.title}`}
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Image Preview Column */}
                <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors bg-[#111]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent opacity-60" />

                  {/* Corner Accent Badge */}
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-panel rounded-3xl border border-white/20 p-6 sm:p-8 md:p-10 z-10 shadow-2xl bg-[#0D0D0D]"
            >
              {/* Close Button */}
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

              <h2 className="text-3xl sm:text-4xl font-serif-display text-[#F3F1EA] mb-1">
                {selectedProject.title}
              </h2>
              <p className="text-xs font-mono-tech text-[#315CFF] uppercase tracking-wider mb-6">
                {selectedProject.role}
              </p>

              {/* Image Preview */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Long Description */}
              <div className="space-y-4 text-sm font-sans text-[#F3F1EA]/90 leading-relaxed mb-8">
                <h4 className="text-xs font-mono-tech text-[#8B8B86] uppercase tracking-wider">
                  ARCHITECTURE & PURPOSE
                </h4>
                <p>{selectedProject.longDescription}</p>
              </div>

              {/* Tech Stack */}
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

              {/* Footer Links */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
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
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full glass-panel border border-white/10 text-white hover:border-white/30 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub className="w-4 h-4" />
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
