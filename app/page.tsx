"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useTypewriter } from "./hooks/useTypewriter";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import SkillCard from "./components/SkillCard";
import SkillCategory from "./components/SkillCategory";
import EducationCard from "./components/EducationCard";
import StatCard from "./components/StatCard";
import TechTag from "./components/TechTag";

// Data constants
const backendSkills = [
  "Python",
  "REST APIs",
  "Web Scraping",
  "Selenium",
  "Database Management",
  "SQL",
  "Authentication",
  "File I/O",
];

const frontendSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Responsive Design",
];

const technologies = [
  { name: "Python", color: "from-yellow-500 to-yellow-600" },
  { name: "JavaScript", color: "from-yellow-400 to-orange-500" },
  { name: "TypeScript", color: "from-blue-500 to-blue-600" },
  { name: "React", color: "from-cyan-400 to-cyan-500" },
  { name: "Next.js", color: "from-gray-600 to-gray-700" },
  { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
  { name: "Node.js", color: "from-green-500 to-green-600" },
  { name: "Git", color: "from-orange-500 to-red-500" },
  { name: "Selenium", color: "from-green-400 to-green-500" },
  { name: "REST APIs", color: "from-indigo-500 to-purple-500" },
  { name: "SQL", color: "from-blue-400 to-blue-500" },
  { name: "VS Code", color: "from-blue-500 to-blue-600" },
  { name: "GitHub", color: "from-gray-500 to-gray-600" },
  { name: "OOP", color: "from-pink-500 to-rose-500" },
];

const educationData = [
  {
    institution: "John Wood Community College",
    location: "Quincy, Illinois",
    degree: "Associate in Arts, Computer Science",
    dateLabel: "Graduated May 2024",
    statusLabel: "Completed",
    statusColor: "bg-blue-500/20 text-blue-300",
    courseworkLabel: "Key Foundations",
    coursework: [
      "Programming Fundamentals",
      "Computer Architecture",
      "Discrete Mathematics",
      "Problem Solving",
      "Technical Writing",
    ],
    description:
      "Built a strong foundation in computer science fundamentals, programming concepts, algorithms, and computational theory that prepared me for advanced studies.",
    accentColor: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500/30",
    shadowColor: "shadow-cyan-500/10 hover:shadow-cyan-500/20",
    dotColor: "bg-cyan-500",
  },
  {
    institution: "Culver-Stockton College",
    location: "Canton, Missouri",
    degree: "B.S. Computer and Data Science",
    dateLabel: "Expected May 2026",
    statusLabel: "In Progress",
    statusColor: "bg-green-500/20 text-green-300",
    courseworkLabel: "Relevant Coursework",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Machine Learning",
      "Data Analysis",
      "Software Engineering",
      "Database Systems",
    ],
    description:
      "Deepening expertise in software development, algorithms, data analysis, and machine learning through hands-on projects and real-world applications.",
    accentColor: "from-purple-500 to-pink-600",
    borderColor: "border-purple-500/30",
    shadowColor: "shadow-purple-500/10 hover:shadow-purple-500/20",
    dotColor: "bg-purple-500",
  },
];

const stats = [
  {
    value: "4+",
    label: "Years of Study",
    gradient: "from-cyan-400 to-purple-400",
  },
  {
    value: "10+",
    label: "Projects Completed",
    gradient: "from-purple-400 to-pink-400",
  },
];

// Icon components
const ServerIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
);

const MonitorIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const CodeIcon = () => (
  <svg
    className="w-5 h-5 text-cyan-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const DatabaseIcon = () => (
  <svg
    className="w-5 h-5 text-purple-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
    />
  </svg>
);

const BoltIcon = () => (
  <svg
    className="w-5 h-5 text-pink-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const GraduationIcon = () => (
  <svg
    className="w-7 h-7 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    className="w-7 h-7 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

export default function Home() {
  const namePart = useTypewriter("Kaleb Dieterle", 80);
  const [startRest, setStartRest] = useState(false);
  const restPart = useTypewriter(
    startRest ? " — Welcome to My Portfolio" : "",
    80
  );

  useEffect(() => {
    if (namePart === "Kaleb Dieterle") {
      setStartRest(true);
    }
  }, [namePart]);

  return (
    <>
      <header className="bg-gradient-to-b from-slate-900 via-black to-black py-12 text-center relative overflow-hidden border-b-2 border-cyan-500/20">
        <div className="min-h-24 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-5xl font-extrabold tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {namePart}
            </span>
            <span className="text-white">{restPart}</span>
            <span className="animate-pulse ml-2">|</span>
          </h1>
        </div>
        <Navbar />
      </header>

      <section id="about" className="max-w-5xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Passionate about building software that makes a difference
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <Image
              src="/images/grad_photo.jpg"
              alt="Graduation Picture"
              width={2556}
              height={1179}
              className="relative w-full max-w-md rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Kaleb Dieterle
                  </h3>
                  <p className="text-sm text-gray-400">Software Developer</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                I&apos;m a student pursuing Software Development who has been
                fascinated by computers my entire life. I graduated from John
                Wood Community College with an Associate in Arts focused on
                computer science, then transferred to Culver-Stockton College,
                where I&apos;m graduating in May 2026 with a Bachelor of Science
                in Computer and Data Science.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                I thrive in project-oriented, hands-on learning—building real
                solutions is where I learn fastest and have the most fun.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium border border-cyan-500/30">
                  🎓 Graduating May 2026
                </span>
                <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium border border-purple-500/30">
                  💻 Full-Stack Developer
                </span>
                <span className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-300 text-sm font-medium border border-pink-500/30">
                  🚀 Hands-on Learner
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="max-w-5xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Real-world applications I&apos;ve built to solve problems
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/swe_development_image.avif"
                  alt="Software Development Image"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      PC E-Commerce Website Logic
                    </h3>
                    <p className="text-sm text-gray-400">
                      Backend Development Project
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-medium">
                    Python
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">
                    Selenium
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">
                    OOP
                  </span>
                </div>

                <ul className="space-y-2 text-gray-300 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>
                      Core e-commerce functionality for PC parts shopping
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>
                      Web scraper with Selenium for dynamic data gathering
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>
                      User authentication, wishlists, carts & search filters
                    </span>
                  </li>
                </ul>

                <a
                  href="https://github.com/KalebDieterle/Scraping-PC-E-Commerce-Website-Logic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Placeholder for more projects */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 h-full flex flex-col items-center justify-center p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center mb-6 border border-purple-500/30">
                <svg
                  className="w-8 h-8 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                More Coming Soon
              </h3>
              <p className="text-gray-400 text-sm max-w-xs">
                I&apos;m always working on new projects. Check back soon or
                visit my GitHub to see what I&apos;m building!
              </p>
              <a
                href="https://github.com/KalebDieterle"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                View GitHub Profile →
              </a>
            </div>
          </div>
        </div>
      </section>
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
            skills={backendSkills}
            gradientFrom="from-cyan-500"
            gradientTo="to-blue-600"
          />
          <SkillCard
            title="Frontend Development"
            subtitle="UI/UX & Web Apps"
            icon={<MonitorIcon />}
            skills={frontendSkills}
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
                coursework={educationData[0].coursework}
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
                coursework={educationData[1].coursework}
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
    </>
  );
}
