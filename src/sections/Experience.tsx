/**
 * Description:
 *      Experience section featuring simple vector icons and clean text display,
 *      styled after the strategic timeline reference:
 *      - Central vertical spine with rotated diamond node markers (01, 02, 03) and horizontal connector lines.
 *      - Alternating split layout with simple floating icons (no card wrappers) and clean text blocks.
 *      - High contrast typography, month badges, tech tags, and project links.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { useState } from "react";
import { Flame, Calendar, ExternalLink, Github, Figma, CheckCircle2, Clock, Tag } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/*------------------------------------------------------------------------------
                                 FALLBACK DATA
------------------------------------------------------------------------------*/
const DEFAULT_EXPERIENCE_ITEMS = [
    {
        id: 1,
        step: "01",
        category: "01 / VOLUNTEER PROGRAM",
        type: "Volunteer",
        role: "IT Support",
        company: "Tech for Kids Academy",
        period: "October 2025 - January 2026",
        months: ["Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026"],
        technologies: ["Windows OS", "Bootable USB", "Hardware Setup", "IT Troubleshooting"],
        bullets: [
            "Provided hands-on IT support for laptops and desktop computers, including Windows installation and activation, creating bootable USB drives, and troubleshooting Windows boot errors.",
            "Worked with team members to identify technical issues, communicate problems clearly, and follow troubleshooting procedures.",
            "Researched installation methods and technical information to improve my knowledge and ensure computers were properly set up and working correctly."
        ]
    },
    {
        id: 2,
        step: "02",
        category: "02 / INTERNSHIP",
        type: "Internship",
        role: "Frontend Developer",
        company: "Simple Group Cambodia",
        period: "March 2026 – June 2026",
        months: ["Mar 2026", "Apr 2026", "May 2026", "Jun 2026"],
        technologies: ["React.js", "JavaScript", "Tailwind CSS", "Figma", "Git & GitHub"],
        bullets: [
            "Designed the website layout in Figma, discussed requirements and design changes with the client, and updated the design based on their feedback.",
            "Developed a responsive static website using React.js, JavaScript, and Tailwind CSS.",
            "Used Git and GitHub for version control and collaboration.",
            "Communicated with the client through several review rounds to confirm the final design and deliver a website that matched the agreed requirements."
        ],
        links: {
            github: "https://github.com/Hangsovoleak/e-robot-cambodia-v2.git",
            figma: "https://www.figma.com/design/eYExtVG9Swtr3so26n6bDK/E-Robot?node-id=0-1&t=RP0uCX0TDvgBTzZ8-1"
        }
    },
    {
        id: 3,
        step: "03",
        category: "03 / VOLUNTEER PROGRAM",
        type: "Volunteer",
        role: "Teacher of Scratch",
        company: "E-Robot",
        period: "March 2026 – June 2026",
        months: ["Mar 2026", "Apr 2026", "May 2026", "Jun 2026"],
        technologies: ["Scratch", "Teaching & Mentoring", "Lab Prep", "Classroom Management"],
        bullets: [
            "Supported Scratch programming classes by adapting teaching slides and preparing computer labs for student practice.",
            "Guided students in building their own Scratch projects, explained programming concepts in a simple and clear way, and helped students troubleshoot problems during practice.",
            "Managed classroom activities and worked with team members to keep lessons organized and create a supportive learning environment."
        ]
    }
];

/*------------------------------------------------------------------------------
                            HELPER ILLUSTRATION COMPONENT
------------------------------------------------------------------------------*/
function StandaloneTimelineIcon({ entry, isGreen }: { entry: any; isGreen: boolean }) {
    const isTechForKids = entry.company?.toLowerCase().includes("tech for kids") || entry.role?.toLowerCase().includes("it support") || entry.id === 1;
    const isERobot = entry.company?.toLowerCase().includes("e-robot") || entry.role?.toLowerCase().includes("scratch");

    const strokeColor = isGreen ? "#0D9668" : "#2C3F96";
    const glowBg = isGreen
        ? "from-[#0D9668]/25 to-emerald-500/5"
        : "from-[#2C3F96]/30 to-indigo-500/5";

    return (
        <div className="relative flex flex-col items-center justify-center p-4 w-full group">
            {/* Soft Radial Background Glow */}
            <div className={`absolute h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-gradient-to-tr ${glowBg} blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-90 -z-10`} />

            {isTechForKids ? (
                /* Document / Policy Scroll Line Vector Icon (Matches Ref Step 01) */
                <div className="flex flex-col items-center text-center">
                    {/* TODO: Upload Certificate of Recognition image to /public/assets/certificate.png or /public/images/certificate.png */}
                    <a
                        href="/assets/certificate.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-500 hover:scale-105 block"
                        title="Click to view full Certificate of Recognition"
                    >
                        <svg className="h-32 w-32 sm:h-40 sm:w-40 drop-shadow-md" viewBox="0 0 100 100" fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            {/* Scroll / Document matching reference image step 01 icon */}
                            <path d="M30 22 H68 C75 22 75 32 68 32 H30 C23 32 23 22 30 22 Z" />
                            <path d="M30 32 V74 C30 82 37 82 45 82 H72 C79 82 79 72 72 72 H35" />
                            <path d="M42 43 H64" />
                            <path d="M42 53 H64" />
                            <path d="M42 63 H56" />
                        </svg>
                    </a>
                    <a
                        href="/assets/certificate.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#2C3F96] dark:text-[#818CF8] hover:underline"
                    >
                        <span>✦ Certificate Preview ↗</span>
                    </a>
                </div>
            ) : isERobot ? (
                /* Hardware / ICT Infrastructure Line Vector Icon (Matches Ref Step 03) */
                <div className="flex flex-col items-center text-center">
                    <svg className="h-32 w-32 sm:h-40 sm:w-40 transition-transform duration-500 hover:scale-105 drop-shadow-md" viewBox="0 0 100 100" fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="22" y="24" width="56" height="22" rx="5" />
                        <circle cx="32" cy="35" r="2.5" fill={strokeColor} />
                        <rect x="22" y="54" width="56" height="22" rx="5" />
                        <circle cx="32" cy="65" r="2.5" fill={strokeColor} />
                    </svg>
                </div>
            ) : (
                /* Graduation Cap / Capacity Line Vector Icon (Matches Ref Step 02) */
                <div className="flex flex-col items-center text-center">
                    <svg className="h-32 w-32 sm:h-40 sm:w-40 transition-transform duration-500 hover:scale-105 drop-shadow-md" viewBox="0 0 100 100" fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M50 25 L85 40 L50 55 L15 40 Z" />
                        <path d="M28 47 V68 C28 73 38 78 50 78 C62 78 72 73 72 68 V47" />
                        <path d="M85 40 V65" />
                        <circle cx="85" cy="67" r="3" fill={strokeColor} />
                    </svg>
                </div>
            )}
        </div>
    );
}

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/
function ExperienceSection({ items = [] }: { items?: any[] }) {
    const { isDark } = useTheme();
    const [filter, setFilter] = useState<"ALL" | "VOLUNTEER" | "INTERNSHIP">("ALL");

    const rawList = items && items.length > 0 ? items : DEFAULT_EXPERIENCE_ITEMS;

    // Filter items based on active tab
    const filteredList = rawList.filter(entry => {
        if (filter === "VOLUNTEER") return entry.type?.toLowerCase().includes("volunteer") || entry.category?.toLowerCase().includes("volunteer");
        if (filter === "INTERNSHIP") return entry.type?.toLowerCase().includes("internship") || entry.category?.toLowerCase().includes("internship");
        return true;
    });

    return (
        <section
            id="experience"
            className={`relative border-b py-20 overflow-hidden transition-colors duration-300 ${
                isDark ? "border-slate-800/80 bg-[#080C16] text-slate-100" : "border-slate-200 bg-white text-slate-900"
            }`}
        >
            <div className="portfolio-animate mx-auto max-w-6xl px-6">

                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#0D9668]/30 bg-[#0D9668]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#0D9668]">
                        <Flame size={14} />
                        EXPERIENCE TIMELINE
                    </div>

                    <h2 className={`mt-4 text-3xl font-black sm:text-5xl tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                        Step by step. <span className="text-[#0D9668]">Month by month.</span>
                    </h2>

                    <div className={`mx-auto mt-3 h-0.5 w-12 rounded-full ${isDark ? "bg-slate-800" : "bg-slate-300"}`} />

                    <p className={`mx-auto mt-4 max-w-2xl text-center text-sm font-medium leading-6 sm:text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        A detailed timeline of my volunteer programs and frontend engineering internship.
                    </p>

                    {/* Filter Tabs */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                        <button
                            onClick={() => setFilter("ALL")}
                            className={`rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider transition ${
                                filter === "ALL"
                                    ? isDark ? "bg-slate-100 text-[#080C16] shadow-md" : "bg-slate-900 text-white shadow-md"
                                    : isDark ? "border border-slate-700 bg-slate-900/80 text-slate-300 hover:border-slate-400 hover:text-white" : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900"
                            }`}
                        >
                            All Roles ({rawList.length})
                        </button>
                        <button
                            onClick={() => setFilter("VOLUNTEER")}
                            className={`rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider transition ${
                                filter === "VOLUNTEER"
                                    ? "bg-[#2C3F96] text-white shadow-md"
                                    : isDark ? "border border-slate-700 bg-slate-900/80 text-slate-300 hover:border-[#2C3F96] hover:text-[#818CF8]" : "border border-slate-300 bg-white text-slate-700 hover:border-[#2C3F96] hover:text-[#2C3F96]"
                            }`}
                        >
                            Volunteer (2)
                        </button>
                        <button
                            onClick={() => setFilter("INTERNSHIP")}
                            className={`rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider transition ${
                                filter === "INTERNSHIP"
                                    ? "bg-[#0D9668] text-white shadow-md"
                                    : isDark ? "border border-slate-700 bg-slate-900/80 text-slate-300 hover:border-[#0D9668] hover:text-[#0D9668]" : "border border-slate-300 bg-white text-slate-700 hover:border-[#0D9668] hover:text-[#0D9668]"
                            }`}
                        >
                            Internship (1)
                        </button>
                    </div>
                </div>

                {/* Vertical Timeline & Stepper Layout */}
                <div className="relative mx-auto mt-16 max-w-6xl">

                    {/* Central Vertical Connector Line (Desktop) */}
                    <div className={`absolute left-1/2 top-4 bottom-4 hidden w-[1.5px] -translate-x-1/2 md:block ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />

                    {/* Top Spine Diamond Decorative Marker */}
                    <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block z-10">
                        <div className={`h-3 w-3 rotate-45 border ${isDark ? "border-slate-600 bg-[#080C16]" : "border-slate-400 bg-white"}`} />
                    </div>

                    {/* Bottom Spine Diamond Decorative Marker */}
                    <div className="absolute left-1/2 bottom-0 hidden -translate-x-1/2 md:block z-10">
                        <div className={`h-3 w-3 rotate-45 border ${isDark ? "border-slate-600 bg-[#080C16]" : "border-slate-400 bg-white"}`} />
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        {filteredList.map((entry, idx) => {
                            const stepNumber = entry.step || String(idx + 1).padStart(2, "0");
                            const isGreen = entry.type?.toLowerCase().includes("internship") || entry.category?.includes("INTERNSHIP");
                            const isLeftText = idx % 2 === 1; // Alternating layout: Step 01 text on RIGHT, Step 02 text on LEFT
                            const isTechForKids = entry.company?.toLowerCase().includes("tech for kids") || entry.role?.toLowerCase().includes("it support") || entry.id === 1;

                            // Parse description/bullets
                            let bulletList: string[] = [];
                            if (Array.isArray(entry.bullets) && entry.bullets.length > 0) {
                                bulletList = entry.bullets;
                            } else if (entry.description) {
                                bulletList = entry.description
                                    .split("\n")
                                    .map((s: string) => s.trim().replace(/^•\s*/, ""))
                                    .filter(Boolean);
                            }

                            // Month list badges & tech tags
                            const monthBadges = entry.months || [];
                            const techTags = entry.technologies || [];

                            /* Text Display Component (Matches uploaded reference text styling) */
                            const TextContentBlock = (
                                 <div className="flex flex-col py-2">
                                     {/* Pill Category Tag */}
                                     <div>
                                         <span
                                             className={
                                                 isGreen
                                                     ? "inline-block rounded-full border border-[#0D9668]/40 bg-[#0D9668]/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#0D9668]"
                                                     : "inline-block rounded-full border border-[#2C3F96]/40 bg-[#2C3F96]/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#2C3F96] dark:text-[#818CF8]"
                                             }
                                         >
                                             {entry.category || `${stepNumber} / EXPERIENCE`}
                                         </span>
                                     </div>

                                     {/* Bold Role Title */}
                                     <h3 className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug ${isDark ? "text-white" : "text-slate-900"}`}>
                                         {entry.role}
                                     </h3>

                                     {/* Company & Date Meta */}
                                     <div className="mt-2 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
                                         <span className={`font-black text-sm sm:text-base ${isDark ? "text-slate-200" : "text-slate-800"}`}>{entry.company}</span>
                                         <span className="text-slate-500">•</span>
                                         <span className={`flex items-center gap-1.5 font-extrabold ${isGreen ? "text-[#0D9668]" : "text-[#2C3F96] dark:text-[#818CF8]"}`}>
                                             <Calendar size={14} />
                                             {entry.period}
                                         </span>
                                     </div>

                                     {/* Month by Month Stepper Badges */}
                                     {monthBadges.length > 0 && (
                                         <div className="mt-3 flex flex-wrap items-center gap-2 py-1">
                                             <span className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                                                 <Clock size={13} /> Months:
                                             </span>
                                             {monthBadges.map((month: string, mIdx: number) => (
                                                 <span
                                                     key={mIdx}
                                                     className={`rounded-md px-2.5 py-0.5 text-xs font-extrabold ${
                                                         isGreen
                                                             ? "bg-[#0D9668]/15 text-[#0D9668]"
                                                             : "bg-[#2C3F96]/15 text-[#2C3F96] dark:text-[#818CF8]"
                                                     }`}
                                                 >
                                                     {month}
                                                 </span>
                                             ))}
                                         </div>
                                     )}

                                     {/* Bullet Points */}
                                     <ul className={`mt-4 space-y-2.5 text-sm sm:text-base font-normal leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                                         {bulletList.map((bullet, i) => (
                                             <li key={i} className="flex items-start gap-2.5">
                                                 <CheckCircle2 size={18} className={`mt-1 flex-shrink-0 ${isGreen ? "text-[#0D9668]" : "text-[#2C3F96] dark:text-[#818CF8]"}`} />
                                                 <span>{bullet}</span>
                                             </li>
                                         ))}
                                     </ul>

                                     {/* Technology Tags */}
                                     {techTags.length > 0 && (
                                         <div className="mt-4 flex flex-wrap items-center gap-2">
                                             <Tag size={14} className={isDark ? "text-slate-400" : "text-slate-500"} />
                                             {techTags.map((tech: string, tIdx: number) => (
                                                 <span key={tIdx} className={`rounded-md border px-2.5 py-0.5 text-xs font-bold ${
                                                     isDark
                                                         ? "border-slate-700/80 bg-slate-900/90 text-slate-300"
                                                         : "border-slate-300 bg-slate-100 text-slate-800"
                                                 }`}>
                                                     {tech}
                                                 </span>
                                             ))}
                                         </div>
                                     )}

                                     {/* Action Links */}
                                     <div className="mt-5 flex flex-wrap items-center gap-3">
                                         {isTechForKids && (
                                             <a
                                                 href="/assets/certificate.png"
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 className="inline-flex items-center gap-2 rounded-lg border border-[#2C3F96]/40 bg-[#2C3F96]/10 px-4 py-2 text-xs sm:text-sm font-bold text-[#2C3F96] dark:text-[#818CF8] shadow-xs transition hover:bg-[#2C3F96] hover:text-white dark:hover:text-white"
                                             >
                                                 <ExternalLink size={15} />
                                                 View Certificate ↗
                                             </a>
                                         )}
                                         {entry.links?.github && (
                                             <a
                                                 href={entry.links.github}
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs sm:text-sm font-bold shadow-xs transition ${
                                                     isDark
                                                         ? "border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-400 hover:text-white"
                                                         : "border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-100"
                                                 }`}
                                             >
                                                 <Github size={15} />
                                                 GitHub Code
                                                 <ExternalLink size={13} />
                                             </a>
                                         )}
                                         {entry.links?.figma && (
                                             <a
                                                 href={entry.links.figma}
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 className="inline-flex items-center gap-2 rounded-lg border border-purple-500/40 bg-purple-950/30 px-4 py-2 text-xs sm:text-sm font-bold text-purple-400 shadow-xs transition hover:border-purple-500 hover:bg-purple-600 hover:text-white"
                                             >
                                                 <Figma size={15} />
                                                 Figma Design
                                                 <ExternalLink size={13} />
                                             </a>
                                         )}
                                     </div>
                                 </div>
                             );

                             return (
                                 <div key={entry.id || idx} className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 lg:gap-20">
                                     
                                     {/* Desktop Connector Line leading ONLY to Text side */}
                                     <div
                                         className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1.5px] z-10 ${
                                             isDark ? "bg-slate-700" : "bg-slate-300"
                                         } ${
                                             isLeftText
                                                 ? "right-1/2 w-12 sm:w-20 lg:w-28"
                                                 : "left-1/2 w-12 sm:w-20 lg:w-28"
                                         }`}
                                     />

                                     {/* Central Diamond Node (Desktop) */}
                                     <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 z-20 md:flex items-center justify-center">
                                         <div
                                             className={`relative flex h-11 w-11 rotate-45 items-center justify-center rounded-xs border-2 shadow-lg transition-transform duration-300 hover:scale-110 ${
                                                 isGreen
                                                     ? "border-[#0D9668] bg-[#0D9668] text-white shadow-[#0D9668]/30"
                                                     : "border-[#2C3F96] bg-[#2C3F96] text-white shadow-[#2C3F96]/30"
                                             }`}
                                         >
                                             <span className="-rotate-45 text-xs sm:text-sm font-black tracking-wider">
                                                 {stepNumber}
                                             </span>
                                         </div>
                                     </div>

                                    {/* Left Column */}
                                    <div className={`order-1 ${isLeftText ? "md:order-1 text-left md:pr-10" : "md:order-1 flex justify-center md:justify-center md:pr-10"}`}>
                                        {isLeftText ? TextContentBlock : <StandaloneTimelineIcon entry={entry} isGreen={isGreen} />}
                                    </div>

                                    {/* Right Column */}
                                    <div className={`order-2 ${isLeftText ? "md:order-2 flex justify-center md:justify-center md:pl-10" : "md:order-2 text-left md:pl-10"}`}>
                                        {isLeftText ? <StandaloneTimelineIcon entry={entry} isGreen={isGreen} /> : TextContentBlock}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default ExperienceSection;

