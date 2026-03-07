import { workExperienceData } from "../../data/portfolio-data";
import { BriefcaseIcon } from "../icons";
import WorkExperienceCard from "../WorkExperienceCard";

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-amber-500/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 mb-5 shadow-lg shadow-cyan-500/20">
            <BriefcaseIcon className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world roles where I&apos;ve shipped production software and led teams
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden sm:block">
            <div className="w-full h-full bg-gradient-to-b from-cyan-500/60 via-purple-500/40 to-amber-500/60 shadow-[0_0_12px_rgba(6,182,212,0.3)]" />
          </div>

          <div className="space-y-8">
            {workExperienceData.map((job, index) => (
              <div key={`${job.company}-${index}`} className="relative sm:pl-16">
                {/* Timeline node */}
                <div className="absolute left-0 top-8 hidden sm:flex items-center justify-center">
                  <span className={`relative flex h-[13px] w-[13px]`}>
                    {job.isCurrent && (
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${job.dotColor} opacity-60`} />
                    )}
                    <span className={`relative inline-flex rounded-full h-[13px] w-[13px] ${job.dotColor} shadow-lg`} />
                  </span>
                </div>

                <WorkExperienceCard {...job} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
