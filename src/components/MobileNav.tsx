import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileNav = () => {
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
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-32 text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              {"<JL/>"}
              <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto flex justify-center pb-8">
          <LanguageSwitcher />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
