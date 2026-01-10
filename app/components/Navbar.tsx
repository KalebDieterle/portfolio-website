import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-center gap-3 mt-4">
      <Button link="https://github.com/KalebDieterle" title="My GitHub" />
      <Button
        link="https://www.linkedin.com/in/kaleb-dieterle-010341268/"
        title="My LinkedIn"
      />
      <Button link="#about" title="About Me" />
      <Button link="#projects" title="My Projects" />
      <Button link="#skills" title="My Skills" />
    </nav>
  );
};

export default Navbar;
