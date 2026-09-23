import type { IconType } from "react-icons";
import {
    FaGithub,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export type SocialItem = {
    id: string;
    icon: IconType;
    href: string;
    label: string;
};

export const SOCIAL_ITEMS: SocialItem[] = [
    {
        id: "email",
        icon: IoMdMail,
        href: "mailto:jhonatan.lima105@gmail.com",
        label: "Enviar e-mail",
    },
    {
        id: "github",
        icon: FaGithub,
        href: "https://github.com/gitjhonatan",
        label: "GitHub",
    },
    {
        id: "linkedin",
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/dev-jhone",
        label: "LinkedIn",
    },
    {
        id: "whatsapp",
        icon: FaWhatsapp,
        href: "https://wa.me/5511984786817",
        label: "WhatsApp",
    },
];