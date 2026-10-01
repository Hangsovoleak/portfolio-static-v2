import React, { useState, useEffect } from "react";
import {
  Sun,
  CloudRain,
  Cloud,
  Compass,
  MapPin,
  CheckCircle,
  Mail,
  ShieldCheck,
  Clock
} from "lucide-react";

interface MockupProps {
  type: "weather" | "dijkstra" | "auth" | "countdown";
  isDark?: boolean;
}

export default function InteractiveMockup({ type, isDark = true }: MockupProps) {
  // 1. Weather State
  const [selectedCity, setSelectedCity] = useState<"Phnom Penh" | "Siem Reap" | "Battambang">("Phnom Penh");

  const cityData = {
    "Phnom Penh": { temp: "31°C", cond: "Scattered Clouds", humidity: "76%", wind: "14 km/h", icon: Cloud, uv: "High (7)" },
    "Siem Reap": { temp: "29°C", cond: "Tropical Rain Shower", humidity: "82%", wind: "11 km/h", icon: CloudRain, uv: "Moderate (5)" },
    "Battambang": { temp: "33°C", cond: "Mostly Sunny", humidity: "64%", wind: "9 km/h", icon: Sun, uv: "Very High (9)" }
  };

  // 2. Dijkstra State
  const [startNode, setStartNode] = useState("Angkor Wat");
  const [endNode, setEndNode] = useState("Ta Prohm");
  const [computedPath, setComputedPath] = useState<{ path: string[]; distance: string; time: string }>({
    path: ["Angkor Wat", "Bayon", "Ta Prohm"],
    distance: "6.2 km",
    time: "0.42 ms"
  });

  const handleComputeRoute = (s: string, e: string) => {
    setStartNode(s);
    setEndNode(e);
    if (s === e) {
      setComputedPath({ path: [s], distance: "0.0 km", time: "0.05 ms" });
    } else if (s === "Angkor Wat" && e === "Banteay Srei") {
      setComputedPath({ path: ["Angkor Wat", "Bayon", "Preah Khan", "Banteay Srei"], distance: "31.4 km", time: "0.68 ms" });
    } else {
      setComputedPath({ path: [s, "Bayon", e], distance: "7.8 km", time: "0.38 ms" });
    }
  };

  // 3. Countdown State (live real-time ticking)
  const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 8, minutes: 24, seconds: 45 });

  useEffect(() => {
    if (type !== "countdown") return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { ...prev, days: Math.max(0, prev.days - 1), hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [type]);

  // 4. Auth State
  const [authStep, setAuthStep] = useState<"form" | "token" | "smtp">("form");

  /* ---------------- WEATHER SIMULATOR ---------------- */
  if (type === "weather") {
    const cur = cityData[selectedCity];
    const IconComp = cur.icon;

    return (
      <div className={`relative flex h-full w-full flex-col justify-between p-4 font-mono text-xs select-none ${
        isDark ? "bg-[#0b101d] text-slate-200" : "bg-slate-900 text-slate-100"
      }`}>
        {/* Top Header bar with API route */}
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-400">REST API 200 OK</span>
          </div>
          <span className="text-[10px] text-slate-400">api.openweathermap.org/v2.5</span>
        </div>

        {/* City selector pills */}
        <div className="my-2.5 flex items-center gap-1.5 overflow-x-auto">
          {(["Phnom Penh", "Siem Reap", "Battambang"] as const).map(city => (
            <button
              key={city}
              onClick={(e) => { e.stopPropagation(); setSelectedCity(city); }}
              className={`rounded-md px-2 py-1 text-[10px] font-semibold transition ${
                selectedCity === city
                  ? "bg-emerald-500 text-white shadow-xs"
                  : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Metric Display */}
        <div className="flex items-center justify-between rounded-xl bg-slate-800/80 p-3 border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <IconComp size={22} />
            </div>
            <div>
              <div className="text-xl font-bold font-sans text-white">{cur.temp}</div>
              <div className="text-[11px] text-slate-400">{cur.cond}</div>
            </div>
          </div>
          <div className="text-right text-[10px] text-slate-400 space-y-0.5">
            <div>Humidity: <span className="text-slate-200 font-bold">{cur.humidity}</span></div>
            <div>Wind: <span className="text-slate-200 font-bold">{cur.wind}</span></div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 pt-1">
          <span className="flex items-center gap-1"><MapPin size={10} /> Cambodia Dynamic Feed</span>
          <span className="text-emerald-400">Vercel Edge Cached</span>
        </div>
      </div>
    );
  }

  /* ---------------- DIJKSTRA / ANGKOR NAV SIMULATOR ---------------- */
  if (type === "dijkstra") {
    return (
      <div className={`relative flex h-full w-full flex-col justify-between p-4 font-mono text-xs select-none ${
        isDark ? "bg-[#0b101d] text-slate-200" : "bg-slate-900 text-slate-100"
      }`}>
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
          <div className="flex items-center gap-1.5">
            <Compass size={13} className="text-amber-400 animate-spin-slow" />
            <span className="text-[10px] font-bold text-amber-300">DIJKSTRA GRAPH SOLVER</span>
          </div>
          <span className="text-[10px] text-slate-400 font-sans">O(E + V log V)</span>
        </div>

        {/* Interactive Node Graph Route */}
        <div className="my-2 rounded-xl bg-slate-800/80 p-3 border border-slate-700/50">
          <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1.5 font-bold">
            Optimal Route ({startNode} → {endNode}):
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            {computedPath.path.map((node, i) => (
              <React.Fragment key={node}>
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-semibold text-emerald-300 border border-emerald-500/30">
                  {node}
                </span>
                {i < computedPath.path.length - 1 && <span className="text-slate-500">→</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-2.5 flex items-center justify-between border-t border-slate-700/40 pt-2 text-[10px] text-slate-400">
            <div>Cost: <span className="text-emerald-400 font-bold">{computedPath.distance}</span></div>
            <div>Time: <span className="text-amber-300 font-bold">{computedPath.time}</span></div>
            <div>Graph: <span className="text-slate-300">12 Nodes, 18 Edges</span></div>
          </div>
        </div>

        {/* Quick Route Switcher */}
        <div className="flex items-center justify-between text-[10px] pt-1">
          <span className="text-slate-400">Test Path:</span>
          <div className="flex gap-1.5">
            <button
              onClick={(e) => { e.stopPropagation(); handleComputeRoute("Angkor Wat", "Ta Prohm"); }}
              className="rounded bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-0.5 border border-slate-700"
            >
              Ta Prohm
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleComputeRoute("Angkor Wat", "Banteay Srei"); }}
              className="rounded bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-0.5 border border-slate-700"
            >
              Banteay Srei
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- AUTH / SMTP SIMULATOR ---------------- */
  if (type === "auth") {
    return (
      <div className={`relative flex h-full w-full flex-col justify-between p-4 font-mono text-xs select-none ${
        isDark ? "bg-[#0b101d] text-slate-200" : "bg-slate-900 text-slate-100"
      }`}>
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-blue-400" />
            <span className="text-[10px] font-bold text-blue-300">DJANGO AUTH ENGINE</span>
          </div>
          <span className="text-[10px] text-slate-400">PBKDF2 SHA256</span>
        </div>

        {/* Step tabs */}
        <div className="my-2 flex gap-1 border-b border-slate-800 pb-2">
          <button
            onClick={(e) => { e.stopPropagation(); setAuthStep("form"); }}
            className={`rounded px-2 py-0.5 text-[10px] ${authStep === "form" ? "bg-blue-600 text-white font-bold" : "text-slate-400 hover:text-white"}`}
          >
            Form Validation
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setAuthStep("token"); }}
            className={`rounded px-2 py-0.5 text-[10px] ${authStep === "token" ? "bg-blue-600 text-white font-bold" : "text-slate-400 hover:text-white"}`}
          >
            Session Hash
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setAuthStep("smtp"); }}
            className={`rounded px-2 py-0.5 text-[10px] ${authStep === "smtp" ? "bg-blue-600 text-white font-bold" : "text-slate-400 hover:text-white"}`}
          >
            SMTP Mailer
          </button>
        </div>

        {/* Step content */}
        <div className="rounded-xl bg-slate-800/80 p-3 border border-slate-700/50 text-[10px] space-y-1">
          {authStep === "form" && (
            <>
              <div className="text-emerald-400 flex items-center gap-1"><CheckCircle size={11} /> CSRF Middleware Verified</div>
              <div className="text-slate-300">User: <span className="text-white font-bold">hangsovoleak</span> (Validated)</div>
              <div className="text-slate-400">Password: <span className="text-amber-300">•••••••••••• (Passed Strength)</span></div>
            </>
          )}
          {authStep === "token" && (
            <>
              <div className="text-slate-400">Algorithm: <span className="text-blue-300 font-bold">pbkdf2_sha256$600000</span></div>
              <div className="truncate text-slate-500 font-mono">hash: 9f8e7d6c5b4a3...validated</div>
              <div className="text-emerald-400 font-bold">Session Cookie Registered</div>
            </>
          )}
          {authStep === "smtp" && (
            <>
              <div className="flex items-center gap-1 text-emerald-400"><Mail size={11} /> Gmail SMTP Dispatched</div>
              <div className="text-slate-300">Subject: <span className="text-white">Account Activation Code</span></div>
              <div className="text-slate-400">Host: smtp.gmail.com:587 (TLS Active)</div>
            </>
          )}
        </div>

        <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 pt-1">
          <span>Security Protocol</span>
          <span className="text-emerald-400 font-bold">Encrypted</span>
        </div>
      </div>
    );
  }

  /* ---------------- COUNTDOWN SIMULATOR ---------------- */
  return (
    <div className={`relative flex h-full w-full flex-col justify-between p-4 font-mono text-xs select-none ${
      isDark ? "bg-[#0b101d] text-slate-200" : "bg-slate-900 text-slate-100"
    }`}>
      <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
        <div className="flex items-center gap-1.5">
          <Clock size={13} className="text-purple-400 animate-pulse" />
          <span className="text-[10px] font-bold text-purple-300">DJANGO TEMPORAL TICKER</span>
        </div>
        <span className="text-[10px] text-slate-400">Real-Time Sync</span>
      </div>

      {/* Live Timer Grid */}
      <div className="my-2 rounded-xl bg-slate-800/80 p-3 border border-slate-700/50">
        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-2 font-bold">Target: National Tech Expo 2026</div>
        <div className="grid grid-cols-4 gap-1.5 text-center">
          <div className="rounded bg-slate-900/90 p-1.5 border border-slate-700">
            <div className="text-base font-bold text-white font-sans">{timeLeft.days}</div>
            <div className="text-[8px] uppercase tracking-wider text-slate-400">Days</div>
          </div>
          <div className="rounded bg-slate-900/90 p-1.5 border border-slate-700">
            <div className="text-base font-bold text-white font-sans">{String(timeLeft.hours).padStart(2, "0")}</div>
            <div className="text-[8px] uppercase tracking-wider text-slate-400">Hours</div>
          </div>
          <div className="rounded bg-slate-900/90 p-1.5 border border-slate-700">
            <div className="text-base font-bold text-white font-sans">{String(timeLeft.minutes).padStart(2, "0")}</div>
            <div className="text-[8px] uppercase tracking-wider text-slate-400">Mins</div>
          </div>
          <div className="rounded bg-slate-900/90 p-1.5 border border-purple-400/40">
            <div className="text-base font-bold text-purple-300 font-sans">{String(timeLeft.seconds).padStart(2, "0")}</div>
            <div className="text-[8px] uppercase tracking-wider text-purple-300">Secs</div>
          </div>
        </div>
      </div>

      <div className="mt-1 flex items-center justify-between text-[10px] text-slate-500 pt-1">
        <span>Django Model: Event.objects.filter()</span>
        <span className="text-purple-400 font-bold">Active Streaming</span>
      </div>
    </div>
  );
}
