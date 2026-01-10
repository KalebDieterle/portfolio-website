"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import { useTypewriter } from "./hooks/useTypewriter";
import { useEffect, useState } from "react";
import { UserIcon } from "./components/icons";

// Lazy load below-the-fold sections for better initial page load
const ProjectsSection = dynamic(
  () => import("./components/sections/ProjectsSection"),
  { loading: () => <SectionSkeleton /> }
);

const SkillsSection = dynamic(
  () => import("./components/sections/SkillsSection"),
  { loading: () => <SectionSkeleton /> }
);

const EducationSection = dynamic(
  () => import("./components/sections/EducationSection"),
  { loading: () => <SectionSkeleton /> }
);

const Footer = dynamic(() => import("./components/sections/Footer"));

// Loading skeleton for lazy-loaded sections
const SectionSkeleton = () => (
  <div className="max-w-5xl mx-auto px-4 md:px-6 py-16">
    <div className="animate-pulse">
      <div className="h-8 bg-slate-700/50 rounded w-48 mx-auto mb-4"></div>
      <div className="h-4 bg-slate-700/30 rounded w-64 mx-auto mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-64 bg-slate-800/50 rounded-2xl"></div>
        <div className="h-64 bg-slate-800/50 rounded-2xl"></div>
      </div>
    </div>
  </div>
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
      {/* Header - Above the fold, loaded immediately */}
      <header className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-purple-500/5 to-transparent"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 py-16 md:py-20 text-center">
          <div className="min-h-24 flex items-center justify-center mb-4">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                {namePart}
              </span>
              <span className="text-gray-200 font-medium">{restPart}</span>
              <span className="animate-pulse ml-2 text-cyan-400">|</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg mb-8 opacity-80">
            Software Developer • Full-Stack Enthusiast • Problem Solver
          </p>
          <Navbar />
        </div>
      </header>

      {/* About Section - Above the fold, loaded immediately */}
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
              width={600}
              height={400}
              priority
              className="relative w-full max-w-md rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <UserIcon />
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

      {/* Lazy-loaded sections */}
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <Footer />
    </>
  );
}
