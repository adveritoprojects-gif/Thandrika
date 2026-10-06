import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { LOCALES } from "@/lib/i18n";

const segments = [
  "",
  "/about",
  "/services",
  "/santhidham",
  "/gallery",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LOCALES.flatMap((locale) =>
    segments.map((segment) => ({
      url: `${SITE_URL}/${locale}${segment}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: segment === "" ? 1 : 0.9,
    })),
  );
}
