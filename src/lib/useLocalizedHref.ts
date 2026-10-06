"use client";

import { useLanguage } from "@/lib/language";
import { localizedHref } from "@/lib/routes";

export function useLocalizedHref() {
  const { lang } = useLanguage();

  return (path: string) => {
    const hashIndex = path.indexOf("#");
    const base = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
    const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
    return `${localizedHref(base || "/", lang)}${hash}`;
  };
}
