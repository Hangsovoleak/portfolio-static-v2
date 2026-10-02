import React, { useState, useEffect } from "react";
import {
  MapPin,
  Link as LinkIcon,
  Mail,
  Send,
  Building,
  Clock,
  Check,
  Heart,
  Linkedin,
  Eye
} from "lucide-react";
import type { Profile } from "../types/profile";

interface GitHubSidebarProps {
  profile: Profile;
  onOpenContact?: () => void;
  visitorCount?: number;
}

export default function GitHubSidebar({ profile, onOpenContact, visitorCount }: GitHubSidebarProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [statusEmoji, setStatusEmoji] = useState("🎯");
  const [statusText, setStatusText] = useState("Building resilient backend & web systems");
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Live Phnom Penh time (UTC+7)
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
        setLocalTime(formatter.format(now));
      } catch (e) {
        setLocalTime("ICT (UTC+7)");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
  };

  const handleCopyEmail = () => {
    if (profile?.email) {
      navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const statusPresets = [
    { emoji: "🎯", text: "Building resilient backend & web systems" },
    { emoji: "🟢", text: "Available for junior & internship roles" },
    { emoji: "🐍", text: "Writing Python, Django & REST APIs" },
    { emoji: "⚛️", text: "Developing with React & Tailwind CSS" },
    { emoji: "☕", text: "Exploring algorithms & graph theory" }
  ];

  return (
    <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0">
      <div className="relative">
        {/* Avatar Container with Status Badge */}
        <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
            onClick={() => setIsImageHovered((prev) => !prev)}
            title="Hover to view original color photo"
          >
            <div className="relative h-24 w-24 sm:h-36 sm:w-36 lg:h-64 lg:w-64 rounded-full overflow-hidden border-2 border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22] shadow-sm select-none">
              {/* Base Layer: Original Color Photo */}
              <img
                src={profile?.colorImage || "/assets/profile_color.jpg"}
                alt={profile?.name || "Rorn Hangsovoleak"}
                className={`absolute inset-0 h-full w-full object-cover object-[55%_35%] transition-all duration-700 ease-in-out group-hover:scale-105 ${
                  isImageHovered ? "scale-105" : "scale-100"
                }`}
              />

              {/* Top Layer: Silver Art Image - visible by default, fades out on hover */}
              <img
                src={profile?.silverImage || profile?.image || "/assets/profile_silver.jpg"}
                alt={`${profile?.name || "Rorn Hangsovoleak"} (Silver Art)`}
                className={`absolute inset-0 h-full w-full object-cover object-[55%_35%] transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-105 ${
                  isImageHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
                }`}
              />
            </div>

            {/* Interactive Status Emoji Indicator */}
            <div className="absolute bottom-1 right-1 lg:bottom-4 lg:right-4 z-10">
              <button
                onClick={() => setShowStatusMenu(!showStatusMenu)}
                className="flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#21262d] text-sm shadow-md hover:scale-110 transition-transform"
                title="Change status"
              >
                <span>{statusEmoji}</span>
              </button>

              {/* Status Picker Menu */}
              {showStatusMenu && (
                <div className="absolute left-0 bottom-full mb-2 w-64 rounded-xl border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#161b22] p-2 shadow-xl z-50">
                  <div className="text-[11px] font-semibold text-[#656d76] dark:text-[#8b949e] px-2 py-1 uppercase tracking-wider">
                    Set user status
                  </div>
                  <div className="space-y-1 mt-1">
                    {statusPresets.map((preset, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setStatusEmoji(preset.emoji);
                          setStatusText(preset.text);
                          setShowStatusMenu(false);
                        }}
                        className="w-full flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-xs text-[#1f2328] dark:text-[#c9d1d9] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] transition-colors"
                      >
                        <span className="text-base">{preset.emoji}</span>
                        <span className="truncate">{preset.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* User Names & Handle */}
          <div className="mt-0 lg:mt-4 flex-1">
            <h1 className="text-xl sm:text-2xl font-bold leading-tight text-[#1f2328] dark:text-[#f0f6fc]">
              {profile?.name || "Rorn Hangsovoleak"}
            </h1>
          </div>
        </div>

        {/* Current Status Pill on Desktop */}
        <div className="mt-3.5 hidden lg:flex items-center gap-2 rounded-lg border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22] px-3 py-1.5 text-xs text-[#1f2328] dark:text-[#c9d1d9]">
          <span className="text-sm">{statusEmoji}</span>
          <span className="truncate">{statusText}</span>
        </div>

        {/* Follow & Sponsor Action Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row lg:flex-col gap-2">
          <button
            onClick={handleFollowToggle}
            className={`w-full flex items-center justify-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold shadow-xs transition-colors ${
              isFollowing
                ? "border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#21262d] text-[#1f2328] dark:text-[#c9d1d9] hover:border-[#cf222e] hover:text-[#cf222e] dark:hover:text-[#ff7b72]"
                : "border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#21262d] text-[#1f2328] dark:text-[#f0f6fc] hover:bg-[#eaeef2] dark:hover:bg-[#30363d]"
            }`}
          >
            {isFollowing ? (
              <>
                <Check size={14} className="text-[#1f883d] dark:text-[#3fb950]" />
                <span>Following</span>
              </>
            ) : (
              <span>Follow</span>
            )}
          </button>

          <a
            href="mailto:hangsovoleak.dev@gmail.com"
            className="w-full flex items-center justify-center gap-1.5 rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] px-3 py-1.5 text-xs font-semibold text-[#cf222e] dark:text-[#ff7b72] hover:bg-[#ffebe9] dark:hover:bg-[#301c1c] transition-colors"
          >
            <Heart size={14} className="fill-current" />
            <span>Sponsor & Contact</span>
          </a>
        </div>

        {/* Bio */}
        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#1f2328] dark:text-[#c9d1d9]">
          {profile?.shortBio || "Information Technology Engineering student building responsive web applications, REST APIs, and algorithmic systems with React, TypeScript, Python, and Django."}
        </p>


        {/* Personal Details & Social Metadata */}
        <div className="mt-5 space-y-2.5 text-xs text-[#1f2328] dark:text-[#c9d1d9] border-t border-[#d0d7de] dark:border-[#30363d] pt-4">
          {/* Institution / College */}
          <div className="flex items-start gap-2.5">
            <Building size={15} className="mt-0.5 text-[#656d76] dark:text-[#8b949e] flex-shrink-0" />
            <span>RUPP (IT Engineering) & Tux Global</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2.5">
            <MapPin size={15} className="text-[#656d76] dark:text-[#8b949e] flex-shrink-0" />
            <span>Phnom Penh, Cambodia</span>
          </div>

          {/* Local Live Time */}
          <div className="flex items-center gap-2.5">
            <Clock size={15} className="text-[#656d76] dark:text-[#8b949e] flex-shrink-0" />
            <span>{localTime || "12:00:00 PM ICT"} (UTC+7)</span>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between gap-2">
            <a
              href="mailto:hangsovoleak.dev@gmail.com"
              className="flex items-center gap-2.5 truncate text-[#0969da] dark:text-[#58a6ff] hover:underline"
            >
              <Mail size={15} className="text-[#656d76] dark:text-[#8b949e] flex-shrink-0" />
              <span className="truncate">{profile?.email || "hangsovoleak.dev@gmail.com"}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-[#d0d7de] dark:border-[#30363d] text-[#656d76] dark:text-[#8b949e] hover:text-[#1f2328] dark:hover:text-[#f0f6fc]"
              title="Copy email to clipboard"
            >
              {copiedEmail ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Website / Portfolio Link */}
          <div className="flex items-center gap-2.5">
            <LinkIcon size={15} className="text-[#656d76] dark:text-[#8b949e] flex-shrink-0" />
            <a
              href="https://github.com/Hangsovoleak"
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-[#0969da] dark:text-[#58a6ff] hover:underline"
            >
              github.com/Hangsovoleak
            </a>
          </div>

          {/* LinkedIn Link */}
          <div className="flex items-center gap-2.5">
            <Linkedin size={15} className="text-[#656d76] dark:text-[#8b949e] flex-shrink-0" />
            <a
              href="https://linkedin.com/in/hangsovoleak"
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-[#0969da] dark:text-[#58a6ff] hover:underline"
            >
              linkedin.com/in/hangsovoleak
            </a>
          </div>

          {/* Telegram */}
          <div className="flex items-center gap-2.5">
            <Send size={15} className="text-[#656d76] dark:text-[#8b949e] flex-shrink-0" />
            <a
              href="https://t.me/hangsovoleak"
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-[#0969da] dark:text-[#58a6ff] hover:underline"
            >
              @hangsovoleak
            </a>
          </div>

          {/* Unique Visitors / Views */}
          {visitorCount !== undefined && (
            <div className="flex items-center gap-2.5 pt-1">
              <Eye size={15} className="text-[#1f883d] dark:text-[#3fb950] flex-shrink-0" />
              <span className="flex items-center gap-1.5">
                <strong className="font-semibold text-[#1f2328] dark:text-[#f0f6fc] font-mono">
                  {visitorCount.toLocaleString()}
                </strong>
                <span className="text-[#656d76] dark:text-[#8b949e]">profile views</span>
              </span>
            </div>
          )}
        </div>

        {/* GitHub Achievements Badges (Matching Image 1!) */}
        <div className="mt-5 border-t border-[#d0d7de] dark:border-[#30363d] pt-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#1f2328] dark:text-[#f0f6fc] flex items-center justify-between">
            <span>Achievements</span>
            <span className="rounded-full bg-[#afb8c1]/20 dark:bg-[#6e7681]/30 px-1.5 py-0.2 text-[10px] font-mono">
              5
            </span>
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">
            {/* Pull Shark */}
            <div
              className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-[#d0d7de] dark:border-[#30363d] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:border-[#0969da] dark:hover:border-[#58a6ff] transition cursor-pointer"
              title="Pull Shark x2 — Merged pull requests and collaborative code reviews"
            >
              <div className="text-2xl">🦈</div>
              <span className="absolute -bottom-1 -right-1 rounded-full bg-[#0969da] text-white px-1 text-[9px] font-bold font-mono">
                x2
              </span>
            </div>

            {/* Quickdraw */}
            <div
              className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-[#d0d7de] dark:border-[#30363d] bg-gradient-to-br from-amber-500/10 to-orange-500/10 hover:border-amber-500 transition cursor-pointer"
              title="Quickdraw — Closed issues and fixed bugs within 5 minutes of opening"
            >
              <div className="text-2xl">⚡</div>
            </div>

            {/* Starstruck */}
            <div
              className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-[#d0d7de] dark:border-[#30363d] bg-gradient-to-br from-yellow-500/10 to-amber-500/10 hover:border-yellow-500 transition cursor-pointer"
              title="Starstruck — Received over 25+ stars across portfolio repositories"
            >
              <div className="text-2xl">🌟</div>
            </div>

            {/* Arctic Code Vault */}
            <div
              className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-[#d0d7de] dark:border-[#30363d] bg-gradient-to-br from-indigo-500/10 to-blue-500/10 hover:border-indigo-500 transition cursor-pointer"
              title="Arctic Code Vault Contributor — Preserving code for future generations"
            >
              <div className="text-2xl">❄️</div>
            </div>

            {/* Pair Extraordinaire */}
            <div
              className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-[#d0d7de] dark:border-[#30363d] bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:border-purple-500 transition cursor-pointer"
              title="Pair Extraordinaire — Co-authored commits in team and client projects"
            >
              <div className="text-2xl">🚀</div>
            </div>
          </div>
        </div>

        {/* Organizations / Highlights */}
        <div className="mt-5 border-t border-[#d0d7de] dark:border-[#30363d] pt-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#1f2328] dark:text-[#f0f6fc]">
            Organizations
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22] text-xs font-bold text-[#0969da] dark:text-[#58a6ff]"
              title="Royal University of Phnom Penh (RUPP)"
            >
              RUPP
            </div>
            <div
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22] text-xs font-bold text-[#1f883d] dark:text-[#3fb950]"
              title="TUX Global Institute"
            >
              TUX
            </div>
            <div
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22] text-xs font-bold text-[#8250df] dark:text-[#bc8cff]"
              title="Simple Group Cambodia"
            >
              SG
            </div>
            <div
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22] text-xs font-bold text-[#d29922]"
              title="E-Robot Cambodia"
            >
              ER
            </div>
          </div>
        </div>

        {/* Footer info: Block or report user (Authentic GitHub touch) */}
        <div className="mt-6 border-t border-[#d0d7de] dark:border-[#30363d] pt-3">
          <button
            onClick={() => alert("Hangsovoleak is friendly and open to collaboration! Reach out anytime via email: hangsovoleak.dev@gmail.com")}
            className="text-[11px] text-[#656d76] dark:text-[#8b949e] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors"
          >
            Block or report user
          </button>
        </div>
      </div>
    </aside>
  );
}
