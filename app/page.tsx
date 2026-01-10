"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useTypewriter } from "./hooks/useTypewriter";
import { useEffect, useState } from "react";
import Card from "./components/Card";

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
      <header className="bg-gradient-to-b from-slate-900 via-black to-black py-12 text-center relative overflow-hidden">
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

      <section
        id="about"
        className="max-w-5xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-start gap-10"
      >
        <Image
          src="/images/grad_photo.jpg"
          alt="Graduation Picture"
          width={2556}
          height={1179}
          className="w-full max-w-md rounded-2xl shadow-lg shadow-cyan-500/20 object-cover"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-xl leading-relaxed text-gray-200">
            I'm Kaleb Dieterle, a student pursuing Software Development who has
            been fascinated by computers my entire life. I graduated from John
            Wood Community College with an Associate in Arts focused on computer
            science, then transferred to Culver-Stockton College, where I'm
            graduating in May 2026 with a Bachelor of Science in Computer and
            Data Science. I thrive in project-oriented, hands-on
            learning—building real solutions is where I learn fastest and have
            the most fun.
          </p>
        </div>
      </section>
      <section id="projects" className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <Image
            src="/images/swe_development_image.avif"
            alt="Software Development Image"
            width={1920}
            height={1080}
            className="mt-20 w-full max-w-sm rounded-2xl shadow-lg shadow-cyan-500/20 object-cover"
          />
          <div className="flex-1">
            <Card
              title="PC E-Commerce Website Logic"
              subtitle="Python • Selenium • OOP"
              ctaText="View Code"
              ctaHref="https://github.com/KalebDieterle/Scraping-PC-E-Commerce-Website-Logic"
            >
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  Developed the core functionality of an e-commerce website
                  utilizing Python where users can shop for PC parts.
                </li>
                <li>
                  Integrated a web scraper created with the selenium library to
                  gather data, which is then saved into files and displayed
                  dynamically to the user via file I/O.
                </li>
                <li>
                  Structured the program through an object-oriented approach to
                  enhance modularity and flexibility.
                </li>
                <li>
                  Ensured to implement many staple functions that are key on an
                  e-commerce website, including but not limited to: User-logins,
                  wish lists, shopping carts, and search filters.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section id="skills" className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Backend Development"
            subtitle="Python • Selenium • API • OOP • File I/O • Auth • Testing"
          >
            <ul className="list-disc list-inside space-y-1">
              <li>
                Design and build REST APIs with auth, validation, and error
                handling.
              </li>
              <li>
                Data pipelines and web scraping (Selenium) with clean parsing
                and storage.
              </li>
              <li>
                OOP architecture for modular, testable services and utilities.
              </li>
              <li>
                File I/O and data persistence patterns (JSON/CSV/DB) with
                reliability in mind.
              </li>
              <li>
                User flows: login, session handling, roles/permissions, and
                audit-friendly logging.
              </li>
              <li>
                Quality: unit/integration tests, sensible monitoring, and
                performance awareness.
              </li>
            </ul>
          </Card>

          <Card
            title="Full-Stack Development"
            subtitle="React • Next.js • Tailwind CSS • TypeScript/JS • HTML • CSS"
          >
            <ul className="list-disc list-inside space-y-1">
              <li>
                Build responsive, accessible UIs with React/Next.js and
                Tailwind.
              </li>
              <li>
                SSR/SSG and dynamic routes; data fetching with caching and
                loading states.
              </li>
              <li>
                State management patterns (props, context) and clean component
                composition.
              </li>
              <li>
                Form handling, validation, and API integration with REST/JSON.
              </li>
              <li>
                Styling systems: utility-first (Tailwind), layout grids, and
                responsive design.
              </li>
              <li>
                Performance and UX: lazy loading, image optimization, and
                sensible error UI.
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}
