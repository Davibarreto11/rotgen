import ingration from "../../assets/integration.svg";
import reports from "../../assets/reports.svg";
import reportOnline from "../../assets/online_reports.svg";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-evenly items-center">
      <div className="flex flex-col justify-center">
        <span
          className="
          text-4xl
          mb-2
          font-semibold
          md:text-3xl
          lg:text-4xl
          xl:text-5xl
          2xl:text-6xl
          3xl:text-6xl
          4xl:text-7xl
          5xl:text-9xl"
        >
          O que podemos fazer por você?
        </span>
      </div>
      <div className="flex flex-col items-center justify-evenly md:flex-row font-light">
        <div className="sticky before:content-[''] before:absolute before:h-full before:w-1 5xl:before:w-2 before:bg-red-500 before:left-1">
          <p className="font-light mx-6 mb-1 text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl 3xl:text-4xl 4xl:text-5xl 5xl:text-7xl">
            Ideal para pacientes, médicos radiologistas, clínicas, hospitais e
            centrais de diagnósticos por imagem.
          </p>
        </div>
        <div className="sticky before:content-[''] before:absolute before:h-full before:w-1 5xl:before:w-2 before:bg-red-500 before:left-1">
          <p className="font-light mx-6 mb-1 text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl 3xl:text-4xl 4xl:text-5xl 5xl:text-7xl">
            As nossas ofertas abrangem uma ampla gama de modalidades
            radiológicas para atender todas as necessidades.
          </p>
        </div>
      </div>

      <div className="w-full mx-auto px-4 sm:py-12 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="group text-center flex flex-col items-center justify-center w-48 md:w-64 xl:w-72 2xl:w-96 3xl:w-1/4">
          <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-8 md:w-32 xl:w-44 2xl:w-64 3xl:w-1/2 5xl:w-4/5">
            <Image
              src={ingration}
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-4xl 3xl:text-4xl 5xl:text-7xl font-medium text-gray-700">
            <strong>Laudos Online</strong>
          </h3>
          <p className="mt-2 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-4xl 3xl:text-3xl 5xl:text-6xl font-light text-gray-900">
            Acesse seus laudos em qualquer lugar e a qualquer momento com toda a
            segurança e desempenho da nossa nuvem.
          </p>
        </div>

        <div className="group text-center flex flex-col items-center justify-center w-48 md:w-64 xl:w-72 2xl:w-96 3xl:w-1/4">
          <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-8 md:w-32 xl:w-44 2xl:w-64 3xl:w-1/2 5xl:w-4/5">
            <Image
              src={reportOnline}
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-4xl 5xl:text-7xl font-medium text-gray-700">
            <strong>Totalmente Integrado</strong>
          </h3>
          <p className="mt-2 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-4xl 3xl:text-3xl 5xl:text-6xl font-light text-gray-900">
            Portal do paciente, portal do médico solicitante, centrais de
            laudos, Osirix, Horos e RadiAnt tudo integrado em um único sistema.
          </p>
        </div>

        <div className="group text-center flex flex-col items-center justify-center w-48 md:w-64 xl:w-72 2xl:w-96 3xl:w-1/4">
          <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-8 md:w-32 xl:w-44 2xl:w-64 3xl:w-1/2 5xl:w-4/5">
            <Image
              src={reports}
              alt="Person using a pen to cross a task off a productivity paper card."
              className="w-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-4xl 5xl:text-7xl font-medium text-gray-700">
            <strong>Totalmente Integrado</strong>
          </h3>
          <p className="mt-2 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-4xl 3xl:text-3xl 5xl:text-6xl font-light text-gray-900">
            Relatórios que facilitam o gerenciamento dos seus exames e da sua
            equipe de radiologistas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
