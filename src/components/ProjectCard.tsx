/**
 * Description:
 *      Redesigned Project Card component matching the reference image layout:
 *      - Top Cover Banner Header with category overlay pill tag (top-left).
 *      - Floating Brand/Technology Logo Badge overlapping the cover banner (bottom-left).
 *      - Crisp bold project title & concise description.
 *      - Feature highlights / tech tag pills.
 *      - Uppercase Institution / Category metadata footer tag.
 *      - Action buttons: "GitHub Code" (GitHub repo) & "Live Demo" / "View Demo".
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { useState } from "react";
import { Github, Sparkles, CheckCircle2, ArrowUpRight, Image as ImageIcon } from "lucide-react";
import type { Project } from "../data/projects";
import { useTheme } from "../context/ThemeContext";

/*------------------------------------------------------------------------------
                            BRAND ICON PICKER HELPER
------------------------------------------------------------------------------*/
function getProjectBadgeIcon(project: Project) {
    const tagsStr = (project.tags || []).join(" ").toLowerCase();
    const titleStr = (project.title || "").toLowerCase();

    if (tagsStr.includes("django") || titleStr.includes("django")) {
        return (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#092E20">
                <path d="M11.96 0h2.95v16.71c-.74.15-1.55.22-2.31.22-3.76 0-5.69-1.74-5.69-5.18 0-3.37 2.05-5.27 5.05-5.27.76 0 1.34.1 1.95.27V0zm0 9.07c-.32-.08-.66-.12-1.05-.12-1.66 0-2.6 1.01-2.6 2.94 0 1.91.88 2.87 2.59 2.87.35 0 .73-.04 1.06-.11V9.07zM20.25 6.74v7.7c0 3.01-1.04 4.88-3.07 5.51l-1.89-.96c1.55-.49 2.18-1.74 2.18-3.79V.03h2.78v6.71z" />
            </svg>
        );
    }

    if (tagsStr.includes("react") || titleStr.includes("react") || tagsStr.includes("portfolio")) {
        return (
            <svg className="w-6 h-6 animate-spin-slow" viewBox="0 0 24 24" fill="none">
                <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
                <circle cx="12" cy="12" r="2" fill="#61DAFB" />
            </svg>
        );
    }

    if (tagsStr.includes("python") || tagsStr.includes("dijkstra") || tagsStr.includes("algorithms")) {
        return (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M11.87 2c-4.99 0-4.66 2.17-4.66 2.17l.01 2.25h4.72v.67H5.32S2 6.73 2 11.75c0 5.03 2.9 4.85 2.9 4.85h1.73v-2.43s-.09-2.9 2.86-2.9h4.86s2.73.04 2.73-2.65V4.65S17.38 2 11.87 2zm-2.5 1.5c.52 0 .94.42.94.94 0 .52-.42.94-.94.94a.94.94 0 0 1-.94-.94c0-.52.42-.94.94-.94z" fill="#3776AB" />
                <path d="M12.13 22c4.99 0 4.66-2.17 4.66-2.17l-.01-2.25h-4.72v-.67h6.62s3.32.36 3.32-4.66c0-5.03-2.9-4.85-2.9-4.85h-1.73v2.43s.09 2.9-2.86 2.9H9.65s-2.73-.04-2.73 2.65v3.97S6.62 22 12.13 22zm2.5-1.5c-.52 0-.94-.42-.94-.94 0-.52-.42.94-.94-.94.52 0 .94.42.94.94 0 .52-.42.94-.94.94z" fill="#FFD43B" />
            </svg>
        );
    }

    if (tagsStr.includes("java") || titleStr.includes("market")) {
        return (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#5382A1">
                <path d="M4.6 19.3c.7.4 3.7 1.1 7.2 1.1 4.5 0 7.8-1 7.8-2.6 0-1.5-2.7-2.3-5.7-2.6l.8-1.5c3.7.4 6.7 1.6 6.7 3.8 0 2.8-5.3 4.2-9.7 4.2-4.1 0-7.7-1.3-8.2-2.7l1.1.3zm1.1-2.6c2.4-1.6 6.7-1.7 8.9-.3l.9-1.2c-2.8-1.7-7.9-1.6-10.7.3l.9 1.2zm8.5-7.4c.8-1.4 1.2-2.9.4-4.2-.6-1-1.9-1.6-3.2-1.7.3.7.4 1.6 0 2.4-.7 1.3-2.2 2.3-2.6 3.7.6-.2 1.3-.3 1.9-.3 1.3 0 2.7.7 3.5 1.4-.7-.5-1.5-.9-2.4-.9-1.4 0-2.6.8-3.4 1.8 1.4-1 3.2-1.2 4.7-.5 1.2.6 2 1.8 1.1 3-1 1.4-2.9 2-4.5 2.5 1.8-.1 3.6-.8 4.5-2.2.6-1 0-2.3.9-3.4l-.9-1.6z" />
            </svg>
        );
    }

    // Default icon
    return <Sparkles className="w-5 h-5 text-[#0d9668]" />;
}

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/
function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
    const { isDark } = useTheme();
    const [imgError, setImgError] = useState(false);

    if (!project) return null;

    const categoryTag = project.category || `PORTFOLIO · ${String(index + 1).padStart(2, "0")}`;
    const institutionText = project.institution || "ROYAL UNIVERSITY OF PHNOM PENH · COMPUTER SCIENCE";

    // Primary & Secondary links
    const githubLink = project.link || "https://github.com/Hangsovoleak";
    const demoLink = project.demoLink || project.figmaLink || (project.link ? project.link : "#");
    const hasLiveDemo = Boolean(project.demoLink || project.figmaLink);

    const imageSrc = project.image || `/images/placeholder-project-${index + 1}.jpg`;

    return (
        <article className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0D9668]/60 hover:shadow-2xl ${
            isDark
                ? "border-slate-800/80 bg-[#0D1424] hover:bg-[#111A2E]"
                : "border-slate-200 bg-white hover:bg-slate-50"
        }`}>
            {/* Top Cover Banner Header */}
            <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-950">
                
                {/* TODO: Upload project banner image here */}
                {imgError ? (
                    /* Image Placeholder Container when local image is pending upload */
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D9668]/10 text-[#0D9668] mb-2">
                            <ImageIcon size={22} />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Image Placeholder
                        </span>
                        <span className="mt-0.5 text-[10px] text-slate-500 font-mono">
                            {imageSrc}
                        </span>
                    </div>
                ) : (
                    <img
                        src={imageSrc}
                        alt={project.title}
                        onError={() => setImgError(true)}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                    />
                )}

                {/* Dark Vignette Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-[#0D1424] via-black/40" : "from-white/90 via-black/20"} to-transparent pointer-events-none`} />

                {/* Top-Left Category Tag Pill Overlay */}
                <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center rounded-full bg-slate-900/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#0D9668] shadow-xs border border-slate-700/80 backdrop-blur-md">
                        {categoryTag}
                    </span>
                </div>

                {/* Floating Overlap Brand Logo Badge (Bottom-Left) */}
                <div className={`absolute -bottom-5 left-5 z-20 flex h-12 w-12 items-center justify-center rounded-xl border p-2 shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                    isDark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"
                }`}>
                    {getProjectBadgeIcon(project)}
                </div>
            </div>


            {/* Card Content Body */}
            <div className="flex flex-1 flex-col justify-between p-5 pt-7 sm:p-6 sm:pt-8">
                <div>
                    {/* Project Title */}
                    <h3 className={`text-lg font-black tracking-tight leading-snug transition-colors group-hover:text-[#0D9668] line-clamp-1 ${
                        isDark ? "text-white" : "text-slate-900"
                    }`}>
                        {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className={`mt-2 text-xs sm:text-sm font-medium leading-relaxed line-clamp-2 min-h-[38px] ${
                        isDark ? "text-slate-400" : "text-slate-600"
                    }`}>
                        {project.description}
                    </p>

                    {/* Bullet Highlights / Tech Pills */}
                    {project.bullets && project.bullets.length > 0 ? (
                        <ul className={`mt-4 space-y-1.5 text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            {project.bullets.slice(0, 2).map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2 line-clamp-1">
                                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0D9668]" />
                                    <span className={`font-normal leading-snug ${isDark ? "text-slate-300" : "text-slate-700"}`}>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold ${
                                    isDark ? "border-slate-800 bg-slate-900 text-slate-300" : "border-slate-200 bg-slate-100 text-slate-700"
                                }`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    {/* Institution / Category Meta Footer Label (Uppercase grey text matching reference image) */}
                    <div className={`mt-5 border-t pt-3 ${isDark ? "border-slate-800/80" : "border-slate-200"}`}>
                        <p className={`text-[10px] font-black uppercase tracking-wider line-clamp-1 leading-normal ${
                            isDark ? "text-slate-500" : "text-slate-600"
                        }`}>
                            {institutionText}
                        </p>
                    </div>

                    {/* Action Buttons Row: GitHub Code & Live Demo */}
                    <div className="mt-4 flex items-center gap-2">
                        {/* View on GitHub Button */}
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition-all duration-200 shadow-2xs group/btn ${
                                isDark
                                    ? "border-slate-700 bg-slate-900/90 text-slate-200 hover:border-slate-400 hover:bg-slate-800 hover:text-white"
                                    : "border-slate-300 bg-slate-100 text-slate-800 hover:border-slate-400 hover:bg-slate-200 hover:text-black"
                            }`}
                        >
                            <Github size={14} className="shrink-0 transition-transform group-hover/btn:scale-110" />
                            <span>GitHub Code</span>
                        </a>

                        {/* View Live Demo / Figma Button */}
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all duration-200 shadow-2xs group/demo ${
                                hasLiveDemo
                                    ? "bg-[#0D9668] text-white hover:bg-[#0a7a54] hover:shadow-md"
                                    : isDark ? "border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800" : "border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                        >
                            <span>{project.figmaLink ? "Figma Design" : hasLiveDemo ? "Live Demo" : "View Project"}</span>
                            <ArrowUpRight size={14} className="shrink-0 transition-transform group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default ProjectCard;

