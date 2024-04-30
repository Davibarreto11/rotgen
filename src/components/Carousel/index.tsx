import ingration from "../../assets/integration.svg";
import reports from "../../assets/reports.svg";
import reportOnline from "../../assets/online_reports.svg";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <div className="w-full lg:w-[32%] 2xl:w-[28%] carousel-item flex flex-col items-center">
        <Image
          src={ingration}
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="w-64 h-64 md:w-48 md:h-48 lg:w-54 lg:h-54 xl:w-56 xl:h-56 object-center object-cover"
        />
        <h3 className="mt-4 text-xl sm:text-lg md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl font-bold text-gray-900">
          <strong>Laudos Online</strong>
        </h3>
        <p className="text-center mt-2 text-base sm:text-xl lg:text-xl xl:text-lg 2xl:text-xl 3xl:text-2xl font-light text-gray-900">
          Acesse seus laudos em qualquer lugar e a qualquer momento com toda a
          segurança e desempenho da nossa nuvem.
        </p>
      </div>

      <div className="w-full lg:w-[32%] 2xl:w-[28%] carousel-item flex flex-col items-center justify-center">
        <Image
          src={reportOnline}
          alt="Olive drab green insulated bottle with flared screw lid and flat top."
          className="w-64 h-64 md:w-48 md:h-48 lg:w-54 lg:h-54 xl:w-56 xl:h-56 object-center object-cover"
        />
        <h3 className="mt-4 text-xl sm:text-lg md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl font-bold">
          <strong>Totalmente Integrado</strong>
        </h3>
        <p className="text-center mt-2 text-base sm:text-xl lg:text-xl xl:text-lg 2xl:text-xl 3xl:text-2xl font-light text-gray-900">
          Portal do paciente, portal do médico solicitante, centrais de laudos,
          Osirix, Horos e RadiAnt tudo integrado em um único sistema.
        </p>
      </div>

      <div className="w-full lg:w-[32%] 2xl:w-[28%] carousel-item flex flex-col items-center justify-center">
        <Image
          src={reports}
          alt="Person using a pen to cross a task off a productivity paper card."
          className="w-64 h-64 md:w-48 md:h-48 lg:w-54 lg:h-54 xl:w-56 xl:h-56 object-center object-cover"
        />
        <h3 className="mt-4 text-xl sm:text-lg md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl font-bold">
          <strong>Totalmente Integrado</strong>
        </h3>
        <p className="text-center mt-2 text-base sm:text-xl lg:text-xl xl:text-lg 2xl:text-xl 3xl:text-2xl font-light text-gray-900">
          Relatórios que facilitam o gerenciamento dos seus exames e da sua
          equipe de radiologistas.
        </p>
      </div>
    </>
  );
}
