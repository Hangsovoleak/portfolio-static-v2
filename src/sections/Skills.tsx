import React, { useState } from "react";
import { Terminal, Copy, Check, Code2, FileCode } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const CODE_SNIPPETS = [
  {
    id: "dijkstra",
    title: "dijkstra_nav.py",
    language: "Python",
    badge: "Algorithms · Graph Theory",
    description: "Shortest route calculation between Angkor archaeological sites using priority queue.",
    code: `import heapq

def find_shortest_angkor_route(graph, start_temple, destination):
    """
    Computes optimal route between Angkor monuments using Dijkstra's algorithm.
    Time Complexity: O(E log V)
    """
    distances = {node: float('inf') for node in graph}
    distances[start_temple] = 0
    pq = [(0, start_temple, [start_temple])]
    
    while pq:
        curr_dist, curr_temple, path = heapq.heappop(pq)
        
        if curr_dist > distances[curr_temple]:
            continue
            
        if curr_temple == destination:
            return {"distance_km": curr_dist, "path": path}
            
        for neighbor, weight in graph[curr_temple].items():
            dist = curr_dist + weight
            if dist < distances[neighbor]:
                distances[neighbor] = dist
                heapq.heappush(pq, (dist, neighbor, path + [neighbor]))
                
    return None`
  },
  {
    id: "weather",
    title: "weather_service.py",
    language: "Python / Django",
    badge: "Backend · REST API",
    description: "Django service consuming OpenWeatherMap API with data serialization.",
    code: `import os
import requests
from django.core.cache import cache

def fetch_cambodia_city_weather(city_name):
    """
    Queries OpenWeatherMap REST API with 15-minute server caching.
    """
    cache_key = f"weather_{city_name.lower().replace(' ', '_')}"
    cached_data = cache.get(cache_key)
    if cached_data:
        return {"source": "cache", "data": cached_data}
        
    api_key = os.getenv("OPENWEATHER_API_KEY")
    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {"q": f"{city_name},KH", "units": "metric", "appid": api_key}
    
    response = requests.get(url, params=params, timeout=5)
    response.raise_for_status()
    payload = response.json()
    
    metrics = {
        "city": city_name,
        "temperature": payload["main"]["temp"],
        "humidity": payload["main"]["humidity"],
        "condition": payload["weather"][0]["description"].title()
    }
    cache.set(cache_key, metrics, timeout=900)
    return {"source": "live_api", "data": metrics}`
  },
  {
    id: "react",
    title: "ThemeContext.tsx",
    language: "TypeScript",
    badge: "Frontend · React 19",
    description: "Type-safe theme management hook with system sync & localStorage persistence.",
    code: `import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("portfolio-theme") as Theme) || "dark";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};`
  }
];

export default function SkillsSection() {
  const { isDark } = useTheme();
  const [activeSnippetId, setActiveSnippetId] = useState(CODE_SNIPPETS[0].id);
  const [copied, setCopied] = useState(false);

  const activeSnippet = CODE_SNIPPETS.find((s) => s.id === activeSnippetId) || CODE_SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="skills"
      className={`relative border-b py-24 transition-colors duration-300 ${
        isDark ? "border-slate-800/80 bg-[#0D1015]" : "border-stone-300/70 bg-[#F6F3EA]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-300/60 dark:border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
              <Code2 size={13} />
              <span>07 / CODE CRAFTSMANSHIP</span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl font-sans">
              Code & <span className="text-emerald-500">Architecture</span>
            </h2>
            <p className={`mt-2 max-w-2xl text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-400" : "text-stone-600"}`}>
              Direct inspection of algorithmic implementations, REST API service structures, and frontend state contracts.
            </p>
          </div>

          <div className={`hidden sm:flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-xs font-mono ${
            isDark ? "border-slate-800 bg-[#121622] text-slate-300" : "border-stone-300 bg-white text-stone-700 shadow-xs"
          }`}>
            <Terminal size={14} className="text-emerald-500" />
            <span>Interactive Code Inspector</span>
          </div>
        </div>

        {/* Code Showcase Terminal Window */}
        <div className="mt-12 rounded-2xl border overflow-hidden shadow-2xl transition duration-300 border-slate-800 bg-[#0A0E1A]">
          
          {/* Top Window Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 bg-[#070A12] px-4 py-3 gap-3">
            
            {/* macOS-style Window Dots + File Tabs */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1">
                {CODE_SNIPPETS.map((snippet) => (
                  <button
                    key={snippet.id}
                    onClick={() => setActiveSnippetId(snippet.id)}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono transition ${
                      activeSnippetId === snippet.id
                        ? "bg-slate-800 text-emerald-400 font-bold border border-slate-700"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                    }`}
                  >
                    <FileCode size={13} />
                    <span>{snippet.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Language & Copy Button */}
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block rounded-md bg-slate-800/90 px-2.5 py-1 text-[11px] font-mono font-semibold text-slate-300 border border-slate-700">
                {activeSnippet.badge}
              </span>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-500 transition"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Description sub-bar */}
          <div className="border-b border-slate-800/60 bg-slate-950/40 px-6 py-2.5 text-xs font-mono text-slate-400 flex items-center justify-between">
            <span>{"// " + activeSnippet.description}</span>
            <span className="text-emerald-400">{activeSnippet.language}</span>
          </div>

          {/* Code Body */}
          <div className="overflow-x-auto p-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-200 bg-[#070A12]">
            <pre>
              <code>{activeSnippet.code}</code>
            </pre>
          </div>

          {/* Window Footer */}
          <div className="border-t border-slate-800 bg-[#070A12] px-6 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Rorn Hangsovoleak — Source Code Verification</span>
            <span className="text-emerald-500 font-bold">Production Validated</span>
          </div>
        </div>

      </div>
    </section>
  );
}
