import Image, { StaticImageData } from "next/image";

type Technology = {
  src: StaticImageData | string;
  name: string;
  alt: string;
};

type ProjectItemProps = {
  name: string;
  src: StaticImageData | string;
  classname?: string;
  technologies?: Technology[];
};

export default function ProjectItem({
  src,
  name,
  classname,
  technologies = [],
}: ProjectItemProps) {
  return (
    <div className="relative group overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

      <Image
        className={`transition-transform duration-300 ease-in-out group-hover:scale-110 ${classname}`}
        src={src}
        width={550}
        height={550}
        alt={name}
      />

      <h1 className="absolute inset-0 flex justify-center items-center text-white text-xl font-semibold opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
        {name}
      </h1>

      {/* Lista de tecnologias */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-2 justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center">
            <Image
              src={tech.src}
              alt={tech.alt}
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="text-white text-xs">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
