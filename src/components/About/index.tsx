import Image from "next/image";
import ImageAbout from "../../assets/ImageAbout.svg";

import Button from "../Button";

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-evenly items-center md:justify-around lg:flex-row">
      <div className="lg:order-last w-full sm:w-[70%] lg:w-[33.3%]">
        <Image
          className="object-center w-full"
          src={ImageAbout}
          alt="Exams Image"
        />
      </div>

      <div className="sm:w-5/6 lg:w-1/2 flex flex-col space-y-4 sm:space-y-3 lg:space-y-4 xl:space-y-3">
        <h1
          className="
            text-2xl
            sm:text-4xl
            md:text-4xl
            font-semibold
            lg:text-4xl
            xl:text-5xl
            2xl:text-6xl
            3xl:text-[70px]
            lg:mb-4"
        >
          Gerencie, Armazene & compartilhe laudos.
        </h1>
        <div className="sticky before:content-[''] before:absolute before:h-full before:w-1 before:bg-red-500 before:left-1">
          <p className="font-light mx-3 xl:mx-4 text-base sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
            <strong className="font-light">
              Perfeito para pequenos consultorios e completo para grandes
              hospitais.
            </strong>
          </p>
        </div>
        <div className="flex ">
          <Button label="Conheça-nos" />
        </div>
      </div>
    </div>
  );
};

export default About;
