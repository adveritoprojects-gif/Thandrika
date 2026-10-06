"use client";

import Image from "next/image";
import { ArrowRight, type LucideIcon, Flame, ScrollText, Sparkles, Users, Flower2 } from "lucide-react";
import type { Service } from "@/lib/content";
import { UI } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { useLocalizedHref } from "@/lib/useLocalizedHref";

const ICONS: Record<Service["icon"], LucideIcon> = {
  ScrollText,
  Flame,
  Sparkles,
  Users,
  Flower2,
};

export default function ServiceCard({
  service,
  href,
  ctaLabel,
}: {
  service: Service;
  href?: string;
  ctaLabel?: string;
}) {
  const { t } = useLanguage();
  const hrefFor = useLocalizedHref();
  const Icon = ICONS[service.icon];
  const target = href ?? hrefFor(`/services#${service.slug}`);

  return (
    <a
      href={target}
      className="group relative flex h-full flex-col overflow-hidden border border-gold/25 bg-ivory transition-all duration-500 hover:-translate-y-[5px] hover:border-gold/70 hover:shadow-[0_34px_60px_-42px_rgba(42,7,16,0.85)] active:scale-[0.99] active:translate-y-0 md:active:scale-100"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-parchment">
        <Image
          src={service.image}
          alt={t(service.title)}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] group-active:scale-[1.02]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-maroon-dark/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-ivory/92 text-maroon transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold-light">
          <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.5} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 lg:p-5">
        <span className="eyebrow text-[0.56rem] text-gold">{service.number}</span>
        <h3 className="mt-2 font-display text-[1.24rem] leading-tight font-semibold text-maroon-dark transition-colors duration-300 group-hover:text-maroon">
          {t(service.title)}
        </h3>
        <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-charcoal/65">
          {t(service.tagline)}
        </p>

        <span
          aria-hidden
          className="mt-4 h-px w-0 bg-gold/80 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"
        />

        <span className="mt-4 flex items-center justify-between text-[0.7rem] font-medium tracking-[0.18em] text-gold uppercase">
          {ctaLabel ?? t(UI.learnMore)}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[5px]"
            strokeWidth={1.5}
          />
        </span>
      </div>
    </a>
  );
}
