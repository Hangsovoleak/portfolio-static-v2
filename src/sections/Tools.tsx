/**
 * Description:
 *      Tools Ecosystem section redesigned after the Shock-Responsive Resilience Hub layout:
 *      - Left Column: Headline, sub-description, and anchored active tool detail card.
 *      - Right Column: Central Hub & Concentric Orbit diagram with brand vector logos positioned on orbit nodes.
 *      - Bottom Grid: 15 official brand vector logo cards for complete stack exploration.
 */

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/*------------------------------------------------------------------------------
                   EXACT OFFICIAL BRAND LOGO SVG COMPONENTS
------------------------------------------------------------------------------*/

function GitHubLogo({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}

function FigmaLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded Figma vector (media_1790136630328)
    return (
        <svg className={className} viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5S19 33.747 19 28.5z" fill="#1ABCFE" />
            <path d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5S0 52.747 0 47.5z" fill="#0ACF83" />
            <path d="M19 0v19h9.5c5.247 0 9.5-4.253 9.5-9.5S33.747 0 28.5 0H19z" fill="#FF7262" />
            <path d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z" fill="#F24E1E" />
            <path d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z" fill="#A259FF" />
        </svg>
    );
}

function VSCodeLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded VSCode vector (media_1790136630373)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <path d="M72.2 4.5L34.1 36.2l-20-15.2L2.5 27.8l20 22.2L2.5 72.2l11.6 6.8 20-15.2 38.1 31.7c2.9 2.4 7.3.3 7.3-3.6V8.1c0-3.9-4.4-6-7.3-3.6zM72 73.5L44.5 50 72 26.5v47z" fill="#007ACC" />
            <path d="M72.2 4.5l-38.1 31.7 37.9 37.3V4.5z" fill="#1F9CF0" />
            <path d="M72.2 95.5l-38.1-31.7 37.9-37.3v69s.2 0 .2 0z" fill="#0065A9" />
        </svg>
    );
}

function ReactLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded React vector (media_1790136630419)
    return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    );
}

function DjangoLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded Django vector (media_1790136630462)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <rect width="100" height="100" rx="20" fill="#092E20" />
            <path d="M43.8 22h11.2v56a17.5 17.5 0 01-17.5 17.5H31V84.2h3.8a7.5 7.5 0 007.5-7.5V22zm-26.2 30A15.6 15.6 0 0133.2 36.5v31A15.6 15.6 0 0117.6 52zm43.9-30h11.2v11.2H61.5V22zm0 17.5h11.2v38.5H61.5V39.5z" fill="#FFFFFF" />
        </svg>
    );
}

function PostmanLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded Postman spaceman vector (media_1790136630504)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="50" fill="#FF6C37" />
            <path d="M72.2 24.5a14.5 14.5 0 00-20.5 0L37.8 38.4l-7.3-7.3a4.2 4.2 0 00-6 6l7.3 7.3L20 56.2a4.2 4.2 0 006 6l11.8-11.8 13.9 13.9a14.5 14.5 0 0020.5-20.5L72.2 24.5zm-5 15.5a7.4 7.4 0 11-10.4-10.4L64 22.8A7.4 7.4 0 0167.2 40z" fill="#FFFFFF" />
        </svg>
    );
}

function DrawIoLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded Draw.io 3D orange vector (media_1790136791698)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <rect width="100" height="100" rx="16" fill="#F08705" />
            <path d="M50 18c-4.5 0-8 3.5-8 8v12H26c-4.5 0-8 3.5-8 8v22c0 4.5 3.5 8 8 8h16c4.5 0 8-3.5 8-8V56h16v12c0 4.5 3.5 8 8 8h16c4.5 0 8-3.5 8-8V46c0-4.5-3.5-8-8-8H58V26c0-4.5-3.5-8-8-8z" fill="#FFFFFF" />
            <path d="M74 46L26 94h74V46z" fill="#D97400" fillOpacity="0.3" />
        </svg>
    );
}

function ColabLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded Google Colab interlocking "co" vector (media_1790136791739)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <path d="M30 20C16.2 20 5 31.2 5 45s11.2 25 25 25c7.5 0 14.3-3.3 19-8.5C53.7 66.7 60.5 70 68 70c13.8 0 25-11.2 25-25S81.8 20 68 20c-7.5 0-14.3 3.3-19 8.5C44.3 23.3 37.5 20 30 20zm0 15c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10zm38 0c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10z" fill="#F9AB00" />
            <path d="M30 20c-7.5 0-14.3 3.3-19 8.5L25 45l14-16.5C34.3 23.3 37.5 20 30 20z" fill="#E37400" />
            <path d="M68 70c7.5 0 14.3-3.3 19-8.5L73 45l-14 16.5c4.7 5.2 11.5 8.5 19 8.5z" fill="#E37400" />
        </svg>
    );
}

function JupyterLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded Jupyter orange crescents & gray moons vector (media_1790136791781)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <path d="M18 36c18-16 46-16 64 0-16 10-48 10-64 0z" fill="#F37626" />
            <path d="M18 64c18 16 46 16 64 0-16-10-48-10-64 0z" fill="#F37626" />
            <circle cx="21" cy="18" r="7" fill="#767676" />
            <circle cx="79" cy="10" r="8" fill="#767676" />
            <circle cx="23" cy="88" r="9" fill="#767676" />
        </svg>
    );
}

function NotionLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded Notion 3D isometric cube vector (media_1790136791823)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <path d="M10 20L80 8v72L10 92V20z" fill="#000000" />
            <path d="M10 20l70-12 10 10-70 12L10 20z" fill="#000000" />
            <rect x="25" y="26" width="60" height="58" rx="6" fill="#FFFFFF" stroke="#000000" strokeWidth="7" />
            <path d="M40 37l25 35V37h8v35H63L38 37v35h-8V37h10z" fill="#000000" />
        </svg>
    );
}

function AntigravityLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded Antigravity rainbow gradient arch vector (media_1790136791866)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <defs>
                <linearGradient id="agyGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="35%" stopColor="#10B981" />
                    <stop offset="70%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
            </defs>
            <path d="M10 90C10 35 32 10 50 10s40 25 40 80c-18-40-30-50-40-50s-22 10-40 50z" fill="url(#agyGrad)" />
        </svg>
    );
}

function ScratchLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded Scratch cyan & yellow logo vector (media_1790136912386)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" fill="#1697F6" />
            <path d="M12 42c8-4 22 4 38 0s28-4 38 0c4 4 0 20-4 20H16c-4 0-8-16-4-20z" fill="#FFFFFF" />
            <text x="50" y="57" textAnchor="middle" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="#F4A000" stroke="#FFFFFF" strokeWidth="0.8">SCRATCH</text>
        </svg>
    );
}

function PyCharmLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded PyCharm JetBrains polygon vector (media_1790136912431)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <path d="M10 20L40 0l50 15L80 80L30 100L0 70z" fill="#21D789" />
            <path d="M30 100L90 90L100 40L60 10z" fill="#FCE600" />
            <path d="M70 20L100 40L80 80z" fill="#00C7B7" />
            <rect x="20" y="20" width="60" height="60" fill="#000000" />
            <text x="26" y="53" fontFamily="sans-serif" fontSize="32" fontWeight="900" fill="#FFFFFF">PC</text>
            <rect x="26" y="65" width="22" height="4" fill="#FFFFFF" />
        </svg>
    );
}

function IntelliJLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded IntelliJ JetBrains polygon vector (media_1790136912474)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <path d="M20 10L80 0l20 50L60 100L10 80z" fill="#FE2857" />
            <path d="M60 100L100 70L80 10z" fill="#007ACC" />
            <path d="M10 40L40 90L0 70z" fill="#A259FF" />
            <rect x="24" y="24" width="56" height="56" fill="#000000" />
            <text x="32" y="54" fontFamily="sans-serif" fontSize="30" fontWeight="900" fill="#FFFFFF">IJ</text>
            <rect x="30" y="64" width="20" height="4" fill="#FFFFFF" />
        </svg>
    );
}

function BashLogo({ className = "h-6 w-6" }: { className?: string }) {
    // Exact match to user uploaded Terminal Bash isometric cube vector (media_1790136912516)
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <path d="M50 10L90 30v40L50 90L10 70V30z" fill="#FFFFFF" stroke="#2D3748" strokeWidth="6" strokeLinejoin="round" />
            <path d="M50 10L90 30L50 50L10 30z" fill="#FFFFFF" stroke="#2D3748" strokeWidth="4" />
            <path d="M50 50v40L90 70V30z" fill="#2D3748" />
            <text x="56" y="70" fontFamily="monospace" fontSize="22" fontWeight="bold" fill="#FFFFFF">$</text>
            <rect x="74" y="66" width="10" height="4" fill="#48BB78" />
        </svg>
    );
}

/*------------------------------------------------------------------------------
                                 TOOLS DATA (15 items)
------------------------------------------------------------------------------*/
const TOOLS_LIST = [
    {
        id: "git",
        name: "Git / GitHub",
        category: "Version Control & Hosting",
        abbr: "GIT",
        status: "ACTIVE",
        color: "#24292e",
        logo: GitHubLogo,
        bgClass: "bg-slate-900 text-white",
        description: "Canonical repository source control, branch management, pull requests, and collaborative GitHub actions."
    },
    {
        id: "figma",
        name: "Figma",
        category: "UI/UX Prototyping",
        abbr: "FGMA",
        status: "ACTIVE",
        color: "#F24E1E",
        logo: FigmaLogo,
        bgClass: "bg-purple-600 text-white",
        description: "Vector UI layout design, interactive prototyping, design tokens, component libraries, and client review feedback."
    },
    {
        id: "vscode",
        name: "VSCode",
        category: "Primary Code Editor",
        abbr: "VSC",
        status: "ACTIVE",
        color: "#007ACC",
        logo: VSCodeLogo,
        bgClass: "bg-blue-600 text-white",
        description: "Core IDE configured with extension suites for React, Python, ESLint, Prettier, and integrated Git workflows."
    },
    {
        id: "react",
        name: "ReactJS",
        category: "Frontend UI Framework",
        abbr: "RCJS",
        status: "ACTIVE",
        color: "#61DAFB",
        logo: ReactLogo,
        bgClass: "bg-sky-500 text-white",
        description: "Building component-driven user interfaces, custom hooks, state management, and responsive web layouts."
    },
    {
        id: "django",
        name: "Django",
        category: "Python Web Framework",
        abbr: "DJNGO",
        status: "ACTIVE",
        color: "#092E20",
        logo: DjangoLogo,
        bgClass: "bg-emerald-700 text-white",
        description: "Full-stack Python backend development, ORM database models, authentication systems, and REST APIs."
    },
    {
        id: "postman",
        name: "Postman",
        category: "API Testing & Docs",
        abbr: "PSTMN",
        status: "ACTIVE",
        color: "#FF6C37",
        logo: PostmanLogo,
        bgClass: "bg-orange-500 text-white",
        description: "Testing RESTful endpoints, inspecting JSON responses, setting environment variables, and API documentation."
    },
    {
        id: "drawio",
        name: "Draw.io",
        category: "Architecture & Diagrams",
        abbr: "DRAW",
        status: "ACTIVE",
        color: "#F08705",
        logo: DrawIoLogo,
        bgClass: "bg-amber-500 text-white",
        description: "Designing database ERDs, software component architecture flowcharts, and system connection diagrams."
    },
    {
        id: "colab",
        name: "Google Colab",
        category: "Cloud Data & AI Lab",
        abbr: "COLAB",
        status: "ACTIVE",
        color: "#F9AB00",
        logo: ColabLogo,
        bgClass: "bg-yellow-500 text-white",
        description: "Cloud-hosted Python Jupyter environment for data analysis, machine learning experiments, and GPU acceleration."
    },
    {
        id: "jupyter",
        name: "Jupyter Notebook",
        category: "Interactive Data Lab",
        abbr: "JUPTR",
        status: "ACTIVE",
        color: "#F37626",
        logo: JupyterLogo,
        bgClass: "bg-orange-600 text-white",
        description: "Data exploration, algorithm prototyping, visualization, and step-by-step code execution."
    },
    {
        id: "notion",
        name: "Notion",
        category: "Knowledge & Project Docs",
        abbr: "NTN",
        status: "ACTIVE",
        color: "#000000",
        logo: NotionLogo,
        bgClass: "bg-neutral-900 text-white",
        description: "Managing project roadmaps, architecture specification docs, sprint task tracking, and engineering notes."
    },
    {
        id: "antigravity",
        name: "Antigravity",
        category: "AI Agentic Coding",
        abbr: "AGY",
        status: "ACTIVE",
        color: "#0d9668",
        logo: AntigravityLogo,
        bgClass: "bg-[#0d9668] text-white",
        description: "Agentic AI pair programming, automated codebase synthesis, multi-step refactoring, and dev environment tools."
    },
    {
        id: "scratch",
        name: "Scratch",
        category: "Educational Coding",
        abbr: "SCRTCH",
        status: "ACTIVE",
        color: "#FFAB19",
        logo: ScratchLogo,
        bgClass: "bg-amber-400 text-white",
        description: "Block-based programming tool for teaching logic concepts, preparing practice labs, and mentoring students."
    },
    {
        id: "pycharm",
        name: "PyCharm",
        category: "Python IDE",
        abbr: "PYCHM",
        status: "ACTIVE",
        color: "#21D789",
        logo: PyCharmLogo,
        bgClass: "bg-emerald-600 text-white",
        description: "Professional Python environment for backend logic development, virtualenv management, and debugging."
    },
    {
        id: "intellij",
        name: "IntelliJ IDEA",
        category: "Java / OOP IDE",
        abbr: "INTLJ",
        status: "ACTIVE",
        color: "#FE2857",
        logo: IntelliJLogo,
        bgClass: "bg-rose-600 text-white",
        description: "Integrated development environment for Object-Oriented Programming, Java class design, and algorithm analysis."
    },
    {
        id: "bash",
        name: "Terminal / Bash",
        category: "CLI & System Shell",
        abbr: "BASH",
        status: "ACTIVE",
        color: "#4EAA25",
        logo: BashLogo,
        bgClass: "bg-gray-800 text-white",
        description: "Command-line administration, shell scripting, package management, and system task automation."
    }
];

// Nodes positioned on the circular orbit ring (6 key points around circle)
const ORBIT_NODES = [
    { toolId: "git", angle: -90, label: "Version Control", nodeColor: "bg-slate-900" },
    { toolId: "figma", angle: -30, label: "UI Prototyping", nodeColor: "bg-purple-600" },
    { toolId: "vscode", angle: 30, label: "Primary Editor", nodeColor: "bg-blue-600" },
    { toolId: "react", angle: 90, label: "Frontend UI", nodeColor: "bg-sky-500" },
    { toolId: "django", angle: 150, label: "Python Backend", nodeColor: "bg-emerald-700" },
    { toolId: "postman", angle: 210, label: "API Testing", nodeColor: "bg-orange-500" }
];

/*------------------------------------------------------------------------------
                             MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/
function ToolsSection() {
    const { isDark } = useTheme();
    const [activeToolId, setActiveToolId] = useState<string>("git");

    const activeTool = TOOLS_LIST.find(t => t.id === activeToolId) || TOOLS_LIST[0];
    const ActiveLogoComponent = activeTool.logo;

    return (
        <section
            id="tools"
            className={`relative border-b py-20 overflow-hidden transition-colors duration-300 ${
                isDark ? "border-slate-800/80 bg-[#080C16] text-slate-100" : "border-slate-200 bg-white text-slate-900"
            }`}
        >
            <div className="portfolio-animate mx-auto max-w-7xl px-6">

                {/* Main 2-Column Hub & Orbit Diagram */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">

                    {/* Left Column (Headline & Active Anchored Card) */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                        <div>
                            {/* Eyebrow Tag with Green Line */}
                            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.2em] text-[#0D9668]">
                                <span className="h-0.5 w-6 rounded-full bg-[#0D9668]" />
                                TOOLS & INTEGRATION HUB
                            </div>

                            {/* Main Title */}
                            <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] ${
                                isDark ? "text-white" : "text-slate-900"
                            }`}>
                                Built to power <br className="hidden sm:inline" />
                                <span className="text-[#0D9668]">every phase</span> of engineering.
                            </h2>

                            {/* Subtitle Description */}
                            <p className={`mt-4 text-sm font-medium leading-relaxed max-w-xl ${
                                isDark ? "text-slate-400" : "text-slate-600"
                            }`}>
                                Software tools, environments, and platforms engineered as the backbone of my workflow. Fifteen core technologies converge in an integrated developer ecosystem to deliver rapid, robust software interventions.
                            </p>
                        </div>

                        {/* Anchored Policy Card */}
                        <div className={`mt-8 rounded-2xl border p-5 shadow-xl transition-all duration-300 hover:border-[#0D9668] hover:shadow-2xl ${
                            isDark
                                ? "border-[#0D9668]/40 bg-[#0D1424]"
                                : "border-[#0D9668]/30 bg-slate-50"
                        }`}>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border shadow-xs ${
                                        isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
                                    }`}>
                                        <ActiveLogoComponent className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#0D9668]">
                                            <span className="h-2 w-2 rounded-full bg-[#0D9668] animate-pulse" />
                                            ANCHORED IN STACK • {activeTool.status}
                                        </div>
                                        <h3 className={`text-base font-black ${isDark ? "text-white" : "text-slate-900"}`}>
                                            {activeTool.name}
                                        </h3>
                                        <p className={`text-xs font-bold ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                                            {activeTool.category}
                                        </p>
                                    </div>
                                </div>
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D9668]/10 text-[#0D9668]">
                                    <ArrowUpRight size={14} />
                                </span>
                            </div>
                            <p className={`mt-3 text-xs font-medium leading-relaxed border-t pt-3 ${
                                isDark ? "text-slate-300 border-slate-800/80" : "text-slate-700 border-slate-200"
                            }`}>
                                {activeTool.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Column (Concentric Orbit & Circular Hub Diagram) */}
                    <div className="lg:col-span-6 relative flex items-center justify-center py-6 sm:py-10">

                        {/* Orbit Ring Outer Box */}
                        <div className="relative flex h-[340px] w-[340px] sm:h-[440px] sm:w-[440px] items-center justify-center">

                            {/* Outer Dashed Orbit Circle */}
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#0D9668]/30 animate-[spin_60s_linear_infinite] pointer-events-none" />
                            <div className={`absolute inset-8 rounded-full border border-dashed pointer-events-none ${
                                isDark ? "border-slate-800" : "border-slate-200"
                            }`} />

                            {/* Center Hub Core */}
                            <div className={`relative z-10 flex h-32 w-32 sm:h-40 sm:w-40 flex-col items-center justify-center rounded-3xl p-4 text-center border shadow-2xl transition-transform duration-500 hover:scale-105 ${
                                isDark
                                    ? "bg-gradient-to-b from-[#092E20] via-[#0D9668]/30 to-[#080C16] text-white border-[#0D9668]/40 shadow-[#0D9668]/20"
                                    : "bg-gradient-to-b from-[#0D9668] via-[#0D9668] to-[#2C3F96] text-white border-[#0D9668] shadow-[#0D9668]/20"
                            }`}>
                                <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-emerald-200">
                                    CORE STACK
                                </div>
                                <div className="mt-1 text-xs sm:text-sm font-black tracking-tight leading-tight">
                                    DEV HUB & ECOSYSTEM
                                </div>
                                <div className="mt-2 flex items-center gap-1 text-[9px] font-bold text-emerald-100 bg-white/20 px-2 py-0.5 rounded-full border border-white/30 backdrop-blur-xs">
                                    <CheckCircle2 size={10} /> 15 TOOLS
                                </div>
                            </div>

                            {/* Orbit Spoke Nodes */}
                            {ORBIT_NODES.map((node, nIdx) => {
                                const tool = TOOLS_LIST.find(t => t.id === node.toolId);
                                if (!tool) return null;
                                const LogoComp = tool.logo;
                                const isSelected = activeToolId === tool.id;

                                const radius = 150;
                                const rad = (node.angle * Math.PI) / 180;
                                const x = Math.round(radius * Math.cos(rad));
                                const y = Math.round(radius * Math.sin(rad));

                                return (
                                    <div
                                        key={nIdx}
                                        onClick={() => setActiveToolId(tool.id)}
                                        style={{ transform: `translate(${x}px, ${y}px)` }}
                                        className={`absolute z-20 flex cursor-pointer items-center justify-center rounded-full p-2.5 sm:p-3.5 shadow-lg transition-all duration-300 ${
                                            isSelected
                                                ? "scale-125 ring-4 ring-[#0D9668] shadow-emerald-500/40 border border-[#0D9668] " + (isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900")
                                                : isDark
                                                    ? "bg-slate-900 text-slate-200 border border-slate-700 hover:scale-110 hover:ring-2 hover:ring-[#0D9668]"
                                                    : "bg-white text-slate-800 border border-slate-200 hover:scale-110 hover:ring-2 hover:ring-[#0D9668]"
                                        }`}
                                        title={`${tool.name} - ${tool.category}`}
                                    >
                                        <LogoComp className="h-6 w-6 sm:h-7 sm:w-7" />

                                        {/* Tool Label Tag */}
                                        <span className={`absolute whitespace-nowrap rounded-md px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider shadow-md border pointer-events-none transition-opacity ${
                                            node.angle > 0 ? "top-12" : "-top-7"
                                        } ${
                                            isDark ? "bg-slate-900 text-slate-200 border-slate-700" : "bg-white text-slate-800 border-slate-200"
                                        }`}>
                                            {tool.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Section: 3-Row Infinite Marquee Motion Matrix */}
            <div className={`mt-12 border-t pt-6 relative w-full overflow-hidden ${isDark ? "border-slate-800/80" : "border-slate-200"}`}>
                {/* Edge Fade Gradients */}
                <div className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r ${
                    isDark ? "from-[#080C16] via-[#080C16]/90" : "from-white via-white/90"
                } to-transparent`} />
                <div className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l ${
                    isDark ? "from-[#080C16] via-[#080C16]/90" : "from-white via-white/90"
                } to-transparent`} />

                {/* 3-Row Marquee Ticker Container */}
                <div className="marquee-container space-y-4 overflow-hidden py-2">

                    {/* Row 1: Moves to the RIGHT */}
                    <div className="relative flex overflow-hidden">
                        <div className="animate-[marquee-right_50s_linear_infinite] flex gap-4">
                            {[...TOOLS_LIST.slice(0, 5), ...TOOLS_LIST.slice(0, 5), ...TOOLS_LIST.slice(0, 5), ...TOOLS_LIST.slice(0, 5)].map((tool, idx) => {
                                const BrandLogo = tool.logo;
                                const isSelected = activeToolId === tool.id;

                                return (
                                    <button
                                        key={`r1-${tool.id}-${idx}`}
                                        onClick={() => setActiveToolId(tool.id)}
                                        className={`group flex h-16 w-56 shrink-0 items-center gap-3.5 rounded-2xl border px-4 text-left transition-all duration-300 ${
                                            isSelected
                                                ? "border-[#0D9668] bg-[#0D9668]/10 shadow-md ring-1 ring-[#0D9668]"
                                                : isDark
                                                    ? "border-slate-800 bg-[#0D1424] hover:border-[#0D9668]/50 hover:bg-[#111A2E]"
                                                    : "border-slate-200 bg-slate-50 hover:border-[#0D9668]/50 hover:bg-slate-100"
                                        }`}
                                    >
                                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border group-hover:scale-110 transition-transform ${
                                            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                                        }`}>
                                            <BrandLogo className="h-6 w-6" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className={`truncate text-xs font-black group-hover:text-[#0D9668] ${
                                                isDark ? "text-white" : "text-slate-900"
                                            }`}>
                                                {tool.name}
                                            </div>
                                            <div className={`truncate text-[10px] font-extrabold ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                                                {tool.abbr}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Row 2: Moves to the LEFT */}
                    <div className="relative flex overflow-hidden">
                        <div className="animate-[marquee-left_50s_linear_infinite] flex gap-4">
                            {[...TOOLS_LIST.slice(5, 10), ...TOOLS_LIST.slice(5, 10), ...TOOLS_LIST.slice(5, 10), ...TOOLS_LIST.slice(5, 10)].map((tool, idx) => {
                                const BrandLogo = tool.logo;
                                const isSelected = activeToolId === tool.id;

                                return (
                                    <button
                                        key={`r2-${tool.id}-${idx}`}
                                        onClick={() => setActiveToolId(tool.id)}
                                        className={`group flex h-16 w-56 shrink-0 items-center gap-3.5 rounded-2xl border px-4 text-left transition-all duration-300 ${
                                            isSelected
                                                ? "border-[#0D9668] bg-[#0D9668]/10 shadow-md ring-1 ring-[#0D9668]"
                                                : isDark
                                                    ? "border-slate-800 bg-[#0D1424] hover:border-[#0D9668]/50 hover:bg-[#111A2E]"
                                                    : "border-slate-200 bg-slate-50 hover:border-[#0D9668]/50 hover:bg-slate-100"
                                        }`}
                                    >
                                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border group-hover:scale-110 transition-transform ${
                                            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                                        }`}>
                                            <BrandLogo className="h-6 w-6" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className={`truncate text-xs font-black group-hover:text-[#0D9668] ${
                                                isDark ? "text-white" : "text-slate-900"
                                            }`}>
                                                {tool.name}
                                            </div>
                                            <div className={`truncate text-[10px] font-extrabold ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                                                {tool.abbr}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Row 3: Moves to the RIGHT */}
                    <div className="relative flex overflow-hidden">
                        <div className="animate-[marquee-right_50s_linear_infinite] flex gap-4">
                            {[...TOOLS_LIST.slice(10, 15), ...TOOLS_LIST.slice(10, 15), ...TOOLS_LIST.slice(10, 15), ...TOOLS_LIST.slice(10, 15)].map((tool, idx) => {
                                const BrandLogo = tool.logo;
                                const isSelected = activeToolId === tool.id;

                                return (
                                    <button
                                        key={`r3-${tool.id}-${idx}`}
                                        onClick={() => setActiveToolId(tool.id)}
                                        className={`group flex h-16 w-56 shrink-0 items-center gap-3.5 rounded-2xl border px-4 text-left transition-all duration-300 ${
                                            isSelected
                                                ? "border-[#0D9668] bg-[#0D9668]/10 shadow-md ring-1 ring-[#0D9668]"
                                                : isDark
                                                    ? "border-slate-800 bg-[#0D1424] hover:border-[#0D9668]/50 hover:bg-[#111A2E]"
                                                    : "border-slate-200 bg-slate-50 hover:border-[#0D9668]/50 hover:bg-slate-100"
                                        }`}
                                    >
                                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border group-hover:scale-110 transition-transform ${
                                            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                                        }`}>
                                            <BrandLogo className="h-6 w-6" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className={`truncate text-xs font-black group-hover:text-[#0D9668] ${
                                                isDark ? "text-white" : "text-slate-900"
                                            }`}>
                                                {tool.name}
                                            </div>
                                            <div className={`truncate text-[10px] font-extrabold ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                                                {tool.abbr}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default ToolsSection;
