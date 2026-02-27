"use client";

import { useState, useEffect, useRef } from "react";
import ProjectCard from "../ProjectCard";
import ProjectPlaceholder from "../ProjectPlaceholder";
import { getProjectIcon } from "../icons";
import { projectsData } from "@/app/data/portfolio-data";

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="max-w-5xl mx-auto px-4 md:px-6 py-16"
    >
      {/* Section header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
          Featured Work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Real-world applications I&apos;ve built to solve problems
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={project.title}
            className={isVisible ? "animate-reveal-up" : "opacity-0"}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <ProjectCard
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
          </div>
        ))}
        <div
          className={isVisible ? "animate-reveal-up" : "opacity-0"}
          style={{ animationDelay: `${projectsData.length * 150}ms` }}
        >
          <ProjectPlaceholder />
        </div>
      </div>
    </section>
  );
}
