interface WorkExperienceCardProps {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  isCurrent: boolean;
  bullets: readonly string[];
  tags: readonly { name: string; color: string }[];
  accentColor: string;
  borderAccent: string;
  shadowColor: string;
  iconBg: string;
  index: number;
}

const WorkExperienceCard = ({
  company,
  role,
  dateRange,
  location,
  isCurrent,
  bullets,
  tags,
  accentColor,
  borderAccent,
  shadowColor,
  iconBg,
  index,
}: WorkExperienceCardProps) => {
  return (
    <div
      className={`relative group animate-reveal-up`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div
        className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700/50 border-l-4 ${borderAccent} shadow-xl ${shadowColor} transition-all duration-300 hover:border-slate-600/50 overflow-hidden`}
      >
        {/* Subtle gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl pointer-events-none`} />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
            <div className="flex items-start gap-4">
              {/* Company icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center shadow-lg`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{role}</h3>
                <p className="text-gray-400 text-sm mt-0.5 flex items-center gap-1.5">
                  <span className="font-medium text-gray-300">{company}</span>
                  <span className="text-slate-600">·</span>
                  <span>{location}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:gap-1.5">
              {isCurrent && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-semibold">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                  </span>
                  Present
                </span>
              )}
              <span className="text-xs text-gray-500 font-mono whitespace-nowrap">{dateRange}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-700/50 mb-5" />

          {/* Bullet points */}
          <ul className="space-y-3 mb-5">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                <span className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${accentColor}`} />
                {bullet}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          {tags.length > 0 && (
            <>
              <div className="h-px bg-slate-700/50 mb-4" />
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium ${tag.color} bg-slate-800/60`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
