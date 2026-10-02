import React from "react";
import {
  GitCommit,
  Building,
  Calendar,
  Award,
  Github,
  Figma,
  GraduationCap,
  CheckCircle2
} from "lucide-react";

interface GitHubActivityTimelineProps {
  onOpenCertificate: () => void;
}

export default function GitHubActivityTimeline({ onOpenCertificate }: GitHubActivityTimelineProps) {

  const timelineItems = [
    {
      id: "simple-group",
      year: "2026",
      period: "March – June 2026",
      type: "Internship",
      title: "Frontend Developer Intern",
      organization: "Simple Group Cambodia",
      project: "E-Robot Cambodia V2 Website",
      commitMessage: "feat(frontend): deliver responsive E-Robot Cambodia V2 static web app with React & Tailwind",
      details: [
        "Engineered responsive static platform with React.js and Tailwind CSS based on client specifications.",
        "Created full design system and mockups in Figma, leading multiple review cycles with stakeholders.",
        "Collaborated via Git and GitHub for clean branch management and continuous deployments."
      ],
      tags: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Figma", "Git"],
      githubLink: "https://github.com/Hangsovoleak/e-robot-cambodia-v2.git",
      figmaLink: "https://www.figma.com/design/eYExtVG9Swtr3so26n6bDK/E-Robot?node-id=0-1&t=RP0uCX0TDvgBTzZ8-1"
    },
    {
      id: "tech-for-kids",
      year: "2025 - 2026",
      period: "October 2025 – January 2026",
      type: "Volunteer",
      title: "IT Support Specialist",
      organization: "Tech for Kids Academy",
      project: "Hardware Setup & System Diagnostics",
      commitMessage: "chore(systems): configure bootable USB imaging, clean OS installation & UEFI diagnostics",
      details: [
        "Provided hands-on IT support across desktop workstations and laptops, executing clean Windows OS installs and volume activations.",
        "Created bootable USB media and resolved UEFI/BIOS boot sequence issues.",
        "Awarded official Certificate of Recognition for technical problem solving and dedication."
      ],
      tags: ["Windows OS", "Bootable Media", "Hardware Setup", "IT Troubleshooting"],
      certificateUrl: "/assets/certificate.png"
    },
    {
      id: "e-robot-teacher",
      year: "2026",
      period: "March – June 2026",
      type: "Volunteer",
      title: "Teacher of Scratch (STEM Education)",
      organization: "E-Robot Cambodia",
      project: "Youth Programming Workshops",
      commitMessage: "docs(curriculum): mentor Cambodian youth in visual block-based programming & computational logic",
      details: [
        "Mentored young students in visual block-based programming, introducing loops, variables, and conditions.",
        "Prepared laboratory hardware and debugging support for student-created games and animations."
      ],
      tags: ["Scratch", "STEM Education", "Classroom Mentoring", "Hardware Lab"]
    },
    {
      id: "rupp-degree",
      year: "2025 - Present",
      period: "2025 – Present",
      type: "Education",
      title: "Bachelor of Information Technology Engineering",
      organization: "Royal University of Phnom Penh (RUPP)",
      project: "Academic Degree Program",
      commitMessage: "study(engineering): algorithms, discrete mathematics, relational DBs, OOP in C++ & Java",
      details: [
        "Coursework: Data Structures & Algorithms (Dijkstra, Trees, Graph Traversal), Database Management Systems (PostgreSQL, MySQL), and Software Architecture."
      ],
      tags: ["Data Structures", "Algorithms", "C++", "Java", "SQL"]
    },
    {
      id: "tux-global",
      year: "2025 - Present",
      period: "2025 – Present",
      type: "Education",
      title: "Associate Degree in App/Web Development",
      organization: "Tux Global Institute",
      project: "Intensive Development Program",
      commitMessage: "build(fullstack): hands-on web applications, REST APIs, and client-ready portfolios",
      details: [
        "Intensive training in modern web engineering, full-stack application lifecycle, and collaborative team sprints."
      ],
      tags: ["Web Development", "Python", "Django", "React", "APIs"]
    }
  ];

  return (
    <div id="experience" className="mt-8 space-y-4">
      {/* Activity Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#d0d7de] dark:border-[#30363d] pb-3">
        <div>
          <h2 className="text-sm font-semibold text-[#1f2328] dark:text-[#f0f6fc]">
            Contribution Activity &amp; Career History
          </h2>
          <p className="text-xs text-[#656d76] dark:text-[#8b949e]">
            Practical internships, volunteer contributions, and academic milestones
          </p>
        </div>

        <button
          onClick={onOpenCertificate}
          className="inline-flex items-center gap-1.5 rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22] px-3 py-1 text-xs font-semibold text-[#0969da] dark:text-[#58a6ff] hover:bg-white dark:hover:bg-[#21262d] transition-colors"
        >
          <Award size={14} className="text-[#d29922]" />
          <span>View IT Certificate</span>
        </button>
      </div>

      {/* GitHub Commit / Activity Stream */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#d0d7de] dark:before:bg-[#30363d]">
        {timelineItems.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Git Commit Node Icon */}
            <div className="absolute -left-6 sm:-left-8 top-1 flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] text-[#1f883d] dark:text-[#3fb950] shadow-xs group-hover:border-[#0969da] dark:group-hover:border-[#58a6ff] transition-colors">
              {item.type === "Education" ? (
                <GraduationCap size={13} className="text-[#0969da] dark:text-[#58a6ff]" />
              ) : (
                <GitCommit size={13} />
              )}
            </div>

            {/* Content Box */}
            <div className="rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] p-4 transition-colors hover:border-[#0969da] dark:hover:border-[#58a6ff]">
              {/* Header: Title, Org, Period */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d0d7de]/50 dark:border-[#30363d]/60 pb-2.5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-xs sm:text-sm text-[#1f2328] dark:text-[#f0f6fc]">
                      {item.title}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-mono uppercase font-semibold ${
                        item.type === "Internship"
                          ? "bg-[#0969da]/10 text-[#0969da] dark:text-[#58a6ff]"
                          : item.type === "Education"
                          ? "bg-[#8250df]/10 text-[#8250df] dark:text-[#bc8cff]"
                          : "bg-[#1f883d]/10 text-[#1f883d] dark:text-[#3fb950]"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#656d76] dark:text-[#8b949e] mt-0.5">
                    <Building size={13} />
                    <span>{item.organization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#656d76] dark:text-[#8b949e]">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Commit Message Box */}
              <div className="mt-3 rounded bg-[#f6f8fa] dark:bg-[#161b22] px-3 py-1.5 font-mono text-[11px] text-[#0969da] dark:text-[#58a6ff] border border-[#d0d7de]/40 dark:border-[#30363d]/40">
                {item.commitMessage}
              </div>

              {/* Bullets */}
              <ul className="mt-3 space-y-1.5 text-xs text-[#1f2328] dark:text-[#c9d1d9] leading-relaxed">
                {item.details.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="mt-0.5 text-[#1f883d] dark:text-[#3fb950] flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Tags & Action links */}
              <div className="mt-4 pt-2.5 border-t border-[#d0d7de]/40 dark:border-[#30363d]/40 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded bg-[#afb8c1]/15 dark:bg-[#6e7681]/20 px-2 py-0.5 text-[10px] font-mono text-[#656d76] dark:text-[#8b949e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {item.certificateUrl && (
                    <button
                      onClick={onOpenCertificate}
                      className="inline-flex items-center gap-1 text-xs text-[#d29922] font-semibold hover:underline"
                    >
                      <Award size={13} />
                      <span>Certificate Preview</span>
                    </button>
                  )}

                  {item.githubLink && (
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#0969da] dark:text-[#58a6ff] hover:underline"
                    >
                      <Github size={13} />
                      <span>Repository</span>
                    </a>
                  )}

                  {item.figmaLink && (
                    <a
                      href={item.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#0969da] dark:text-[#58a6ff] hover:underline"
                    >
                      <Figma size={13} />
                      <span>Figma</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
