"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { HOME, UI } from "@/lib/content";
import { GALLERY_ITEMS } from "@/lib/gallery";
import { useLanguage } from "@/lib/language";
import { useLocalizedHref } from "@/lib/useLocalizedHref";
import { EASE_EDITORIAL } from "@/lib/motion";

export default function GallerySection() {
  const { t } = useLanguage();
  const hrefFor = useLocalizedHref();
  const reduce = useReducedMotion();
  const items = GALLERY_ITEMS.slice(0, 6);

  return (
    <section id="gallery" className="bg-ivory py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow={t(HOME.gallery.eyebrow)}
          title={t(HOME.gallery.title)}
        />

        <motion.div
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4"
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            shown: {
              transition: { staggerChildren: reduce ? 0 : 0.07 },
            },
          }}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: reduce ? 0 : 18 },
                shown: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: EASE_EDITORIAL },
                },
              }}
            >
              <Link
                href={hrefFor("/gallery")}
                className="group relative block aspect-[4/3] overflow-hidden border border-gold/20 bg-parchment active:scale-[0.98] transition-transform duration-300"
                aria-label={`${t(UI.galleryViewPrefix)} — ${t(item.caption)}`}
              >
                <Image
                  src={item.src}
                  alt={t(item.alt)}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] group-active:scale-[1.02]"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-maroon-dark/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-maroon-dark/90 to-transparent p-3 text-[0.74rem] tracking-[0.1em] text-ivory uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {t(item.caption)}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal className="mt-11 flex justify-center">
          <Link href={hrefFor("/gallery")} className="btn-outline-dark btn-interactive group">
            {t(HOME.gallery.cta)}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
