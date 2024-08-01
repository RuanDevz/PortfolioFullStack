import Image from "next/image";

type TecnologieProps = {
  src: string;
  name: string;
  alt?: string;
};

export default function Tecnologies({ src, name }: TecnologieProps) {
  return (
    <div className="flex items-center rounded-xl bg-[#292c34] text-white px-4 py-2 hover:-translate-y-1 transition-all ease-in cursor-pointer">
      <Image width={30} height={30} src={src} alt={name} />
      <p className="ml-2">{name}</p>
    </div>
  );
}
