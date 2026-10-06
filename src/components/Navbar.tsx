"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Emblem from "@/components/Emblem";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileMenu from "@/components/MobileMenu";
import { NAV_ITEMS, UI } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { englishPathFromPathname } from "@/lib/routes";
import { useLocalizedHref } from "@/lib/useLocalizedHref";
import { SITE } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const hrefFor = useLocalizedHref();
  const englishPath = englishPathFromPathname(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-[420ms] ${
          solid
            ? "border-b border-gold/25 bg-ivory/92 text-charcoal shadow-[0_18px_50px_-38px_rgba(42,7,16,0.6)] backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-maroon-dark/75 via-maroon-dark/25 to-transparent text-ivory backdrop-blur-[2px]"
        }`}
      >
        <div
          className={`container-site flex items-center justify-between gap-4 transition-[height] duration-[420ms] ${
            solid ? "h-[4.25rem] lg:h-[5rem]" : "h-[4.5rem] lg:h-[5.5rem]"
          }`}
        >
          <Link
            href={hrefFor("/")}
            className="group flex items-center gap-3"
            aria-label={`${SITE.name} — home`}
          >
            <Emblem
              tone={solid ? "dark" : "light"}
              className={`shrink-0 transition-all duration-[420ms] group-hover:rotate-[12deg] ${
                solid ? "h-9 w-9 lg:h-10 lg:w-10" : "h-10 w-10 lg:h-[3.1rem] lg:w-[3.1rem]"
              }`}
            />
            <span className="leading-tight">
              <span
                className={`block font-display font-semibold tracking-wide transition-all duration-[420ms] ${
                  solid
                    ? "text-[0.98rem] lg:text-[1.12rem]"
                    : "text-[1.02rem] lg:text-[1.24rem]"
                }`}
              >
                {SITE.name}
              </span>
              <span
                className={`eyebrow mt-1 block transition-colors duration-300 ${
                  solid
                    ? "text-[0.54rem] text-gold lg:text-[0.56rem]"
                    : "text-[0.56rem] text-gold-light/85 lg:text-[0.6rem]"
                }`}
              >
                {SITE.locality}
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? englishPath === "/"
                  : englishPath.startsWith(item.href);
              return (
                <a
                  key={item.href}
                  href={hrefFor(item.href)}
                  aria-current={active ? "page" : undefined}
                  className={`group relative text-[0.78rem] font-medium tracking-[0.16em] uppercase transition-colors duration-300 ${
                    solid
                      ? active
                        ? "text-maroon"
                        : "text-charcoal/75 hover:text-maroon"
                      : active
                        ? "text-gold-light"
                        : "text-ivory/85 hover:text-gold-light"
                  }`}
                >
                  {t(item.label)}
                  <span
                    className={`absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                      solid ? "bg-maroon" : "bg-gold-light"
                    } ${active ? "scale-x-100" : ""}`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 lg:gap-6">
            <LanguageSwitcher
              tone={solid ? "dark" : "light"}
              className="hidden md:flex"
            />
            <Link
              href={hrefFor("/contact#enquiry")}
              className={`btn-interactive hidden text-[0.76rem] font-medium tracking-[0.14em] uppercase transition-all duration-300 lg:inline-flex ${
                solid
                  ? "bg-maroon px-5 py-3 text-ivory hover:bg-maroon-deep"
                  : "bg-gold-light px-5 py-3 text-maroon-dark hover:bg-gold-pale"
              }`}
            >
              {t(UI.bookConsultation)}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? t(UI.closeMenu) : t(UI.openMenu)}
              aria-expanded={open}
              className={`relative flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${
                solid
                  ? "border-maroon/30 text-maroon hover:bg-maroon hover:text-ivory"
                  : "border-gold-light/50 text-gold-light hover:bg-gold-light hover:text-maroon-dark"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.22 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <X className="h-5 w-5" strokeWidth={1.5} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.22 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Menu className="h-5 w-5" strokeWidth={1.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {solid && (
            <motion.span
              className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            />
          )}
        </AnimatePresence>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
