'use client'

import { useState } from 'react';
import EcoMarket from "../../assets/EcoMarket.png";
import ClubClothing from "../../assets/Club Clothing.png";
import TypeWeather from "../../assets/TypeWeather.png";
import RentCars from "../../assets/RentCars.png";
import FindAAfriend from "../../assets/FindAFriend.png";
import MercadoLivre from "../../assets/MercadoLivre.png";
import BuenoBeauty from '../../assets/BuenoBeauty.png';
import BarbeariaItalo from '../../assets/BarbeariaItalo.png';
import SaoJoao2023 from '../../assets/SaoJoao2023.png';
import ProjectItem from "./ProjectItem";
import NextJs from "../../public/nextjs.svg";
import React from "../../public/react.svg";
import TailwindCSS from "../../public/tailwindcss-icon.svg";
import Javascript from "../../public/JavaScript.png";
import Typescript from "../../public/file-type-typescript.svg";
import NodeJs from "../../public/node-js.svg";
import Stripe from "../../public/stripe.svg";
import Sanity from "../../public/sanity.svg";
import HTML from '../../public/file-type-html.svg';
import CSS from '../../public/file-type-css.svg';
import { StaticImageData } from "next/image";
import Image from 'next/image';
import { Project, Technology } from '@/types/ContactItem';
import { Button } from '@/components/ui/button';




const TechnologyList: Technology[] = [
  { src: HTML, name: "HTML", alt: "HTML" },
  { src: CSS, name: "CSS", alt: "CSS" },
  { src: NextJs, name: "NextJs", alt: "NextJs" },
  { src: React, name: "ReactJs", alt: "React" },
  { src: NodeJs, name: "NodeJs", alt: "NodeJs" },
  { src: Javascript, name: "Javascript", alt: "Javascript" },
  { src: Typescript, name: "Typescript", alt: "Typescript" },
  { src: TailwindCSS, name: "TailwindCSS", alt: "TailwindCSS" },
  { src: Sanity, name: "Sanity", alt: "Sanity" },
  { src: Stripe, name: "Stripe", alt: "Stripe" },
];

const getTechnologies = (names: string[]): Technology[] =>
  names
    .map((name) => TechnologyList.find((tech) => tech.name === name))
    .filter((tech): tech is Technology => tech !== undefined);

const ProjectItems: Project[] = [
  {
    name: "EcoMarket",
    src: EcoMarket,
    tech: getTechnologies(["NextJs", "Typescript", "NodeJs", "TailwindCSS"]),

    description: "EcoMarket é uma plataforma de e-commerce intuitiva e moderna, projetada para oferecer uma experiência de compra fluida para os usuários. Com uma interface limpa e responsiva, os usuários podem navegar, selecionar produtos, adicionar ao carrinho e finalizar suas compras com facilidade. ",
    repository: "https://github.com/RuanDevz/EcoMarket",
    deploy: "#",
    linkedin: "#",
  },
  {
    name: "Club Clothing",
    src: ClubClothing,
    tech: getTechnologies(["NextJs", "Typescript", "NodeJs", "TailwindCSS"]),
    description: "O projeto CLUB CLOTHING é um e-commerce desenvolvido com React, TypeScript, TailwindCSS e NextUI, focado em oferecer uma experiência de compra online intuitiva e responsiva. Este repositório contém o código fonte do front-end do projeto, destacando a integração de funcionalidades como login com Google, consumo de APIs e otimização de layout para diferentes dispositivos.",
    repository: "https://github.com/RuanDevz/CLUB-ECOMERCE",
    deploy: "#",
    linkedin: "#",
  },
  {
    name: "TypeWeather",
    src: TypeWeather,
    tech: getTechnologies(["ReactJs", "Typescript", "TailwindCSS"]),
    description: "TypeWeather é um site que oferece previsões do tempo para todas as cidades do mundo. Ele fornece detalhes climáticos do dia atual e previsões para os próximos 5 dias, com uma interface intuitiva e animada.",
    repository: "https://github.com/RuanDevz/TypeWeather",
    deploy: "#",
    linkedin: "#",
  },
  {
    name: "BuenoBeauty",
    src: BuenoBeauty,
    tech: getTechnologies(["ReactJs", "Javascript", "TailwindCSS"]),
    description: "A landing page BuenoBeauty é um projeto desenvolvido para promover os serviços e produtos oferecidos pelo salão de beleza. Esta página foi construída utilizando tecnologias modernas como React para a estruturação do aplicativo, TailwindCSS para estilização e responsividade do site, React Swiper para a criação de um carrossel de imagens dinâmico e AOS para adicionar efeitos de animação ao rolar da página.",
    repository: "https://github.com/RuanDevz/BuenoBeauty",
    deploy: "#",
    linkedin: "#",
  },
  {
    name: "RentCars",
    src: RentCars,
    tech: getTechnologies(["ReactJs", "Javascript", "NodeJs", "TailwindCSS"]),
    description: "RentCars é uma plataforma onde os usuários podem alugar carros e listar seus próprios veículos para que outras pessoas possam alugá-los. O projeto é totalmente responsivo e conta com um sistema completo de CRUD",
    repository: "https://github.com/RuanDevz/RentCars",
    deploy: "#",
    linkedin: "#",
  },
  {
    name: "Find A Friend",
    src: FindAAfriend,
    tech: getTechnologies(["HTML", "CSS", "Javascript"]),
    description: "Esse projeto tem como objetivo ajudar instituições de caridade a encontrar lares amorosos para seus animais de estimação. Por meio da plataforma FindAFriend, as instituições podem listar animais disponíveis para adoção, e pessoas interessadas em adotar podem visualizar detalhes sobre cada animal e se candidatar para adoção",
    repository: "https://github.com/RuanDevz/FindAFriend",
    deploy: "#",
    linkedin: "#",
  },
  {
    name: "Mercado Livre",
    src: MercadoLivre,
    tech: getTechnologies(["ReactJs", "Javascript", "CSS"]),
    description: "Mercado Livre, feito com foco na implementação e funcionamento do carrinho de um ecommerce e também consumindo API do mercado livre.",
    repository: "https://github.com/RuanDevz/MercadoLivre",
    deploy: "#",
    linkedin: "#",
  },
  {
    name: "Barbearia Italo",
    src: BarbeariaItalo,
    tech: getTechnologies(["HTML", "CSS", "Javascript"]),
    description: "Description for Barbearia Italo",
    repository: "Criei uma landing page para uma barbearia próxima ao meu bairro com o intuito de divulgação e marketing. A página foi desenvolvida utilizando HTML, SASS e JavaScript, proporcionando uma experiência moderna e interativa para os visitantes",
    deploy: "#",
    linkedin: "#",
  },
  {
    name: "São João 2023",
    src: SaoJoao2023,
    tech: getTechnologies(["ReactJs", "Javascript", "CSS"]),
    description: "Este projeto FREELANCER foi realizado para a Prefeitura da cidade de Patos, com o objetivo de reunir votos de mais de 5 mil pessoas para avaliar a experiência do São João de 2023. O objetivo era entender as preferências e expectativas do público para o São João de 2024, incluindo as atrações desejadas para o evento.",
    repository: "#",
    deploy: "#",
    linkedin: "#",
  },
];

const Modal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#181820] p-5 rounded-lg max-w-4xl">
        <button className="absolute top-2 right-2 text-2xl" onClick={onClose}>×</button>
        <Image src={project.src} alt={project.name} className="w-full h-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-white">{project.name}</h2>
        <p className="mb-4 text-gray-500">{project.description}</p>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-white">Tecnologias usadas</h3>
          <div className="flex flex-wrap">
            {project.tech.map((tech, index) => (
              <div key={index}>
                <Image  src={tech.src} alt={tech.alt} className="w-10 h-10 mr-2 mb-2" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <Button href={project.repository} target="_blank" className="text-white">Repositório</Button>
          <Button href={project.deploy} target="_blank" className="text-white">Deploy</Button>
          <Button href={project.linkedin} target="_blank" className="text-white">Post no LinkedIn</Button>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          <div key={index} className="m-4" onClick={() => setSelectedProject(item)}>
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
          <div key={index} className="m-4" onClick={() => setSelectedProject(item)}>
            <ProjectItem
              classname="hover:cursor-pointer"
              src={item.src}
              name={item.name}
              technologies={item.tech}
            />
          </div>
        ))}
      </div>
      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
