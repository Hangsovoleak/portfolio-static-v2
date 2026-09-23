/**
 * Description:
 *      Learning & Capabilities section showcasing mastered skills and coursework.
 *      Styled precisely after the Platform Capabilities reference layout:
 *      - Header with green dash line ("— LEARNING CAPABILITIES") and right sub-description.
 *      - 2 rows of horizontal moving cards with infinite marquee motion:
 *        - Row 1: Moves continuously to the RIGHT.
 *        - Row 2: Moves continuously to the LEFT.
 *      - Hover-to-pause interaction and click capability links.
 *      - Bottom text caption: "Hover to pause - click any capability to explore details".
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import {
    Code2,
    ShieldCheck,
    Cloud,
    Database,
    Cpu,
    Blocks,
    CircuitBoard,
    Binary,
    Atom,
    BarChart3,
    Terminal,
    Palette,
    Boxes,
    Kanban,
    Briefcase,
    ArrowUpRight
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/*------------------------------------------------------------------------------
                                 LEARNING DATA
------------------------------------------------------------------------------*/
// Row 1 items (Moves Right)
const ROW_1_TOPICS = [
    {
        id: "dsa",
        title: "Data Structure & Algorithm",
        category: "COMPUTATIONAL LOGIC",
        tag: "CORE",
        description: "Arrays, linked lists, trees, graphs, sorting algorithms, big-O time complexity, and memory optimization.",
        icon: Code2,
        isGreen: false,
        code: "DSA"
    },
    {
        id: "win-sec",
        title: "Windows Security",
        category: "SYSTEM DEFENSE",
        tag: "SECURITY",
        description: "Windows OS installation, bootable USB creation, user access controls, firewall policies, and system repair.",
        icon: ShieldCheck,
        isGreen: true,
        code: "SEC"
    },
    {
        id: "devops",
        title: "DevOps",
        category: "CI/CD & DEPLOYMENT",
        tag: "DEVOPS",
        description: "Git version control, GitHub workflows, continuous integration, environment isolation, and automated deployment.",
        icon: Cloud,
        isGreen: false,
        code: "OPS"
    },
    {
        id: "db",
        title: "Database",
        category: "RELATIONAL DATA",
        tag: "SQL & DATA",
        description: "PostgreSQL, MySQL schema architecture, ER diagrams, complex SQL queries, indexing, and data integrity.",
        icon: Database,
        isGreen: true,
        code: "RDBMS"
    },
    {
        id: "iot",
        title: "IoTs",
        category: "EMBEDDED HARDWARE",
        tag: "HARDWARE",
        description: "Sensor integration, microcontroller hardware logic, micro-processing, and physical computing protocols.",
        icon: Cpu,
        isGreen: false,
        code: "IOT"
    },
    {
        id: "scratch",
        title: "Scratch",
        category: "VISUAL PROGRAMMING",
        tag: "EDTECH",
        description: "Block-based programming, logic animation games, slide curriculum adaptation, and student mentoring.",
        icon: Blocks,
        isGreen: true,
        code: "SCRATCH"
    },
    {
        id: "microbit",
        title: "Microbit",
        category: "PHYSICAL COMPUTING",
        tag: "HARDWARE",
        description: "BBC Micro:bit LED matrix programming, sensor input loops, and STEM hands-on laboratory experiments.",
        icon: CircuitBoard,
        isGreen: false,
        code: "MICROBIT"
    },
    {
        id: "math",
        title: "Mathematics (Linear, Matrix)",
        category: "FOUNDATIONAL MATH",
        tag: "MATH",
        description: "Linear algebra, matrix transformation, vector calculations, system equations, and mathematical modeling.",
        icon: Binary,
        isGreen: true,
        code: "MATH"
    }
];

// Row 2 items (Moves Left)
const ROW_2_TOPICS = [
    {
        id: "physics",
        title: "Physics",
        category: "APPLIED SCIENCE",
        tag: "SCIENCE",
        description: "Mechanics, electric circuits, electromagnetic principles, and physical laws applied to computing hardware.",
        icon: Atom,
        isGreen: false,
        code: "PHYS"
    },
    {
        id: "powerbi",
        title: "PowerBI",
        category: "BUSINESS INTELLIGENCE",
        tag: "ANALYTICS",
        description: "Data visualization dashboards, DAX queries, metric KPIs, data transformation, and executive reporting.",
        icon: BarChart3,
        isGreen: true,
        code: "BI"
    },
    {
        id: "prog-lang",
        title: "Programming Language",
        category: "SOFTWARE SYNTAX",
        tag: "LANGUAGES",
        description: "Object-oriented JavaScript, TypeScript, Java, HTML5, CSS3, and modern framework syntax mastery.",
        icon: Terminal,
        isGreen: false,
        code: "LANG"
    },
    {
        id: "design",
        title: "Design",
        category: "UI / UX DESIGN",
        tag: "FIGMA",
        description: "Figma vector prototyping, responsive layouts, color theory, component design systems, and client reviews.",
        icon: Palette,
        isGreen: true,
        code: "UI/UX"
    },
    {
        id: "ooad",
        title: "Object Oriented & Analysis",
        category: "SOFTWARE ARCHITECTURE",
        tag: "OOAD",
        description: "Encapsulation, inheritance, polymorphism, design patterns, UML class diagrams, and modular system design.",
        icon: Boxes,
        isGreen: false,
        code: "OOAD"
    },
    {
        id: "pm",
        title: "Software Project Management",
        category: "AGILE METHODOLOGY",
        tag: "AGILE",
        description: "Agile sprint cycles, requirements gathering, client milestone reviews, scope control, and deliverable tracking.",
        icon: Kanban,
        isGreen: true,
        code: "SPM"
    },
    {
        id: "prof-life",
        title: "Professional Life",
        category: "CAREER & ETHICS",
        tag: "ETHICS",
        description: "Cross-functional communication, team collaboration, continuous learning, problem solving, and workplace ethics.",
        icon: Briefcase,
        isGreen: false,
        code: "PRO"
    }
];

/*------------------------------------------------------------------------------
                            SINGLE CAPABILITY CARD
------------------------------------------------------------------------------*/
function CapabilityCard({ item }: { item: typeof ROW_1_TOPICS[0] }) {
    const { isDark } = useTheme();
    const IconComponent = item.icon;

    return (
        <article className={`group relative flex h-[220px] w-72 sm:w-80 shrink-0 flex-col justify-between overflow-hidden rounded-3xl border p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0D9668]/60 hover:shadow-xl ${
            isDark
                ? "border-slate-800/80 bg-[#0D1424] hover:bg-[#111A2E]"
                : "border-slate-200 bg-white hover:bg-slate-50"
        }`}>
            {/* Background Watermark Code */}
            <span className={`absolute top-2 right-4 text-5xl font-black tracking-tighter select-none pointer-events-none transition-colors ${
                isDark ? "text-slate-800/40 group-hover:text-emerald-950/50" : "text-slate-200 group-hover:text-emerald-100"
            }`}>
                {item.code}
            </span>

            {/* Top Bar: Icon Badge & Pill Tag */}
            <div className="relative z-10 flex items-center justify-between">
                <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl border shadow-xs transition-transform group-hover:scale-105 ${
                        item.isGreen
                            ? "border-[#0D9668]/30 bg-[#0D9668]/10 text-[#0D9668]"
                            : "border-[#2C3F96]/30 bg-[#2C3F96]/10 text-[#2C3F96]"
                    }`}
                >
                    <IconComponent size={20} />
                </div>

                <span
                    className={`rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest ${
                        item.isGreen
                            ? "border border-[#0D9668]/30 bg-[#0D9668]/10 text-[#0D9668]"
                            : "border border-[#2C3F96]/30 bg-[#2C3F96]/10 text-[#2C3F96]"
                    }`}
                >
                    {item.tag}
                </span>
            </div>

            {/* Middle Content */}
            <div className="relative z-10 my-2">
                <div className={`text-[10px] font-extrabold uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {item.category}
                </div>
                <h3 className={`mt-1 text-base sm:text-lg font-black tracking-tight group-hover:text-[#0D9668] transition-colors line-clamp-1 ${
                    isDark ? "text-white" : "text-slate-900"
                }`}>
                    {item.title}
                </h3>
                <p className={`mt-1 text-xs font-medium leading-5 line-clamp-2 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                }`}>
                    {item.description}
                </p>
            </div>

            {/* Card Footer Action */}
            <div className={`relative z-10 flex items-center justify-between border-t pt-3 text-[11px] font-extrabold uppercase tracking-wider group-hover:text-[#0D9668] transition-colors ${
                isDark ? "border-slate-800/80 text-slate-500" : "border-slate-200 text-slate-500"
            }`}>
                <span>LEARN MORE</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
        </article>
    );
}

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/
function ResourcesSection() {
    const { isDark } = useTheme();
    // Duplicate lists for seamless 100% infinite marquee loop
    const row1Seamless = [...ROW_1_TOPICS, ...ROW_1_TOPICS, ...ROW_1_TOPICS];
    const row2Seamless = [...ROW_2_TOPICS, ...ROW_2_TOPICS, ...ROW_2_TOPICS];

    return (
        <section
            id="resources"
            className={`relative border-b py-20 overflow-hidden transition-colors duration-300 ${
                isDark ? "border-slate-800/80 bg-[#080C16] text-slate-100" : "border-slate-200 bg-slate-50/50 text-slate-900"
            }`}
        >
            <div className="portfolio-animate relative mx-auto max-w-7xl px-6">

                {/* Section Header: Matching Platform Capabilities Reference Layout */}
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        {/* Top Dash Tag: — PLATFORM CAPABILITIES */}
                        <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#0D9668]">
                            <span className="h-0.5 w-6 rounded-full bg-[#0D9668]" />
                            LEARNING CAPABILITIES
                        </div>

                        {/* Main Title: Everything the platform can do, end to end */}
                        <h2 className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${
                            isDark ? "text-white" : "text-slate-900"
                        }`}>
                            Everything I have learned & built <br className="hidden sm:inline" />
                            <span className="text-[#0D9668]">end to end</span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* 2-Row Infinite Marquee Motion Container */}
            <div className="marquee-container mt-12 space-y-6 overflow-hidden py-4">

                {/* Row 1: Moves to the RIGHT */}
                <div className="relative flex overflow-hidden">
                    <div className="animate-marquee-right flex gap-6">
                        {row1Seamless.map((item, idx) => (
                            <CapabilityCard key={`r1-${item.id}-${idx}`} item={item} />
                        ))}
                    </div>
                </div>

                {/* Row 2: Moves to the LEFT */}
                <div className="relative flex overflow-hidden">
                    <div className="animate-marquee-left flex gap-6">
                        {row2Seamless.map((item, idx) => (
                            <CapabilityCard key={`r2-${item.id}-${idx}`} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default ResourcesSection;
