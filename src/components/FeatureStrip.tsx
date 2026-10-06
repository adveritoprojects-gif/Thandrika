"use client";

import { Flame, Landmark, ScrollText, Sparkles, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { FEATURES } from "@/lib/content";
import { useLanguage } from "@/lib/language";

const ICONS: Record<string, LucideIcon> = {
  ScrollText,
  Flame,
  Sparkles,
  Landmark,
};

export default function FeatureStrip() {
  const { t } = useLanguage();

  return (
    <section className="relative z-20 -mt-14 lg:-mt-16">
      <div className="container-site">
        <Reveal className="rounded-md border border-gold/35 bg-ivory shadow-[0_40px_80px_-55px_rgba(42,7,16,0.85)]">
          <ul className="grid grid-cols-1 divide-y divide-gold/20 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {FEATURES.map((feature, index) => {
              const Icon = ICONS[feature.icon];
              return (
                <li
                  key={feature.title.en}
                  className={`group relative transition-all duration-500 hover:bg-gold/[0.06] ${
                    index % 2 === 1 ? "sm:border-l sm:border-gold/20" : ""
                  } ${
                    index >= 2 ? "sm:border-t sm:border-gold/20 lg:border-t-0" : ""
                  } ${index > 0 ? "lg:border-l lg:border-gold/20" : ""} ${
                    index === 2 ? "lg:border-t-0" : ""
                  }`}
                >
                  <div className="flex items-start gap-4 px-5 py-6 sm:px-6 lg:px-6 lg:py-7">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/8 text-gold transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-gold group-hover:bg-gold/15 group-hover:text-maroon">
                      <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.4} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[1.18rem] leading-tight font-semibold text-maroon-dark transition-colors duration-300 group-hover:text-maroon">
                        {t(feature.title)}
                      </span>
                      <span className="mt-1 block text-[0.86rem] leading-snug text-charcoal/60">
                        {t(feature.description)}
                      </span>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
