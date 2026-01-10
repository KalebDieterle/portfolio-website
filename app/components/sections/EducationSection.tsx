"use client";

import EducationCard from "../EducationCard";
import StatCard from "../StatCard";
import { BuildingIcon, GraduationIcon } from "../icons";
import { educationData, stats } from "@/app/data/portfolio-data";

export default function EducationSection() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-4 md:px-6 py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">My Education</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        My academic journey in computer science and software development
      </p>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>

        {/* JWCC - First (chronologically earlier) */}
        <div className="relative flex flex-col md:flex-row md:justify-center mb-12">
          <div className="md:w-1/2 md:mr-auto md:pr-12 pl-12 md:pl-0">
            <EducationCard
              institution={educationData[0].institution}
              location={educationData[0].location}
              degree={educationData[0].degree}
              dateLabel={educationData[0].dateLabel}
              statusLabel={educationData[0].statusLabel}
              statusColor={educationData[0].statusColor}
              courseworkLabel={educationData[0].courseworkLabel}
              coursework={[...educationData[0].coursework]}
              description={educationData[0].description}
              icon={<BuildingIcon />}
              accentColor={educationData[0].accentColor}
              borderColor={educationData[0].borderColor}
              shadowColor={educationData[0].shadowColor}
            />
          </div>
          <div
            className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${educationData[0].dotColor} border-4 border-slate-900 z-10`}
          ></div>
        </div>

        {/* Culver-Stockton - Second (chronologically later) */}
        <div className="relative flex flex-col md:flex-row md:justify-center">
          <div className="md:w-1/2 md:ml-auto md:pl-12 pl-12">
            <EducationCard
              institution={educationData[1].institution}
              location={educationData[1].location}
              degree={educationData[1].degree}
              dateLabel={educationData[1].dateLabel}
              statusLabel={educationData[1].statusLabel}
              statusColor={educationData[1].statusColor}
              courseworkLabel={educationData[1].courseworkLabel}
              coursework={[...educationData[1].coursework]}
              description={educationData[1].description}
              icon={<GraduationIcon />}
              accentColor={educationData[1].accentColor}
              borderColor={educationData[1].borderColor}
              shadowColor={educationData[1].shadowColor}
            />
          </div>
          <div
            className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${educationData[1].dotColor} border-4 border-slate-900 z-10`}
          ></div>
        </div>
      </div>

      {/* Education Stats */}
      <div className="grid grid-cols-2 gap-4 mt-12 max-w-md mx-auto">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            gradient={stat.gradient}
          />
        ))}
      </div>
    </section>
  );
}
