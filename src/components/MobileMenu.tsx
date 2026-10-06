"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Emblem from "@/components/Emblem";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { CONTACT_PAGE, NAV_ITEMS, UI } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { englishPathFromPathname } from "@/lib/routes";
import { useLocalizedHref } from "@/lib/useLocalizedHref";
import { SITE, telLink, whatsappLink } from "@/lib/site";
import { EASE_EDITORIAL } from "@/lib/motion";

const listVariants = {
  hidden: {},
  shown: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 28 },
  shown: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE_EDITORIAL },
  },
};

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const hrefFor = useLocalizedHref();
  const englishPath = englishPathFromPathname(pathname);
  const { t } = useLanguage();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] lg:hidden"
          initial="hidden"
          animate="shown"
          exit="hidden"
          variants={{ hidden: {}, shown: {} }}
        >
          <motion.button
            type="button"
            aria-label={t(UI.closeMenu)}
            onClick={onClose}
            className="absolute inset-0 bg-maroon-dark/80 backdrop-blur-sm"
            variants={{
              hidden: { opacity: 0 },
              shown: { opacity: 1 },
            }}
            transition={{ duration: 0.35 }}
          />

          <motion.div
            className="absolute inset-0 flex flex-col overflow-y-auto bg-maroon-dark text-ivory"
            variants={{
              hidden: { opacity: 0, y: 28 },
              shown: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.48, ease: EASE_EDITORIAL }}
            role="dialog"
            aria-modal="true"
            aria-label={t(UI.siteNavigation)}
          >
            <div className="flex items-center justify-between border-b border-gold/25 px-5 py-4">
              <div className="flex items-center gap-3">
                <Emblem tone="light" className="h-10 w-10" />
                <span className="leading-tight">
                  <span className="block font-display text-[1.05rem] font-semibold">
                    {SITE.name}
                  </span>
                  <span className="eyebrow block text-[0.58rem] text-gold-light/80">
                    {SITE.locality}
                  </span>
                </span>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label={t(UI.closeMenu)}
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/35 text-gold-light transition-colors hover:bg-gold-light hover:text-maroon-dark"
              >
                <span className="sr-only">{t(UI.close)}</span>
                <svg
                  aria-hidden
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 px-5 py-8" aria-label="Mobile">
              <motion.ul
                className="space-y-1"
                variants={listVariants}
                initial="hidden"
                animate="shown"
              >
                {NAV_ITEMS.map((item) => {
                  const active =
                    item.href === "/"
                      ? englishPath === "/"
                      : englishPath.startsWith(item.href);
                  return (
                    <motion.li key={item.href} variants={linkVariants}>
                      <a
                        href={hrefFor(item.href)}
                        onClick={onClose}
                        className={`group flex items-center justify-between border-b border-ivory/10 py-4 font-display text-[1.75rem] leading-none transition-colors ${
                          active ? "text-gold-light" : "text-ivory"
                        }`}
                      >
                        {t(item.label)}
                        <ArrowRight
                          className="h-4 w-4 -translate-x-2 text-gold-light opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          strokeWidth={1.5}
                        />
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <motion.div
                className="mt-8 flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, duration: 0.45, ease: EASE_EDITORIAL }}
              >
                <Link
                  href={hrefFor("/contact#enquiry")}
                  onClick={onClose}
                  className="btn-gold btn-interactive w-full"
                >
                  {t(UI.bookConsultation)}
                </Link>
                <div className="flex items-center justify-between">
                  <LanguageSwitcher tone="light" />
                  <a
                    href={telLink()}
                    className="flex items-center gap-2 text-sm text-ivory/75 transition-colors hover:text-gold-light"
                  >
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                    {SITE.phone}
                  </a>
                </div>
              </motion.div>
            </nav>

            <div className="border-t border-gold/25 px-5 py-5">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm text-ivory/70 transition-colors hover:text-gold-light"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                {SITE.email}
              </a>
              <p className="mt-2 font-malayalam text-sm leading-relaxed text-ivory/55">
                {SITE.address.line2}, {SITE.address.line3}
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-gold/35 px-5 py-3 text-[0.78rem] tracking-[0.16em] uppercase text-gold-light transition-colors hover:bg-gold-light hover:text-maroon-dark"
              >
                {t(CONTACT_PAGE.actions.whatsapp)}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
