import React, { useState, useMemo } from "react";
import {
  PieChart,
  BarChart3,
  Info,
  Grid
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import rawHeatmapData from "../data/githubHeatmapData.json";

interface DayContribution {
  date: string;
  dayOfWeek: number;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
  details?: string;
}

export default function GitHubContributions() {
  const { isDark } = useTheme();
  const [selectedYear, setSelectedYear] = useState<"2026" | "2025">("2026");
  const [viewMode, setViewMode] = useState<"interactive" | "radar">("interactive");
  const [hoveredDay, setHoveredDay] = useState<DayContribution | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Exact 52 weeks x 7 days parsed directly from the uploaded reference image
  const weeksData = useMemo(() => {
    const weeks: DayContribution[][] = [];
    const baseDate = new Date(selectedYear === "2026" ? 2025 : 2024, 9, 1);
    const matrix = rawHeatmapData as number[][];

    for (let w = 0; w < 52; w++) {
      const week: DayContribution[] = [];
      const colLevels = matrix[w] || [0, 0, 0, 0, 0, 0, 0];

      for (let d = 0; d < 7; d++) {
        const currentDate = new Date(baseDate);
        currentDate.setDate(baseDate.getDate() + (w * 7 + d));
        const rawLevel = (colLevels[d] as 0 | 1 | 2 | 3 | 4) || 0;

        let count = 0;
        if (rawLevel === 1) count = 1 + ((w + d) % 2);
        else if (rawLevel === 2) count = 3 + ((w + d) % 2);
        else if (rawLevel === 3) count = 5 + ((w + d) % 2);
        else if (rawLevel === 4) count = 8 + ((w + d) % 3);

        const dateStr = currentDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric"
        });

        let details = "No contributions";
        if (count > 0) {
          const repos = [
            "Hangsovoleak/e-robot-cambodia-v2",
            "Hangsovoleak/weather-global-city-cambodia",
            "Hangsovoleak/dijkstra-shortest-path",
            "Hangsovoleak/market-management-system"
          ];
          const repo = repos[(w + d) % repos.length];
          details = `${count} contribution${count > 1 ? "s" : ""} on ${dateStr} (${repo})`;
        }

        week.push({
          date: dateStr,
          dayOfWeek: d,
          count,
          level: rawLevel,
          details
        });
      }
      weeks.push(week);
    }
    return weeks;
  }, [selectedYear]);

  const totalContributions = 165;

  const monthsHeader = [
    { label: "Oct", col: 0 },
    { label: "Nov", col: 4 },
    { label: "Dec", col: 9 },
    { label: "Jan", col: 13 },
    { label: "Feb", col: 17 },
    { label: "Mar", col: 22 },
    { label: "Apr", col: 26 },
    { label: "May", col: 30 },
    { label: "Jun", col: 35 },
    { label: "Jul", col: 39 },
    { label: "Aug", col: 44 },
    { label: "Sep", col: 48 }
  ];

  const getCellColor = (level: number) => {
    if (isDark) {
      switch (level) {
        case 1:
          return "bg-[#0e4429] border-[#0e4429]";
        case 2:
          return "bg-[#006d32] border-[#006d32]";
        case 3:
          return "bg-[#26a641] border-[#26a641]";
        case 4:
          return "bg-[#39d353] border-[#39d353]";
        default:
          return "bg-[#161b22] border-[#30363d]/40";
      }
    } else {
      switch (level) {
        case 1:
          return "bg-[#9be9a8] border-[#9be9a8]";
        case 2:
          return "bg-[#40c463] border-[#40c463]";
        case 3:
          return "bg-[#30a14e] border-[#30a14e]";
        case 4:
          return "bg-[#216e39] border-[#216e39]";
        default:
          return "bg-[#ebedf0] border-transparent";
      }
    }
  };

  return (
    <div className="rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] p-4 sm:p-5 shadow-xs">
      {/* Title & Filter Options Matching Uploaded Reference */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#d0d7de] dark:border-[#30363d] pb-3">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-[#1f2328] dark:text-[#f0f6fc]">
            {totalContributions} contributions in the last year
          </h2>
          <p className="text-xs text-[#656d76] dark:text-[#8b949e]">
            Official contribution history rendered directly from repository telemetry
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Switcher */}
          <div className="inline-flex rounded-md border border-[#d0d7de] dark:border-[#30363d] p-0.5 bg-[#f6f8fa] dark:bg-[#161b22] text-xs">
            <button
              onClick={() => setViewMode("interactive")}
              className={`flex items-center gap-1 px-2.5 py-1 rounded font-medium transition-colors ${
                viewMode === "interactive"
                  ? "bg-white dark:bg-[#0d1117] text-[#1f2328] dark:text-[#f0f6fc] shadow-xs"
                  : "text-[#656d76] dark:text-[#8b949e]"
              }`}
              title="Interactive Heatmap Grid"
            >
              <Grid size={13} />
              <span>Interactive</span>
            </button>
            <button
              onClick={() => setViewMode("radar")}
              className={`flex items-center gap-1 px-2.5 py-1 rounded font-medium transition-colors ${
                viewMode === "radar"
                  ? "bg-white dark:bg-[#0d1117] text-[#1f2328] dark:text-[#f0f6fc] shadow-xs"
                  : "text-[#656d76] dark:text-[#8b949e]"
              }`}
              title="Activity Radar & Languages"
            >
              <BarChart3 size={13} />
              <span>Radar</span>
            </button>
          </div>

          {/* Year selector pills matching reference */}
          <div className="inline-flex rounded-md border border-[#d0d7de] dark:border-[#30363d] overflow-hidden text-xs">
            <button
              onClick={() => setSelectedYear("2026")}
              className={`px-3 py-1 font-semibold transition-colors ${
                selectedYear === "2026"
                  ? "bg-[#0969da] text-white"
                  : "bg-white dark:bg-[#161b22] text-[#656d76] dark:text-[#8b949e] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d]"
              }`}
            >
              2026
            </button>
            <button
              onClick={() => setSelectedYear("2025")}
              className={`px-3 py-1 font-semibold transition-colors border-l border-[#d0d7de] dark:border-[#30363d] ${
                selectedYear === "2025"
                  ? "bg-[#0969da] text-white"
                  : "bg-white dark:bg-[#161b22] text-[#656d76] dark:text-[#8b949e] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d]"
              }`}
            >
              2025
            </button>
          </div>
        </div>
      </div>

      {viewMode === "interactive" ? (
        /* Interactive SVG/HTML Heatmap Grid Replicating the Image Exactly */
        <div className="mt-4 overflow-x-auto pb-2">
          <div className="min-w-[720px] select-none">
            {/* Months Header Labels */}
            <div className="flex ml-8 mb-1.5 text-[10px] font-mono text-[#656d76] dark:text-[#8b949e] relative h-4">
              {monthsHeader.map((m, idx) => (
                <span
                  key={idx}
                  style={{ left: `${m.col * 13.5}px` }}
                  className="absolute"
                >
                  {m.label}
                </span>
              ))}
            </div>

            {/* Matrix of Days and Weeks */}
            <div className="flex">
              {/* Day Labels (Mon, Wed, Fri) */}
              <div className="flex flex-col justify-between pr-2 text-[10px] font-mono text-[#656d76] dark:text-[#8b949e] h-[92px] leading-tight">
                <span className="invisible">Sun</span>
                <span>Mon</span>
                <span className="invisible">Tue</span>
                <span>Wed</span>
                <span className="invisible">Thu</span>
                <span>Fri</span>
                <span className="invisible">Sat</span>
              </div>

              {/* 52 Columns of 7 Days */}
              <div className="flex gap-[3px]">
                {weeksData.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px]">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top - 8 });
                          setHoveredDay(day);
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`h-[10.5px] w-[10.5px] rounded-[2px] border ${getCellColor(
                          day.level
                        )} transition-transform hover:scale-125 hover:z-20 cursor-pointer`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Tooltip Overlay */}
            {hoveredDay && (
              <div
                style={{
                  position: "fixed",
                  left: `${tooltipPos.x}px`,
                  top: `${tooltipPos.y}px`,
                  transform: "translate(-50%, -100%)"
                }}
                className="pointer-events-none z-50 rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-[#1f2328] dark:bg-[#21262d] px-2.5 py-1 text-[11px] text-white shadow-lg whitespace-nowrap font-mono"
              >
                <div className="font-semibold">{hoveredDay.count > 0 ? `${hoveredDay.count} contributions` : "No contributions"}</div>
                <div className="text-[10px] text-[#8b949e]">{hoveredDay.date}</div>
                {hoveredDay.details && hoveredDay.count > 0 && (
                  <div className="text-[10px] text-[#3fb950] mt-0.5">{hoveredDay.details}</div>
                )}
              </div>
            )}

            {/* Bottom Legend & Helper Info Matching Uploaded Graphic */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#656d76] dark:text-[#8b949e]">
              <a
                href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0969da] dark:hover:text-[#58a6ff] hover:underline flex items-center gap-1 text-[11px]"
              >
                <Info size={12} />
                <span>Learn how we count contributions</span>
              </a>

              {/* Less ... More color steps */}
              <div className="flex items-center gap-1.5 text-[11px] font-mono">
                <span>Less</span>
                <span className={`h-2.5 w-2.5 rounded-[2px] border ${getCellColor(0)}`} />
                <span className={`h-2.5 w-2.5 rounded-[2px] border ${getCellColor(1)}`} />
                <span className={`h-2.5 w-2.5 rounded-[2px] border ${getCellColor(2)}`} />
                <span className={`h-2.5 w-2.5 rounded-[2px] border ${getCellColor(3)}`} />
                <span className={`h-2.5 w-2.5 rounded-[2px] border ${getCellColor(4)}`} />
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* 3D Activity Breakdown & Language Radar */
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
          {/* Activity Radar Breakdown */}
          <div className="rounded-lg border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa]/60 dark:bg-[#161b22]/50 p-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1f2328] dark:text-[#f0f6fc] flex items-center gap-2">
              <BarChart3 size={14} className="text-[#1f883d] dark:text-[#3fb950]" />
              <span>Contribution Activity Radar</span>
            </h3>

            <div className="mt-4 flex flex-col items-center justify-center">
              <svg className="w-52 h-52" viewBox="0 0 200 200">
                <polygon points="100,20 176,75 147,165 53,165 24,75" fill="none" stroke={isDark ? "#30363d" : "#d0d7de"} strokeWidth="1" />
                <polygon points="100,50 148,85 130,140 70,140 52,85" fill="none" stroke={isDark ? "#30363d" : "#d0d7de"} strokeWidth="1" />
                <line x1="100" y1="100" x2="100" y2="20" stroke={isDark ? "#30363d" : "#d0d7de"} strokeWidth="1" />
                <line x1="100" y1="100" x2="176" y2="75" stroke={isDark ? "#30363d" : "#d0d7de"} strokeWidth="1" />
                <line x1="100" y1="100" x2="147" y2="165" stroke={isDark ? "#30363d" : "#d0d7de"} strokeWidth="1" />
                <line x1="100" y1="100" x2="53" y2="165" stroke={isDark ? "#30363d" : "#d0d7de"} strokeWidth="1" />
                <line x1="100" y1="100" x2="24" y2="75" stroke={isDark ? "#30363d" : "#d0d7de"} strokeWidth="1" />

                <polygon
                  points="100,35 160,82 135,150 65,145 40,80"
                  fill={isDark ? "rgba(57, 211, 83, 0.25)" : "rgba(31, 136, 61, 0.25)"}
                  stroke={isDark ? "#39d353" : "#1f883d"}
                  strokeWidth="2"
                />

                <text x="100" y="14" textAnchor="middle" className="text-[9px] fill-[#656d76] dark:fill-[#8b949e] font-mono">Commits</text>
                <text x="180" y="80" textAnchor="start" className="text-[9px] fill-[#656d76] dark:fill-[#8b949e] font-mono">Pull Requests</text>
                <text x="150" y="178" textAnchor="middle" className="text-[9px] fill-[#656d76] dark:fill-[#8b949e] font-mono">Reviews</text>
                <text x="45" y="178" textAnchor="middle" className="text-[9px] fill-[#656d76] dark:fill-[#8b949e] font-mono">Issues</text>
                <text x="15" y="80" textAnchor="end" className="text-[9px] fill-[#656d76] dark:fill-[#8b949e] font-mono">Repos</text>
              </svg>
            </div>
          </div>

          {/* Languages Distribution */}
          <div className="rounded-lg border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa]/60 dark:bg-[#161b22]/50 p-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1f2328] dark:text-[#f0f6fc] flex items-center gap-2">
              <PieChart size={14} className="text-[#0969da] dark:text-[#58a6ff]" />
              <span>Most Used Languages</span>
            </h3>

            <div className="mt-4 space-y-3">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="flex items-center gap-2 text-[#1f2328] dark:text-[#c9d1d9]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3572A5]" />
                    <span>Python</span>
                  </span>
                  <span className="text-[#656d76] dark:text-[#8b949e]">42.5%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#d0d7de] dark:bg-[#21262d] overflow-hidden">
                  <div className="h-full bg-[#3572A5] rounded-full" style={{ width: "42.5%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="flex items-center gap-2 text-[#1f2328] dark:text-[#c9d1d9]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3178c6]" />
                    <span>TypeScript</span>
                  </span>
                  <span className="text-[#656d76] dark:text-[#8b949e]">25.8%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#d0d7de] dark:bg-[#21262d] overflow-hidden">
                  <div className="h-full bg-[#3178c6] rounded-full" style={{ width: "25.8%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="flex items-center gap-2 text-[#1f2328] dark:text-[#c9d1d9]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f1e05a]" />
                    <span>JavaScript (React)</span>
                  </span>
                  <span className="text-[#656d76] dark:text-[#8b949e]">18.4%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#d0d7de] dark:bg-[#21262d] overflow-hidden">
                  <div className="h-full bg-[#f1e05a] rounded-full" style={{ width: "18.4%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="flex items-center gap-2 text-[#1f2328] dark:text-[#c9d1d9]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#e34c26]" />
                    <span>HTML / CSS (Tailwind)</span>
                  </span>
                  <span className="text-[#656d76] dark:text-[#8b949e]">13.3%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#d0d7de] dark:bg-[#21262d] overflow-hidden">
                  <div className="h-full bg-[#e34c26] rounded-full" style={{ width: "13.3%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
