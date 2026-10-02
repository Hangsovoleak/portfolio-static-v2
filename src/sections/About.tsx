import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Clock
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import type { Profile } from "../types/profile";

interface AboutSectionProps {
  profile: Profile | null;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  const { isDark } = useTheme();

  // Live Phnom Penh Clock (UTC+7)
  const [phnomPenhTime, setPhnomPenhTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Phnom_Penh",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        });
        setPhnomPenhTime(formatter.format(now));
      } catch (e) {
        setPhnomPenhTime("GMT+7");
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!profile) return null;

  const portraitSrc = profile.image || "/assets/profile_silver.jpg";

  return (
    <section
      id="about"
      className={`relative min-h-[85vh] flex items-center pt-24 pb-16 transition-colors duration-300 ${
        isDark ? "bg-[#0D1015]" : "bg-[#F6F3EA]"
      }`}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bio & Core Info (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status & Availability Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Available for Opportunities</span>
              </span>

              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono ${
                isDark
                  ? "border-slate-800 bg-[#121622] text-slate-400"
                  : "border-stone-300/80 bg-[#FAF7F0] text-stone-600"
              }`}>
                <MapPin size={12} className="text-emerald-500" />
                <span>Phnom Penh</span>
                <span className="text-stone-400">·</span>
                <Clock size={12} className="text-stone-400" />
                <span className="font-semibold">{phnomPenhTime || "UTC+7"}</span>
              </span>
            </div>

            {/* Main Greeting & Headline */}
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl font-sans leading-[1.1] text-stone-900 dark:text-white">
              Hi, I'm <span className="text-emerald-600 dark:text-emerald-400">{profile.name}</span>
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-bold font-sans text-stone-800 dark:text-slate-200">
              Software Engineering Student & Full-Stack Developer
            </p>

            {/* Description */}
            <p className={`mt-4 text-sm sm:text-base leading-relaxed max-w-2xl ${
              isDark ? "text-slate-400" : "text-stone-600"
            }`}>
              Currently pursuing a Bachelor of Information Technology Engineering at the{" "}
              <strong className="text-stone-900 dark:text-white font-semibold">
                Royal University of Phnom Penh (RUPP)
              </strong>{" "}
              and an Associate Degree in App/Web Development at{" "}
              <strong className="text-stone-900 dark:text-white font-semibold">
                Tux Global Institute
              </strong>
              . I engineer responsive web applications, REST APIs, and algorithmic systems with a strong commitment to clean code, usability, and technical rigor.
            </p>

            {/* Tech Stack Highlights */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className={`font-semibold mr-1 ${isDark ? "text-slate-400" : "text-stone-500"}`}>
                Core Stack:
              </span>
              {["React.js", "TypeScript", "Python", "Django", "PostgreSQL", "Tailwind CSS", "Git"].map((tech) => (
                <span
                  key={tech}
                  className={`rounded-md border px-2.5 py-0.5 font-medium ${
                    isDark
                      ? "border-slate-800 bg-[#121622] text-slate-300"
                      : "border-stone-300/80 bg-white/80 text-stone-800"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-500 hover:-translate-y-0.5"
              >
                <span>Explore Work</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${
                  isDark
                    ? "border-slate-700 bg-[#121622] text-slate-200 hover:border-emerald-500 hover:text-white"
                    : "border-stone-300 bg-white text-stone-800 hover:border-emerald-500 hover:text-stone-900 shadow-xs"
                }`}
              >
                <Mail size={16} className="text-emerald-500" />
                <span>Contact Me</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center h-11 w-11 rounded-xl border transition hover:-translate-y-0.5 ${
                  isDark
                    ? "border-slate-800 bg-[#121622] text-slate-300 hover:text-white hover:border-slate-600"
                    : "border-stone-300 bg-white text-stone-700 hover:text-black hover:border-stone-400 shadow-xs"
                }`}
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center h-11 w-11 rounded-xl border transition hover:-translate-y-0.5 ${
                  isDark
                    ? "border-slate-800 bg-[#121622] text-slate-300 hover:text-white hover:border-slate-600"
                    : "border-stone-300 bg-white text-stone-700 hover:text-black hover:border-stone-400 shadow-xs"
                }`}
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Quick Metrics Cards */}
            <div className="mt-10 grid grid-cols-3 gap-3 w-full max-w-lg">
              <div className={`rounded-xl border p-3 text-center transition ${
                isDark ? "border-slate-800 bg-[#121622]" : "border-stone-300/80 bg-white/70 shadow-xs"
              }`}>
                <div className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">08+</div>
                <div className={`mt-0.5 text-[11px] font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-stone-500"}`}>
                  Projects Built
                </div>
              </div>

              <div className={`rounded-xl border p-3 text-center transition ${
                isDark ? "border-slate-800 bg-[#121622]" : "border-stone-300/80 bg-white/70 shadow-xs"
              }`}>
                <div className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">02</div>
                <div className={`mt-0.5 text-[11px] font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-stone-500"}`}>
                  Institutions
                </div>
              </div>

              <div className={`rounded-xl border p-3 text-center transition ${
                isDark ? "border-slate-800 bg-[#121622]" : "border-stone-300/80 bg-white/70 shadow-xs"
              }`}>
                <div className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">03</div>
                <div className={`mt-0.5 text-[11px] font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-stone-500"}`}>
                  Roles Served
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Standalone Editorial Artwork (No Card, Seamless Background Blend) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[460px] flex justify-center items-center">
              <img
                src={portraitSrc}
                alt={profile.name}
                className="w-full h-auto object-contain select-none transition-all duration-300 drop-shadow-md hover:drop-shadow-xl"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
