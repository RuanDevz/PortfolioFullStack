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
import Stripe from "../../public/stripe.svg";
import Sanity from "../../public/sanity.svg"
import HTML from '../../public/file-type-html.svg'
import CSS from '../../public/file-type-css.svg'
import BuenoBeauty from '../../assets/BuenoBeauty.png'
import BarbeariaItalo from '../../assets/BarbeariaItalo.png'
import SaoJoao2023 from '../../assets/SaoJoao2023.png'
import { StaticImageData } from "next/image";

type Technology = {
  src: StaticImageData | string;
  name: string;
  alt: string;
};

const TechnologyList: Technology[] = [
  {
    src: HTML,
    name: "HTML",
    alt: "HTML",
  },
  {
    src: CSS,
    name: "CSS",
    alt: "CSS",
  },
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
  {
    src: Sanity,
    name: "Sanity",
    alt: "Sanity",
  },
  {
    src: Stripe,
    name: "Stripe",
    alt: "Stripe",
  },
];

const getTechnologies = (names: string[]): Technology[] =>
  names
    .map((name) => TechnologyList.find((tech) => tech.name === name))
    .filter((tech): tech is Technology => tech !== undefined);

const ProjectItems = [

  // DESTAQUES //
  {
    name: "EcoMarket",
    src: EcoMarket,
    tech: getTechnologies(["NextJs", "Typescript","NodeJs", "TailwindCSS"]),
  },
  {
    name: "Club Clothing",
    src: ClubClothing,
    tech: getTechnologies(["NextJs", "Typescript","NodeJs", "TailwindCSS"]),
  },
  {
    name: "TypeWeather",
    src: TypeWeather,
    tech: getTechnologies(["ReactJs", "Typescript", "TailwindCSS"]),
  },

  // Mais Projetos
  {
    name: "BuenoBeauty",
    src: BuenoBeauty,
    tech: getTechnologies(["ReactJs", "Javascript", "TailwindCSS"]),
  },
  {
    name: "RentCars",
    src: RentCars,
    tech: getTechnologies(["ReactJs", "Javascript", "NodeJs", "TailwindCSS"]),
  },
  {
    name: "Find A Friend",
    src: FindAAfriend,
    tech: getTechnologies(["HTML", "CSS", "Javascript"]),
  },
  {
    name: "Mercado Livre",
    src: MercadoLivre,
    tech: getTechnologies(["ReactJs", "Javascript", "CSS"]),
  },
  {
    name: "Barbearia Italo",
    src: BarbeariaItalo,
    tech: getTechnologies(["HTML", "CSS", "Javascript"]),
  },
  {
    name: "São João 2023",
    src: SaoJoao2023,
    tech: getTechnologies(["ReactJs", "Javascript", "CSS"]),
  },
  
];

export default function Projects() {
  const featuredProjects = ProjectItems.slice(0, 3);
  const moreProjects = ProjectItems.slice(3);

  return (
    <main className="">
      <div className="bg-bgpage flex justify-start items-start ml-10 flex-col gap-5">
        <h2 className="text-white font-medium text-3xl text-left border-b-4 border-primary">
          Destaque
        </h2>
      </div>
      <div className="flex flex-wrap justify-around items-center gap-10 max-w-full mx-auto mt-10 pb-40 cursor-pointer">
        {featuredProjects.map((item, index) => (
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
      <div className="bg-bgpage flex justify-start items-start ml-10 flex-col gap-5">
        <h2 className="text-white font-medium text-3xl text-left border-b-4 border-primary">
          Mais Projetos
        </h2>
      </div>
      <div className="flex flex-wrap justify-around items-center gap-10 max-w-full mx-auto mt-10 pb-40 cursor-pointer">
        {moreProjects.map((item, index) => (
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
