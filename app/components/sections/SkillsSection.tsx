"use client";

import SkillCard from "../SkillCard";
import SkillCategory from "../SkillCategory";
import TechTag from "../TechTag";
import {
  ServerIcon,
  MonitorIcon,
  CodeIcon,
  DatabaseIcon,
  BoltIcon,
} from "../icons";
import {
  backendSkills,
  frontendSkills,
  technologies,
} from "@/app/data/portfolio-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 md:px-6 py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">My Skills</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Technologies and tools I use to bring ideas to life
      </p>

      {/* Technical Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <SkillCard
          title="Backend Development"
          subtitle="Server-side & APIs"
          icon={<ServerIcon />}
          skills={[...backendSkills]}
          gradientFrom="from-cyan-500"
          gradientTo="to-blue-600"
        />
        <SkillCard
          title="Frontend Development"
          subtitle="UI/UX & Web Apps"
          icon={<MonitorIcon />}
          skills={[...frontendSkills]}
          gradientFrom="from-purple-500"
          gradientTo="to-pink-600"
        />
      </div>

      {/* Technology Tags */}
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
        <h3 className="text-xl font-semibold text-center mb-6 text-white">
          Tools & Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <TechTag key={tech.name} name={tech.name} color={tech.color} />
          ))}
        </div>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <SkillCategory
          title="Clean Code"
          description="Writing maintainable, readable, and well-documented code following best practices and design patterns."
          icon={<CodeIcon />}
          accentColor="bg-cyan-500/20"
          hoverBorderColor="hover:border-cyan-500/30"
        />
        <SkillCategory
          title="Data Management"
          description="Handling data persistence, file I/O operations, and database interactions with reliability and efficiency."
          icon={<DatabaseIcon />}
          accentColor="bg-purple-500/20"
          hoverBorderColor="hover:border-purple-500/30"
        />
        <SkillCategory
          title="Performance"
          description="Optimizing applications for speed and efficiency with lazy loading, caching, and smart resource management."
          icon={<BoltIcon />}
          accentColor="bg-pink-500/20"
          hoverBorderColor="hover:border-pink-500/30"
        />
      </div>
    </section>
  );
}
