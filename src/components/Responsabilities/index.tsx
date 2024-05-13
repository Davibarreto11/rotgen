import Image from "next/image";
import ImageUpdate from "../../assets/ImageUpdate.svg";

const Responsabilities: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-evenly lg:justify-around lg:flex-row items-center">
      <div className="sm:w-[83.4%] lg:w-[60%] space-x-3">
        <div
          className="
              ml-3
              mb-2
              md:mb-5
              sm:pt-6
              text-2xl
              sm:text-3xl
              md:text-2xl
              font-semibold
              lg:text-2xl
              xl:text-[33px]
              xl:leading-10
              2xl:text-[38px]
              2xl:leading-10
              3xl:text-[48px]
              3xl:leading-none
              4xl:leading-normal"
        >
          <strong className="">
            Nós te ajudamos a organizar seus exames online.
          </strong>
          <p className="text-white font-bold">
            Interação é nosso nome do meio.
          </p>
        </div>
        <div
          className="
              text-white
              text-base
              sm:text-lg
              md:text-lg
              lg:text-base
              xl:text-lg
              2xl:text-xl
              3xl:text-2xl
              4xl:text-3xl
              "
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
      <div className="lg:order-first sm:w-[70%] lg:w-[35%] 4xl:w-[30%]">
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
