import React from "react";
import { Eye } from "lucide-react";

interface GitHubFooterProps {
  visitorCount?: number;
}

export default function GitHubFooter({ visitorCount }: GitHubFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] py-8 text-xs text-[#656d76] dark:text-[#8b949e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <div className="flex items-center gap-2">
          <span>&copy; {currentYear} Rorn Hangsovoleak. Built with React &amp; Tailwind CSS.</span>
        </div>

        {/* Center / Right Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px]">
          <a
            href="/assets/resume.pdf"
            download="Rorn_Hangsovoleak_Resume.pdf"
            className="font-semibold text-[#0969da] dark:text-[#58a6ff] hover:underline"
          >
            Resume (PDF)
          </a>
          <a
            href="https://github.com/Hangsovoleak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0969da] dark:text-[#58a6ff] hover:underline"
          >
            GitHub Profile
          </a>
          <a
            href="https://linkedin.com/in/hangsovoleak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0969da] dark:text-[#58a6ff] hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hangsovoleak.dev@gmail.com"
            className="text-[#0969da] dark:text-[#58a6ff] hover:underline"
          >
            Contact
          </a>
          <a
            href="https://t.me/hangsovoleak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0969da] dark:text-[#58a6ff] hover:underline"
          >
            Telegram
          </a>
          <span className="hidden sm:inline text-[#d0d7de] dark:text-[#30363d]">|</span>
          <span className="font-mono text-[#656d76] dark:text-[#8b949e]">
            v2.4.0 (GitHub Style Edition)
          </span>
          {visitorCount !== undefined && (
            <>
              <span className="hidden sm:inline text-[#d0d7de] dark:text-[#30363d]">|</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[#656d76] dark:text-[#8b949e]">
                <Eye size={12} className="text-[#1f883d] dark:text-[#3fb950]" />
                <span className="text-[#1f2328] dark:text-[#f0f6fc] font-semibold">{visitorCount.toLocaleString()}</span>
                <span>visitors</span>
              </span>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
