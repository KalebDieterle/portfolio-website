"use client";

import ProjectCard from "../ProjectCard";
import ProjectPlaceholder from "../ProjectPlaceholder";
import { getProjectIcon } from "../icons";
import { projectsData } from "@/app/data/portfolio-data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 md:px-6 py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Real-world applications I&apos;ve built to solve problems
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            image={project.image}
            imageAlt={project.imageAlt}
            icon={getProjectIcon(project.iconType)}
            tags={project.tags}
            features={project.features}
            githubUrl={project.githubUrl}
            gradientFrom={project.gradientFrom}
            gradientTo={project.gradientTo}
          />
        ))}
        <ProjectPlaceholder />
      </div>
    </section>
  );
}
