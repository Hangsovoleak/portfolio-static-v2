import React, { useState, useEffect, useRef } from "react";
import { Search, ArrowRight, Sun, Moon, Github, Linkedin, Mail, ExternalLink, X } from "lucide-react";
import { projectsData } from "../data/projects";
import { useTheme } from "../context/ThemeContext";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const { isDark, toggleTheme } = useTheme();
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearch("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or state
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hangsovoleak.dev@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const filteredProjects = projectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Palette Container */}
      <div
        className={`relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border shadow-2xl transition-all ${
          isDark
            ? "border-slate-800 bg-[#121622] text-slate-100"
            : "border-stone-300 bg-white text-stone-900"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="flex items-center gap-3 border-b px-4 py-3.5 border-slate-200 dark:border-slate-800">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search projects & sections..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm font-medium focus:outline-none placeholder-slate-400"
          />
          <button
            onClick={onClose}
            className="rounded p-1 text-slate-400 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-2 text-xs space-y-4 font-mono">
          
          {/* Section: Navigation */}
          <div>
            <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </div>
            <div className="space-y-0.5">
              {[
                { id: "about", label: "About Me & Introduction" },
                { id: "projects", label: "Featured Engineering Projects" },
                { id: "experience", label: "Work & Volunteer Experience" },
                { id: "education", label: "Academic Journey & Qualifications" },
                { id: "tools", label: "Developer Workbench & Tech Stack" },
                { id: "skills", label: "Code Craftsmanship & Architecture" },
                { id: "contact", label: "Direct Contact & Inquiry Form" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                    isDark ? "hover:bg-slate-800/80 text-slate-200" : "hover:bg-slate-100 text-slate-800"
                  }`}
                >
                  <span className="font-sans font-semibold">{item.label}</span>
                  <span className="text-[10px] text-slate-500 font-mono">Jump ↵</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section: Quick Actions */}
          <div>
            <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Quick Actions
            </div>
            <div className="space-y-0.5">
              <button
                onClick={copyEmail}
                className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                  isDark ? "hover:bg-slate-800/80 text-slate-200" : "hover:bg-slate-100 text-slate-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-emerald-500" />
                  <span className="font-sans font-semibold">Copy Email Address</span>
                </div>
                <span className="text-emerald-500 font-bold">{copied ? "Copied!" : "Copy"}</span>
              </button>

              <button
                onClick={() => { toggleTheme(); onClose(); }}
                className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                  isDark ? "hover:bg-slate-800/80 text-slate-200" : "hover:bg-slate-100 text-slate-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  {isDark ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} className="text-blue-500" />}
                  <span className="font-sans font-semibold">Switch to {isDark ? "Light" : "Dark"} Mode</span>
                </div>
                <span className="text-[10px] text-slate-500">Toggle</span>
              </button>

              <a
                href="https://github.com/Hangsovoleak"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                  isDark ? "hover:bg-slate-800/80 text-slate-200" : "hover:bg-slate-100 text-slate-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Github size={14} />
                  <span className="font-sans font-semibold">Visit GitHub Profile</span>
                </div>
                <ExternalLink size={12} className="text-slate-400" />
              </a>

              <a
                href="https://linkedin.com/in/hangsovoleak"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                  isDark ? "hover:bg-slate-800/80 text-slate-200" : "hover:bg-slate-100 text-slate-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Linkedin size={14} className="text-blue-500" />
                  <span className="font-sans font-semibold">Visit LinkedIn Profile</span>
                </div>
                <ExternalLink size={12} className="text-slate-400" />
              </a>
            </div>
          </div>

          {/* Section: Projects Search */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Projects ({filteredProjects.length})
              </div>
              <div className="space-y-0.5">
                {filteredProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      navigateTo("projects");
                    }}
                    className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                      isDark ? "hover:bg-slate-800/80 text-slate-200" : "hover:bg-slate-100 text-slate-800"
                    }`}
                  >
                    <div>
                      <div className="font-sans font-semibold">{p.title}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{p.category} · {p.tags.slice(0, 2).join(", ")}</div>
                    </div>
                    <ArrowRight size={13} className="text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className={`flex items-center justify-between border-t px-4 py-2 text-[10px] font-mono text-slate-500 ${
          isDark ? "border-slate-800 bg-[#090D17]" : "border-slate-100 bg-slate-50"
        }`}>
          <span>Navigation Shortcuts</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
