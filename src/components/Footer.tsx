import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  MapPin,
  Phone,
  ArrowUp
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface FooterProps {
  email?: string;
}

export default function Footer({ email = "hangsovoleak.dev@gmail.com" }: FooterProps) {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);
  
  // Form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    topic: "Internship Opportunity",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Inquiry - ${formState.topic}] from ${formState.name}`);
    const body = encodeURIComponent(
      `Hello Hangsovoleak,\n\nName: ${formState.name}\nEmail: ${formState.email}\nTopic: ${formState.topic}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className={`relative border-t pt-24 pb-12 transition-colors duration-300 ${
        isDark ? "border-slate-800/80 bg-[#0A0D14] text-slate-100" : "border-stone-300/80 bg-[#EFECE2] text-stone-900"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Contact Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
            <Mail size={13} />
            <span>08 / GET IN TOUCH</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl font-sans">
            Let's build something <span className="text-emerald-500">exceptional</span>.
          </h2>
          <p className={`mt-3 text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            I am currently open to internships, junior software engineer roles, and client web projects. Feel free to reach out directly.
          </p>
        </div>

        {/* 2-Column Contact & Form Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <div className={`rounded-2xl border p-6 transition ${
              isDark ? "border-slate-800 bg-[#121622]" : "border-stone-300 bg-white shadow-xs"
            }`}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Direct Email
              </span>
              <div className="mt-2 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${email}`}
                  className="truncate text-base sm:text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className={`flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-mono font-semibold transition ${
                    copied
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-500"
                      : isDark
                      ? "border-slate-700 bg-slate-900 text-slate-300 hover:text-white"
                      : "border-stone-300 bg-stone-100 text-stone-700 hover:text-black"
                  }`}
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Phone & Location Info */}
            <div className={`rounded-2xl border p-6 space-y-4 ${
              isDark ? "border-slate-800 bg-[#121622]" : "border-stone-300 bg-white shadow-xs"
            }`}>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400">Location</div>
                  <div className="mt-0.5 text-sm font-semibold">Phnom Penh, Cambodia</div>
                  <div className="text-xs text-slate-500">Royal University of Phnom Penh (RUPP)</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20 shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400">Telephone / Telegram</div>
                  <div className="mt-0.5 text-sm font-semibold">+855 (0) 96 450 1234</div>
                  <div className="text-xs text-slate-500">+855 (0) 10 292 822</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Hangsovoleak"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl border py-3 text-xs font-bold transition hover:-translate-y-0.5 ${
                  isDark
                    ? "border-slate-800 bg-[#0D1424] text-slate-200 hover:border-slate-600 hover:text-white"
                    : "border-slate-200 bg-white text-slate-800 hover:border-slate-400 shadow-xs"
                }`}
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/hangsovoleak"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl border py-3 text-xs font-bold transition hover:-translate-y-0.5 ${
                  isDark
                    ? "border-slate-800 bg-[#0D1424] text-slate-200 hover:border-slate-600 hover:text-white"
                    : "border-slate-200 bg-white text-slate-800 hover:border-slate-400 shadow-xs"
                }`}
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className={`rounded-2xl border p-6 sm:p-8 space-y-4 shadow-xl ${
                isDark ? "border-slate-800 bg-[#121622]" : "border-stone-300 bg-white"
              }`}
            >
              <div className="flex items-center justify-between border-b pb-4 border-slate-200 dark:border-slate-800/80">
                <span className="text-sm font-bold font-sans">Send a Message</span>
                <span className="text-xs font-mono text-emerald-500 font-semibold">Direct Dispatch</span>
              </div>

              {/* Topic Selector Chips */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Topic of Interest:
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Internship Opportunity", "Client Web Project", "Technical Mentorship", "General Say Hello"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormState({ ...formState, topic: t })}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                        formState.topic === t
                          ? "bg-emerald-600 text-white shadow-xs font-bold"
                          : isDark
                          ? "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
                          : "bg-slate-100 text-slate-600 border border-slate-200 hover:text-black"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className={`w-full rounded-xl border p-3 text-xs font-medium focus:border-emerald-500 focus:outline-none transition ${
                      isDark
                        ? "border-slate-800 bg-slate-900/90 text-slate-100 placeholder-slate-500"
                        : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={`w-full rounded-xl border p-3 text-xs font-medium focus:border-emerald-500 focus:outline-none transition ${
                      isDark
                        ? "border-slate-800 bg-slate-900/90 text-slate-100 placeholder-slate-500"
                        : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project, team, or opportunity..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className={`w-full rounded-xl border p-3 text-xs font-medium focus:border-emerald-500 focus:outline-none transition ${
                    isDark
                      ? "border-slate-800 bg-slate-900/90 text-slate-100 placeholder-slate-500"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400"
                  }`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-xs font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-500"
              >
                <Send size={14} />
                <span>Send Message Directly</span>
              </button>

              {isSubmitted && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-mono text-xs text-center">
                  Draft prepared in your email client. Thank you for reaching out!
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Rorn Hangsovoleak. Crafted with React 19, TypeScript & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-500 transition font-bold"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
