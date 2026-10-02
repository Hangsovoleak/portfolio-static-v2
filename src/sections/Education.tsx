import React from "react";
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

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
