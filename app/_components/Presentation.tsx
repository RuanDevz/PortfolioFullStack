import Image from "next/image";
import BackgroundIntro from "../../public/Background_Intro.png";
import { AvatarImage } from "@/components/ui/avatar";
import Photo from "../../public/Photo.jpg";
import Dev from "../../public/Tag.png";
import Tecnologies from "./Tecnologies";
import NextJs from "../../public/nextjs.svg";
import React from "../../public/react.svg";
import TailwindCSS from "../../public/tailwindcss-icon.svg";
import Javascript from "../../public/JavaScript.png";
import Typescript from "../../public/file-type-typescript.svg";
import NodeJs from "../../public/node-js.svg";

export default function Presentation() {
  const Tecnology = [
    {
      src: NextJs,
      name: "NextJs",
      alt: "NextJs",
    },
    {
      src: React,
      name: "ReactJs",
      alt: "React",
    },
    {
      src: NodeJs,
      name: "NodeJs",
      alt: "NodeJs",
    },
    {
      src: Javascript,
      name: "Javascript",
      alt: "Javascript",
    },
    {
      src: Typescript,
      name: "Typescript",
      alt: "Typescript",
    },
    {
      src: TailwindCSS,
      name: "TailwindCSS",
      alt: "TailwindCSS",
    },
  ];

  return (
    <div
      className="bg-cover bg-center h-screen w-full"
      style={{ backgroundImage: `url(${BackgroundIntro.src})` }}
    >
      <div className="flex justify-center flex-col items-center pt-32">
        <div className="relative">
          <Image
            className="rounded-full border-4 border-primary"
            width={96}
            height={96}
            src={Photo}
            alt="Avatar"
          />
          <Image
            className="absolute bottom-0 right-0"
            src={Dev}
            alt="DevSimbol"
          />
        </div>
        <div className="flex flex-col justify-center items-center max-w-5xl">
          <p className="text-base text-gray-500 lg:text-gray-500 lg:text-2xl font-medium mt-14 text-center">
            Hello World! Meu nome é
            <span className="text-primary"> Ruan Batista</span> e sou
          </p>
          <h1 className="text-3xl text-white lg:text-6xl whitespace-nowrap font-semibold mt-2">
            Desenvolvedor Fullstack
          </h1>
          <p className="text-gray-500 mt-5 text-center">
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e
            possuo experiência como freelancer na área. Estou em busca de novas
            oportunidades no setor de desenvolvimento para expandir meus
            conhecimentos e aplicar minhas habilidades em projetos.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-14 gap-8 flex-wrap">
        {Tecnology.map((tec, idx) => (
          <div key={idx}>
            <Tecnologies src={tec.src} name={tec.name} alt={tec.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
