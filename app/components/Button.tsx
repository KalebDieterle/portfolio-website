import React from "react";

interface ButtonProps {
  link: string;
  title: string;
}

const Button = ({ link, title }: ButtonProps) => (
  <a
    href={link}
    className="btn btn-primary btn-sm md:btn-md rounded-full border border-cyan-400/50 bg-linear-to-r from-slate-800 
    via-slate-900 to-black text-white shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 hover:shadow-cyan-400/25 transition duration-150"
  >
    {title}
  </a>
);

export default Button;
