import { StaticImageData } from "next/image"

export type ContactProps = {
    src: StaticImageData,
    name: string
    link: string
}

export type Technology = {
    src: StaticImageData | string;
    name: string;
    alt: string;
  };

export type Project = {
    name: string;
    src: StaticImageData | string;
    tech: Technology[];
    description: string;
    repository: string;
    deploy: string;
    linkedin: string;
  };