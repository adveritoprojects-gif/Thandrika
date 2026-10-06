"use client";

import { UI } from "@/lib/content";
import { useLanguage } from "@/lib/language";

export default function SkipLink() {
  const { t } = useLanguage();
  return (
    <a href="#main" className="skip-link">
      {t(UI.skipToContent)}
    </a>
  );
}
