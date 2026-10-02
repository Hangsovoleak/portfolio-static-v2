/**
 * Description:
 *      ThemeContext provider for managing Light / Dark mode state.
 *      Allows user to seamlessly toggle between Dark Mode (#080C16) and Light Mode.
 */

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => {},
    isDark: true,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Default to dark mode (#080C16) as requested, but preserve user choice
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem("portfolio-theme");
        return (saved as Theme) || "dark";
    });

    useEffect(() => {
        localStorage.setItem("portfolio-theme", theme);
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            document.body.style.backgroundColor = "#0d1117";
            document.body.style.color = "#c9d1d9";
        } else {
            root.classList.remove("dark");
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#1f2328";
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
