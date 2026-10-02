import React, { useState, useMemo } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projectsData, Project } from "../data/projects";
import { Search, FolderGit2, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface ProjectsSectionProps {
  projects?: Project[];
}

const CATEGORIES = ["All", "Full Stack", "Backend & APIs", "Algorithms & Systems", "Frontend"];

export default function ProjectsSection({ projects = [] }: ProjectsSectionProps) {
  const { isDark } = useTheme();
  const allProjects = projects.length > 0 ? projects : projectsData;

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allProjects.length };
    allProjects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [allProjects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [allProjects, activeCategory, searchQuery]);

  return (
    <section
      id="projects"
      className={`relative border-b py-24 transition-colors duration-300 ${
        isDark ? "border-slate-800/80 bg-[#0D1015]" : "border-stone-300/70 bg-[#F2EFE6]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
              <FolderGit2 size={13} />
              <span>02 / SELECTED WORK</span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl font-sans">
              Engineering <span className="text-emerald-500">Projects</span>
            </h2>
            <p className={`mt-2 max-w-2xl text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Production client websites, distributed REST APIs, algorithmic graph solvers, and database management systems built during my engineering studies.
            </p>
          </div>

          {/* Stat Pill */}
          <div className={`hidden sm:flex items-center gap-3 rounded-2xl border px-5 py-3 text-xs font-mono ${
            isDark ? "border-slate-800 bg-[#0D1424] text-slate-300" : "border-slate-200 bg-white text-slate-700 shadow-xs"
          }`}>
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>8 Repositories Indexed</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 font-bold"
                      : isDark
                      ? "bg-[#0D1424] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                      : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono rounded-full px-1.5 py-0.2 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : isDark ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-500"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search
              size={15}
              className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            />
            <input
              type="text"
              placeholder="Search projects or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full rounded-xl border py-2 pl-9 pr-8 text-xs font-medium focus:border-emerald-500 focus:outline-none transition ${
                isDark
                  ? "border-slate-800 bg-[#0D1424] text-slate-100 placeholder-slate-500"
                  : "border-slate-200 bg-white text-slate-900 placeholder-slate-400 shadow-xs"
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Showing {filteredProjects.length} of {allProjects.length} projects</span>
          {activeCategory !== "All" && (
            <button
              onClick={() => setActiveCategory("All")}
              className="text-emerald-500 hover:underline"
            >
              Reset Category
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className={`mt-12 rounded-2xl border border-dashed p-12 text-center ${
            isDark ? "border-slate-800 text-slate-400" : "border-slate-300 text-slate-500"
          }`}>
            <p className="text-sm font-semibold">No engineering projects found matching your search query.</p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-3 text-xs text-emerald-500 font-semibold hover:underline"
            >
              Clear filters and view all
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenModal={setSelectedProject}
              />
            ))}
          </div>
        )}
      </div>

      {/* Project Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </section>
  );
}
