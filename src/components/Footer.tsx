/**
 * Description:
 *      Multi-column Institutional Footer & Contact component redesigned precisely after the reference layout:
 *      - Left Column: Logo badge, title, subtitle, mission description, contact info (MapPin, Mail, Phone), and "STAY CONNECTED" social icons.
 *      - Middle Column: "PORTFOLIO PROJECTS" list with "EXPLORE ALL PROJECTS ↗" link.
 *      - Right Column: "THE PORTFOLIO STACK" navigation links list.
 *      - Bottom Bar: Copyright and framework technology accreditation.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { MapPin, Mail, Phone, Github, Linkedin, ExternalLink, Sparkles, Send } from "lucide-react";
import { projectsData } from "../data/projects";
import { useTheme } from "../context/ThemeContext";

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/
function Footer({ email = "hangsovoleak.dev@gmail.com" }: { email?: string }) {
    const { isDark } = useTheme();
    const contactEmail = email || "hangsovoleak.dev@gmail.com";

    return (
        <footer
            id="contact"
            className={`relative z-20 w-full border-t py-8 sm:py-10 transition-colors duration-300 ${
                isDark ? "border-slate-800/80 bg-[#05080F] text-slate-100" : "border-slate-200 bg-slate-100 text-slate-900"
            }`}
        >
            <div className="portfolio-animate mx-auto max-w-7xl px-6">
                
                {/* 3-Column Compact Grid Layout */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-10 items-start">
                    
                    {/* Column 1: Logo, Mission Description, Contact Details & Socials (5 Cols) */}
                    <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
                        <div>
                            {/* Logo & Header Title */}
                            <div className="flex items-center gap-3">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border p-1.5 shadow-2xs ${
                                    isDark ? "border-[#2C3F96]/60 bg-[#0D1424]" : "border-[#2C3F96]/30 bg-white"
                                }`}>
                                    <svg className="h-6 w-6 text-[#0D9668]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={`text-base font-black tracking-tight leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                                        Hang Sovoleak
                                    </h3>
                                    <p className={`text-[11px] font-bold ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                                        Royal University of Phnom Penh · Computer Science
                                    </p>
                                </div>
                            </div>

                            {/* Short Mission Paragraph */}
                            <p className={`mt-2.5 text-xs font-medium leading-relaxed max-w-sm line-clamp-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                Cambodia's Digital Portfolio Platform—harmonizing web apps, REST APIs, and graph algorithms into a secure ecosystem.
                            </p>

                            {/* Compact Contact Info List */}
                            <div className={`mt-3 space-y-1.5 text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="shrink-0 text-[#0D9668]" />
                                    <span className="truncate">Phnom Penh, Cambodia · Department of Computer Science</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Mail size={14} className="shrink-0 text-[#0D9668]" />
                                    <a href={`mailto:${contactEmail}`} className="hover:text-[#0D9668] transition-colors font-semibold truncate">
                                        {contactEmail}
                                    </a>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Phone size={14} className="shrink-0 text-[#0D9668]" />
                                    <a href="tel:+855964501234" className="hover:text-[#0D9668] transition-colors font-semibold truncate">
                                        +855 (0) 96 450 1234 / +855 (0) 10 292 822
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Stay Connected Socials */}
                        <div className={`mt-4 pt-3 border-t flex items-center gap-3 ${isDark ? "border-slate-800/80" : "border-slate-200"}`}>
                            <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                                CONNECT:
                            </span>
                            <div className="flex items-center gap-2">
                                <a
                                    href={`mailto:${contactEmail}`}
                                    className={`flex h-8 w-8 items-center justify-center rounded-lg border shadow-2xs transition-all hover:border-[#0D9668] hover:bg-[#0D9668] hover:text-white ${
                                        isDark ? "border-slate-700 bg-slate-900 text-slate-300" : "border-slate-300 bg-white text-slate-700"
                                    }`}
                                    title="Email Contact"
                                >
                                    <Mail size={14} />
                                </a>
                                <a
                                    href="https://github.com/Hangsovoleak"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex h-8 w-8 items-center justify-center rounded-lg border shadow-2xs transition-all hover:border-black hover:bg-black hover:text-white ${
                                        isDark ? "border-slate-700 bg-slate-900 text-slate-300" : "border-slate-300 bg-white text-slate-700"
                                    }`}
                                    title="GitHub Profile"
                                >
                                    <Github size={14} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/hangsovoleak"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex h-8 w-8 items-center justify-center rounded-lg border shadow-2xs transition-all hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white ${
                                        isDark ? "border-slate-700 bg-slate-900 text-slate-300" : "border-slate-300 bg-white text-slate-700"
                                    }`}
                                    title="LinkedIn Profile"
                                >
                                    <Linkedin size={14} />
                                </a>
                                <a
                                    href="https://t.me/hangsovoleak"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex h-8 w-8 items-center justify-center rounded-lg border shadow-2xs transition-all hover:border-[#229ED9] hover:bg-[#229ED9] hover:text-white ${
                                        isDark ? "border-slate-700 bg-slate-900 text-slate-300" : "border-slate-300 bg-white text-slate-700"
                                    }`}
                                    title="Telegram"
                                >
                                    <Send size={14} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: PORTFOLIO PROJECTS Links (4 Cols) */}
                    <div className="md:col-span-3 lg:col-span-4">
                        <h4 className={`text-[11px] font-black uppercase tracking-widest mb-2.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                            PORTFOLIO PROJECTS
                        </h4>

                        <ul className={`space-y-1.5 text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            {projectsData.slice(0, 5).map((proj) => (
                                <li key={proj.id}>
                                    <a
                                        href={proj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#0D9668] transition-colors leading-tight line-clamp-1 block"
                                    >
                                        {proj.title}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Action Link: EXPLORE ALL PROJECTS ↗ */}
                        <div className="mt-3">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-[#0D9668] hover:underline"
                            >
                                <span>EXPLORE ALL PROJECTS</span>
                                <ExternalLink size={12} />
                            </a>
                        </div>
                    </div>

                    {/* Column 3: THE PORTFOLIO STACK Navigation (3 Cols) */}
                    <div className="md:col-span-3 lg:col-span-3">
                        <h4 className={`text-[11px] font-black uppercase tracking-widest mb-2.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                            THE PORTFOLIO STACK
                        </h4>

                        <ul className={`space-y-1.5 text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            <li>
                                <a href="#about" className="hover:text-[#0D9668] transition-colors">
                                    Core Architecture & Bio
                                </a>
                            </li>
                            <li>
                                <a href="#education" className="hover:text-[#0D9668] transition-colors">
                                    Educational Background
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="hover:text-[#0D9668] transition-colors">
                                    Volunteer Experience
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-[#0D9668] transition-colors">
                                    Technical Skills Ecosystem
                                </a>
                            </li>
                            <li>
                                <a href="#tools" className="hover:text-[#0D9668] transition-colors">
                                    Dev Tools & Integrations
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Accreditation */}
                <div className={`mt-6 border-t pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-medium ${
                    isDark ? "border-slate-800/80 text-slate-500" : "border-slate-200 text-[#2C3F96]"
                }`}>
                    <div>
                        © {new Date().getFullYear()} Rorn Hangsovoleak. All rights reserved.
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Sparkles size={12} className="text-[#0D9668]" />
                        <span>Engineered with React.js, Tailwind CSS & Antigravity.</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default Footer;

