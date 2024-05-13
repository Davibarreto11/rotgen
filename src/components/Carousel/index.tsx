import ingration from "../../assets/integration.svg";
import reports from "../../assets/reports.svg";
import reportOnline from "../../assets/online_reports.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  return (
    <>
      <div
        id="image1"
        className="w-full lg:w-[32%] 2xl:w-[28%] carousel-item flex flex-col items-center transition-transform ease-out duration-500 relative"
      >
        <Image
          src={ingration}
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="w-44 h-44 md:w-56 md:h-56 lg:w-54 lg:h-54 xl:w-56 xl:h-56 object-center object-cover"
        />
        <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl font-bold text-gray-900">
          <strong>Laudos Online</strong>
        </h3>
        <p className="text-center mt-2 text-base sm:text-xl lg:text-xl xl:text-lg 2xl:text-xl 3xl:text-2xl font-light text-gray-900">
          Acesse seus laudos em qualquer lugar e a qualquer momento com toda a
          segurança e desempenho da nossa nuvem.
        </p>
        <div className="hidden lg:hidden absolute ms:flex justify-between transform left-0 right-0 top-1/2">
          <a
            href="#image3"
            className="bg-transparent hover:bg-gray-50 p-5 rounded-full text-xl"
          >
            ❮
          </a>
          <a
            href="#image2"
            className="bg-transparent hover:bg-gray-50 p-5 rounded-full text-xl"
          >
            ❯
          </a>
        </div>
      </div>

      <div
        id="image2"
        className="w-full lg:w-[32%] 2xl:w-[28%] carousel-item flex flex-col items-center justify-center relative"
      >
        <Image
          src={reportOnline}
          alt="Olive drab green insulated bottle with flared screw lid and flat top."
          className="w-44 h-44 md:w-56 md:h-56 lg:w-54 lg:h-54 xl:w-56 xl:h-56 object-center object-cover"
        />
        <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl font-bold">
          <strong>Totalmente Integrado</strong>
        </h3>
        <p className="text-center mt-2 text-base sm:text-xl lg:text-xl xl:text-lg 2xl:text-xl 3xl:text-2xl font-light text-gray-900">
          Portal do paciente, portal do médico solicitante, centrais de laudos,
          Osirix, Horos e RadiAnt tudo integrado em um único sistema.
        </p>
        <div className="hidden lg:hidden absolute ms:flex justify-between transform left-0 right-0 top-1/2">
          <a
            href="#image1"
            className="bg-transparent hover:bg-gray-50 p-5 rounded-full text-xl"
          >
            ❮
          </a>
          <a
            href="#image3"
            className="bg-transparent hover:bg-gray-50 p-5 rounded-full text-xl"
          >
            ❯
          </a>
        </div>
      </div>

      <div
        id="image3"
        className="w-full lg:w-[32%] 2xl:w-[28%] carousel-item flex flex-col items-center justify-center relative"
      >
        <Image
          src={reports}
          alt="Person using a pen to cross a task off a productivity paper card."
          className="w-44 h-44 md:w-56 md:h-56 lg:w-54 lg:h-54 xl:w-56 xl:h-56 object-center object-cover"
        />
        <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl font-bold">
          <strong>Relatórios Completos</strong>
        </h3>
        <p className="text-center mt-2 text-base sm:text-xl lg:text-xl xl:text-lg 2xl:text-xl 3xl:text-2xl font-light text-gray-900">
          Relatórios que facilitam o gerenciamento dos seus exames e da sua
          equipe de radiologistas.
        </p>
        <div className="hidden lg:hidden absolute ms:flex justify-between transform left-0 right-0 top-1/2">
          <a
            href="#image2"
            className="bg-transparent hover:bg-gray-50 p-5 rounded-full text-xl"
          >
            ❮
          </a>
          <a
            href="#image1"
            className="bg-transparent hover:bg-gray-50 p-5 rounded-full text-xl"
          >
            ❯
          </a>
        </div>
      </div>
    </>
  );
}
