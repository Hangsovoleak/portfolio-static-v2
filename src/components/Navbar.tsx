import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Command, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects", badge: "8" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "tools", label: "Stack" },
  { id: "skills", label: "Code" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-[#0D1015]/85 border-b border-slate-800/80 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-[#F6F3EA]/90 border-b border-stone-300/70 backdrop-blur-md shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand / Logo */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-700/80 text-white font-mono font-black text-sm group-hover:border-emerald-500 transition-colors">
            HS
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm text-slate-900 dark:text-white leading-tight">
              Rorn Hangsovoleak
            </span>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                isDark
                  ? "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="ml-1.5 rounded-full bg-emerald-500/10 px-1.5 py-0.2 font-mono text-[9px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions: Command Palette, Theme, Contact */}
        <div className="flex items-center gap-2.5">
          
          {/* Quick Command Palette Button */}
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className={`hidden sm:flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-mono transition ${
                isDark
                  ? "border-slate-800 bg-[#0D1424] text-slate-400 hover:text-white hover:border-slate-700"
                  : "border-slate-200 bg-slate-100 text-slate-600 hover:text-slate-900 hover:border-slate-300"
              }`}
              title="Command Palette (Cmd+K)"
            >
              <Command size={13} className="text-emerald-500" />
              <span>Cmd+K</span>
            </button>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-105 ${
              isDark
                ? "border-slate-800 bg-[#0D1424] text-amber-400 hover:border-slate-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 shadow-xs"
            }`}
            aria-label="Toggle dark/light theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Contact CTA (Desktop) */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm shadow-emerald-600/20 transition hover:bg-emerald-500"
          >
            <span>Let's Talk</span>
            <ArrowRight size={13} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex h-9 w-9 items-center justify-center rounded-xl border lg:hidden transition ${
              isDark
                ? "border-slate-800 bg-[#0D1424] text-slate-300"
                : "border-slate-200 bg-white text-slate-700"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden border-b px-6 py-6 transition-all ${
          isDark ? "border-slate-800 bg-[#0D1015] text-white" : "border-stone-300/80 bg-[#F6F3EA] text-stone-900"
        }`}>
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-semibold border-b border-slate-200/50 dark:border-slate-800/50"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-xs font-bold text-emerald-500">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white shadow-md shadow-emerald-600/25"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
