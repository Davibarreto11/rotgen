import React from "react";

import LogoWhite from "../../assets/logoWhite.png";
import Image from "next/image";

import { Constants } from "../../config/constants";

const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-around bg-[#81b398] pt-10 pb-10 pl-1/2 md:flex-row">
      <div className="flex flex-col jusify-center ">
        <div className="">
          <a href="#menu">
            <Image
              className="object-center w-28 md:w-40 2xl:w-56"
              src={LogoWhite}
              alt="Doctors doing exam"
            />
          </a>
        </div>
        <div className="text-white pt-12 text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          Gabriel Ferreira
        </div>
        <div className="text-white text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          contato@gabrielferreira.dev
        </div>
      </div>
      <div className="pr-6 sm:pr-12">
        <p className="opacity-50 mb-6 text-sm 2xl:text-xl pt-5 md:pt-0">
          CONTINUE INFORMADO
        </p>
        <div className="pb-2 text-white font-bold text-xs sm:text-base md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          <a href={Constants.LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="pb-2 text-white font-bold text-xs sm:text-base md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          <a href={Constants.INSTAGRAM} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <div className="pb-2 text-white font-bold text-xs sm:text-base md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          <a
            href={`mailto:${Constants.EMAIL}`}
            target="_blank"
            rel="noreferrer"
          >
            Mail
          </a>
        </div>
      </div>
      <div className="pr-16 sm:pl-2 md:pl-0">
        <p className="opacity-50 mb-6 text-sm 2xl:text-xl">VEJA TAMBÉM</p>
        <div className="pb-2 text-white font-bold text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          <a href="#about">Sobre</a>
        </div>
        <div className="pb-2 text-white font-bold text-xs sm:text-base md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          <a href="#responsabilities">O que fazemos</a>
        </div>
        <div className="pb-2 text-white font-bold text-xs sm:text-base md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          <a href={`mailto:${Constants.EMAIL}`}>Peça um orçamento</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
