import Image from "next/image";
import Devices from "../../public/Devices.png";
import APIeBancoDados from "../../public/HardDrives.png";
import DevOps from "../../public/Infinity.png";
export default function Helpyou() {
  const Skillshelpers = [
    {
      Title: "Websites e Aplicativos",
      Description: "Desenvolvimento de interfaces",
      img: Devices,
    },
    {
      Title: "API e banco de dados",
      Description: "Criação de serviços do sistema",
      img: APIeBancoDados,
    },
    {
      Title: "DevOps",
      Description: "Gestão e insfraestrutura da aplicação",
      img: DevOps,
    },
  ];

  return (
    <div className="bg-segundary">
      <div className="flex justify-center items-center flex-col gap-5">
        <p className="text-primary mt-40">Meus Serviços</p>
        <h2 className="text-white font-medium text-2xl mb-40">
          Como posso ajudar o seu negócio
        </h2>
      </div>
      <div className="flex justify-evenly items-start max-w-[1100px] mx-auto  pb-40">
        {Skillshelpers.map((skills, index) => (
          <div
            className="border-[#16181D] border-2 rounded-2xl px-10 py-5"
            key={index}
          >
            <Image className="mb-5 mr-10" src={skills.img} width={40} height={40} alt={skills.Title} />
            <h1 className="text-white text-base font-medium my-1 mr-10">
              {skills.Title}
            </h1>
            <p className="text-sm text-gray-500 mr-10  mt-2">{skills.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
