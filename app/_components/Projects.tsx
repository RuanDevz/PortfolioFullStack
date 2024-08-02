import EcoMarket from "../../assets/EcoMarket.png";
import ClubClothing from "../../assets/Club Clothing.png";
import TypeWeather from "../../assets/TypeWeather.png";
import RentCars from "../../assets/RentCars.png";
import FindAAfriend from "../../assets/FindAFriend.png";
import MercadoLivre from "../../assets/MercadoLivre.png";
import ProjectItem from "./ProjectItem";
import NextJs from "../../public/nextjs.svg";
import React from "../../public/react.svg";
import TailwindCSS from "../../public/tailwindcss-icon.svg";
import Javascript from "../../public/JavaScript.png";
import Typescript from "../../public/file-type-typescript.svg";
import NodeJs from "../../public/node-js.svg";
import { StaticImageData } from "next/image";

type Technology = {
  src: StaticImageData | string;
  name: string;
  alt: string;
};

const TechnologyList: Technology[] = [
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

const getTechnologies = (names: string[]): Technology[] =>
  names
    .map(name => TechnologyList.find(tech => tech.name === name))
    .filter((tech): tech is Technology => tech !== undefined);

const ProjectItems = [
  {
    name: "EcoMarket",
    src: EcoMarket,
    tech: getTechnologies(["NextJs", "Typescript", "TailwindCSS"]),
  },
  {
    name: "Club Clothing",
    src: ClubClothing,
    tech: getTechnologies(["ReactJs", "TailwindCSS"]),
  },
  {
    name: "TypeWeather",
    src: TypeWeather,
    tech: getTechnologies(["Javascript", "Typescript"]),
  },
  {
    name: "RentCars",
    src: RentCars,
    tech: getTechnologies(["NodeJs", "ReactJs"]),
  },
  {
    name: "Find A Friend",
    src: FindAAfriend,
    tech: getTechnologies(["ReactJs", "TailwindCSS"]),
  },
  {
    name: "Mercado Livre",
    src: MercadoLivre,
    tech: getTechnologies(["NextJs", "NodeJs", "Typescript"]),
  },
];

export default function Projects() {
  return (
    <main className="">
      <div className="bg-bgpage flex justify-center items-center flex-col gap-5">
        <p className="text-primary text-xl">Meu trabalho</p>
        <h2 className="text-white font-medium text-2xl">
          Veja os projetos em destaque
        </h2>
      </div>
      <div className="flex flex-wrap justify-around items-center gap-10 max-w-full mx-auto mt-10 pb-40 hover:cursor-pointer">
        {ProjectItems.map((item, index) => (
          <div key={index} className="m-4">
            <ProjectItem 
              classname="hover:cursor-pointer" 
              src={item.src} 
              name={item.name} 
              technologies={item.tech}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
