/**
 * Description:
 *      Hero/About section of the portfolio.
 *      Displays personal bio, status badge, call to actions, and dynamic typing animations.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { House, ArrowRight, Code } from "lucide-react";
import TextType from "../style/TextType";
import { useTheme } from "../context/ThemeContext";

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Hero section with personal profile details.
 * 
 * @param {Object} profile User profile data (name, bio, email).
 * @returns {JSX.Element|null} The rendered about section or null if no profile.
 */
function AboutSection({ profile }) {
    const { isDark } = useTheme();

    // Return early if no profile data is available
    if (!profile) return null;

    return (
        <section
            id="about"
            className={`relative overflow-hidden border-b transition-colors duration-300 py-16 md:py-24 ${
                isDark ? "border-slate-800/80 bg-[#080C16]" : "border-[#98989f]/20 bg-white"
            }`}
        >
            {/* Visual Overlays and Ambient Glow Accents */}
            <div className={`absolute -left-20 top-20 h-96 w-96 rounded-full blur-3xl pointer-events-none ${isDark ? "bg-[#0D9668]/15" : "bg-[#0D9668]/10"}`} />
            <div className={`absolute -right-20 bottom-10 h-96 w-96 rounded-full blur-3xl pointer-events-none ${isDark ? "bg-[#2C3F96]/20" : "bg-[#2C3F96]/10"}`} />

            <div className="portfolio-animate relative z-10 mx-auto max-w-6xl px-6 pt-12 md:pt-16">
                <div className="flex flex-col items-start justify-between gap-10">
                    
                    {/* Main Bio Details Column */}
                    <div className="w-full max-w-4xl">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#0D9668]/30 bg-[#0D9668]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0D9668]">
                                <House size={14} />
                                Personal Profile
                            </div>

                            <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide shadow-xs ${
                                isDark
                                    ? "border-slate-700 bg-slate-900/90 text-slate-100"
                                    : "border-[#0D9668]/30 bg-white text-[#09090B]"
                            }`}>
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-[#0D9668]"></span>
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0D9668]"></span>
                                </span>
                                <span>Open for Work</span>
                            </div>
                        </div>

                        {/* Main Name Heading with Typing Animation */}
                        <h1 className={`mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl ${isDark ? "text-white" : "text-[#09090B]"}`}>
                            <TextType
                                text={[profile.name]}
                                typingSpeed={70}
                                pauseDuration={1500}
                                showCursor
                                cursorCharacter="_"
                                deletingSpeed={45}
                                variableSpeedEnabled={false}
                                variableSpeedMin={60}
                                variableSpeedMax={120}
                                cursorBlinkDuration={0.55}
                            />
                        </h1>

                        {/* Personal Description */}
                        <p className={`mt-6 max-w-3xl text-base font-medium leading-8 sm:text-lg ${isDark ? "text-slate-300" : "text-[#09090B]/80"}`}>
                            I am an Information Technology Engineering student specializing in software development.
                            Experienced in building web applications using modern frontend and backend technologies.
                            Strong foundation in programming, system troubleshooting, and problem solving. Eager to
                            contribute technical skills while continuing to grow.
                        </p>

                        {/* Call to Actions */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D9668] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0D9668]/25 transition hover:-translate-y-0.5 hover:bg-[#0a7a54]"
                            >
                                <span>Get In Touch</span>
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href="#projects"
                                className={`inline-flex items-center justify-center gap-2 rounded-xl border px-7 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 ${
                                    isDark
                                        ? "border-[#2C3F96]/50 bg-[#2C3F96]/20 text-slate-100 hover:border-[#0D9668] hover:bg-[#2C3F96]/30"
                                        : "border-[#2C3F96]/30 bg-[#2C3F96]/5 text-[#2C3F96] hover:bg-[#2C3F96]/15"
                                }`}
                            >
                                <Code size={16} />
                                <span>View Projects</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default AboutSection;
