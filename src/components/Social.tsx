import Link from "next/link"
import path from "path"

import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedinIn />, path: "" },
    { icon: <FaWhatsapp />, path: "" },
    { icon: <FaWhatsapp />, path: "" },
]

// @ts-ignore
const Social = ({ containerStyle, IconStyles }) => {
    return (
        <div className={containerStyle}>
            {socials.map((item, index) => {
                return (
                    <Link 
                    href={item.path}
                    key={index}
                    className={IconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social