import { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  skills: string[];
  gradientFrom: string;
  gradientTo: string;
}

const SkillCard = ({
  title,
  subtitle,
  icon,
  skills,
  gradientFrom,
  gradientTo,
}: SkillCardProps) => (
  <div className="rounded-xl border border-cyan-500/15 bg-slate-900/60 shadow-lg shadow-cyan-500/10 p-5 hover:-translate-y-1 hover:border-cyan-400/30 transition duration-200">
    <div className="flex items-center gap-3 mb-4">
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-opacity-20 text-white text-sm font-medium border border-white/10 hover:border-white/20 transition-colors`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;
