import { StaticImageData } from "next/image"

export type ContactProps = {
    src: StaticImageData,
    name: string
    link: string
}