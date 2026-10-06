"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Mandala from "@/components/Mandala";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { HOME } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { useLocalizedHref } from "@/lib/useLocalizedHref";
import { whatsappLink } from "@/lib/site";

export default function ConsultationCTA({
  eyebrow,
  title,
  description,
  primaryLabel,
  secondaryLabel,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  const { t } = useLanguage();
  const hrefFor = useLocalizedHref();

  const resolved = {
    eyebrow: eyebrow ?? t(HOME.cta.eyebrow),
    title: title ?? t(HOME.cta.title),
    description: description ?? t(HOME.cta.description),
    primary: primaryLabel ?? t(HOME.cta.primary),
    secondary: secondaryLabel ?? t(HOME.cta.secondary),
  };

  return (
    <section className="relative isolate overflow-hidden bg-maroon text-ivory">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[48%]">
        <Image
          src="/images/lamp.jpg"
          alt={t(HOME.cta.imageAlt)}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-maroon-dark/78 lg:bg-gradient-to-r from-maroon via-maroon/75 to-maroon/10"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -bottom-28 h-[26rem] w-[26rem] text-gold/15"
      >
        <Mandala className="h-full w-full" />
      </div>

      <div className="container-site relative z-10 py-20 lg:py-24">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-3 text-gold-light">
              <span aria-hidden className="h-px w-8 bg-gold-light/60" />
              {resolved.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 text-[2.1rem] leading-[1.1] font-semibold text-ivory sm:text-[2.6rem] lg:text-[3rem]">
              {resolved.title}
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-ivory/75">
              {resolved.description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={hrefFor("/contact#enquiry")} className="btn-gold btn-interactive group">
                {resolved.primary}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light btn-interactive"
              >
                <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
                {resolved.secondary}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
