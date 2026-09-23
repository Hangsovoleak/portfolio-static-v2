/**
 * Description:
 *      Header navigation component.
 *      Displays primary navigation links (ABOUT ME, MY JOURNEY, EXPERIENCE, PROJECT, LEARNING RESOURCE, TOOLS, SKILLS, CONTACTS) and utility controls.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

function Header({ links = [] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lang, setLang] = useState("EN");
    const { toggleTheme, isDark } = useTheme();

    const toggleLang = () => {
        setLang((prev) => (prev === "EN" ? "KH" : "EN"));
    };

    return (
        <header className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
            isDark
                ? "border-slate-800/80 bg-[#080C16]/90"
                : "border-[#98989f]/20 bg-white/95"
        }`}>
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

                {/* Left / Navigation Links (Desktop View) */}
                <nav className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href || `#${link.id}`}
                            className={`rounded-lg px-3 py-2 text-[12px] font-bold uppercase tracking-wider transition ${
                                isDark
                                    ? "text-slate-300 hover:bg-[#0D9668]/10 hover:text-[#0D9668]"
                                    : "text-[#09090B]/85 hover:bg-[#0D9668]/10 hover:text-[#0D9668]"
                            }`}
                        >
                            {link.title || link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button when screen is small */}
                <div className="flex items-center gap-2 lg:hidden">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-[#0D9668]" : "text-[#0D9668]"}`}>
                        Menu
                    </span>
                </div>

                {/* Right Side: Utility Controls (Language Toggle + Theme Icon + Mobile Toggle) */}
                <div className="flex items-center gap-3">
                    {/* Language Indicator */}
                    <button
                        onClick={toggleLang}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold uppercase transition ${
                            isDark
                                ? "border-slate-700/60 bg-slate-900/80 text-slate-200 hover:bg-slate-800"
                                : "border-[#98989f]/30 bg-slate-50 text-[#09090B] hover:bg-slate-100"
                        }`}
                        title="Toggle Language"
                    >
                        <span className="text-sm">{lang === "EN" ? "🇬🇧" : "🇰🇭"}</span>
                        <span>{lang}</span>
                    </button>

                    {/* Light/Dark Mode Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className={`grid h-8 w-8 place-items-center rounded-full border transition-transform duration-300 hover:scale-110 ${
                            isDark
                                ? "border-slate-700/60 bg-slate-900/80 text-[#0D9668] hover:bg-slate-800"
                                : "border-[#98989f]/30 bg-slate-50 text-[#2C3F96] hover:bg-slate-100"
                        }`}
                        aria-label="Toggle theme"
                        title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
                    >
                        {isDark ? <Sun size={16} className="text-[#0D9668]" /> : <Moon size={16} className="text-[#2C3F96]" />}
                    </button>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`grid h-9 w-9 place-items-center rounded-lg border lg:hidden ${
                            isDark
                                ? "border-slate-700/60 bg-slate-900/80 text-slate-200"
                                : "border-[#98989f]/30 text-[#09090B]"
                        }`}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMenuOpen && (
                <div className={`border-b px-6 pb-6 pt-2 shadow-xl lg:hidden ${
                    isDark ? "border-slate-800 bg-[#080C16]" : "border-[#98989f]/20 bg-white"
                }`}>
                    <nav className="flex flex-col gap-2">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={link.href || `#${link.id}`}
                                onClick={() => setIsMenuOpen(false)}
                                className={`rounded-lg px-3 py-2.5 text-xs font-bold uppercase tracking-wider ${
                                    isDark
                                        ? "text-slate-200 hover:bg-[#0D9668]/10 hover:text-[#0D9668]"
                                        : "text-[#09090B] hover:bg-[#0D9668]/10 hover:text-[#0D9668]"
                                }`}
                            >
                                {link.title || link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default Header;
