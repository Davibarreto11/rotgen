import Carousel from "../Carousel";

const Features: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-evenly items-center">
      <div className="flex flex-col justify-center items-center sm:w-[83.4%] md:w-full">
        <span
          className="
          font-bold
          text-xl
          sm:text-xl
          md:text-3xl
          lg:text-3xl
          xl:text-4xl
          2xl:text-5xl
          3xl:text-6xl"
        >
          O que podemos fazer por você?
        </span>
      </div>
      <div className="flex flex-col items-center justify-evenly md:justify-around md:flex-row md:items-start font-light sm:w-[83.4%] space-y-4 md:space-y-0">
        <div className="sticky before:content-[''] before:absolute before:h-full before:w-1 before:bg-red-500 before:left-1">
          <p className="font-light mx-3 xl:mx-4 mb-1 text-base sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl">
            Ideal para pacientes, médicos radiologistas, clínicas, hospitais e
            centrais de diagnósticos por imagem.
          </p>
        </div>
        <div className="sticky before:content-[''] before:absolute before:h-full before:w-1 5xl:before:w-2 before:bg-red-500 before:left-1">
          <p className="font-light mx-3 xl:mx-4 mb-1 text-base sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl">
            As nossas ofertas abrangem uma ampla gama de modalidades
            radiológicas para atender todas as necessidades.
          </p>
        </div>
      </div>

      <div className="w-full sm:w-[83.4%] md:w-full carousel carousel-center lg:max-w-full max-w-md rounded-box flex lg:justify-around items-start">
        <Carousel />
      </div>
    </div>
  );
};

export default Features;
