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
      md:text-sm
      md:py-2
      md:px-3
      md:mt-1
      lg:text-base
      lg:py-3
      lg:px-4
      lg:mt-3
      xl:text-lg
      xl:py-3
      xl:px-4
      xl:mt-4
      2xl:py-4
      2xl:px-6
      2xl:text-xl
      2xl:mt-5
      3xl:py-4
      3xl:px-8
      3xl:text-2xl
      3xl:mt-6
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
