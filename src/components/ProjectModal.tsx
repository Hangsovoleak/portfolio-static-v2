import React, { useState, useEffect } from "react";
import {
  X,
  ExternalLink,
  Github,
  Figma,
  CheckCircle2,
  Calendar,
  User,
  Building,
  Sparkles,
  Code2,
  Layers,
  ArrowRight,
  Target
} from "lucide-react";
import type { Project } from "../data/projects";
import InteractiveMockup from "./InteractiveMockup";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export default function ProjectModal({ project, onClose, isDark }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"plain" | "technical">("plain");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Compact Modal Dialog */}
      <div
        className={`relative z-10 w-full max-w-xl sm:max-w-2xl max-h-[90vh] flex flex-col overflow-hidden rounded-xl border shadow-2xl transition-all my-auto ${
          isDark
            ? "border-[#30363d] bg-[#161b22] text-[#c9d1d9]"
            : "border-[#d0d7de] bg-white text-[#1f2328]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className={`flex items-center justify-between border-b px-4 py-2.5 ${
          isDark ? "border-[#30363d] bg-[#0d1117]" : "border-[#d0d7de] bg-[#f6f8fa]"
        }`}>
          <div className="flex items-center gap-2 min-w-0">
            <span className="rounded-md border border-[#1f883d]/30 bg-[#1f883d]/10 px-2 py-0.5 text-[11px] font-semibold text-[#1f883d] dark:text-[#3fb950]">
              {project.category}
            </span>
            {project.subCategory && (
              <span className="text-xs text-[#656d76] dark:text-[#8b949e] truncate">
                / {project.subCategory}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-md p-1 text-[#656d76] dark:text-[#8b949e] hover:bg-[#eaeef2] dark:hover:bg-[#21262d] hover:text-[#1f2328] dark:hover:text-[#f0f6fc] transition-colors"
              title="Close (Esc)"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-5 space-y-4">
          
          {/* Compact Top Media Card */}
          <div className="relative h-36 sm:h-44 w-full rounded-lg overflow-hidden border border-[#d0d7de] dark:border-[#30363d] bg-[#0d1117] flex items-center justify-center">
            {project.mockupType ? (
              <div className="w-full h-full transform scale-90 sm:scale-100 origin-center">
                <InteractiveMockup type={project.mockupType} isDark={true} />
              </div>
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-[#8b949e]">
                <Layers size={15} />
                <span>Architecture & Code Preview</span>
              </div>
            )}
          </div>

          {/* Title & Tagline */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1f2328] dark:text-[#f0f6fc] leading-snug">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-[#0969da] dark:text-[#58a6ff] mt-0.5">
              {project.tagline}
            </p>
          </div>

          {/* Compact Quick Metadata Strip */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-lg border p-2.5 text-[11px] font-mono ${
            isDark ? "border-[#30363d] bg-[#0d1117]/80 text-[#8b949e]" : "border-[#d0d7de] bg-[#f6f8fa] text-[#656d76]"
          }`}>
            <div>
              <div className="text-[10px] uppercase font-semibold text-[#656d76] dark:text-[#8b949e] flex items-center gap-1">
                <Calendar size={10} /> Duration
              </div>
              <div className="mt-0.5 font-sans font-medium text-[#1f2328] dark:text-[#c9d1d9] truncate">
                {project.duration || "Semester Project"}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-semibold text-[#656d76] dark:text-[#8b949e] flex items-center gap-1">
                <User size={10} /> Role
              </div>
              <div className="mt-0.5 font-sans font-medium text-[#1f2328] dark:text-[#c9d1d9] truncate">
                {project.role || "Developer"}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-semibold text-[#656d76] dark:text-[#8b949e] flex items-center gap-1">
                <Building size={10} /> Organization
              </div>
              <div className="mt-0.5 font-sans font-medium text-[#1f2328] dark:text-[#c9d1d9] truncate">
                {project.institution || "Personal / RUPP"}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-semibold text-[#656d76] dark:text-[#8b949e] flex items-center gap-1">
                <Target size={10} /> Status
              </div>
              <div className="mt-0.5 font-sans font-semibold text-[#1f883d] dark:text-[#3fb950] truncate">
                {project.metrics?.value || "Completed"}
              </div>
            </div>
          </div>

          {/* Perspective Selector: Plain English vs Technical */}
          <div className="flex items-center justify-between border-b border-[#d0d7de] dark:border-[#30363d] pb-2">
            <div className="inline-flex rounded-lg border border-[#d0d7de] dark:border-[#30363d] p-0.5 bg-[#f6f8fa] dark:bg-[#0d1117] text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("plain")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  activeTab === "plain"
                    ? "bg-white dark:bg-[#21262d] text-[#1f2328] dark:text-[#f0f6fc] shadow-xs"
                    : "text-[#656d76] dark:text-[#8b949e] hover:text-[#1f2328] dark:hover:text-[#c9d1d9]"
                }`}
              >
                <Sparkles size={12} className="text-[#e3b341]" />
                <span>Plain English</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("technical")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  activeTab === "technical"
                    ? "bg-white dark:bg-[#21262d] text-[#1f2328] dark:text-[#f0f6fc] shadow-xs"
                    : "text-[#656d76] dark:text-[#8b949e] hover:text-[#1f2328] dark:hover:text-[#c9d1d9]"
                }`}
              >
                <Code2 size={12} className="text-[#0969da] dark:text-[#58a6ff]" />
                <span>Technical Details</span>
              </button>
            </div>

            <span className="text-[11px] text-[#656d76] dark:text-[#8b949e] hidden sm:inline">
              {activeTab === "plain" ? "Simple overview for everyone" : "Architecture & stack for engineers"}
            </span>
          </div>

          {/* Tab Content 1: Plain English (For Normal People / Recruiter / General Visitors) */}
          {activeTab === "plain" ? (
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="rounded-lg border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa]/60 dark:bg-[#0d1117]/50 p-3">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#656d76] dark:text-[#8b949e] flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#e3b341]" />
                  <span>What is this project?</span>
                </h4>
                <p className="mt-1.5 leading-relaxed text-[#1f2328] dark:text-[#c9d1d9]">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#656d76] dark:text-[#8b949e] mb-2">
                  What was achieved
                </h4>
                <ul className="space-y-1.5">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-[#1f2328] dark:text-[#c9d1d9]">
                      <CheckCircle2 size={14} className="shrink-0 text-[#1f883d] dark:text-[#3fb950] mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* Tab Content 2: Technical Details (For Technical Viewers / Engineers) */
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#656d76] dark:text-[#8b949e] mb-2">
                  Engineering Highlights & Implementation
                </h4>
                <ul className="space-y-1.5">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-mono leading-relaxed text-[#1f2328] dark:text-[#c9d1d9]">
                      <ArrowRight size={13} className="shrink-0 text-[#0969da] dark:text-[#58a6ff] mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#656d76] dark:text-[#8b949e] mb-2">
                  Technologies & Architecture
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(project.architecture || project.tags).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#0d1117] px-2 py-0.5 text-xs font-mono font-medium text-[#1f2328] dark:text-[#c9d1d9]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1f883d] dark:bg-[#3fb950]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className={`flex flex-wrap items-center justify-between gap-2 border-t px-4 py-3 ${
          isDark ? "border-[#30363d] bg-[#0d1117]" : "border-[#d0d7de] bg-[#f6f8fa]"
        }`}>
          <div className="flex flex-wrap items-center gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#21262d] px-3 py-1.5 text-xs font-semibold text-[#1f2328] dark:text-[#f0f6fc] hover:bg-[#f6f8fa] dark:hover:bg-[#30363d] shadow-xs transition-colors"
              >
                <Github size={13} />
                <span>View Repository</span>
              </a>
            )}

            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-[#1f883d] dark:border-[#238636] bg-[#1f883d] dark:bg-[#238636] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1a7f37] dark:hover:bg-[#2ea043] shadow-xs transition-colors"
              >
                <ExternalLink size={13} />
                <span>Launch Demo</span>
              </a>
            )}

            {project.figmaLink && (
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#21262d] px-3 py-1.5 text-xs font-semibold text-[#1f2328] dark:text-[#f0f6fc] hover:bg-[#f6f8fa] dark:hover:bg-[#30363d] shadow-xs transition-colors"
              >
                <Figma size={13} className="text-[#a259ff]" />
                <span>Figma Prototype</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="rounded-md border border-[#d0d7de] dark:border-[#30363d] px-3 py-1.5 text-xs font-semibold text-[#656d76] dark:text-[#8b949e] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
