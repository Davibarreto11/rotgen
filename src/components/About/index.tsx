import Image from "next/image";
import ImageAbout from "../../assets/ImageAbout.svg";

import Button from "../Button";

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-evenly items-center md:justify-between md:flex-row">
      <div className="md:order-last ml-2 w-full sm:w-1/2 lg:w-1/3 lg:ml-0">
        <Image
          className="object-center w-full"
          src={ImageAbout}
          alt="Exams Image"
        />
      </div>

      <div className="sm:w-1/2 flex flex-col space-y-6 sm:space-y-1 xl:space-y-2 3xl:space-y-3 4xl:space-y-5 5xl:space-y-8">
        <h1
          className="
            text-4xl
            md:text-3xl
            mb-2
            font-semibold
            lg:text-4xl
            xl:text-6xl
            2xl:text-7xl
            3xl:text-7xl
            4xl:text-8xl
            5xl:text-9xl"
        >
          Gerencie, Armazene & compartilhe laudos
        </h1>
        <div className="sticky before:content-[''] before:absolute before:h-full before:w-1 5xl:before:w-2 before:bg-red-500 before:left-1">
          <p className="font-light mx-6 mb-1 text-lg md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
            <strong className="font-light">
              Perfeito para pequenos consultorios e completo para grandes
              hospitais
            </strong>
          </p>
        </div>
        <div className="flex w-auto">
          <Button label="Conheça-nos" />
        </div>
      </div>
    </div>
  );
};

export default About;
