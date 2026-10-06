"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE_EDITORIAL } from "@/lib/motion";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import { UI } from "@/lib/content";
import {
  GALLERY_CATEGORY_KEYS,
  GALLERY_ITEMS,
  type GalleryCategoryKey,
} from "@/lib/gallery";
import { useLanguage } from "@/lib/language";

type Filter = "all" | GalleryCategoryKey;

export default function MasonryGallery() {
  const reduce = useReducedMotion();
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categoryLabels = UI.galleryCategories;

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: t(UI.galleryAll) },
    ...GALLERY_CATEGORY_KEYS.map((key, index) => ({
      id: key,
      label: t(categoryLabels[index]),
    })),
  ];

  const items = useMemo(
    () =>
      filter === "all"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === filter),
    [filter],
  );

  const photoWord =
    items.length === 1 ? t(UI.galleryPhoto) : t(UI.galleryPhotos);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2.5">
        {filters.map((option) => {
          const active = option.id === filter;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                setFilter(option.id);
                setActiveIndex(null);
              }}
              aria-pressed={active}
              className={`border px-4 py-2.5 text-[0.74rem] font-medium tracking-[0.16em] uppercase transition-all duration-300 ${
                active
                  ? "border-maroon bg-maroon text-ivory"
                  : "border-gold/35 bg-ivory text-charcoal/70 hover:border-gold hover:text-maroon"
              } ${lang === "ml" ? "font-malayalam tracking-normal normal-case" : ""}`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-charcoal/55" aria-live="polite">
        {items.length} {photoWord}
        {filter !== "all"
          ? ` ${t(UI.galleryPhotosIn)} ${filters.find((f) => f.id === filter)?.label}`
          : ""}
      </p>

      <motion.div
        key={filter}
        className="mt-7 columns-1 gap-5 sm:columns-2 lg:columns-3"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          shown: {
            transition: { staggerChildren: reduce ? 0 : 0.05 },
          },
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: reduce ? 0 : 16 },
              shown: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: EASE_EDITORIAL },
              },
            }}
            className="mb-5 break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${t(UI.openImage)}: ${t(item.caption)}`}
              className="group relative block w-full overflow-hidden border border-gold/25 bg-parchment text-left transition-transform duration-300 active:scale-[0.99]"
              style={{ aspectRatio: item.aspect }}
            >
              <Image
                src={item.src}
                alt={t(item.alt)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] group-active:scale-[1.02]"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-maroon-dark/85 via-maroon-dark/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <span className="min-w-0">
                  <span className="eyebrow block text-[0.56rem] text-gold-light">
                    {t(categoryLabels[GALLERY_CATEGORY_KEYS.indexOf(item.category)])}
                  </span>
                  <span className="mt-1 block truncate font-display text-[1.1rem] text-ivory">
                    {t(item.caption)}
                  </span>
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold-light/60 text-gold-light">
                  <Maximize2 className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </span>
            </button>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeIndex !== null && items[activeIndex] && (
          <Lightbox
            items={items}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onPrev={() =>
              setActiveIndex((current) =>
                current === null ? current : (current - 1 + items.length) % items.length,
              )
            }
            onNext={() =>
              setActiveIndex((current) =>
                current === null ? current : (current + 1) % items.length,
              )
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}
