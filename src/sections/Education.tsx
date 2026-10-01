import React from "react";
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

<<<<<<< HEAD
/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const SCHOOL_LOGOS: Record<string, string> = {
    "Royal University of Phnom Penh": "/images/rupp-logo.png",
    "TUX Global Institute": "/images/tux-logo.png",
};

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

function EducationSection({ items = [] }: { items?: any[] }) {
    const { isDark } = useTheme();

    return (
        <section
            id="education"
            className={`relative border-b transition-colors duration-300 py-20 ${
                isDark ? "border-slate-800/80 bg-[#080C16] text-slate-100" : "border-slate-200 bg-slate-50/50 text-slate-900"
            }`}
        >
            <div className="portfolio-animate mx-auto max-w-6xl px-6">

                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#0D9668]/30 bg-[#0D9668]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0D9668]">
                        <Compass size={14} />
                        MY JOURNEY
                    </div>

                    <h2 className={`mt-4 text-3xl font-black sm:text-5xl ${isDark ? "text-white" : "text-slate-900"}`}>
                        My <span className="text-[#0D9668]">academic journey</span>
                    </h2>

                    <div className={`mx-auto mt-3 h-0.5 w-12 rounded-full ${isDark ? "bg-slate-800" : "bg-slate-300"}`} />
                </div>

                {/* Stepper Timeline & Cards Grid */}
                <div className="relative mx-auto mt-14 max-w-5xl">
                    {/* Horizontal Stepper Connector Line (Desktop) */}
                    <div className={`absolute left-12 right-12 top-4 hidden h-0.5 md:block ${isDark ? "bg-slate-800" : "bg-slate-300"}`} />

                    <div className="grid gap-8 md:grid-cols-2">
                        {items.map((entry, idx) => {
                            const stepNumber = String(idx + 1).padStart(2, "0");
                            const isGreen = idx % 2 === 0;
                            const logoSrc = SCHOOL_LOGOS[entry.institution] || `/images/school-logo-${idx + 1}.png`;

                            return (
                                <article
                                    key={entry.id || idx}
                                    className={`group relative flex flex-col rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0D9668]/50 hover:shadow-xl ${
                                        isDark
                                            ? "border-slate-800/80 bg-[#0D1424] hover:bg-[#111A2E]"
                                            : "border-slate-200 bg-white hover:bg-slate-50"
                                    }`}
                                >
                                    {/* Number Circle Node Header */}
                                    <div className="relative mb-6 flex items-center justify-between">
                                        <div className={`z-10 grid h-9 w-9 place-items-center rounded-full border text-xs font-extrabold shadow-sm transition group-hover:border-[#0D9668] group-hover:bg-[#0D9668] group-hover:text-white ${
                                            isDark
                                                ? "border-slate-700 bg-slate-900 text-slate-100"
                                                : "border-slate-300 bg-slate-100 text-slate-800"
                                        }`}>
                                            {stepNumber}
                                        </div>

                                        {/* TODO: Upload school logo image here (Path: {logoSrc}) */}
                                        <div className="h-8 w-8 flex items-center justify-center">
                                            <img
                                                src={logoSrc}
                                                alt={`${entry.institution} logo`}
                                                onError={(e) => {
                                                    // Fallback to text initials icon if image not uploaded
                                                    (e.target as HTMLElement).style.display = "none";
                                                }}
                                                className="h-8 w-8 object-contain opacity-80 transition group-hover:opacity-100 brightness-110"
                                            />
                                        </div>
                                    </div>


                                    {/* Pill Category Tag (01 / DEGREE) */}
                                    <div>
                                        <span
                                            className={
                                                isGreen
                                                    ? "inline-block rounded-full border border-[#0D9668]/30 bg-[#0D9668]/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#0D9668]"
                                                    : "inline-block rounded-full border border-[#2C3F96]/40 bg-[#2C3F96]/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#2C3F96] dark:text-[#2C3F96]"
                                            }
                                        >
                                            {entry.category || `${stepNumber} / EDUCATION`}
                                        </span>
                                    </div>

                                    {/* Bold Institution Title */}
                                    <h3 className={`mt-4 text-xl font-black sm:text-2xl ${isDark ? "text-white" : "text-slate-900"}`}>
                                        {entry.institution}
                                    </h3>

                                    {/* Highlighted Degree Subtitle */}
                                    <p
                                        className={
                                            isGreen
                                                ? "mt-2 text-sm font-bold leading-6 text-[#0D9668]"
                                                : "mt-2 text-sm font-bold leading-6 text-[#2C3F96] dark:text-[#2C3F96]"
                                        }
                                    >
                                        {entry.degree}
                                    </p>

                                    {/* Time Period Meta */}
                                    <span className={`mt-1 text-xs font-extrabold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                                        {entry.period}
                                    </span>

                                    {/* Paragraph Description */}
                                    <p className={`mt-4 text-xs font-medium leading-6 sm:text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                                        {entry.description || "Pursuing comprehensive studies and practical training to build high-quality software solutions."}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
=======
interface EducationItem {
  id: number;
  step: string;
  category: string;
  institution: string;
  degree: string;
  period: string;
  location?: string;
  description: string;
  coursework?: string[];
>>>>>>> f13f9d9 (update features)
}

const DEFAULT_EDUCATION: EducationItem[] = [
  {
    id: 1,
    step: "01",
    category: "Degree Program",
    institution: "Royal University of Phnom Penh (RUPP)",
    degree: "Bachelor of Information Technology Engineering",
    period: "2025 – Present",
    location: "Phnom Penh, Cambodia",
    description: "Rigorous engineering curriculum focusing on software architecture, discrete mathematics, data structures and algorithms, relational database design, and object-oriented programming.",
    coursework: [
      "Data Structures & Algorithms (Dijkstra, Trees, Graphs)",
      "Database Management Systems & SQL Architecture",
      "Object-Oriented Programming (Java & C++)",
      "Computer Networks & Operating Systems",
      "Software Engineering Lifecycle & Specifications"
    ]
  },
  {
    id: 2,
    step: "02",
    category: "Associate Program",
    institution: "Tux Global Institute",
    degree: "Associate Degree in App/Web Development",
    period: "2025 – Present",
    location: "Phnom Penh, Cambodia",
    description: "Hands-on intensive development training centered around modern full-stack web and mobile application engineering, responsive UI/UX standards, and real-world team practicums.",
    coursework: [
      "Modern Web Development (React.js, TypeScript, Tailwind)",
      "Backend REST API Construction & Integration",
      "Client UI/UX Prototyping in Figma",
      "Agile Collaboration & Git/GitHub Workflows",
      "Production Deployment & Cloud Hosting"
    ]
  }
];

export default function EducationSection({ items = [] }: { items?: any[] }) {
  const { isDark } = useTheme();
  const educationList = items.length > 0 ? items : DEFAULT_EDUCATION;

  return (
    <section
      id="education"
      className={`relative border-b py-24 transition-colors duration-300 ${
        isDark ? "border-slate-800/80 bg-[#0D1015]" : "border-stone-300/70 bg-[#F2EFE6]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-300/60 dark:border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
              <GraduationCap size={13} />
              <span>04 / ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl font-sans">
              Education & <span className="text-emerald-500">Qualifications</span>
            </h2>
            <p className={`mt-2 max-w-2xl text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-400" : "text-stone-600"}`}>
              Concurrent academic studies combining theoretical computer science engineering with intensive modern application development practicum.
            </p>
          </div>

          <div className={`hidden sm:flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-xs font-mono ${
            isDark ? "border-slate-800 bg-[#121622] text-slate-300" : "border-stone-300 bg-white text-stone-700 shadow-xs"
          }`}>
            <Award size={14} className="text-emerald-500" />
            <span>Dual Engineering Pursuits</span>
          </div>
        </div>

        {/* 2-Column Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {educationList.map((edu: any, idx: number) => {
            const coursework = edu.coursework || DEFAULT_EDUCATION[idx]?.coursework || [];

            return (
              <div
                key={edu.id || idx}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 transition duration-300 hover:shadow-xl ${
                  isDark
                    ? "border-slate-800/80 bg-[#121622] hover:border-emerald-500/40"
                    : "border-stone-300/80 bg-white hover:border-emerald-500/40 shadow-xs"
                }`}
              >
                <div>
                  {/* Top Bar with Number & Period */}
                  <div className="flex items-center justify-between border-b pb-4 border-slate-200 dark:border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {edu.step || `0${idx + 1}`}
                      </span>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        {edu.category || "Higher Education"}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-400">
                      <Calendar size={13} className="text-emerald-500" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Institution & Degree */}
                  <div className="mt-5">
                    <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400">
                      {edu.degree}
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`mt-4 text-xs sm:text-sm leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {edu.description}
                  </p>

                  {/* Coursework & Focus Areas */}
                  {coursework.length > 0 && (
                    <div className="mt-6">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <BookOpen size={13} className="text-emerald-500" />
                        <span>Core Coursework & Competencies</span>
                      </div>
                      <ul className="space-y-2">
                        {coursework.map((course: string, cIdx: number) => (
                          <li key={cIdx} className="flex items-start gap-2.5 text-xs">
                            <CheckCircle2 size={14} className="shrink-0 text-emerald-500 mt-0.5" />
                            <span className={isDark ? "text-slate-300" : "text-slate-700 font-medium"}>
                              {course}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer Status */}
                <div className={`mt-8 pt-4 border-t flex items-center justify-between text-xs font-mono ${
                  isDark ? "border-slate-800 text-slate-400" : "border-slate-100 text-slate-500"
                }`}>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-emerald-500" />
                    <span>Phnom Penh, Cambodia</span>
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-500">
                    Active Student
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
