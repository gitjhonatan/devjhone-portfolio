"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  const links = [
    {
      name: t("home"),
      path: "/",
    },
    {
      name: t("services"),
      path: "/services",
    },
    {
      name: t("resume"),
      path: "/resume",
    },
    {
      name: t("contact"),
      path: "/contact",
    },
  ];
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                        capitalize font-medium hover:text-accent transition-all
                        `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
