import { useState, useEffect } from "react";

const BASE_VISITOR_COUNT = 1428;
const STORAGE_KEY = "hangsovoleak_portfolio_visitor_count";
const SESSION_KEY = "hangsovoleak_portfolio_session_viewed";
const API_URL = "https://api.counterapi.dev/v1/hangsovoleak-portfolio/visitors";

export function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed > 0) return parsed;
      }
    } catch {}
    return BASE_VISITOR_COUNT;
  });

  useEffect(() => {
    let isMounted = true;

    async function recordVisit() {
      let isNewVisit = false;
      try {
        isNewVisit = !sessionStorage.getItem(SESSION_KEY);
      } catch {
        isNewVisit = true;
      }

      // Mark session as visited immediately so repeat triggers in same session don't double count
      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {}

      // In unit test environment, avoid network calls
      if (process.env.NODE_ENV === "test") {
        if (isNewVisit && isMounted) {
          setVisitorCount((prev) => prev + 1);
        }
        return;
      }

      // Attempt live public Counter API fetch
      try {
        const endpoint = isNewVisit ? `${API_URL}/up` : API_URL;
        const res = await fetch(endpoint, { credentials: "omit" });
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.count === "number" && isMounted) {
            const total = data.count + BASE_VISITOR_COUNT;
            setVisitorCount(total);
            try {
              localStorage.setItem(STORAGE_KEY, total.toString());
            } catch {}
            return;
          }
        }
      } catch {
        // Network offline or CORS blocked — fall back to localStorage
      }

      // Local fallback for offline/sandboxed environments
      if (isNewVisit && isMounted) {
        setVisitorCount((prev) => {
          const next = prev + 1;
          try {
            localStorage.setItem(STORAGE_KEY, next.toString());
          } catch {}
          return next;
        });
      }
    }

    recordVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  return { visitorCount };
}
