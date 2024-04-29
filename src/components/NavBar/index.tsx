import { useState } from "react";
const NavBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const buttonClasses = isVisible
    ? "hidden w-full md:flex md:items-center md:w-auto bg-white"
    : "w-full md:flex md:items-center md:w-auto";

  return (
    <header>
      <nav
        className="
        flex
        w-full
        flex-wrap
        items-center
        p-4   
        justify-between
        md:justify-around
        md:p-0
        bg-white
        text-lg
        text-gray-700
        md:py-0
        xl:py-6
        "
      >
        <a className="w-24 md:w-32 lg:w-40 2xl:w-48 3xl:w-56" href="/">
          <img
            className="object-center"
            src="https://www.rotgen.com/static/media/logo.10756eca02640ea0754e.png"
            alt="Rotgen - Gerencie, Armazene e compartilhe laudos"
          />
        </a>

        <svg
          xmlns="https://www.w3.org/2000/svg"
          className="
          block
          h-6
          w-6
          cursor-pointer
          md:hidden"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>

        <button className={buttonClasses}>
          <ul
            id="menu"
            className="
              pt-4
              text-base
              text-gray-700
              md:flex
              md:justify-between
              md:pt-0"
          >
            <li>
              <a
                className="block py-2 hover:text-red-400 md:p-4 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
                href="#about"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="block py-2 hover:text-red-400 md:p-4 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
                href="#responsabilities"
              >
                O que fazemos
              </a>
            </li>
            <li>
              <a
                className="block py-2 hover:text-red-400 md:p-4 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
                href="#contacts"
              >
                Contatos
              </a>
            </li>
            <li>
              <a
                className="block py-2 text-red-500 md:p-4 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
                href="mailto:gabrielferreira019@gmail.com"
              >
                Peça um orçamento
              </a>
            </li>
          </ul>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
