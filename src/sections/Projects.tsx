/**
 * Description:
 *      Building Blocks Projects section component.
 *      Supports 2 view modes:
 *      1. Landing Section View: Displays header, 6 top projects, and a "View More Projects" button.
 *      2. Dedicated All Projects Page View: Styled precisely after the uploaded reference image:
 *         - "← Back to landing" top button.
 *         - Green tag ("✦ THE PLATFORM PILLARS").
 *         - Large headline ("The building blocks of digital portfolio projects.").
 *         - Subtitle description paragraph.
 *         - 4 Metric Stat Cards (8 BUILDING BLOCKS, 25+ SUB-FUNCTIONS, 10+ TECH STACKS, 8 REPOSITORIES).
 *         - Horizontal Pillar Sub-Navigation Breadcrumb Links (01 AUTH → 02 WEATHER → ...).
 *         - Search & Tech Filter navigation.
 *         - 3-column grid of ALL 8 Project Cards.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projects";
import { ArrowLeft, ArrowRight, Sparkles, Search } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

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
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default ProjectsSection;
