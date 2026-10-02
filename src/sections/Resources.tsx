import React from "react";
import {
  Code2,
  ShieldCheck,
  Database,
  Cloud,
  Palette,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const CAPABILITIES = [
  {
    id: "dsa",
    icon: Code2,
    code: "DSA",
    title: "Algorithms & Computational Logic",
    category: "FOUNDATIONS",
    description: "Graph theory, Dijkstra shortest path finding, binary trees, asymptotic analysis (Big-O), stacks, and queues implemented in Python and C++.",
    highlights: ["Dijkstra Shortest Path", "Graph Adjacency Lists", "Big-O Time Complexity"]
  },
  {
    id: "web",
    icon: Layers,
    code: "WEB",
    title: "Full-Stack Web Architecture",
    category: "APPLICATION DEV",
    description: "Component-driven frontend engineering with React & TypeScript paired with Python/Django backend services, RESTful endpoints, and JSON serialization.",
    highlights: ["React & TypeScript SPAs", "Django REST APIs", "Client-Server State Sync"]
  },
  {
    id: "db",
    icon: Database,
    code: "RDBMS",
    title: "Relational Database Design",
    category: "DATA PERSISTENCE",
    description: "Schema architecture in PostgreSQL, MySQL, and SQLite. Crafting normalized tables, foreign key constraints, indexing, and transactional integrity.",
    highlights: ["PostgreSQL & MySQL", "Normalized Schema Design", "Django ORM Queries"]
  },
  {
    id: "sec",
    icon: ShieldCheck,
    code: "SYS",
    title: "IT Support & System Defense",
    category: "SYSTEM INFRASTRUCTURE",
    description: "Hands-on workstation diagnostics, clean Windows OS installations, bootable recovery media generation, BIOS/UEFI resolution, and access control.",
    highlights: ["Hardware Troubleshooting", "Bootable USB Imaging", "OS Crash Diagnostics"]
  },
  {
    id: "uiux",
    icon: Palette,
    code: "DESIGN",
    title: "UI/UX Prototyping & Design Systems",
    category: "HUMAN-COMPUTER INTERACTION",
    description: "Crafting client-approved wireframes, design tokens, and responsive UI components in Figma before transforming them into pixel-perfect Tailwind CSS code.",
    highlights: ["Figma Design Systems", "Responsive Mobile-First", "High Contrast & Accessibility"]
  },
  {
    id: "ops",
    icon: Cloud,
    code: "DEVOPS",
    title: "Version Control & Deployment",
    category: "ENGINEERING WORKFLOW",
    description: "Git branching strategies, collaborative GitHub pull requests, continuous deployment on Vercel, and environment variable configuration.",
    highlights: ["Git & GitHub Workflows", "Vercel Continuous Deploy", "Clean Project Management"]
  }
];

export default function ResourcesSection() {
  const { isDark } = useTheme();

  return (
    <section
      id="resources"
      className={`relative border-b py-24 transition-colors duration-300 ${
        isDark ? "border-slate-800/80 bg-[#0D1015]" : "border-stone-300/70 bg-[#F2EFE6]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-300/60 dark:border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
              <Cpu size={13} />
              <span>06 / CORE CAPABILITIES</span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl font-sans">
              Engineering <span className="text-emerald-500">Disciplines</span>
            </h2>
            <p className={`mt-2 max-w-2xl text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-400" : "text-stone-600"}`}>
              Core computational strengths, software architecture principles, and engineering practices developed through academic studies and field experience.
            </p>
          </div>

          <div className={`hidden sm:flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-xs font-mono ${
            isDark ? "border-slate-800 bg-[#121622] text-slate-300" : "border-stone-300 bg-white text-stone-700 shadow-xs"
          }`}>
            <Sparkles size={14} className="text-emerald-500" />
            <span>6 Core Pillars</span>
          </div>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;

            return (
              <div
                key={cap.id}
                className={`group relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isDark
                    ? "border-slate-800/80 bg-[#121622] hover:border-emerald-500/50"
                    : "border-stone-300/80 bg-white hover:border-emerald-500/50 shadow-xs"
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Code */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 border border-slate-700/40 rounded-md px-2 py-0.5">
                      {cap.code}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mt-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {cap.category}
                    </span>
                    <h3 className="mt-1 text-lg font-bold font-sans tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      {cap.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={`mt-2.5 text-xs sm:text-sm leading-relaxed ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {cap.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.highlights.map((h) => (
                      <span
                        key={h}
                        className={`rounded-md px-2 py-0.5 text-[10px] font-mono font-medium ${
                          isDark
                            ? "bg-slate-900 text-slate-300 border border-slate-800"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

