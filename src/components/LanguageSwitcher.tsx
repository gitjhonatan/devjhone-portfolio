"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

const locales = [
  { code: "pt-BR", label: "PT" },
  { code: "en", label: "EN" },
] as const;

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChangeLocale = (nextLocale: "pt-BR" | "en") => {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="flex items-center gap-2" aria-label="Seleção de idioma">
      {locales.map((item, index) => (
        <div key={item.code} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleChangeLocale(item.code)}
            disabled={isPending}
            className={`text-sm font-medium transition-all hover:text-accent ${
              locale === item.code ? "text-accent" : "text-white/60"
            }`}
            aria-current={locale === item.code ? "true" : undefined}
          >
            {item.label}
          </button>

          {index < locales.length - 1 && (
            <span className="text-white/20">|</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
