"use client";

import { usePathname, useRouter } from "next/navigation";
import { englishPathFromPathname, localizedHref } from "@/lib/routes";
import { UI } from "@/lib/content";
import { useLanguage, type Lang } from "@/lib/language";

const OPTIONS: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "ml", label: "മലയാളം" },
];

export default function LanguageSwitcher({
  tone = "light",
  className = "",
}: {
  /** "light" = for dark backgrounds, "dark" = for ivory backgrounds */
  tone?: "light" | "dark";
  className?: string;
}) {
  const { lang, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const englishPath = englishPathFromPathname(pathname);

  return (
    <div
      className={`flex items-center gap-2 text-[0.72rem] tracking-[0.16em] ${className}`}
      role="group"
      aria-label={t(UI.languageSelection)}
    >
      {OPTIONS.map((option, index) => {
        const active = lang === option.id;
        return (
          <span key={option.id} className="flex items-center gap-2">
            {index > 0 && (
              <span
                aria-hidden
                className={
                  tone === "light" ? "text-ivory/35" : "text-maroon/30"
                }
              >
                |
              </span>
            )}
            <button
              type="button"
              onClick={() => router.push(localizedHref(englishPath, option.id))}
              aria-pressed={active}
              className={`transition-colors duration-300 ${
                option.id === "ml" ? "font-malayalam tracking-normal" : ""
              } ${
                active
                  ? tone === "light"
                    ? "text-gold-light"
                    : "text-maroon"
                  : tone === "light"
                    ? "text-ivory/65 hover:text-ivory"
                    : "text-charcoal/55 hover:text-maroon"
              }`}
            >
              {option.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
