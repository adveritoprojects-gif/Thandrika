"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { pick, type Lang, type L } from "@/lib/i18n";
import {
  englishPathFromPathname,
  langFromPathname,
  localizedHref,
} from "@/lib/routes";

export type { Lang, L };
export { pick };

type LanguageValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (value: L) => string;
};

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const lang = langFromPathname(pathname);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      setLang: (next: Lang) => {
        router.push(localizedHref(englishPathFromPathname(pathname), next));
      },
      t: (value: L) => pick(value, lang),
    }),
    [lang, pathname, router],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
