import React, { useState } from "react";

interface SkillCard {
  name: string;
  category: "Languages" | "Frameworks" | "Databases" | "Tools & Systems";
  badge: string;
  color: string;
  level: string;
}

export default function GitHubSkillSet() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const skills: SkillCard[] = [
    // Languages
    { name: "Python", category: "Languages", badge: "PY", color: "#3776AB", level: "Primary Stack" },
    { name: "TypeScript", category: "Languages", badge: "TS", color: "#3178C6", level: "Advanced" },
    { name: "JavaScript", category: "Languages", badge: "JS", color: "#F7DF1E", level: "Primary Stack" },
    { name: "C++", category: "Languages", badge: "C++", color: "#00599C", level: "Data Structures & OOP" },
    { name: "SQL", category: "Languages", badge: "SQL", color: "#336791", level: "Relational Queries" },
    { name: "HTML5", category: "Languages", badge: "HTML", color: "#E34F26", level: "Semantic Markup" },
    { name: "CSS3", category: "Languages", badge: "CSS", color: "#1572B6", level: "Modern CSS" },

    // Frameworks & Libraries
    { name: "React.js", category: "Frameworks", badge: "REACT", color: "#61DAFB", level: "Primary Frontend" },
    { name: "Django", category: "Frameworks", badge: "DJ", color: "#092E20", level: "Primary Backend" },
    { name: "FastAPI", category: "Frameworks", badge: "FAST", color: "#009688", level: "High Performance APIs" },
    { name: "Tailwind CSS", category: "Frameworks", badge: "TW", color: "#06B6D4", level: "Production Styling" },
    { name: "REST APIs", category: "Frameworks", badge: "REST", color: "#FF5722", level: "API Integrations" },
    { name: "Node.js", category: "Frameworks", badge: "NODE", color: "#339933", level: "Runtime & Tooling" },

    // Databases
    { name: "PostgreSQL", category: "Databases", badge: "PG", color: "#4169E1", level: "Relational DB" },
    { name: "MySQL", category: "Databases", badge: "MYSQL", color: "#4479A1", level: "Relational DB" },
    { name: "SQLite", category: "Databases", badge: "SQLITE", color: "#003B57", level: "Local & Dev DB" },

    // Tools & Systems
    { name: "Git & GitHub", category: "Tools & Systems", badge: "GIT", color: "#F05032", level: "Version Control" },
    { name: "Figma", category: "Tools & Systems", badge: "FIGMA", color: "#F24E1E", level: "UI/UX Design Systems" },
    { name: "Linux / Bash", category: "Tools & Systems", badge: "CLI", color: "#FCC624", level: "CLI & System Admin" },
    { name: "Postman", category: "Tools & Systems", badge: "POST", color: "#FF6C37", level: "API Testing & Docs" },
    { name: "Windows OS", category: "Tools & Systems", badge: "WIN", color: "#0078D6", level: "IT Support & Setup" },
    { name: "Bootable Media", category: "Tools & Systems", badge: "USB", color: "#238636", level: "Diagnostics & Imaging" }
  ];

  const categories = ["All", "Languages", "Frameworks", "Databases", "Tools & Systems"];

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <div id="skills" className="mt-8 rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] p-5 shadow-xs">
      {/* Header Matching Image 1 "SKILL SET" with pixel matrix bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#d0d7de] dark:border-[#30363d] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#1f2328] dark:text-[#f0f6fc]">
              SKILL SET
            </h2>
            <span className="rounded-full bg-[#afb8c1]/20 dark:bg-[#6e7681]/30 px-2 py-0.5 text-[10px] font-mono text-[#656d76] dark:text-[#8b949e]">
              22 Technologies
            </span>
          </div>
          <p className="mt-1 text-xs text-[#656d76] dark:text-[#8b949e]">
            Hands-on technical stack utilized across frontend, backend, databases, and IT systems
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-colors ${
                activeCategory === cat
                  ? "bg-[#0969da] text-white font-semibold"
                  : "bg-[#f6f8fa] dark:bg-[#161b22] text-[#656d76] dark:text-[#8b949e] hover:text-[#1f2328] dark:hover:text-[#f0f6fc] border border-[#d0d7de] dark:border-[#30363d]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tech Badges Matching Image 1 Matrix */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center justify-center p-3 rounded-lg border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa]/60 dark:bg-[#161b22]/50 hover:border-[#0969da] dark:hover:border-[#58a6ff] hover:bg-white dark:hover:bg-[#161b22] transition-all hover:scale-105"
          >
            {/* Tech Logo / Badge Icon */}
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white font-mono font-black text-xs shadow-xs"
              style={{ backgroundColor: skill.color }}
            >
              <span>{skill.badge}</span>
            </div>

            {/* Name */}
            <span className="mt-2 text-xs font-semibold text-[#1f2328] dark:text-[#f0f6fc] text-center">
              {skill.name}
            </span>

            {/* Level / Purpose */}
            <span className="text-[10px] text-[#656d76] dark:text-[#8b949e] text-center line-clamp-1 mt-0.5">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
