import React from "react";
import { X, ExternalLink, Github, Figma, CheckCircle2, Cpu, Calendar, User, Building } from "lucide-react";
import type { Project } from "../data/projects";
import InteractiveMockup from "./InteractiveMockup";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export default function ProjectModal({ project, onClose, isDark }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className={`relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border shadow-2xl transition-all my-8 ${
          isDark
            ? "border-slate-800 bg-[#0E1424] text-slate-100"
            : "border-slate-200 bg-white text-slate-900"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className={`flex items-center justify-between border-b px-6 py-4 ${
          isDark ? "border-slate-800 bg-[#0A0F1D]" : "border-slate-100 bg-slate-50"
        }`}>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {project.category}
            </span>
            {project.subCategory && (
              <span className={`text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                / {project.subCategory}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className={`rounded-lg p-1.5 transition ${
              isDark ? "text-slate-400 hover:bg-slate-800 hover:text-white" : "text-slate-500 hover:bg-slate-200 hover:text-black"
            }`}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Media Preview Area */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 border-b border-slate-800">
          {project.mockupType ? (
            <InteractiveMockup type={project.mockupType} isDark={true} />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-900 text-slate-500 font-mono text-sm">
              Architecture Preview Available
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl font-sans">
              {project.title}
            </h2>
            <p className={`mt-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400`}>
              {project.tagline}
            </p>
          </div>

          {/* Metadata Row */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-xl border p-4 text-xs ${
            isDark ? "border-slate-800/80 bg-slate-900/50 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700"
          }`}>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <Calendar size={11} /> Duration
              </div>
              <div className="mt-1 font-semibold">{project.duration || "Semester Project"}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <User size={11} /> Role
              </div>
              <div className="mt-1 font-semibold">{project.role || "Software Developer"}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <Building size={11} /> Institution
              </div>
              <div className="mt-1 font-semibold truncate">{project.institution || "Personal"}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <Cpu size={11} /> Milestone
              </div>
              <div className="mt-1 font-semibold text-emerald-500">{project.metrics?.value || "Completed"}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Overview</h4>
            <p className={`mt-2 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Engineering Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Engineering Highlights</h4>
            <ul className="mt-2.5 space-y-2">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle2 size={16} className="shrink-0 text-emerald-500 mt-0.5" />
                  <span className={isDark ? "text-slate-300" : "text-slate-700"}>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture / Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technologies & Architecture</h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {(project.architecture || project.tags).map((tech) => (
                <span
                  key={tech}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${
                    isDark
                      ? "border-slate-700 bg-slate-900 text-slate-200"
                      : "border-slate-200 bg-slate-100 text-slate-800"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className={`flex flex-wrap items-center gap-3 pt-4 border-t ${
            isDark ? "border-slate-800" : "border-slate-200"
          }`}>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-5 py-2.5 text-xs font-bold text-white dark:text-slate-900 transition hover:bg-slate-800 dark:hover:bg-slate-100"
              >
                <Github size={15} />
                <span>View Repository</span>
              </a>
            )}

            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-500 shadow-md shadow-emerald-500/20"
              >
                <ExternalLink size={15} />
                <span>Launch Live Demo</span>
              </a>
            )}

            {project.figmaLink && (
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-xs font-bold transition ${
                  isDark
                    ? "border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
                    : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                }`}
              >
                <Figma size={15} />
                <span>Inspect Figma Prototype</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
