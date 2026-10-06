"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { UI } from "@/lib/content";
import {
  GALLERY_CATEGORY_KEYS,
  type GalleryItem,
} from "@/lib/gallery";
import { useLanguage } from "@/lib/language";

export default function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  const item = items[index];
  if (!item) return null;

  const categoryIndex = GALLERY_CATEGORY_KEYS.indexOf(item.category);
  const categoryLabel =
    categoryIndex >= 0 ? t(UI.galleryCategories[categoryIndex]) : "";

  return (
    <motion.div
      className="fixed inset-0 z-[95] flex flex-col bg-maroon-dark/97 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label={`${t(item.caption)} — ${t(UI.viewGallery)}`}
      onClick={onClose}
      onTouchStart={(event) => {
        const touch = event.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchEnd={(event) => {
        if (!touchStart.current) return;
        const touch = event.changedTouches[0];
        const dx = touch.clientX - touchStart.current.x;
        const dy = touch.clientY - touchStart.current.y;
        if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) onNext();
          else onPrev();
        }
        touchStart.current = null;
      }}
    >
      <div
        className="flex items-center justify-between gap-4 border-b border-gold/25 px-4 py-4 sm:px-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="min-w-0">
          <p className="truncate font-display text-[1.1rem] text-ivory sm:text-[1.3rem]">
            {t(item.caption)}
          </p>
          <p className="eyebrow mt-1 text-[0.58rem] text-gold-light/80">
            {categoryLabel}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden text-[0.8rem] tracking-[0.18em] text-ivory/60 sm:inline">
            {index + 1} / {items.length}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t(UI.close)}
            className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold-light transition-colors hover:bg-gold-light hover:text-maroon-dark"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-3 py-5 sm:px-16"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onPrev}
          aria-label={t(UI.previous)}
          className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center border border-gold/40 bg-maroon-dark/70 text-gold-light transition-colors hover:bg-gold-light hover:text-maroon-dark sm:left-4"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
        </button>

        <motion.figure
          key={item.id}
          className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0.15 : 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full" style={{ aspectRatio: item.aspect }}>
            <Image
              src={item.src}
              alt={t(item.alt)}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <figcaption className="mt-4 text-center text-[0.86rem] text-ivory/65 sm:hidden">
            {t(item.alt)}
          </figcaption>
        </motion.figure>

        <button
          type="button"
          onClick={onNext}
          aria-label={t(UI.next)}
          className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center border border-gold/40 bg-maroon-dark/70 text-gold-light transition-colors hover:bg-gold-light hover:text-maroon-dark sm:right-4"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
        </button>
      </div>

      <p
        className="hidden px-6 pb-5 text-center text-[0.8rem] text-ivory/50 sm:block"
        onClick={(event) => event.stopPropagation()}
      >
        {t(UI.lightboxHint)}
      </p>
    </motion.div>
  );
}
