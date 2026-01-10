import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <header className="bg-black py-6 text-center">
        <h1 className="text-white text-5xl md:text-5xl font-extrabold tracking-tight border-b border-gray-700 pb-2">
          <span className="text-primary">Kaleb Dieterle</span> — Welcome to My
          Portfolio
        </h1>
        <Navbar />
      </header>

      <section className="max-w-5xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-start gap-10">
        <Image
          src="/images/grad_photo.jpg"
          alt="Graduation Picture"
          width={400}
          height={400}
          className="w-full max-w-md rounded-2xl shadow-lg shadow-cyan-500/20 object-cover"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-200">
            I’m Kaleb Dieterle, a student pursuing Software Development who has
            been fascinated by computers my entire life. I graduated from John
            Wood Community College with an Associate in Arts focused on computer
            science, then transferred to Culver-Stockton College, where I’m
            graduating in May 2026 with a Bachelor of Science in Computer and
            Data Science. I thrive in project-oriented, hands-on
            learning—building real solutions is where I learn fastest and have
            the most fun.
          </p>
        </div>
      </section>
      <section id="projects" className="flex-1 text-lg gradient">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
          <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
          <li>
            <li>
              PC E-Commerce Website Logic
              <li>
                Developed the core functionality of an e-commerce website
                utilizing Python where users can shop for PC parts.
              </li>
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
            Ensured to implement many staple functions that are key on an
            e-commerce website, including but not limited to: User-logins, wish
            lists, shopping carts, and search filters.
          </li>
        </div>
      </section>
    </>
  );
}
