import React, { useState, useMemo } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projectsData, Project } from "../data/projects";
import { Search, FolderGit2, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

<<<<<<< HEAD
/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/
function ProjectsSection({ projects = [] }: { projects?: any[] }) {
    const { isDark } = useTheme();

    // Fallback to rich projectsData if items passed are empty or basic
    const projectList = projects && projects.length > 0 ? projects : projectsData;

    // View state: false = main section (6 projects), true = full dedicated page view (all 8 projects)
    const [isFullPageView, setIsFullPageView] = useState(false);

    // Filter and search state
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Derive available filters from project tags/tech
    const availableFilters = useMemo(() => {
        const uniqueTags = new Set<string>();

        projectList.forEach((project) => {
            const tags = project.tags || project.tech || [];
            tags.forEach((tag: string) => {
                if (typeof tag === "string") {
                    uniqueTags.add(tag.trim());
                }
            });
        });

        return ["All", ...Array.from(uniqueTags).sort()];
    }, [projectList]);

    // Filtered project list for main section (Max 6)
    const landingProjects = useMemo(() => {
        let filtered = projectList;

        if (activeFilter !== "All") {
            const filterKey = activeFilter.toLowerCase();
            filtered = projectList.filter((project) => {
                const tags = project.tags || project.tech || [];
                return tags.some(
                    (tag: string) => typeof tag === "string" && tag.toLowerCase() === filterKey
                );
            });
        }

        return filtered.slice(0, 6);
    }, [projectList, activeFilter]);

    // Filtered project list for FULL PAGE view (All Projects)
    const allPageProjects = useMemo(() => {
        return projectList.filter((project) => {
            const matchesFilter =
                activeFilter === "All" ||
                (project.tags || []).some(
                    (tag: string) => tag.toLowerCase() === activeFilter.toLowerCase()
                );

            const searchLower = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !searchLower ||
                project.title.toLowerCase().includes(searchLower) ||
                project.description.toLowerCase().includes(searchLower) ||
                (project.tags || []).some((tag: string) => tag.toLowerCase().includes(searchLower));

            return matchesFilter && matchesSearch;
        });
    }, [projectList, activeFilter, searchQuery]);

    // Handler to open full page view and scroll top
    const handleOpenFullPage = () => {
        setIsFullPageView(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Handler to return to landing view
    const handleBackToLanding = () => {
        setIsFullPageView(false);
        setTimeout(() => {
            const projElem = document.getElementById("projects");
            if (projElem) {
                projElem.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    /*--------------------------------------------------------------------------*/
    /* DEDICATED ALL PROJECTS PAGE VIEW (Matching Reference Image)              */
    /*--------------------------------------------------------------------------*/
    /*--------------------------------------------------------------------------*/
    /* DEDICATED ALL PROJECTS PAGE VIEW (Matching Reference Image)              */
    /*--------------------------------------------------------------------------*/
    if (isFullPageView) {
        return (
            <div id="all-projects-page" className={`fixed inset-0 z-50 overflow-y-auto py-12 transition-colors duration-300 ${
                isDark ? "bg-[#080C16] text-slate-100" : "bg-slate-50 text-slate-900"
            }`}>
                <div className="portfolio-animate relative mx-auto max-w-7xl px-6">

                    {/* Top Button: ← Back to landing */}
                    <div>
                        <button
                            onClick={handleBackToLanding}
                            className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold shadow-sm transition ${
                                isDark
                                    ? "border-slate-700 bg-slate-900 text-slate-200 hover:border-[#0D9668] hover:text-[#0D9668]"
                                    : "border-slate-300 bg-white text-slate-800 hover:border-[#0D9668] hover:text-[#0D9668]"
                            }`}
                        >
                            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                            <span>Back to landing</span>
                        </button>
                    </div>

                    {/* Page Branding Tag: ✦ THE PLATFORM PILLARS */}
                    <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#0D9668]">
                        <Sparkles size={14} />
                        THE PORTFOLIO PILLARS
                    </div>

                    {/* Large Page Headline */}
                    <h1 className={`mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${
                        isDark ? "text-white" : "text-slate-900"
                    }`}>
                        The <span className="text-[#0D9668]">building blocks</span> of digital projects.
                    </h1>

                    {/* Horizontal Pillar Breadcrumb Sub-Navigation */}
                    <div className={`mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-black uppercase tracking-wider border-t border-b py-3 ${
                        isDark ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-600"
                    }`}>
                        {projectList.map((p, pIdx) => (
                            <div key={p.id} className="flex items-center gap-2">
                                <a
                                    href={`#pillar-${p.step || pIdx + 1}`}
                                    className="hover:text-[#0D9668] transition-colors"
                                >
                                    <span className="text-[#0D9668]">0{pIdx + 1}</span> {p.title.split(" ")[0]}
                                </a>
                                {pIdx < projectList.length - 1 && <span className={isDark ? "text-slate-600" : "text-slate-400"}>→</span>}
                            </div>
                        ))}
                    </div>

                    {/* Search Bar & Tech Filter Controls */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        {/* Search Input */}
                        <div className="relative w-full sm:w-72">
                            <Search size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? "text-slate-500" : "text-slate-400"}`} />
                            <input
                                type="text"
                                placeholder="Search all projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`w-full rounded-full border py-2 pl-10 pr-4 text-xs font-medium focus:border-[#0D9668] focus:outline-none shadow-xs ${
                                    isDark
                                        ? "border-slate-700 bg-slate-900 text-slate-100 placeholder-slate-500"
                                        : "border-slate-300 bg-white text-slate-900 placeholder-slate-400"
                                }`}
                            />
                        </div>
                    </div>

                    {/* All Projects Grid (All 8 Projects) */}
                    {allPageProjects.length === 0 ? (
                        <div className={`mt-12 rounded-2xl border border-dashed p-12 text-center text-sm font-medium ${
                            isDark ? "border-slate-800 text-slate-400" : "border-slate-300 text-slate-600"
                        }`}>
                            No projects found matching your search.
                        </div>
                    ) : (
                        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:gap-8 items-stretch">
                            {allPageProjects.map((project: any, index: number) => (
                                <div key={project.id || project.title} id={`pillar-${project.step || index + 1}`}>
                                    <ProjectCard
                                        project={project}
                                        index={index}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        );
    }

    /*--------------------------------------------------------------------------*/
    /* MAIN LANDING SECTION VIEW (Max 6 Projects)                                */
    /*--------------------------------------------------------------------------*/
    return (
        <section
            id="projects"
            className={`border-b py-20 transition-colors duration-300 ${
                isDark ? "border-slate-800/80 bg-[#080C16] text-slate-100" : "border-slate-200 bg-white text-slate-900"
            }`}
        >
            <div className="portfolio-animate relative mx-auto max-w-7xl px-6">

                {/* Section Header */}
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#0D9668]">
                            <span className="h-0.5 w-6 rounded-full bg-[#0D9668]" />
                            BUILDING BLOCKS
                        </div>

                        <h2 className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${
                            isDark ? "text-white" : "text-slate-900"
                        }`}>
                            <span className="text-[#0D9668]">Building Blocks</span> of <br className="hidden sm:inline" />
                            Portfolio Software Projects
                        </h2>
                    </div>

                    <p className={`max-w-md text-sm font-medium leading-6 md:text-right ${
                        isDark ? "text-slate-400" : "text-slate-600"
                    }`}>
                        Key software applications, platforms, weather REST APIs, and data structure systems engineered using modern frameworks and client requirements.
                    </p>
                </div>

                {/* Main Project Grid: Display ONLY 6 projects on website */}
                {landingProjects.length === 0 ? (
                    <div className={`mt-12 rounded-2xl border border-dashed p-12 text-center text-sm font-medium ${
                        isDark ? "border-slate-800 text-slate-400" : "border-slate-300 text-slate-600"
                    }`}>
                        No projects match this filter. Try selecting a different category.
                    </div>
                ) : (
                    <div className="mt-10 grid gap-6 md:grid-cols-3 lg:gap-8 items-stretch">
                        {landingProjects.map((project: any, index: number) => (
                            <ProjectCard
                                key={project.id || project.title}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                )}

                {/* View More Projects Action Button -> Opens Full Page View */}
                <div className="mt-8 flex justify-center text-center">
                    <button
                        onClick={handleOpenFullPage}
                        className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider shadow-xs transition ${
                            isDark
                                ? "border-[#0D9668]/50 bg-slate-900 text-[#0D9668] hover:bg-[#0D9668] hover:text-white"
                                : "border-[#0D9668]/40 bg-white text-[#0D9668] hover:bg-[#0D9668] hover:text-white"
                        }`}
                    >
                        <span>View More Projects</span>
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    );
=======
interface ProjectsSectionProps {
  projects?: Project[];
>>>>>>> f13f9d9 (update features)
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
