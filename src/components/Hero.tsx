"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import HomeEntrance from "@/components/HomeEntrance";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { HOME } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { useLocalizedHref } from "@/lib/useLocalizedHref";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { EASE_EDITORIAL } from "@/lib/motion";
import { whatsappLink } from "@/lib/site";

export default function Hero() {
  const { t } = useLanguage();
  const hrefFor = useLocalizedHref();
  const reduce = useReducedMotion();
  const isLg = useMediaQuery("(min-width: 1024px)");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  const entranceDelay = reduce ? 0 : 0.42;

  const container = {
    hidden: {},
    shown: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: entranceDelay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 22, filter: reduce ? "blur(0px)" : "blur(4px)" },
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: EASE_EDITORIAL },
    },
  };

  const line = {
    hidden: { y: reduce ? 0 : "110%", opacity: reduce ? 1 : 0 },
    shown: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.85, ease: EASE_EDITORIAL },
    },
  };

  const ctaGroup = {
    hidden: {},
    shown: {
      transition: { staggerChildren: reduce ? 0 : 0.12 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-maroon-dark"
    >
      <HomeEntrance />

      <motion.div
        className="absolute inset-0 will-change-transform"
        style={!reduce && isLg ? { y: bgY } : undefined}
        initial={{ scale: reduce ? 1 : 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduce ? 0 : 2.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/images/hero-mobile.jpg"
          alt="Sri. Muraleedhara Swamikal at Santhidham Dharma Peedom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] lg:hidden"
        />
        <Image
          src="/images/hero.jpg"
          alt="Sri. Muraleedhara Swamikal at Santhidham Dharma Peedom"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center lg:block"
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-maroon-dark via-maroon-dark/78 to-maroon-dark/25"
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 1.2, ease: "easeOut" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-maroon-dark via-maroon-dark/75 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-maroon-dark/80 to-transparent"
      />

      <motion.div
        aria-hidden
        className="orb pointer-events-none absolute top-[18%] right-[12%] h-72 w-72 rounded-full bg-gold/18 blur-[90px]"
        animate={reduce ? undefined : { x: [0, 12, 0], y: [0, -18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="orb-slow pointer-events-none absolute bottom-[16%] right-[36%] h-56 w-56 rounded-full bg-saffron/15 blur-[80px]"
        animate={reduce ? undefined : { x: [0, -10, 0], y: [0, 14, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="container-site relative z-10 flex min-h-[100svh] flex-col justify-end pt-32 pb-40 sm:pb-44 lg:justify-center lg:pt-36 lg:pb-52"
        style={!reduce && isLg ? { y: contentY } : undefined}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="shown"
          className="max-w-2xl"
        >
          <motion.div variants={item} className="flex items-center gap-4">
            <span aria-hidden className="h-px w-10 bg-gold-light/70" />
            <span className="eyebrow text-gold-light">
              {t(HOME.hero.eyebrow)}
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-[3rem] leading-[0.98] font-semibold text-ivory text-shadow-dark sm:text-[4.1rem] lg:text-[5.2rem]">
            <span className="block overflow-hidden pb-1">
              <motion.span variants={line} className="block">
                {t(HOME.hero.nameLine1)}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span variants={line} className="block">
                {t(HOME.hero.nameLine2)}
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={item}
            className="eyebrow mt-5 text-[0.8rem] text-gold-light"
          >
            {t(HOME.hero.institution)}
          </motion.p>

          <motion.p variants={item} className="mt-2.5 text-sm text-ivory/70">
            {t(HOME.hero.ashram)}
          </motion.p>

          <motion.div
            variants={item}
            aria-hidden
            className="mt-7 h-px w-16 bg-gold-light/60"
          />

          <motion.h2
            variants={item}
            className="mt-7 font-display text-[2rem] leading-[1.1] font-medium text-ivory text-shadow-dark sm:text-[2.6rem] lg:text-[3rem]"
          >
            {t(HOME.hero.statement1)}
            <br />
            {t(HOME.hero.statement2)}
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-5 max-w-lg text-[1rem] leading-relaxed text-ivory/75 sm:text-[1.06rem]"
          >
            {t(HOME.hero.description)}
          </motion.p>

          <motion.div
            variants={ctaGroup}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              variants={item}
              href={hrefFor("/contact#enquiry")}
              className="btn-maroon btn-interactive group w-full sm:w-auto"
            >
              {t(HOME.hero.primaryCta)}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </motion.a>

            <motion.a
              variants={item}
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light btn-interactive w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
              {t(HOME.hero.secondaryCta)}
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
    </section>
  );
}
