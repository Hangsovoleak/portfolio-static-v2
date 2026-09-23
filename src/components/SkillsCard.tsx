/**
 * Description:
 *      Miniature card component for a single technical skill.
 *      Displays an icon (or fallback text) and the skill name.
 */

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

function SkillCard({ skill }) {
    // Local configuration
    const icon = skill.icon || skill.iconUrl || "";

    return (
        <div className="group flex items-center gap-4 rounded-2xl border border-[#98989f]/20 bg-white px-4 py-3.5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0d9668]/40 hover:shadow-md">

            {/* Skill Icon or Fallback Branding */}
            {icon ? (
                <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-[#2C3F96]/5 border border-[#2C3F96]/10">
                    <img src={icon} alt={skill.name} className="h-6 w-6 object-contain" />
                </div>
            ) : (
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0d9668]/10 text-xs font-bold text-[#0d9668]">
                    {skill.name?.slice(0, 2)?.toUpperCase()}
                </div>
            )}

            {/* Label */}
            <span className="min-w-0 flex-1 truncate text-sm font-bold uppercase tracking-wide text-[#09090B]">
                {skill.name}
            </span>
        </div>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default SkillCard;
