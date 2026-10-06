"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ImageReveal from "@/components/ImageReveal";
import DecorativeLineArt from "@/components/DecorativeLineArt";
import Mandala from "@/components/Mandala";
import { HOME, UI } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { useLocalizedHref } from "@/lib/useLocalizedHref";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function AboutSection() {
  const { t } = useLanguage();
  const hrefFor = useLocalizedHref();
  const reduce = useReducedMotion();
  const isLg = useMediaQuery("(min-width: 1024px)");
  const blockRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start end", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const decorY = useTransform(scrollYProgress, [0, 1], ["8%", "-2%"]);

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[34rem] w-[34rem] text-gold/12"
      >
        <Mandala className="h-full w-full" />
      </div>

      <div className="container-site relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <ScrollReveal className="lg:col-span-5" variant="fade-in">
          <div ref={blockRef} className="relative">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-6 top-8 z-0 text-gold/25"
              style={!reduce && isLg ? { y: decorY } : undefined}
            >
              <DecorativeLineArt className="h-56 w-40" />
            </motion.div>

            <div
              aria-hidden
              className="absolute -left-4 -top-4 h-full w-full border border-gold/45"
            />
            <div
              aria-hidden
              className="absolute -bottom-5 -right-5 h-32 w-32 border-b border-r border-gold/45"
            />

            <motion.div
              style={!reduce && isLg ? { y: portraitY } : undefined}
              className="relative z-[1]"
            >
              <ImageReveal className="aspect-4/5 bg-parchment">
                <div className="relative aspect-4/5">
                  <Image
                    src="/images/portrait.jpg"
                    alt={t(HOME.about.portraitAlt)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-maroon-dark/35 via-transparent to-transparent"
                  />
                </div>
              </ImageReveal>
            </motion.div>

            <div className="absolute -bottom-6 left-4 z-10 border border-gold/40 bg-ivory px-5 py-3">
              <p className="eyebrow text-[0.6rem] text-gold">
                {t(UI.madadhipathi)}
              </p>
              <p className="mt-1 font-display text-[1.05rem] leading-none font-semibold text-maroon-dark">
                Santhidham Dharma Peedom
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <ScrollReveal>
            <span className="eyebrow inline-flex items-center gap-3 text-gold">
              <span aria-hidden className="h-px w-8 bg-gold/50" />
              {t(HOME.about.eyebrow)}
            </span>
            <h2 className="mt-5 text-[2.15rem] leading-[1.1] font-semibold text-maroon-dark sm:text-[2.7rem] lg:text-[3.2rem]">
              {t(HOME.about.title)}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="mt-6 space-y-5 text-[1.03rem] leading-[1.75] text-charcoal/75">
              {HOME.about.paragraphs.map((paragraph) => (
                <p key={paragraph.en}>{t(paragraph)}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <Link
              href={hrefFor("/about")}
              className="btn-maroon btn-interactive group mt-9"
            >
              {t(HOME.about.cta)}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
