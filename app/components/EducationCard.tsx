import { ReactNode } from "react";

interface EducationCardProps {
  institution: string;
  location: string;
  degree: string;
  dateLabel: string;
  statusLabel: string;
  statusColor: string;
  courseworkLabel: string;
  coursework: string[];
  description: string;
  icon: ReactNode;
  accentColor: string;
  borderColor: string;
  shadowColor: string;
  isRightAligned?: boolean;
}

const EducationCard = ({
  institution,
  location,
  degree,
  dateLabel,
  statusLabel,
  statusColor,
  courseworkLabel,
  coursework,
  description,
  icon,
  accentColor,
  borderColor,
  shadowColor,
  isRightAligned = false,
}: EducationCardProps) => (
  <div
    className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border ${borderColor} hover:border-opacity-60 transition-all shadow-lg ${shadowColor}`}
  >
    <div
      className={`flex items-center gap-3 mb-4 ${
        isRightAligned ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${accentColor} flex items-center justify-center flex-shrink-0`}
      >
        {icon}
      </div>
      <div className={isRightAligned ? "md:text-right" : ""}>
        <h3 className="text-xl font-bold text-white">{institution}</h3>
        <p
          className={`text-sm font-medium ${
            accentColor.includes("cyan") ? "text-cyan-400" : "text-purple-400"
          }`}
        >
          {location}
        </p>
      </div>
    </div>
    <div className="space-y-3">
      <div>
        <p className="text-lg font-semibold text-white">{degree}</p>
        <div
          className={`flex items-center gap-2 mt-1 ${
            isRightAligned ? "md:justify-end" : ""
          }`}
        >
          <span
            className={`px-3 py-1 rounded-full ${
              accentColor.includes("cyan")
                ? "bg-cyan-500/20 text-cyan-300"
                : "bg-purple-500/20 text-purple-300"
            } text-xs font-medium`}
          >
            {dateLabel}
          </span>
          <span
            className={`px-3 py-1 rounded-full ${statusColor} text-xs font-medium`}
          >
            {statusLabel}
          </span>
        </div>
      </div>
      <div className="border-t border-slate-700 pt-3">
        <p
          className={`text-sm font-medium text-gray-300 mb-2 ${
            isRightAligned ? "md:text-right" : ""
          }`}
        >
          {courseworkLabel}:
        </p>
        <div
          className={`flex flex-wrap gap-2 ${
            isRightAligned ? "md:justify-end" : ""
          }`}
        >
          {coursework.map((course) => (
            <span
              key={course}
              className="px-2 py-1 rounded-md bg-slate-700/50 text-gray-300 text-xs"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-700 pt-3">
        <p
          className={`text-sm text-gray-400 ${
            isRightAligned ? "md:text-right" : ""
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default EducationCard;
