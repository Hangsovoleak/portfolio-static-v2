function ExperienceCard({ item }) {
    return (
        <article className="group flex h-full flex-col rounded-2xl border border-[#98989f]/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0d9668]/40 hover:shadow-lg">

            {/* Header: Company and Duration */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-xl font-black tracking-tight text-[#09090B]">{item.company}</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#98989f]">{item.role}</p>
                </div>

                <span className="rounded-full border border-[#0d9668]/30 bg-[#0d9668]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0d9668]">
                    {item.period}
                </span>
            </div>

            {/* Content: Responsibilities Bullet Points */}
            <ul className="mt-5 space-y-2 text-sm text-[#09090B]/80">
                {(item.description || "")
                    .split("\n")
                    .map((line) => line.trim())
                    .filter(Boolean)
                    .map((bullet, idx) => (
                        <li key={idx} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0d9668]" />
                            <span className="font-medium leading-6">{bullet}</span>
                        </li>
                    ))}
            </ul>
        </article>
    );
}

export default ExperienceCard;
