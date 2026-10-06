export type Lang = "en" | "ml";

/** Localised string with optional Malayalam translation. */
export type L = { en: string; ml?: string };

export const LOCALES: Lang[] = ["en", "ml"];
export const DEFAULT_LOCALE: Lang = "en";
export const LOCALE_COOKIE = "santhidham_locale";

export function l(en: string, ml: string): L {
  return { en, ml };
}

export function pickString(value: L, lang: Lang): string {
  if (lang === "ml" && value.ml && value.ml.trim().length > 0) return value.ml;
  return value.en;
}

export function pick(value: L, lang: Lang): string {
  return pickString(value, lang);
}
