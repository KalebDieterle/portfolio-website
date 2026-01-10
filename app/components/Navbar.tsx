import React from "react";

interface NavButtonProps {
  link: string;
  title: string;
}

const NavButton = ({ link, title }: NavButtonProps) => {
  const isExternal = link.startsWith("http");

  return (
    <a
      href={link}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className="px-4 py-2 rounded-lg bg-slate-800/80 border border-slate-700/50 text-gray-300 text-sm font-medium hover:bg-slate-700/80 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
    >
      {title}
    </a>
  );
};

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-center gap-3 mt-4">
      <NavButton link="https://github.com/KalebDieterle" title="My GitHub" />
      <NavButton
        link="https://www.linkedin.com/in/kaleb-dieterle-010341268/"
        title="My LinkedIn"
      />
      <NavButton link="#about" title="About Me" />
      <NavButton link="#projects" title="My Projects" />
      <NavButton link="#skills" title="My Skills" />
      <NavButton link="#education" title="My Education" />
    </nav>
  );
};

export default Navbar;
