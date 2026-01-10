import { ReactNode } from "react";

interface SkillCategoryProps {
  title: string;
  description: string;
  icon: ReactNode;
  accentColor: string;
  hoverBorderColor: string;
}

const SkillCategory = ({
  title,
  description,
  icon,
  accentColor,
  hoverBorderColor,
}: SkillCategoryProps) => (
  <div
    className={`bg-slate-800/30 rounded-xl p-6 border border-slate-700/30 ${hoverBorderColor} transition-colors`}
  >
    <div
      className={`w-10 h-10 rounded-lg ${accentColor} flex items-center justify-center mb-4`}
    >
      {icon}
    </div>
    <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default SkillCategory;
