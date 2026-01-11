"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import { useTypewriter } from "./hooks/useTypewriter";
import { useEffect, useState, useRef } from "react";
import {
  UserIcon,
  CodeIcon,
  BoltIcon,
  GraduationIcon,
} from "./components/icons";
import { stats } from "./data/portfolio-data";

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

  // Animated counter hook for stats
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
      if (!hasStarted) return;
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [hasStarted, end, duration]);

    return { count, ref };
  };

  const yearsCounter = useCounter(4, 1500);
  const projectsCounter = useCounter(10, 1800);
  const techCounter = useCounter(14, 2000);

  return (
    <>
      {/* Header - Immersive Hero Section */}
      <header className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-purple-500/10 to-transparent"></div>

        {/* Animated floating orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-[15%] w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-[20%] w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-[10%] w-48 h-48 bg-blue-500/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>

        {/* Glowing line accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

        {/* Main content */}
        <div className="relative z-10 px-4 md:px-6 pt-8 pb-16 text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300">Open to Opportunities</span>
          </div>

          {/* Name with typewriter */}
          <div className="min-h-28 flex flex-col items-center justify-center mb-6">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-2">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                {namePart}
              </span>
              <span className="animate-pulse ml-2 text-cyan-400">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide h-8">
              {restPart}
            </p>
          </div>

          {/* Role badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="group px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 text-cyan-300 font-medium hover:border-cyan-400/50 hover:bg-cyan-500/15 transition-all duration-300 cursor-default">
              <span className="mr-2">💻</span>Software Developer
            </span>
            <span className="group px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-500/5 border border-purple-500/30 text-purple-300 font-medium hover:border-purple-400/50 hover:bg-purple-500/15 transition-all duration-300 cursor-default">
              <span className="mr-2">🔧</span>Full-Stack Enthusiast
            </span>
            <span className="group px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500/10 to-pink-500/5 border border-pink-500/30 text-pink-300 font-medium hover:border-pink-400/50 hover:bg-pink-500/15 transition-all duration-300 cursor-default">
              <span className="mr-2">🎯</span>Problem Solver
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://github.com/KalebDieterle"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-slate-800/80 border-2 border-slate-600/50 rounded-xl font-semibold text-gray-200 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-slate-800 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub Profile
            </a>
          </div>

          {/* Navigation */}
          <Navbar />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-500 tracking-widest uppercase">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </header>

      {/* About Section - Enhanced with stats and better layout */}
      <section id="about" className="relative py-24 overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-cyan-500/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/5 to-transparent"></div>

        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
              Get to know me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate about building software that makes a difference
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Photo column */}
            <div className="lg:col-span-2">
              <div className="group sticky top-8">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-40 group-hover:opacity-60 transition-all duration-300"></div>

                <div className="relative bg-slate-900 p-1.5 rounded-2xl">
                  <Image
                    src="/images/grad_photo.jpg"
                    alt="Graduation Picture"
                    width={600}
                    height={750}
                    priority
                    className="w-full rounded-xl object-cover aspect-[4/5]"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 rounded-xl shadow-lg shadow-purple-500/30">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <GraduationIcon />
                    <span>Class of 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="lg:col-span-3 space-y-8">
              {/* Info card */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-700/50">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <UserIcon />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Kaleb Dieterle
                    </h3>
                    <p className="text-gray-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Software Developer • Available for hire
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    I&apos;m a student pursuing Software Development who has
                    been
                    <span className="text-cyan-400 font-medium">
                      {" "}
                      fascinated by computers my entire life
                    </span>
                    . I graduated from John Wood Community College with an
                    Associate in Arts focused on computer science, then
                    transferred to Culver-Stockton College.
                  </p>
                  <p className="text-lg">
                    I&apos;m graduating in{" "}
                    <span className="text-purple-400 font-medium">
                      May 2026
                    </span>{" "}
                    with a Bachelor of Science in Computer and Data Science. I
                    thrive in
                    <span className="text-pink-400 font-medium">
                      {" "}
                      project-oriented, hands-on learning
                    </span>
                    —building real solutions is where I learn fastest and have
                    the most fun.
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                <div
                  ref={yearsCounter.ref}
                  className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-5 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-1">
                    {yearsCounter.count}+
                  </div>
                  <div className="text-sm text-gray-400">Years of Study</div>
                </div>
                <div
                  ref={projectsCounter.ref}
                  className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-5 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-1">
                    {projectsCounter.count}+
                  </div>
                  <div className="text-sm text-gray-400">Projects Built</div>
                </div>
                <div
                  ref={techCounter.ref}
                  className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-5 border border-slate-700/50 hover:border-pink-500/30 transition-all duration-300 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent mb-1">
                    {techCounter.count}+
                  </div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>

              {/* Quick facts */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/20">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <CodeIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Full-Stack Focus
                    </h4>
                    <p className="text-sm text-gray-400">
                      Building end-to-end solutions with modern technologies
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border border-purple-500/20">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <BoltIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Quick Learner
                    </h4>
                    <p className="text-sm text-gray-400">
                      Adaptable and eager to master new technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-cyan-500/15 text-cyan-300 text-sm font-medium border border-cyan-500/30 hover:bg-cyan-500/25 transition-colors">
                  🎓 Graduating May 2026
                </span>
                <span className="px-4 py-2 rounded-full bg-purple-500/15 text-purple-300 text-sm font-medium border border-purple-500/30 hover:bg-purple-500/25 transition-colors">
                  💻 Full-Stack Developer
                </span>
                <span className="px-4 py-2 rounded-full bg-pink-500/15 text-pink-300 text-sm font-medium border border-pink-500/30 hover:bg-pink-500/25 transition-colors">
                  🚀 Hands-on Learner
                </span>
                <span className="px-4 py-2 rounded-full bg-blue-500/15 text-blue-300 text-sm font-medium border border-blue-500/30 hover:bg-blue-500/25 transition-colors">
                  📍 Seeking Opportunities
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
