import React from "react";

interface ButtonProps {
  link: string;
  title: string;
}

const Button = ({ link, title }: ButtonProps) => {
  return (
    <a className="btn" href={link}>
      {title}
    </a>
  );
};

export default Button;
