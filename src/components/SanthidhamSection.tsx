"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { HOME } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { useLocalizedHref } from "@/lib/useLocalizedHref";

export default function SanthidhamSection() {
  const { t } = useLanguage();
  const hrefFor = useLocalizedHref();

  return (
    <section id="santhidham" className="relative isolate overflow-hidden">
      <Image
        src="/images/santhidham-wide.jpg"
        alt={t(HOME.santhidhamImageAlt)}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-maroon-dark via-maroon-dark/80 to-maroon-dark/20"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-maroon-dark/70 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-maroon-dark/80 to-transparent"
      />

      <div className="container-site relative z-10 flex min-h-[34rem] items-center py-24 lg:min-h-[40rem] lg:py-28">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-3 text-gold-light">
              <span aria-hidden className="h-px w-8 bg-gold-light/60" />
              {t(HOME.santhidham.eyebrow)}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 text-[2.1rem] leading-[1.1] font-semibold text-ivory text-shadow-dark sm:text-[2.6rem] lg:text-[3.2rem]">
              {t(HOME.santhidham.title1)}
              <br />
              {t(HOME.santhidham.title2)}
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-ivory/75">
              {t(HOME.santhidham.description)}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <Link href={hrefFor("/santhidham")} className="btn-gold group mt-9">
              {t(HOME.santhidham.cta)}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </Reveal>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
    </section>
  );
}
