import { pick, type Lang, type L } from "@/lib/i18n";

export function tr(lang: Lang) {
  return (value: L) => pick(value, lang);
}
