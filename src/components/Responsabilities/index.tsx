import Image from "next/image";
import ImageUpdate from "../../assets/ImageUpdate.svg";

const Responsabilities: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-evenly md:flex-row items-center">
      <div className="sm:w-1/2">
        <div
          className="
              mb-2
              text-xl
              sm:text-2xl
              font-semibold
              sm:pt-6
              md:text-xl
              lg:text-3xl
              xl:text-4xl
              2xl:text-6xl
              3xl:text-6xl
              4xl:text-7xl
              5xl:text-8xl"
        >
          <strong className="leading-tight font-bold">
            Nós te ajudamos a organizar seus exames online.
          </strong>
          <p className="leading-tight text-white">
            Interação é nosso nome do meio.
          </p>
        </div>
        <div
          className="
              text-white
              text-sm
              sm:text-base
              md:text-xs
              lg:text-base
              xl:text-xl
              2xl:text-3xl
              3xl:text-3xl
              5xl:text-6xl
              pt-5"
        >
          <span>
            Apoiamos a <strong>presença online</strong> dos nossos clientes e
            implementamos habilmente estratégicas para lidar com isso. Somos a
            resposta tanto para as necessidades individuais médicas, quanto para
            estruturas completas. O WebPACS irá te ajudar a
            <strong>lidar com variadas demandas de exames</strong> e
            <strong>satisfazer o paciente com resultados onde desejar</strong>.
          </span>
        </div>
      </div>
      <div className="md:order-first sm:w-1/3">
        <Image
          className="object-center w-full"
          src={ImageUpdate}
          alt="Exams Image"
        />
      </div>
    </div>
  );
};

export default Responsabilities;
