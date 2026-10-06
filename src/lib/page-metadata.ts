import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { localizedHref } from "@/lib/routes";

export function buildPageMetadata({
  lang,
  path,
  title,
  description,
  images,
  openGraphTitle,
  openGraphDescription,
}: {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  images?: string[];
  openGraphTitle?: string;
  openGraphDescription?: string;
}): Metadata {
  const canonical = localizedHref(path, lang);
  const enHref = localizedHref(path, "en");
  const mlHref = localizedHref(path, "ml");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: enHref,
        ml: mlHref,
        "x-default": enHref,
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "ml" ? "ml_IN" : "en_IN",
      title: openGraphTitle ?? title,
      description: openGraphDescription ?? description,
      url: canonical,
      images,
    },
  };
}
