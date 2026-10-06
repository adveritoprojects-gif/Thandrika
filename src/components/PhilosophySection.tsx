"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ImageReveal from "@/components/ImageReveal";
import Mandala from "@/components/Mandala";
import { HOME, PHILOSOPHY_PILLARS } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { EASE_EDITORIAL } from "@/lib/motion";

export default function PhilosophySection() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const pillarContainer = {
    hidden: {},
    shown: {
      transition: {
        staggerChildren: reduce ? 0 : 0.18,
        delayChildren: reduce ? 0 : 0.15,
      },
    },
  };

  const pillarItem = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    shown: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_EDITORIAL },
    },
  };

  return (
    <section
      id="philosophy"
      className="relative isolate overflow-hidden bg-maroon-deep text-ivory"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] text-gold/15"
      >
        <Mandala className="h-full w-full" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -bottom-40 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-3xl"
      />

      <div className="container-site relative grid items-center gap-12 py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <ScrollReveal className="lg:col-span-4" variant="fade-in">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 border border-gold/30"
            />
            <ImageReveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/lamp.jpg"
                  alt={t(HOME.philosophyImageAlt)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 to-transparent"
                />
              </div>
            </ImageReveal>
          </div>
        </ScrollReveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <ScrollReveal>
            <span className="eyebrow inline-flex items-center gap-3 text-gold-light">
              <span aria-hidden className="h-px w-8 bg-gold-light/50" />
              {t(HOME.philosophy.eyebrow)}
            </span>
            <h2 className="mt-5 text-[2.1rem] leading-[1.1] font-semibold text-ivory sm:text-[2.6rem] lg:text-[3rem]">
              {t(HOME.philosophy.title)}
            </h2>
          </ScrollReveal>

          <div className="relative mt-10">
            {!reduce && (
              <motion.div
                aria-hidden
                className="absolute top-3 bottom-3 left-[0.65rem] hidden w-px origin-top bg-gradient-to-b from-transparent via-gold/45 to-transparent sm:block"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.1, delay: 0.2, ease: EASE_EDITORIAL }}
              />
            )}

            <motion.div
              className="grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-8"
              variants={pillarContainer}
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, margin: "-60px" }}
            >
              {PHILOSOPHY_PILLARS.map((pillar) => (
                <motion.div
                  key={pillar.number}
                  variants={pillarItem}
                  className="relative border-t border-gold/40 pt-5 sm:pl-6"
                >
                  <span className="absolute top-5 left-0 hidden h-2 w-2 -translate-x-[3px] rounded-full bg-gold/70 sm:block" />
                  <span className="block font-display text-[2.4rem] leading-none font-semibold text-gold-light/85">
                    {pillar.number}
                  </span>
                  <h3 className="mt-3 font-display text-[1.35rem] font-semibold text-ivory">
                    {t(pillar.title)}
                  </h3>
                  <p className="mt-2 text-[0.94rem] leading-relaxed text-ivory/65">
                    {t(pillar.text)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
