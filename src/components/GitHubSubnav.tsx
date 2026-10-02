import React from "react";
import {
  BookOpen,
  FolderGit2,
  Code2,
  Terminal,
  GraduationCap,
  Sparkles
} from "lucide-react";

interface GitHubSubnavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  reposCount?: number;
  projectsCount?: number;
  expCount?: number;
  eduCount?: number;
  skillsCount?: number;
}

export default function GitHubSubnav({
  activeTab,
  setActiveTab,
  reposCount = 8,
  projectsCount = 6,
  expCount = 3,
  eduCount = 2,
  skillsCount = 18
}: GitHubSubnavProps) {
  const tabs = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "repositories", label: "Repositories", count: reposCount, icon: FolderGit2 },
    { id: "projects", label: "Projects", count: projectsCount, icon: Code2 },
    { id: "experience", label: "Experience", count: expCount, icon: Terminal },
    { id: "education", label: "Education", count: eduCount, icon: GraduationCap },
    { id: "skills", label: "Skill Set", count: skillsCount, icon: Sparkles }
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-14 z-40 w-full border-b border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto scrollbar-none py-1.5" aria-label="Tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative inline-flex items-center gap-2 whitespace-nowrap px-3 py-2 text-xs sm:text-sm font-medium transition-colors border-b-2 -mb-[8px] ${
                  isActive
                    ? "border-[#fd8c73] text-[#1f2328] dark:text-[#f0f6fc] font-semibold"
                    : "border-transparent text-[#656d76] dark:text-[#8b949e] hover:text-[#1f2328] dark:hover:text-[#c9d1d9] hover:border-[#d0d7de] dark:hover:border-[#30363d]"
                }`}
              >
                <Icon size={16} className={isActive ? "text-[#1f2328] dark:text-[#f0f6fc]" : "text-[#656d76] dark:text-[#8b949e]"} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-mono leading-none ${
                      isActive
                        ? "bg-[#0969da]/10 text-[#0969da] dark:bg-[#58a6ff]/20 dark:text-[#58a6ff] font-semibold"
                        : "bg-[#afb8c1]/20 dark:bg-[#6e7681]/30 text-[#656d76] dark:text-[#8b949e]"
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
