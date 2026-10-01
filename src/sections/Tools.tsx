import React, { useState, useMemo } from "react";
import { Wrench, Search, CheckCircle2 } from "lucide-react";
import { skillsData, SkillItem } from "../data/skills";
import { TechLogo } from "../components/TechLogos";
import { useTheme } from "../context/ThemeContext";

const CATEGORIES = ["All", "Frontend", "Backend", "Databases", "Tools & Workflow"];

export default function ToolsSection() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTool, setSelectedTool] = useState<SkillItem | null>(skillsData[0]);

  // Filter skills
  const filteredTools = useMemo(() => {
    return skillsData.filter((tool) => {
      const matchesCategory =
        activeCategory === "All" || tool.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.context.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="tools"
      className={`relative border-b py-24 transition-colors duration-300 ${
        isDark ? "border-slate-800/80 bg-[#0D1015]" : "border-stone-300/70 bg-[#F6F3EA]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-300/60 dark:border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
              <Wrench size={13} />
              <span>05 / TECHNICAL STACK</span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl font-sans">
              Developer <span className="text-emerald-500">Workbench</span>
            </h2>
            <p className={`mt-2 max-w-2xl text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Languages, frameworks, databases, and engineering environments utilized across client deliveries and system implementations.
            </p>
          </div>

          <div className={`hidden sm:flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-xs font-mono ${
            isDark ? "border-slate-800 bg-[#0D1424] text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700"
          }`}>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>{skillsData.length} Core Technologies</span>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 font-bold"
                      : isDark
                      ? "bg-[#0D1424] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                      : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search
              size={15}
              className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            />
            <input
              type="text"
              placeholder="Search stack or usage..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full rounded-xl border py-2 pl-9 pr-4 text-xs font-medium focus:border-emerald-500 focus:outline-none transition ${
                isDark
                  ? "border-slate-800 bg-[#0D1424] text-slate-100 placeholder-slate-500"
                  : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400"
              }`}
            />
          </div>
        </div>

        {/* Grid and Inspector Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tools Grid (8 cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredTools.map((tool) => {
                const isSelected = selectedTool?.name === tool.name;

                return (
                  <div
                    key={tool.name}
                    onClick={() => setSelectedTool(tool)}
                    className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                      isSelected
                        ? "border-emerald-500 bg-emerald-500/5 ring-1 ring-emerald-500/50"
                        : isDark
                        ? "border-slate-800/80 bg-[#121622] hover:border-slate-700"
                        : "border-stone-300/80 bg-white hover:border-stone-400 shadow-xs"
                    }`}
                  >
                    <div>
                      {/* Top icon and category */}
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900/40 p-2 border border-slate-700/50">
                          <TechLogo id={tool.iconId} className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider ${
                          tool.level === "Primary Stack"
                            ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                            : "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                        }`}>
                          {tool.level}
                        </span>
                      </div>

                      {/* Tool Name */}
                      <h4 className="mt-3 text-sm font-bold font-sans text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                        {tool.name}
                      </h4>

                      {/* Context / Application */}
                      <p className={`mt-1.5 text-xs leading-relaxed line-clamp-2 ${
                        isDark ? "text-slate-400" : "text-stone-600"
                      }`}>
                        {tool.context}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-stone-200 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>{tool.category}</span>
                      <span className="text-emerald-500 font-semibold group-hover:underline">Inspect ↗</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Tool Inspector Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-24">
            {selectedTool ? (
              <div className={`rounded-2xl border p-6 shadow-xl ${
                isDark ? "border-slate-800 bg-[#121622]" : "border-stone-300 bg-white"
              }`}>
                <div className="flex items-center justify-between border-b pb-4 border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 p-2.5 border border-slate-700">
                      <TechLogo id={selectedTool.iconId} className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-sans text-slate-900 dark:text-white">
                        {selectedTool.name}
                      </h3>
                      <span className="text-xs font-mono text-emerald-500 font-semibold">
                        {selectedTool.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-4 text-xs">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Skill Proficiency
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-bold text-emerald-500 border border-emerald-500/20">
                        {selectedTool.level}
                      </span>
                      <span className="text-slate-400 font-mono">Production Ready</span>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Applied Experience & Projects
                    </span>
                    <p className={`mt-1.5 leading-relaxed text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {selectedTool.context}
                    </p>
                  </div>

                  <div className={`rounded-xl border p-3.5 text-xs font-mono ${
                    isDark ? "border-slate-800 bg-slate-900/60 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700"
                  }`}>
                    <div className="flex items-center gap-1.5 text-emerald-500 font-bold mb-1">
                      <CheckCircle2 size={13} />
                      <span>Engineering Rigor</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Practiced through university software engineering courses and real-world client implementations.
                    </p>
                  </div>

                  <a
                    href="#projects"
                    className="mt-2 block w-full text-center rounded-xl bg-slate-900 dark:bg-white py-2.5 text-xs font-bold text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition"
                  >
                    View Projects Using This Stack
                  </a>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed p-8 text-center text-slate-400 font-mono text-xs">
                Select any technology to inspect its role and usage.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
