import React, { useState } from "react";
import {
  FolderGit2,
  Star,
  GitFork,
  ExternalLink,
  Maximize2
} from "lucide-react";
import { projectsData, Project } from "../data/projects";

interface GitHubPinnedReposProps {
  onSelectProject: (project: Project) => void;
}

export default function GitHubPinnedRepos({ onSelectProject }: GitHubPinnedReposProps) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [starredRepos, setStarredRepos] = useState<Record<number, boolean>>({
    1: true,
    2: true
  });
  const [starCounts, setStarCounts] = useState<Record<number, number>>({
    1: 14,
    2: 11,
    3: 8,
    4: 9,
    5: 6,
    6: 7,
    7: 5,
    8: 4
  });

  const categories = ["All", "Full Stack", "Backend & APIs", "Algorithms & Systems", "Frontend"];

  const handleStar = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setStarredRepos((prev) => {
      const isStarred = !!prev[id];
      setStarCounts((counts) => ({
        ...counts,
        [id]: (counts[id] || 0) + (isStarred ? -1 : 1)
      }));
      return { ...prev, [id]: !isStarred };
    });
  };

  const getLanguageColor = (tags: string[]) => {
    const lower = tags.map((t) => t.toLowerCase()).join(" ");
    if (lower.includes("python") || lower.includes("django")) return { name: "Python", color: "#3572A5" };
    if (lower.includes("typescript")) return { name: "TypeScript", color: "#3178c6" };
    if (lower.includes("react") || lower.includes("javascript")) return { name: "JavaScript", color: "#f1e05a" };
    if (lower.includes("c++") || lower.includes("dijkstra")) return { name: "C++ / Algorithms", color: "#f34b7d" };
    if (lower.includes("html") || lower.includes("tailwind")) return { name: "HTML / Tailwind", color: "#e34c26" };
    return { name: "Full Stack", color: "#238636" };
  };

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter = filter === "All" || project.category === filter;
    const matchesSearch =
      !search ||
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div id="repositories" className="mt-8 space-y-4">
      {/* Pinned Repos Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold text-[#1f2328] dark:text-[#f0f6fc]">
            Pinned Repositories
          </h2>
          <span className="text-xs text-[#656d76] dark:text-[#8b949e]">
            ({filteredProjects.length} shown)
          </span>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Find a repository..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-44 sm:w-56 rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] px-2.5 py-1 text-xs text-[#1f2328] dark:text-[#c9d1d9] placeholder-[#656d76] dark:placeholder-[#8b949e] focus:border-[#0969da] dark:focus:border-[#58a6ff] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                  filter === cat
                    ? "bg-[#0969da] text-white"
                    : "bg-[#f6f8fa] dark:bg-[#21262d] text-[#656d76] dark:text-[#8b949e] hover:text-[#1f2328] dark:hover:text-[#f0f6fc] border border-[#d0d7de] dark:border-[#30363d]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Pinned Repositories Styled as GitHub Repo Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => {
          const lang = getLanguageColor(project.tags);
          const isStarred = !!starredRepos[project.id];
          const starCount = starCounts[project.id] || 5;

          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative flex flex-col justify-between rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] p-4 transition duration-200 hover:border-[#0969da] dark:hover:border-[#58a6ff] hover:shadow-xs cursor-pointer"
            >
              <div>
                {/* Header: Repo Name & Public Pill */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 truncate">
                    <FolderGit2 size={16} className="text-[#656d76] dark:text-[#8b949e] flex-shrink-0" />
                    <span className="font-semibold text-xs sm:text-sm text-[#0969da] dark:text-[#58a6ff] group-hover:underline truncate">
                      {project.title}
                    </span>
                  </div>

                  <span className="flex-shrink-0 rounded-full border border-[#d0d7de] dark:border-[#30363d] px-2 py-0.5 text-[10px] font-medium text-[#656d76] dark:text-[#8b949e]">
                    Public
                  </span>
                </div>

                {/* Subtitle / Tagline */}
                {project.tagline && (
                  <p className="mt-1 text-[11px] font-mono text-[#0969da] dark:text-[#58a6ff]">
                    {project.tagline}
                  </p>
                )}

                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed text-[#656d76] dark:text-[#8b949e] line-clamp-3">
                  {project.description}
                </p>

                {/* Tags / Tech Pills */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded bg-[#afb8c1]/15 dark:bg-[#6e7681]/20 px-2 py-0.5 text-[10px] font-mono text-[#656d76] dark:text-[#8b949e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer: Language dot, Stars, Forks, Actions */}
              <div className="mt-4 pt-3 border-t border-[#d0d7de]/50 dark:border-[#30363d]/60 flex items-center justify-between text-xs text-[#656d76] dark:text-[#8b949e]">
                <div className="flex items-center gap-3">
                  {/* Language */}
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span>{lang.name}</span>
                  </span>

                  {/* Star count button */}
                  <button
                    onClick={(e) => handleStar(project.id, e)}
                    className="flex items-center gap-1 text-[11px] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors"
                    title={isStarred ? "Unstar" : "Star"}
                  >
                    <Star
                      size={13}
                      className={isStarred ? "text-[#e3b341] fill-[#e3b341]" : "text-[#656d76] dark:text-[#8b949e]"}
                    />
                    <span>{starCount}</span>
                  </button>

                  {/* Fork count */}
                  <span className="flex items-center gap-1 text-[11px]">
                    <GitFork size={13} />
                    <span>2</span>
                  </span>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="flex items-center gap-1 text-[11px] text-[#0969da] dark:text-[#58a6ff] hover:underline"
                  >
                    <Maximize2 size={12} />
                    <span>Inspect</span>
                  </button>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#656d76] dark:text-[#8b949e] hover:text-[#0969da] dark:hover:text-[#58a6ff]"
                      title="View GitHub Repository"
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
