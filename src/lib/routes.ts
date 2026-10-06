import type { Lang } from "@/lib/i18n";

const ROUTE_SEGMENTS = [
  "",
  "/about",
  "/services",
  "/santhidham",
  "/gallery",
  "/contact",
] as const;

/** English path segments only (e.g. `/`, `/about`). */
export function englishPathFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";
  const first = segments[0];
  if (first === "en" || first === "ml") {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  if (first === "ml" && segments.length === 1) return "/";
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function langFromPathname(pathname: string): Lang {
  const first = pathname.split("/").filter(Boolean)[0];
  if (first === "ml") return "ml";
  if (first === "en") return "en";
  // Legacy bare paths (middleware should redirect)
  if (pathname === "/ml" || pathname.startsWith("/ml/")) return "ml";
  return "en";
}

export function localizedHref(path: string, lang: Lang): string {
  const hashIndex = path.indexOf("#");
  const base = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";

  let normalized =
    base === "/" || base === "" ? "" : base.startsWith("/") ? base : `/${base}`;

  // Strip accidental locale prefix
  for (const loc of ["en", "ml"] as const) {
    if (normalized === `/${loc}`) normalized = "";
    else if (normalized.startsWith(`/${loc}/`)) {
      normalized = normalized.slice(loc.length + 1);
    }
  }

  const prefix = `/${lang}`;
  const href =
    normalized === "" ? prefix : `${prefix}${normalized}`;
  return `${href}${hash}`;
}

export function alternateLanguages(pathname: string): { en: string; ml: string } {
  const enPath = englishPathFromPathname(pathname);
  return {
    en: localizedHref(enPath, "en"),
    ml: localizedHref(enPath, "ml"),
  };
}

export const STATIC_ROUTE_SEGMENTS = ROUTE_SEGMENTS;
