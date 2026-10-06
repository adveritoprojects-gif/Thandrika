import type { Lang } from "@/lib/i18n";
import { LOCALES } from "@/lib/i18n";

export async function resolvePageLang(
  params: Promise<{ lang: string }>,
): Promise<Lang> {
  const { lang } = await params;
  return LOCALES.includes(lang as Lang) ? (lang as Lang) : "en";
}
