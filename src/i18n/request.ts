import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

const locales = ["pt-BR", "en"] as const;

type Locale = (typeof locales)[number];

const defaultLocale: Locale = "pt-BR";

const resolveAcceptLanguage = (
  acceptLanguage: string | null,
): Locale => {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const languages = acceptLanguage
    .split(",")
    .map((language) => {
      const [locale, ...parameters] = language.trim().split(";");

      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );

      const quality = qualityParameter
        ? Number.parseFloat(qualityParameter.trim().slice(2))
        : 1;

      return {
        locale: locale.toLowerCase(),
        quality: Number.isNaN(quality) ? 0 : quality,
      };
    })
    .filter(({ quality }) => quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { locale } of languages) {
    if (locale === "pt-br" || locale.startsWith("pt-")) {
      return "pt-BR";
    }

    if (locale === "en" || locale.startsWith("en-")) {
      return "en";
    }
  }

  return defaultLocale;
};

export default getRequestConfig(async () => {
  const cookieLocale = cookies().get("NEXT_LOCALE")?.value;

  const locale: Locale =
    cookieLocale === "pt-BR" || cookieLocale === "en"
      ? cookieLocale
      : resolveAcceptLanguage(headers().get("accept-language"));

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});