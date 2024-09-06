import BackgroundContact from "../../public/Background_Intro.png";
import Linkedin from "../../public/LinkedinLogo.png";
import Instagram from "../../public/InstagramLogo.png";
import Github from "../../public/GithubLogo.png";
import Email from "../../public/EnvelopeSimple.png";
import { ContactProps } from "@/types/ContactItem";
import ContactItem from "./ContactItem";

export default function Contact() {
  const Contactlist: ContactProps[] = [
    {
      src: Linkedin,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/ruan-batista-26790b1b8/",
    },
    {
      src: Instagram,
      name: "Instagram",
      link: "https://www.instagram.com/yruansz/",
    },
    {
      src: Github,
      name: "Github",
      link: "https://github.com/RuanDevz",
    },
    {
      src: Email,
      name: "E-mail",
      link: "mailto:Ruanbatista1509@outlook.com",
    },
  ];

  return (
    <footer
      style={{
        backgroundImage: `url(${BackgroundContact.src})`,
        backgroundSize: "cover",
      }}
      className="relative"
    >
      <div className="flex justify-center items-center flex-col gap-3 mt-32 relative z-10">
        <p className="text-primary">Contato</p>
        <h2 className="text-white font-medium text-2xl">
          Gostou do meu trabalho?
        </h2>
        <p className="text-gray-400 font-semibold pb-10 text-sm text-center">
          Entre em contato ou acompanhe as minhas redes sociais!
        </p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="flex justify-center items-center flex-col gap-4 mt-4 last:mb-64"
      >
        {Contactlist.map((list, index) => (
          <ContactItem
            key={index}
            src={list.src}
            name={list.name}
            link={list.link}
          />
        ))}
      </div>
    </footer>
  );
}
