import React, { useState } from "react";
import { Github, ExternalLink, Figma, ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import type { Project } from "../data/projects";
import { useTheme } from "../context/ThemeContext";
import InteractiveMockup from "./InteractiveMockup";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  const { isDark } = useTheme();
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isDark
          ? "border-slate-800/80 bg-[#121622] hover:border-emerald-500/50 hover:bg-[#151b2a]"
          : "border-stone-300/80 bg-white hover:border-emerald-500/50 hover:shadow-stone-300/40"
      }`}
    >
      {/* Top Media / Interactive Simulator Header */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-950 border-b border-slate-800/40">
        {project.mockupType ? (
          <InteractiveMockup type={project.mockupType} isDark={true} />
        ) : project.image && !imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900 p-4 text-center">
            <Layers className="text-emerald-400 mb-2 h-7 w-7" />
            <span className="text-xs font-mono font-bold text-slate-300">{project.title}</span>
            <span className="text-[10px] text-slate-500 font-mono mt-1">Full Stack Architecture</span>
          </div>
        )}

        {/* Top-Left Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 border border-slate-700/80 backdrop-blur-md">
            <span>{project.step || `0${index + 1}`}</span>
            <span>·</span>
            <span>{project.category}</span>
          </span>
        </div>

        {/* Top-Right Quick Expand Trigger */}
        <button
          onClick={() => onOpenModal(project)}
          className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/80 text-slate-300 border border-slate-700 backdrop-blur-md transition hover:bg-emerald-500 hover:text-white"
          title="Deep Dive Case Study"
        >
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Institution or SubCategory */}
          <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-slate-400">
            <span className="truncate">{project.institution || "Personal Capstone"}</span>
            {project.duration && <span>{project.duration}</span>}
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenModal(project)}
            className={`mt-2 text-lg font-bold font-sans tracking-tight leading-snug cursor-pointer transition-colors group-hover:text-emerald-500 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {project.title}
          </h3>

          {/* Short tagline */}
          <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 line-clamp-1">
            {project.tagline}
          </p>

          {/* Description */}
          <p className={`mt-2 text-xs leading-relaxed line-clamp-2 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {project.description}
          </p>

          {/* Key Bullet Highlight */}
          {project.bullets && project.bullets.length > 0 && (
            <div className="mt-3.5 flex items-start gap-1.5 text-[11px] text-slate-400">
              <CheckCircle2 size={13} className="shrink-0 text-emerald-500 mt-0.5" />
              <span className="line-clamp-1 font-medium">{project.bullets[0]}</span>
            </div>
          )}

          {/* Tech Tag Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className={`rounded-md border px-2 py-0.5 text-[10px] font-mono font-medium ${
                  isDark
                    ? "border-slate-800 bg-slate-900/80 text-slate-300"
                    : "border-slate-200 bg-slate-100/80 text-slate-700"
                }`}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className={`text-[10px] font-mono self-center ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className={`mt-5 pt-4 border-t flex items-center justify-between gap-2 ${
          isDark ? "border-slate-800/80" : "border-slate-100"
        }`}>
          {/* GitHub Source Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
              isDark
                ? "border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500 hover:text-white"
                : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400 hover:text-slate-900"
            }`}
          >
            <Github size={13} />
            <span>Code</span>
          </a>

          <div className="flex items-center gap-2">
            {/* Live Demo or Figma */}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-500"
              >
                <ExternalLink size={12} />
                <span>Demo</span>
              </a>
            )}

            {project.figmaLink && (
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                  isDark
                    ? "border-slate-700 bg-slate-900 text-slate-200 hover:border-purple-500"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-purple-500"
                }`}
              >
                <Figma size={12} />
                <span>Figma</span>
              </a>
            )}

            {/* Deep Dive Modal Trigger */}
            <button
              onClick={() => onOpenModal(project)}
              className={`text-xs font-semibold transition hover:underline ${
                isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
