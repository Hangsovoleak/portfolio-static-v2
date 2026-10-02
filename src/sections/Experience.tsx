import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  Building,
  CheckCircle2,
  ExternalLink,
  Github,
  Figma,
  Award,
  X
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface ExperienceItem {
  id: number;
  step: string;
  type: string;
  role: string;
  company: string;
  period: string;
  technologies: string[];
  bullets: string[];
  certificateUrl?: string;
  links?: {
    github?: string;
    figma?: string;
  };
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 1,
    step: "01",
    type: "Internship",
    role: "Frontend Developer",
    company: "Simple Group Cambodia",
    period: "March 2026 – June 2026",
    technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Figma", "Git & GitHub"],
    bullets: [
      "Engineered the responsive static web application for E-Robot Cambodia V2 using React.js and Tailwind CSS.",
      "Designed full layout mockups and design systems in Figma, conducting multiple iterative review rounds with organizational leadership.",
      "Managed version control and team code collaboration via Git and GitHub, ensuring continuous delivery and clean code standards.",
      "Ensured cross-browser compatibility and optimized mobile responsiveness across smartphone, tablet, and desktop viewports."
    ],
    links: {
      github: "https://github.com/Hangsovoleak/e-robot-cambodia-v2.git",
      figma: "https://www.figma.com/design/eYExtVG9Swtr3so26n6bDK/E-Robot?node-id=0-1&t=RP0uCX0TDvgBTzZ8-1"
    }
  },
  {
    id: 2,
    step: "02",
    type: "Volunteer",
    role: "IT Support Specialist",
    company: "Tech for Kids Academy",
    period: "October 2025 – January 2026",
    technologies: ["Windows OS", "Bootable USB Creation", "Hardware Setup", "System Diagnostics", "IT Troubleshooting"],
    certificateUrl: "/assets/certificate.png",
    bullets: [
      "Provided hands-on IT support across desktop workstations and laptops, performing clean Windows OS installations, volume activations, and driver configurations.",
      "Engineered bootable USB media and resolved complex UEFI/BIOS boot sequence failures and operating system crashes.",
      "Collaborated with Academy instructors to ensure reliable computer lab availability and structured technical troubleshooting workflows.",
      "Awarded official Certificate of Recognition for dedication, proactive problem solving, and technical support excellence."
    ]
  },
  {
    id: 3,
    step: "03",
    type: "Volunteer",
    role: "Teacher of Scratch (STEM Education)",
    company: "E-Robot",
    period: "March 2026 – June 2026",
    technologies: ["Scratch", "Computational Logic", "STEM Mentoring", "Lab Setup", "Classroom Leadership"],
    bullets: [
      "Mentored young students in visual block-based programming, introducing core programming constructs like loops, variables, conditions, and event handlers.",
      "Adapted technical presentation slides and prepared computer laboratory hardware prior to daily instructional workshops.",
      "Supported students in debugging programming logic and guided them in constructing their own custom Scratch games and animations.",
      "Fostered an encouraging, structured learning environment that inspired curiosity and passion for technology."
    ]
  }
];

export default function ExperienceSection({ items = [] }: { items?: any[] }) {
  const { isDark } = useTheme();
  const experienceList = items.length > 0 ? items : EXPERIENCE_ITEMS;
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section
      id="experience"
      className={`relative border-b py-24 transition-colors duration-300 ${
        isDark ? "border-slate-800/80 bg-[#0D1015]" : "border-stone-300/70 bg-[#F6F3EA]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-300/60 dark:border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
              <Briefcase size={13} />
              <span>03 / PRACTICAL EXPERIENCE</span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl font-sans">
              Work & <span className="text-emerald-500">Leadership</span>
            </h2>
            <p className={`mt-2 max-w-2xl text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-400" : "text-stone-600"}`}>
              Professional frontend development internship, hands-on hardware/IT systems support, and community STEM mentorship.
            </p>
          </div>

          <div className={`hidden sm:flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-xs font-mono ${
            isDark ? "border-slate-800 bg-[#121622] text-slate-300" : "border-stone-300 bg-white text-stone-700 shadow-xs"
          }`}>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>3 Industry & Community Roles</span>
          </div>
        </div>

        {/* Experience Cards Track */}
        <div className="mt-12 space-y-8">
          {experienceList.map((exp: any, idx: number) => {
            const certUrl = exp.certificateUrl || (exp.id === 2 ? "/assets/certificate.png" : undefined);

            return (
              <div
                key={exp.id || idx}
                className={`relative overflow-hidden rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:shadow-xl ${
                  isDark
                    ? "border-slate-800/80 bg-[#121622] hover:border-slate-700"
                    : "border-stone-300/80 bg-white hover:border-stone-400 shadow-xs"
                }`}
              >
                {/* Step pill & Period header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4 border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {exp.step || `0${idx + 1}`}
                    </span>
                    <div>
                      <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider ${
                        exp.type === "Internship"
                          ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                          : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      }`}>
                        {exp.type || "Professional Role"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-400">
                    <Calendar size={13} className="text-emerald-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role & Company Header */}
                <div className="mt-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      <Building size={14} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Actions / Certificate Pill */}
                  <div className="mt-3 sm:mt-0 flex flex-wrap items-center gap-2">
                    {certUrl && (
                      <button
                        onClick={() => setSelectedCert(certUrl)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 transition hover:bg-amber-500/20"
                      >
                        <Award size={14} />
                        <span>View Certificate</span>
                      </button>
                    )}

                    {exp.links?.github && (
                      <a
                        href={exp.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                          isDark
                            ? "border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500"
                            : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                        }`}
                      >
                        <Github size={13} />
                        <span>Repository</span>
                      </a>
                    )}

                    {exp.links?.figma && (
                      <a
                        href={exp.links.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                          isDark
                            ? "border-slate-700 bg-slate-900 text-slate-200 hover:border-purple-500"
                            : "border-slate-300 bg-white text-slate-700 hover:border-purple-500"
                        }`}
                      >
                        <Figma size={13} />
                        <span>Figma Design</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Bullets List */}
                <div className="mt-6">
                  <ul className="space-y-2.5">
                    {exp.bullets?.map((bullet: string, bIdx: number) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <CheckCircle2 size={16} className="shrink-0 text-emerald-500 mt-0.5" />
                        <span className={`leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-mono font-medium mr-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    Technologies:
                  </span>
                  {exp.technologies?.map((tech: string) => (
                    <span
                      key={tech}
                      className={`rounded-md border px-2.5 py-0.5 text-[11px] font-mono font-medium ${
                        isDark
                          ? "border-slate-800 bg-slate-900 text-slate-300"
                          : "border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCert(null)}
          />
          <div
            className={`relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border p-4 sm:p-6 shadow-2xl ${
              isDark ? "border-slate-800 bg-[#0D1424] text-white" : "border-slate-200 bg-white text-slate-900"
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/50 mb-4">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-amber-400" />
                <span className="font-bold text-sm font-sans">Certificate of Recognition — Tech for Kids Academy</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-700/50 bg-black">
              <img
                src={selectedCert}
                alt="Certificate of Recognition"
                className="w-full h-auto object-contain max-h-[70vh]"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Verified Credential</span>
              <a
                href={selectedCert}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:underline font-bold"
              >
                <ExternalLink size={13} />
                <span>Open Full Size Image</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
