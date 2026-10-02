import React, { useState } from "react";
import {
  Search,
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  Download,
  Code2,
  BookOpen,
  FolderGit2,
  Terminal,
  Eye
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface GitHubNavbarProps {
  onOpenCommandPalette: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  visitorCount?: number;
}

export default function GitHubNavbar({
  onOpenCommandPalette,
  activeTab,
  setActiveTab,
  visitorCount
}: GitHubNavbarProps) {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "repositories", label: "Repositories", count: 8, icon: FolderGit2 },
    { id: "projects", label: "Projects", count: 6, icon: Code2 },
    { id: "experience", label: "Experience", count: 3, icon: Terminal },
    { id: "skills", label: "Skills", count: 18, icon: Code2 },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22] text-[#1f2328] dark:text-[#c9d1d9] transition-colors">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Left: User repo link */}
        <div className="flex items-center gap-2.5">
          <a
            href="#overview"
            className="flex items-center gap-1.5 text-[#1f2328] dark:text-[#f0f6fc] hover:opacity-80 transition-opacity"
            title="Portfolio"
          >
            <span className="font-semibold text-sm sm:text-base text-[#1f2328] dark:text-[#f0f6fc]">
              Hangsovoleak
            </span>
          </a>

          <span className="text-[#656d76] dark:text-[#8b949e] font-mono text-xs">
            /
          </span>

          <a
            href="#overview"
            className="text-xs sm:text-sm font-semibold text-[#0969da] dark:text-[#58a6ff] hover:underline"
          >
            portfolio
          </a>

          <span className="rounded-full border border-[#d0d7de] dark:border-[#30363d] px-2 py-0.5 text-[10px] font-medium text-[#656d76] dark:text-[#8b949e]">
            Public
          </span>

          {visitorCount !== undefined && (
            <span
              className="hidden sm:inline-flex items-center gap-1 rounded-full border border-[#d0d7de] dark:border-[#30363d] px-2 py-0.5 text-[10px] font-medium text-[#656d76] dark:text-[#8b949e]"
              title="Total unique portfolio visitors"
            >
              <Eye size={11} className="text-[#1f883d] dark:text-[#3fb950]" />
              <span className="font-mono">{visitorCount.toLocaleString()}</span>
              <span>views</span>
            </span>
          )}
        </div>

        {/* Center: Search / Command Palette Input */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <button
            onClick={onOpenCommandPalette}
            type="button"
            className="w-full flex items-center justify-between rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] px-3 py-1.5 text-xs text-[#656d76] dark:text-[#8b949e] shadow-sm hover:border-[#0969da] dark:hover:border-[#58a6ff] transition-colors"
          >
            <div className="flex items-center gap-2">
              <Search size={14} />
              <span>Type <kbd className="font-mono rounded border border-[#d0d7de] dark:border-[#30363d] px-1 bg-[#f6f8fa] dark:bg-[#161b22] text-[10px]">/</kbd> or <kbd className="font-mono rounded border border-[#d0d7de] dark:border-[#30363d] px-1 bg-[#f6f8fa] dark:bg-[#161b22] text-[10px]">Cmd+K</kbd> to search...</span>
            </div>
            <span className="rounded border border-[#d0d7de] dark:border-[#30363d] px-1.5 py-0.5 text-[10px] font-mono bg-[#f6f8fa] dark:bg-[#161b22]">
              Find repo, skill, exp
            </span>
          </button>
        </div>

        {/* Right: Actions, Theme Switcher, Resume */}
        <div className="flex items-center gap-2">
          {/* Quick Command Palette on mobile */}
          <button
            onClick={onOpenCommandPalette}
            className="p-1.5 md:hidden rounded-md text-[#656d76] dark:text-[#8b949e] hover:bg-[#eaeef2] dark:hover:bg-[#21262d]"
            title="Search (Cmd+K)"
          >
            <Search size={16} />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center justify-center h-8 w-8 rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#21262d] text-[#1f2328] dark:text-[#c9d1d9] hover:bg-[#f6f8fa] dark:hover:bg-[#30363d] transition-colors"
            title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
          >
            {isDark ? <Sun size={15} className="text-[#e3b341]" /> : <Moon size={15} className="text-[#656d76]" />}
          </button>

          {/* Download Resume Button (Replaced GitHub Star button) */}
          <a
            href="/assets/resume.pdf"
            download="Rorn_Hangsovoleak_Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-md border border-[#1f883d] dark:border-[#238636] bg-[#1f883d] dark:bg-[#238636] px-2.5 sm:px-3 py-1 text-xs font-semibold text-white shadow-xs hover:bg-[#1a7f37] dark:hover:bg-[#2ea043] transition-colors"
            title="Download Resume (PDF)"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Download</span>
            <span>Resume</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 md:hidden rounded-md text-[#656d76] dark:text-[#8b949e] hover:bg-[#eaeef2] dark:hover:bg-[#21262d]"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#161b22] px-4 py-3 space-y-1">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeTab === item.id
                  ? "bg-[#0969da]/10 text-[#0969da] dark:text-[#58a6ff]"
                  : "text-[#1f2328] dark:text-[#c9d1d9] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <item.icon size={15} />
                <span>{item.label}</span>
              </div>
              {item.count !== undefined && (
                <span className="rounded-full bg-[#afb8c1]/20 dark:bg-[#6e7681]/40 px-2 py-0.5 text-[10px] font-mono">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
