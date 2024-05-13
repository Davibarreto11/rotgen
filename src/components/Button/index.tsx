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
      text-base
      py-4
      px-10
      md:text-base
      md:py-3
      md:px-4
      md:mt-3
      lg:text-base
      lg:py-3
      lg:px-4
      xl:text-lg
      xl:py-3
      xl:px-4
      2xl:py-4
      2xl:px-6
      2xl:text-xl
      3xl:py-4
      3xl:px-8
      3xl:text-2xl
      text-white
      rounded-sm
      font-semibold
      "
    >
      <span>{label}</span>
    </a>
  );
};

export default Button;
