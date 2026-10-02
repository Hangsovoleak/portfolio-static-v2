import React, { useEffect, useState } from "react";
import GitHubNavbar from "./components/GitHubNavbar";
import GitHubSubnav from "./components/GitHubSubnav";
import GitHubSidebar from "./components/GitHubSidebar";
import GitHubReadmeCard from "./components/GitHubReadmeCard";
import GitHubContributions from "./components/GitHubContributions";
import GitHubPinnedRepos from "./components/GitHubPinnedRepos";
import GitHubSkillSet from "./components/GitHubSkillSet";
import GitHubActivityTimeline from "./components/GitHubActivityTimeline";
import GitHubFooter from "./components/GitHubFooter";
import ProjectModal from "./components/ProjectModal";
import CertificateModal from "./components/CertificateModal";
import CommandPalette from "./components/CommandPalette";

import { fetchPortfolioData } from "./services/portfolioService";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useVisitorCount } from "./hooks/useVisitorCount";
import type { Project } from "./data/projects";

function PortfolioContent() {
  const { isDark } = useTheme();
  const { visitorCount } = useVisitorCount();

  // Data states
  const [profile, setProfile] = useState<any>(null);
  const [education, setEducation] = useState<any[]>([]);
  const [experience, setExperience] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Active navigation tab
  const [activeTab, setActiveTab] = useState("overview");

  // Modals state
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  useEffect(() => {
    async function loadPortfolio() {
      try {
        setIsLoading(true);
        const data = await fetchPortfolioData();
        setProfile(data.profile);
        setEducation(data.education);
        setExperience(data.experience);
        setProjects(data.projects);
      } catch (err) {
        console.error("Failed to load portfolio data:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadPortfolio();
  }, []);

  // Keyboard shortcut for Cmd+K / Ctrl+K and '/'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      } else if (e.key === "/" && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (isLoading) {
    return (
      <div className={`grid min-h-screen place-items-center font-mono text-xs ${
        isDark ? "bg-[#0d1117] text-[#c9d1d9]" : "bg-[#ffffff] text-[#1f2328]"
      }`}>
        <div className="flex flex-col items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#1f883d] dark:border-[#3fb950] border-t-transparent" />
          <span className="font-bold tracking-widest uppercase text-[#1f883d] dark:text-[#3fb950]">
            Initializing GitHub Portfolio Environment...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen text-left transition-colors duration-200 font-sans ${
      isDark ? "bg-[#0d1117] text-[#c9d1d9]" : "bg-[#ffffff] text-[#1f2328]"
    }`}>
      {/* Top GitHub Navbar */}
      <GitHubNavbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        visitorCount={visitorCount}
      />

      {/* GitHub Profile Sticky Subnav Tabs */}
      <GitHubSubnav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        reposCount={projects.length || 8}
        projectsCount={6}
        expCount={experience.length || 3}
        eduCount={education.length || 2}
        skillsCount={22}
      />

      {/* Main Two-Column GitHub Layout */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 sm:pt-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Authentic GitHub Profile Sidebar */}
          <GitHubSidebar
            profile={profile}
            visitorCount={visitorCount}
            onOpenContact={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Right Column: GitHub Profile Content */}
          <div className="flex-1 w-full min-w-0 space-y-8">
            {/* 1. GitHub README.md Card (Matching Image 1) */}
            <div id="overview">
              <GitHubReadmeCard profile={profile} visitorCount={visitorCount} />
            </div>

            {/* 2. GitHub Contribution Heatmap & 3D Radar (Matching Image 2 & Image 1) */}
            <GitHubContributions />

            {/* 3. Pinned Repositories Grid */}
            <GitHubPinnedRepos
              onSelectProject={(project) => setSelectedProject(project)}
            />

            {/* 4. Skill Set Matrix (Matching Image 1) */}
            <GitHubSkillSet />

            {/* 5. Career & Contribution Activity (Experience & Education) */}
            <GitHubActivityTimeline
              onOpenCertificate={() => setIsCertModalOpen(true)}
            />
          </div>
        </div>
      </main>

      {/* Authentic GitHub Footer */}
      <div id="contact">
        <GitHubFooter visitorCount={visitorCount} />
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          isDark={isDark}
        />
      )}

      {/* Certificate Viewer Modal */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        imageUrl="/assets/certificate.png"
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}

export default function Portfolio() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
