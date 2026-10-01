import React from "react";

export function TechLogo({ id, className = "h-6 w-6" }: { id: string; className?: string }) {
  switch (id.toLowerCase()) {
    case "react":
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1.2">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "typescript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M14.5 10.5v8h-2.5v-8H9V8.5h8.5v2h-3zM7.5 10.5H5.8v8H3.5v-8H1.8V8.5h5.7v2z" fill="#FFF" />
          <path d="M19 14.5c-.5-.4-1.2-.6-1.9-.6-.7 0-1.1.2-1.1.6 0 .4.4.6 1.3.8 1.4.4 2.2.9 2.2 2.1 0 1.4-1.2 2.2-2.7 2.2-1 0-1.9-.3-2.6-.9l.9-1.5c.6.4 1.2.6 1.8.6.6 0 1-.2 1-.5 0-.4-.4-.5-1.4-.8-1.4-.4-2.1-.9-2.1-2 0-1.3 1-2.1 2.5-2.1.9 0 1.6.2 2.2.6l-.8 1.5z" fill="#FFF" />
        </svg>
      );
    case "javascript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7 17.5c.8.5 1.7.8 2.6.8 1.3 0 2-.6 2-1.8V9H9.2v7.4c0 .5-.2.7-.6.7-.4 0-.8-.1-1.1-.3l-.5.7zM14.2 17.5c1 .5 2 .8 3.1.8 2.1 0 3.3-1.1 3.3-2.8 0-1.6-1-2.4-2.6-3-.9-.4-1.5-.7-1.5-1.3 0-.5.4-.9 1.2-.9.8 0 1.5.2 2.1.6l.6-1.5c-.7-.4-1.6-.6-2.6-.6-2 0-3.3 1.1-3.3 2.7 0 1.5 1 2.3 2.6 2.9.9.4 1.5.8 1.5 1.4 0 .6-.5 1-1.4 1-.9 0-1.7-.3-2.4-.7l-.5.7z" fill="#000" />
        </svg>
      );
    case "tailwind":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#06B6D4">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "html":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" fill="#E34F26" />
          <path d="M12 2.2v19.5l6.9-2.2 1.6-17.3H12z" fill="#EF652A" />
          <path d="M6.2 6.7h11.6l-.4 3.9H12v3.8h4.9l-.5 5.6-4.4 1.4v-3.7l2.2-.7.2-2.6H6.9l-.7-7.7z" fill="#FFF" />
        </svg>
      );
    case "python":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M11.87 2c-5.18 0-4.86 2.25-4.86 2.25v2.33h4.94v.7H5.06S2 6.84 2 12.06c0 5.22 2.66 5.04 2.66 5.04h1.59v-2.25s-.08-2.69 2.65-2.69h4.55s2.51.04 2.51-2.43V4.43S16.48 2 11.87 2z" fill="#3776AB" />
          <path d="M12.13 22c5.18 0 4.86-2.25 4.86-2.25v-2.33h-4.94v-.7h6.89S22 17.16 22 11.94c0-5.22-2.66-5.04-2.66-5.04h-1.59v2.25s.08 2.69-2.65 2.69h-4.55s-2.51-.04-2.51 2.43v5.30S7.52 22 12.13 22z" fill="#FFD43B" />
          <circle cx="9.2" cy="4.2" r="0.8" fill="#FFF" />
          <circle cx="14.8" cy="19.8" r="0.8" fill="#FFF" />
        </svg>
      );
    case "django":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#092E20">
          <rect width="24" height="24" rx="4" fill="#092E20" />
          <path d="M11.96 4h2.95v12.71c-.74.15-1.55.22-2.31.22-3.76 0-5.69-1.74-5.69-5.18 0-3.37 2.05-5.27 5.05-5.27.76 0 1.34.1 1.95.27V4zm0 6.07c-.32-.08-.66-.12-1.05-.12-1.66 0-2.6 1.01-2.6 2.94 0 1.91.88 2.87 2.59 2.87.35 0 .73-.04 1.06-.11v-5.58zM18.25 8.74v5.7c0 2.01-.84 3.38-2.07 3.81l-1.39-.76c1.15-.39 1.68-1.24 1.68-2.79V4.03h2.78v4.71z" fill="#FFF" />
        </svg>
      );
    case "postgres":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#336791">
          <circle cx="12" cy="12" r="11" fill="#336791" />
          <path d="M12 4.5c-3.3 0-6 2.7-6 6 0 2.2 1.2 4.1 3 5.1v-2.3c-.9-.6-1.5-1.6-1.5-2.8 0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 1.2-.6 2.2-1.5 2.8v2.3c1.8-1 3-2.9 3-5.1 0-3.3-2.7-6-6-6z" fill="#FFF" />
        </svg>
      );
    case "mysql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#00618A" />
          <path d="M6 16c2-4 5-7 8-7 1 0 2 .5 2 1.5S15 12 14 12c-1.5 0-2.5-1-4-1-1 0-2 .5-3 2l-1 3z" fill="#E48E00" />
          <circle cx="15.5" cy="9.5" r="1" fill="#FFF" />
        </svg>
      );
    case "sqlite":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#003B57" />
          <path d="M5 8h14v2.5H5V8zm0 3.5h9v2.5H5v-2.5zm0 3.5h14v2.5H5V15z" fill="#00A3E0" />
        </svg>
      );
    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "figma":
      return (
        <svg className={className} viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5S19 33.747 19 28.5z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5S0 52.747 0 47.5z" fill="#0ACF83" />
          <path d="M19 0v19h9.5c5.247 0 9.5-4.253 9.5-9.5S33.747 0 28.5 0H19z" fill="#FF7262" />
          <path d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z" fill="#A259FF" />
        </svg>
      );
    case "vscode":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M17.5 1.5L8 9.5l-4.5-3.5L1 8l4.5 4.5L1 17l2.5 2 4.5-3.5 9.5 8c1 .5 2.5 0 2.5-1.5V3c0-1.5-1.5-2-2.5-1.5z" fill="#007ACC" />
        </svg>
      );
    case "postman":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#FF6C37" />
          <path d="M16 6a3 3 0 00-4 0l-3 3-1.5-1.5a1 1 0 00-1.5 1.5l2 2-4 4a1 1 0 001.5 1.5l3-3 3 3a3 3 0 004-4l-3-3 3-3a3 3 0 000-4z" fill="#FFF" />
        </svg>
      );
    case "java":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#5382A1">
          <path d="M4.6 19.3c.7.4 3.7 1.1 7.2 1.1 4.5 0 7.8-1 7.8-2.6 0-1.5-2.7-2.3-5.7-2.6l.8-1.5c3.7.4 6.7 1.6 6.7 3.8 0 2.8-5.3 4.2-9.7 4.2-4.1 0-7.7-1.3-8.2-2.7l1.1.3zm1.1-2.6c2.4-1.6 6.7-1.7 8.9-.3l.9-1.2c-2.8-1.7-7.9-1.6-10.7.3l.9 1.2zm8.5-7.4c.8-1.4 1.2-2.9.4-4.2-.6-1-1.9-1.6-3.2-1.7.3.7.4 1.6 0 2.4-.7 1.3-2.2 2.3-2.6 3.7.6-.2 1.3-.3 1.9-.3 1.3 0 2.7.7 3.5 1.4-.7-.5-1.5-.9-2.4-.9-1.4 0-2.6.8-3.4 1.8 1.4-1 3.2-1.2 4.7-.5 1.2.6 2 1.8 1.1 3-1 1.4-2.9 2-4.5 2.5 1.8-.1 3.6-.8 4.5-2.2.6-1 0-2.3.9-3.4l-.9-1.6z" />
        </svg>
      );
    case "cpp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#00599C" />
          <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6c2.5 0 4.6-1.5 5.5-3.7l-2.4-.9C14.6 14.5 13.4 15 12 15c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.4 0 2.6.5 3.1 1.6l2.4-.9C16.6 7.5 14.5 6 12 6z" fill="#FFF" />
          <path d="M18 10h1v1.5h1.5v1H19V14h-1v-1.5h-1.5v-1H18V10zm3 0h1v1.5h1.5v1H22V14h-1v-1.5h-1.5v-1H21V10z" fill="#004482" />
        </svg>
      );
    case "linux":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#FCC624" />
          <path d="M12 3c-2.5 0-4.5 2-4.5 4.5 0 1 .3 2 .8 2.8C6.5 11.2 5 13.4 5 16c0 2.5 3 4.5 7 4.5s7-2 7-4.5c0-2.6-1.5-4.8-3.3-5.7.5-.8.8-1.8.8-2.8C16.5 5 14.5 3 12 3z" fill="#000" />
          <circle cx="10" cy="7" r="1" fill="#FFF" />
          <circle cx="14" cy="7" r="1" fill="#FFF" />
          <path d="M11 9h2l-1 2-1-2z" fill="#FFA500" />
        </svg>
      );
    case "vercel":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L24 22H0L12 2z" />
        </svg>
      );
    default:
      return (
        <div className={`flex items-center justify-center rounded-md bg-emerald-500/10 text-emerald-500 font-mono text-[10px] font-bold ${className}`}>
          {id.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
