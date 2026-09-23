/**
 * Description:
 *      Skills section featuring a single horizontal rounded container bar with rightward marquee motion.
 *      Icons cycle sequentially one-by-one, highlighting in their authentic brand vector color with a glowing circular halo,
 *      matching the uploaded National Social Protection Council reference layout.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { useTheme } from "../context/ThemeContext";


/*------------------------------------------------------------------------------
                         BRAND LOGO SVG COMPONENTS
------------------------------------------------------------------------------*/

function PythonSkillLogo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M11.87 2c-5.18 0-4.86 2.25-4.86 2.25v2.33h4.94v.7H5.06S2 6.84 2 12.06c0 5.22 2.66 5.04 2.66 5.04h1.59v-2.25s-.08-2.69 2.65-2.69h4.55s2.51.04 2.51-2.43V4.43S16.48 2 11.87 2z" fill="#3776AB" />
            <path d="M12.13 22c5.18 0 4.86-2.25 4.86-2.25v-2.33h-4.94v-.7h6.89S22 17.16 22 11.94c0-5.22-2.66-5.04-2.66-5.04h-1.59v2.25s.08 2.69-2.65 2.69h-4.55s-2.51-.04-2.51 2.43v5.30S7.52 22 12.13 22z" fill="#FFD43B" />
            <circle cx="9.2" cy="4.2" r="0.8" fill="#FFF" />
            <circle cx="14.8" cy="19.8" r="0.8" fill="#FFF" />
        </svg>
    );
}

function HtmlSkillLogo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" fill="#E34F26" />
            <path d="M12 2.2v19.5l6.9-2.2 1.6-17.3H12z" fill="#EF652A" />
            <path d="M6.2 6.7h11.6l-.4 3.9H12v3.8h4.9l-.5 5.6-4.4 1.4v-3.7l2.2-.7.2-2.6H6.9l-.7-7.7z" fill="#FFF" />
        </svg>
    );
}

function TailwindSkillLogo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
        </svg>
    );
}

function MySqlSkillLogo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M12.2 2C6.6 2 2 6.6 2 12.2c0 4.1 2.5 7.6 6.1 9.1v-3.1c-2.3-.9-3.9-3.2-3.9-5.9 0-3.5 2.9-6.4 6.4-6.4s6.4 2.9 6.4 6.4c0 2.7-1.6 5-3.9 5.9v3.1c3.6-1.5 6.1-5 6.1-9.1C22.4 6.6 17.8 2 12.2 2z" fill="#4479A1" />
            <path d="M10.5 9h3.4v6.4h-3.4V9z" fill="#F29111" />
        </svg>
    );
}

function SqliteSkillLogo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <rect width="100" height="100" rx="20" fill="#003B57" />
            <path d="M25 30h50v10H25V30zm0 18h35v10H25V48zm0 18h50v10H25V66z" fill="#00A3E0" />
            <text x="24" y="88" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="#FFFFFF">SQLITE</text>
        </svg>
    );
}

function PostgreSqlSkillLogo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#336791" />
            <path d="M12 5c-3.3 0-6 2.7-6 6 0 2.2 1.2 4.1 3 5.1v-2.3c-.9-.6-1.5-1.6-1.5-2.8 0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 1.2-.6 2.2-1.5 2.8v2.3c1.8-1 3-2.9 3-5.1 0-3.3-2.7-6-6-6z" fill="#FFF" />
        </svg>
    );
}

function FastApiSkillLogo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#009688" />
            <path d="M13 4L6 14h5l-1 6 7-10h-5l1-6z" fill="#FFF" />
        </svg>
    );
}

function BusinessLogicSkillLogo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="#8B5CF6" />
            <path d="M7 7h4v4H7V7zm6 0h4v4h-4V7zm-6 6h4v4H7v-4zm6 0h4v4h-4v-4z" fill="#FFF" />
        </svg>
    );
}

function CppSkillLogo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" fill="#00599C" />
            <path d="M9.5 14.5a3.5 3.5 0 110-5 3.5 3.5 0 010 5zm5.5-3.5h1.5v-1.5H18v1.5h1.5v1.5H18V14h-1.5v-1.5H15V11z" fill="#FFF" />
        </svg>
    );
}

function JavaSkillLogo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M12 2s-3 3.5 0 6c0 0-4-1.5-1-4.5z" fill="#ED8B00" />
            <path d="M4 14c0 3 4 5 8 5s8-2 8-5H4z" fill="#5382A1" />
            <path d="M6 19.5c2 1 4 1.5 6 1.5s4-.5 6-1.5" stroke="#ED8B00" strokeWidth="1.5" />
        </svg>
    );
}

function LinuxSkillLogo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none">
            <path d="M50 10L90 30v40L50 90L10 70V30z" fill="#FFFFFF" stroke="#2D3748" strokeWidth="6" strokeLinejoin="round" />
            <path d="M50 10L90 30L50 50L10 30z" fill="#FFFFFF" stroke="#2D3748" strokeWidth="4" />
            <path d="M50 50v40L90 70V30z" fill="#2D3748" />
            <text x="56" y="70" fontFamily="monospace" fontSize="22" fontWeight="bold" fill="#FFFFFF">$</text>
            <rect x="74" y="66" width="10" height="4" fill="#48BB78" />
        </svg>
    );
}

/*------------------------------------------------------------------------------
                                 SKILLS DATA
------------------------------------------------------------------------------*/
const SKILLS_LIST = [
    { id: "python", name: "Python", logo: PythonSkillLogo, color: "#3776AB", glow: "rgba(55, 118, 171, 0.4)", border: "border-[#3776AB]" },
    { id: "html", name: "HTML", logo: HtmlSkillLogo, color: "#E34F26", glow: "rgba(227, 79, 38, 0.4)", border: "border-[#E34F26]" },
    { id: "tailwindcss", name: "TailwindCSS", logo: TailwindSkillLogo, color: "#06B6D4", glow: "rgba(6, 182, 212, 0.4)", border: "border-[#06B6D4]" },
    { id: "mysql", name: "MySQL", logo: MySqlSkillLogo, color: "#4479A1", glow: "rgba(68, 121, 161, 0.4)", border: "border-[#4479A1]" },
    { id: "sqlite", name: "SQLite", logo: SqliteSkillLogo, color: "#00A3E0", glow: "rgba(0, 163, 224, 0.4)", border: "border-[#00A3E0]" },
    { id: "postgresql", name: "PostgreSQL", logo: PostgreSqlSkillLogo, color: "#336791", glow: "rgba(51, 103, 145, 0.4)", border: "border-[#336791]" },
    { id: "fastapi", name: "FastAPI", logo: FastApiSkillLogo, color: "#009688", glow: "rgba(0, 150, 136, 0.4)", border: "border-[#009688]" },
    { id: "bizlogic", name: "Business Logic", logo: BusinessLogicSkillLogo, color: "#8B5CF6", glow: "rgba(139, 92, 246, 0.4)", border: "border-[#8B5CF6]" },
    { id: "cpp", name: "C++", logo: CppSkillLogo, color: "#00599C", glow: "rgba(0, 89, 156, 0.4)", border: "border-[#00599C]" },
    { id: "java", name: "Java", logo: JavaSkillLogo, color: "#ED8B00", glow: "rgba(237, 139, 0, 0.4)", border: "border-[#ED8B00]" },
    { id: "linux", name: "Command Linux", logo: LinuxSkillLogo, color: "#2D3748", glow: "rgba(45, 55, 72, 0.4)", border: "border-[#2D3748]" }
];

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/
function SkillsSection({ skills = [] }: { skills?: any[] }) {
    const { isDark } = useTheme();
    // Duplicate list 4 times for seamless 100% rightward infinite marquee motion
    const seamlessList = [...SKILLS_LIST, ...SKILLS_LIST, ...SKILLS_LIST, ...SKILLS_LIST];

    return (
        <section
            id="skills"
            className={`relative z-10 border-b pt-16 pb-24 sm:pb-28 overflow-hidden transition-colors duration-300 ${
                isDark ? "border-slate-800/80 bg-[#080C16] text-slate-100" : "border-slate-200 bg-slate-50/50 text-slate-900"
            }`}
        >
            {/* Header Content */}
            <div className="portfolio-animate relative mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-3xl text-center pb-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#0D9668]/30 bg-[#0D9668]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#0D9668]">
                        <span className="h-2 w-2 rounded-full bg-[#0D9668] animate-pulse" />
                        SPOTLIGHT SKILLS ECOSYSTEM
                    </div>
                    <h2 className={`mt-3 text-3xl font-black sm:text-4xl tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                        Language & <span className="text-[#0D9668]">Technical Skills</span>
                    </h2>
                    <p className={`mt-2 text-xs sm:text-sm font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        Continuous rightward marquee motion featuring authentic brand vector icons.
                    </p>
                </div>
            </div>

            {/* Full Screen Width Marquee Ticker Container (No Shadows, No Hover Motions, Edge-to-Edge) */}
            <div className="relative w-full overflow-hidden py-4">
                {/* Subtle Left & Right Edge Fade Gradients for smooth full-width effect */}
                <div className={`pointer-events-none absolute left-0 top-0 z-20 h-full w-28 bg-gradient-to-r ${
                    isDark ? "from-[#080C16] via-[#080C16]/90" : "from-slate-50 via-slate-50/90"
                } to-transparent`} />
                <div className={`pointer-events-none absolute right-0 top-0 z-20 h-full w-28 bg-gradient-to-l ${
                    isDark ? "from-[#080C16] via-[#080C16]/90" : "from-slate-50 via-slate-50/90"
                } to-transparent`} />

                <div className="marquee-container relative flex overflow-hidden">
                    {/* Continuous Rightward Marquee Motion (60s duration for smooth movement) */}
                    <div className="animate-[marquee-right_60s_linear_infinite] flex items-center gap-10 sm:gap-14 py-2">
                        {seamlessList.map((skill, idx) => {
                            const LogoComponent = skill.logo;

                            return (
                                <div
                                    key={`skill-${skill.id}-${idx}`}
                                    className="relative z-10 flex shrink-0 flex-col items-center justify-center"
                                >
                                    {/* Clean Circular Icon Container */}
                                    <div className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border shadow-md ${
                                        isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                                    }`}>
                                        <LogoComponent className="h-6 w-6 sm:h-7 sm:w-7" />
                                    </div>

                                    {/* Skill Name Label */}
                                    <span className={`mt-2 text-[11px] font-extrabold uppercase tracking-wider ${
                                        isDark ? "text-slate-300" : "text-slate-700"
                                    }`}>
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default SkillsSection;


