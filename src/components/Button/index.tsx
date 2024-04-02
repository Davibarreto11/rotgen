import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <a
      href="mailto:laryssa.brilhante@hotmail.com"
      className="
      bg-red-500
      px-12 
      py-5
      md:px-6 
      md:py-3
      x:px-10 
      xl:py-4
      2xl:px-8 
      2xl:py-4 
      3xl:py-5
      3xl:px-12
      4xl:py-7
      5xl:px-16
      5xl:py-10
      text-base 
      md:text-sm
      2xl:text-xl 
      3xl:text-2xl
      4xl:text-3xl
      5xl:text-5xl 
      text-white
      rounded-sm
      font-semibold
      "
    >
      <h1>{label}</h1>
    </a>
  );
};

export default Button;
