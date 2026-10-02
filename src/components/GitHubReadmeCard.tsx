import React, { useState } from "react";
import {
  BookOpen,
  Copy,
  Check,
  Edit3,
  Eye
} from "lucide-react";
import type { Profile } from "../types/profile";

interface GitHubReadmeCardProps {
  profile: Profile;
  visitorCount?: number;
}

export default function GitHubReadmeCard({ profile, visitorCount }: GitHubReadmeCardProps) {
  const [copied, setCopied] = useState(false);
  const [activeView, setActiveView] = useState<"preview" | "raw">("preview");

  const handleCopy = () => {
    const rawMarkdown = `# ${profile?.name || "Rorn Hangsovoleak"}
### Full Stack Developer / Backend & DevOps / IT Engineering

## Who I Am
${profile?.bio || ""}

## What I Do
- Full Stack Web Development with React.js, TypeScript, and Tailwind CSS.
- Robust Backend Engineering with Python, Django, FastAPI, and PostgreSQL.
- Algorithm & Graph Data Structure Systems (Dijkstra, Tree Traversal).

## Connect
- GitHub: https://github.com/Hangsovoleak
- LinkedIn: https://linkedin.com/in/hangsovoleak
- Email: ${profile?.email || "hangsovoleak.dev@gmail.com"}
- Telegram: https://t.me/hangsovoleak
`;
    navigator.clipboard.writeText(rawMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Sample pixel grid matrix data for the pixel art banner matching Image 1
  const pixelRows = [
    [1, 0, 2, 3, 1, 0, 4, 2, 1, 3, 0, 1, 2, 4, 3, 1, 0, 0, 0, 2, 3, 4, 1, 0, 2, 3, 1, 4, 2, 0, 1, 3],
    [3, 2, 1, 4, 0, 1, 3, 2, 4, 1, 2, 0, 3, 1, 0, 0, 0, 0, 0, 1, 2, 0, 3, 4, 2, 1, 0, 3, 4, 2, 1, 0],
    [2, 4, 3, 1, 2, 0, 1, 4, 3, 0, 2, 1, 4, 0, 0, 0, 0, 0, 0, 0, 1, 3, 2, 1, 4, 0, 3, 2, 1, 0, 4, 2],
    [0, 1, 4, 2, 3, 1, 0, 2, 1, 4, 0, 3, 2, 1, 0, 0, 0, 0, 0, 2, 4, 1, 0, 3, 2, 1, 4, 0, 2, 3, 1, 4]
  ];

  const getPixelColor = (val: number) => {
    switch (val) {
      case 1:
        return "bg-[#0e4429] dark:bg-[#0e4429] border-[#006d32]/30";
      case 2:
        return "bg-[#006d32] dark:bg-[#006d32] border-[#26a641]/30";
      case 3:
        return "bg-[#26a641] dark:bg-[#26a641] border-[#39d353]/30";
      case 4:
        return "bg-[#39d353] dark:bg-[#39d353] border-white/40 shadow-xs shadow-[#39d353]/50";
      default:
        return "bg-[#ebedf0] dark:bg-[#161b22] border-transparent";
    }
  };

  return (
    <div className="rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] overflow-hidden shadow-xs">
      {/* Box Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22] px-4 py-2 text-xs">
        <div className="flex items-center gap-2 font-mono text-[#1f2328] dark:text-[#c9d1d9]">
          <BookOpen size={14} className="text-[#656d76] dark:text-[#8b949e]" />
          <span className="font-semibold text-[#0969da] dark:text-[#58a6ff]">Hangsovoleak</span>
          <span className="text-[#656d76] dark:text-[#8b949e]">/</span>
          <span className="font-bold text-[#1f2328] dark:text-[#f0f6fc]">README.md</span>
          {visitorCount !== undefined && (
            <span
              className="hidden sm:inline-flex items-center gap-1 rounded-full border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] px-2 py-0.5 text-[10px] font-mono text-[#656d76] dark:text-[#8b949e]"
              title="Total portfolio visitors"
            >
              <Eye size={11} className="text-[#1f883d] dark:text-[#3fb950]" />
              <strong className="text-[#1f2328] dark:text-[#f0f6fc]">{visitorCount.toLocaleString()}</strong>
              <span>visitors</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveView("preview")}
            className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
              activeView === "preview"
                ? "bg-white dark:bg-[#0d1117] font-semibold text-[#1f2328] dark:text-[#f0f6fc] shadow-xs"
                : "text-[#656d76] dark:text-[#8b949e] hover:text-[#1f2328] dark:hover:text-[#c9d1d9]"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveView("raw")}
            className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
              activeView === "raw"
                ? "bg-white dark:bg-[#0d1117] font-semibold text-[#1f2328] dark:text-[#f0f6fc] shadow-xs"
                : "text-[#656d76] dark:text-[#8b949e] hover:text-[#1f2328] dark:hover:text-[#c9d1d9]"
            }`}
          >
            Raw
          </button>
          <span className="text-[#d0d7de] dark:text-[#30363d]">|</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded p-1 text-[#656d76] dark:text-[#8b949e] hover:text-[#0969da] dark:hover:text-[#58a6ff] hover:bg-[#eaeef2] dark:hover:bg-[#21262d] transition-colors"
            title="Copy raw markdown"
          >
            {copied ? <Check size={13} className="text-[#1f883d] dark:text-[#3fb950]" /> : <Copy size={13} />}
          </button>
          <a
            href="https://github.com/Hangsovoleak"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded p-1 text-[#656d76] dark:text-[#8b949e] hover:text-[#0969da] dark:hover:text-[#58a6ff] hover:bg-[#eaeef2] dark:hover:bg-[#21262d] transition-colors"
            title="Edit on GitHub"
          >
            <Edit3 size={13} />
          </a>
        </div>
      </div>

      {/* Raw Markdown View */}
      {activeView === "raw" ? (
        <div className="p-4 bg-[#f6f8fa] dark:bg-[#0d1117] font-mono text-xs text-[#1f2328] dark:text-[#c9d1d9] overflow-x-auto whitespace-pre leading-relaxed">
{`# Rorn Hangsovoleak
### Software Engineer & Full-Stack Developer
**Location:** Phnom Penh, Cambodia | **Status:** Open to Work

## Bio
${profile?.bio}

## Core Competencies
- Frontend: React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Figma
- Backend: Python, Django, FastAPI, REST APIs, JSON APIs, MySQL, PostgreSQL
- Algorithms: Dijkstra Graph Routing, Tree Structures, OOP (C++, Java)
- Systems: Windows OS, Bootable Utilities, IT Hardware Support & Troubleshooting

## Academic Background
- Royal University of Phnom Penh (RUPP) — Bachelor of IT Engineering
- Tux Global Institute — Associate Degree in App & Web Development`}
        </div>
      ) : (
        /* Preview / Rich Rendered View Matching Image 1 */
        <div className="p-4 sm:p-6 lg:p-8 space-y-8">
          
          {/* 1. Header Banner Box Matching Image 1 */}
          <div className="relative overflow-hidden rounded-lg border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22] p-5 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono font-semibold tracking-wider text-[#656d76] dark:text-[#8b949e]">
                  Hangsovoleak / README.md
                </div>
                <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight font-mono text-[#1f2328] dark:text-[#f0f6fc]">
                  RORN HANGSOVOLEAK
                </h1>
                <p className="mt-1 text-xs sm:text-sm font-mono font-semibold text-[#0969da] dark:text-[#58a6ff] tracking-wide">
                  FULL-STACK DEVELOPER / BACKEND & DEVOPS / IT ENGINEERING
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#1f883d]/40 dark:border-[#238636] bg-[#dafbe1] dark:bg-[#238636]/20 px-3 py-1 text-xs font-mono font-bold text-[#1a7f37] dark:text-[#3fb950] self-start sm:self-auto">
                <span className="h-2 w-2 rounded-full bg-[#1f883d] dark:bg-[#3fb950] animate-pulse" />
                <span>OPEN FOR ROLES</span>
              </div>
            </div>

            {/* Pixel Art / Contribution Matrix Banner Graphic (Matching Image 1!) */}
            <div className="mt-5 rounded-md border border-[#d0d7de]/70 dark:border-[#30363d] bg-white/60 dark:bg-[#0d1117]/80 p-3 overflow-hidden">
              <div className="grid grid-rows-4 gap-1 w-full overflow-x-auto py-1">
                {pixelRows.map((row, rIdx) => (
                  <div key={rIdx} className="flex gap-1 justify-between min-w-[500px]">
                    {row.map((cell, cIdx) => (
                      <div
                        key={cIdx}
                        className={`h-2.5 sm:h-3 flex-1 rounded-[2px] border ${getPixelColor(cell)} transition-all duration-300 hover:scale-125 hover:z-10`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-[#656d76] dark:text-[#8b949e]">
                <span>&lt;commit-stream active=&quot;true&quot;&gt;</span>
                <span className="font-semibold text-[#0969da] dark:text-[#58a6ff]">AI &amp; FULL STACK / REST APIS</span>
              </div>
            </div>
          </div>

          {/* 2. Structured Section Cards Matching Image 1 (WHO I AM, WHAT I DO, VISION, BEYOND CODE) */}
          <div className="grid gap-5">
            {/* WHO I AM */}
            <div className="rounded-lg border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa]/60 dark:bg-[#161b22]/50 p-4 sm:p-5 transition hover:border-[#0969da] dark:hover:border-[#58a6ff]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-sm bg-[#0969da] dark:bg-[#58a6ff]" />
                <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#1f2328] dark:text-[#f0f6fc]">
                  WHO I AM
                </h2>
              </div>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#1f2328] dark:text-[#c9d1d9] font-sans">
                Hey, I&apos;m <strong>Hangsovoleak</strong> — an Information Technology Engineering student based in Phnom Penh, Cambodia. I concurrently study at the <strong>Royal University of Phnom Penh (RUPP)</strong> and complete an Associate Degree in Web &amp; App Development at <strong>Tux Global Institute</strong>. I am deeply passionate about building practical software tools that simplify operations and turn complex systems into accessible solutions.
              </p>
            </div>

            {/* WHAT I DO */}
            <div className="rounded-lg border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa]/60 dark:bg-[#161b22]/50 p-4 sm:p-5 transition hover:border-[#1f883d] dark:hover:border-[#3fb950]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-sm bg-[#1f883d] dark:bg-[#3fb950]" />
                <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#1f2328] dark:text-[#f0f6fc]">
                  WHAT I DO
                </h2>
              </div>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#1f2328] dark:text-[#c9d1d9] font-sans">
                I build responsive web applications, REST APIs, algorithmic solutions, and desktop utilities. From developing client-facing platforms like <em>E-Robot Cambodia V2</em> in React and Tailwind CSS, to architecting live weather surveillance portals in Python/Django consuming OpenWeatherMap APIs, and implementing graph algorithms like Dijkstra shortest-path finders.
              </p>
            </div>

            {/* VISION */}
            <div className="rounded-lg border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa]/60 dark:bg-[#161b22]/50 p-4 sm:p-5 transition hover:border-[#8250df] dark:hover:border-[#bc8cff]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-sm bg-[#8250df] dark:bg-[#bc8cff]" />
                <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#1f2328] dark:text-[#f0f6fc]">
                  VISION
                </h2>
              </div>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#1f2328] dark:text-[#c9d1d9] font-sans">
                My goal is to develop clean, resilient software systems that empower local communities and contribute to Cambodia&apos;s growing tech ecosystem. I strive to work with teams that value engineering craftsmanship, accessibility, and high performance — putting user needs and human impact first.
              </p>
            </div>

            {/* BEYOND CODE */}
            <div className="rounded-lg border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa]/60 dark:bg-[#161b22]/50 p-4 sm:p-5 transition hover:border-[#d29922]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-sm bg-[#d29922]" />
                <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#1f2328] dark:text-[#f0f6fc]">
                  BEYOND CODE
                </h2>
              </div>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#1f2328] dark:text-[#c9d1d9] font-sans">
                Volunteering as a teacher of Scratch visual programming for young students at E-Robot, diagnosing computer hardware and building bootable media at Tech for Kids Academy, and participating in peer code reviews and tech meetups.
              </p>
            </div>
          </div>

          {/* 3. Connect & Social Media Matrix (Matching Image 1 Table!) */}
          <div className="rounded-lg border border-[#d0d7de] dark:border-[#30363d] overflow-hidden">
            <div className="bg-[#f6f8fa] dark:bg-[#161b22] px-4 py-2 border-b border-[#d0d7de] dark:border-[#30363d]">
              <span className="text-xs font-mono font-bold text-[#1f2328] dark:text-[#f0f6fc]">
                CONNECT &amp; PROFILES
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-[#d0d7de] dark:divide-[#30363d] bg-white dark:bg-[#0d1117] text-center">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/hangsovoleak"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0077b5]/15 text-[#0077b5] group-hover:scale-110 transition-transform">
                  <span className="font-bold text-lg font-mono">in</span>
                </div>
                <span className="mt-2 text-xs font-mono font-semibold text-[#1f2328] dark:text-[#c9d1d9]">
                  LinkedIn
                </span>
                <span className="text-[10px] text-[#656d76] dark:text-[#8b949e]">Professional</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Hangsovoleak"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#24292f]/10 dark:bg-white/10 text-[#1f2328] dark:text-white group-hover:scale-110 transition-transform">
                  <span className="font-bold text-lg font-mono">gh</span>
                </div>
                <span className="mt-2 text-xs font-mono font-semibold text-[#1f2328] dark:text-[#c9d1d9]">
                  GitHub
                </span>
                <span className="text-[10px] text-[#656d76] dark:text-[#8b949e]">Repositories</span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/hangsovoleak"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#229ed9]/15 text-[#229ed9] group-hover:scale-110 transition-transform">
                  <span className="font-bold text-lg font-mono">tg</span>
                </div>
                <span className="mt-2 text-xs font-mono font-semibold text-[#1f2328] dark:text-[#c9d1d9]">
                  Telegram
                </span>
                <span className="text-[10px] text-[#656d76] dark:text-[#8b949e]">@hangsovoleak</span>
              </a>

              {/* Gmail */}
              <a
                href="mailto:hangsovoleak.dev@gmail.com"
                className="group flex flex-col items-center justify-center p-4 hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ea4335]/15 text-[#ea4335] group-hover:scale-110 transition-transform">
                  <span className="font-bold text-lg font-mono">M</span>
                </div>
                <span className="mt-2 text-xs font-mono font-semibold text-[#1f2328] dark:text-[#c9d1d9]">
                  Gmail
                </span>
                <span className="text-[10px] text-[#656d76] dark:text-[#8b949e]">Inquiries</span>
              </a>

              {/* Figma */}
              <a
                href="https://www.figma.com/design/eYExtVG9Swtr3so26n6bDK/E-Robot?node-id=0-1&t=RP0uCX0TDvgBTzZ8-1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f24e1e]/15 text-[#f24e1e] group-hover:scale-110 transition-transform">
                  <span className="font-bold text-lg font-mono">Fg</span>
                </div>
                <span className="mt-2 text-xs font-mono font-semibold text-[#1f2328] dark:text-[#c9d1d9]">
                  Figma
                </span>
                <span className="text-[10px] text-[#656d76] dark:text-[#8b949e]">UI Designs</span>
              </a>

              {/* Certificate */}
              <a
                href="/assets/certificate.png"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00a884]/15 text-[#00a884] group-hover:scale-110 transition-transform">
                  <span className="font-bold text-lg font-mono">CV</span>
                </div>
                <span className="mt-2 text-xs font-mono font-semibold text-[#1f2328] dark:text-[#c9d1d9]">
                  Certificate
                </span>
                <span className="text-[10px] text-[#656d76] dark:text-[#8b949e]">Tech For Kids</span>
              </a>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
