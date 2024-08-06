import Image from "next/image";
import { ContactProps } from "@/types/ContactItem";
import Arrow from "../../public/ArrowUpRight.png";
import Link from "next/link";

export default function ContactItem({ src, name, link }: ContactProps) {
  return (
    <Link target="_blank" href={link}>
      <div
        className="flex items-center justify-between gap-2
    bg-[#292C34] p-5 my-1 w-[400px] rounded-sm hover:bg-[#3b3f4b] -translate-y-1 transition-all ease-in cursor-pointer "
      >
        <div className="flex items-center gap-3">
          <Image src={src} alt={name} />
          <p className="text-gray-400">{name}</p>
        </div>
        <div>
          <Image className="cursor-pointer" src={Arrow} alt="Arrow" />
        </div>
      </div>
    </Link>
  );
}
