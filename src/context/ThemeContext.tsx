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
            document.body.style.backgroundColor = "#0D1015";
            document.body.style.color = "#F8FAFC";
        } else {
            root.classList.remove("dark");
            document.body.style.backgroundColor = "#F6F3EA";
            document.body.style.color = "#1C1917";
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
