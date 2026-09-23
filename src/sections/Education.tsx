/**
 * Description:
 *      Section component for displaying academic history styled after the "Principles / Journey" design template.
 *      Features step markers (01, 02), clean pill tags, bold headers, green highlight sentences, and structured descriptions.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { Compass } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const SCHOOL_LOGOS: Record<string, string> = {
    "Royal University of Phnom Penh": "/images/rupp-logo.png",
    "Tux Global Institute": "/images/tux-logo.png",
};

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

function EducationSection({ items = [] }: { items?: any[] }) {
    const { isDark } = useTheme();

    return (
        <section
            id="education"
            className={`relative border-b transition-colors duration-300 py-20 ${
                isDark ? "border-slate-800/80 bg-[#080C16] text-slate-100" : "border-slate-200 bg-slate-50/50 text-slate-900"
            }`}
        >
            <div className="portfolio-animate mx-auto max-w-6xl px-6">

                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#0D9668]/30 bg-[#0D9668]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0D9668]">
                        <Compass size={14} />
                        MY JOURNEY
                    </div>

                    <h2 className={`mt-4 text-3xl font-black sm:text-5xl ${isDark ? "text-white" : "text-slate-900"}`}>
                        My <span className="text-[#0D9668]">academic journey</span>
                    </h2>

                    <div className={`mx-auto mt-3 h-0.5 w-12 rounded-full ${isDark ? "bg-slate-800" : "bg-slate-300"}`} />

                    <p className={`mx-auto mt-4 max-w-2xl text-center text-sm font-medium leading-6 sm:text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        Key educational milestones and practical qualifications shaping my engineering foundation.
                    </p>
                </div>

                {/* Stepper Timeline & Cards Grid */}
                <div className="relative mx-auto mt-14 max-w-5xl">
                    {/* Horizontal Stepper Connector Line (Desktop) */}
                    <div className={`absolute left-12 right-12 top-4 hidden h-0.5 md:block ${isDark ? "bg-slate-800" : "bg-slate-300"}`} />

                    <div className="grid gap-8 md:grid-cols-2">
                        {items.map((entry, idx) => {
                            const stepNumber = String(idx + 1).padStart(2, "0");
                            const isGreen = idx % 2 === 0;
                            const logoSrc = SCHOOL_LOGOS[entry.institution] || `/images/school-logo-${idx + 1}.png`;

                            return (
                                <article
                                    key={entry.id || idx}
                                    className={`group relative flex flex-col rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0D9668]/50 hover:shadow-xl ${
                                        isDark
                                            ? "border-slate-800/80 bg-[#0D1424] hover:bg-[#111A2E]"
                                            : "border-slate-200 bg-white hover:bg-slate-50"
                                    }`}
                                >
                                    {/* Number Circle Node Header */}
                                    <div className="relative mb-6 flex items-center justify-between">
                                        <div className={`z-10 grid h-9 w-9 place-items-center rounded-full border text-xs font-extrabold shadow-sm transition group-hover:border-[#0D9668] group-hover:bg-[#0D9668] group-hover:text-white ${
                                            isDark
                                                ? "border-slate-700 bg-slate-900 text-slate-100"
                                                : "border-slate-300 bg-slate-100 text-slate-800"
                                        }`}>
                                            {stepNumber}
                                        </div>

                                        {/* TODO: Upload school logo image here (Path: {logoSrc}) */}
                                        <div className="h-8 w-8 flex items-center justify-center">
                                            <img
                                                src={logoSrc}
                                                alt={`${entry.institution} logo`}
                                                onError={(e) => {
                                                    // Fallback to text initials icon if image not uploaded
                                                    (e.target as HTMLElement).style.display = "none";
                                                }}
                                                className="h-8 w-8 object-contain opacity-80 transition group-hover:opacity-100 brightness-110"
                                            />
                                        </div>
                                    </div>


                                    {/* Pill Category Tag (01 / DEGREE) */}
                                    <div>
                                        <span
                                            className={
                                                isGreen
                                                    ? "inline-block rounded-full border border-[#0D9668]/30 bg-[#0D9668]/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#0D9668]"
                                                    : "inline-block rounded-full border border-[#2C3F96]/40 bg-[#2C3F96]/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#2C3F96] dark:text-[#818CF8]"
                                            }
                                        >
                                            {entry.category || `${stepNumber} / EDUCATION`}
                                        </span>
                                    </div>

                                    {/* Bold Institution Title */}
                                    <h3 className={`mt-4 text-xl font-black sm:text-2xl ${isDark ? "text-white" : "text-slate-900"}`}>
                                        {entry.institution}
                                    </h3>

                                    {/* Highlighted Degree Subtitle */}
                                    <p
                                        className={
                                            isGreen
                                                ? "mt-2 text-sm font-bold leading-6 text-[#0D9668]"
                                                : "mt-2 text-sm font-bold leading-6 text-[#2C3F96] dark:text-[#818CF8]"
                                        }
                                    >
                                        {entry.degree}
                                    </p>

                                    {/* Time Period Meta */}
                                    <span className={`mt-1 text-xs font-extrabold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                                        {entry.period}
                                    </span>

                                    {/* Paragraph Description */}
                                    <p className={`mt-4 text-xs font-medium leading-6 sm:text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                                        {entry.description || "Pursuing comprehensive studies and practical training to build high-quality software solutions."}
                                    </p>
                                </article>
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
export default EducationSection;
