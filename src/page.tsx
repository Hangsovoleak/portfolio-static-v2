import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from "./sections/About";
import ProjectsSection from "./sections/Projects";
import ExperienceSection from "./sections/Experience";
import EducationSection from "./sections/Education";
import ToolsSection from "./sections/Tools";
import ResourcesSection from "./sections/Resources";
import SkillsSection from "./sections/Skills";
import CommandPalette from "./components/CommandPalette";

import { fetchPortfolioData } from "./services/portfolioService";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function PortfolioContent() {
  const { isDark } = useTheme();

  // Data states
  const [profile, setProfile] = useState<any>(null);
  const [education, setEducation] = useState<any[]>([]);
  const [experience, setExperience] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Command palette state
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

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

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (isLoading) {
    return (
      <div className={`grid min-h-screen place-items-center font-mono text-xs ${
        isDark ? "bg-[#080C16] text-white" : "bg-white text-slate-900"
      }`}>
        <div className="flex flex-col items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
          <span className="font-bold tracking-widest uppercase text-emerald-500">
            Initializing Portfolio Environment...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen text-left transition-colors duration-300 font-sans ${
      isDark ? "bg-[#0D1015] text-slate-100" : "bg-[#F6F3EA] text-stone-900"
    }`}>
      {/* Top Navbar */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <AboutSection profile={profile} />
        <ProjectsSection projects={projects} />
        <ExperienceSection items={experience} />
        <EducationSection items={education} />
        <ToolsSection />
        <ResourcesSection />
        <SkillsSection />
      </main>

      {/* Footer / Contact */}
      <Footer email={profile?.email || "hangsovoleak.dev@gmail.com"} />

      {/* Command Palette Modal */}
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
