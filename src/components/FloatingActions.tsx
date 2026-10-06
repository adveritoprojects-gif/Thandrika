"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { UI } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { useLocalizedHref } from "@/lib/useLocalizedHref";
import { telLink, whatsappLink } from "@/lib/site";

export default function FloatingActions() {
  const hrefFor = useLocalizedHref();
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-gold/30 bg-ivory/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
        <div className="flex items-stretch gap-2 px-4 py-3">
          <Link
            href={hrefFor("/contact#enquiry")}
            className="btn-interactive flex flex-1 items-center justify-center gap-2 bg-maroon px-4 py-3 text-[0.74rem] font-medium tracking-[0.14em] text-ivory uppercase transition-colors active:bg-maroon-deep"
          >
            {t(UI.bookConsultation)}
          </Link>
          <a
            href={telLink()}
            aria-label={t(UI.callOrganization)}
            className="btn-interactive flex w-14 items-center justify-center border border-maroon/35 text-maroon transition-colors active:bg-maroon active:text-ivory"
          >
            <Phone className="h-5 w-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>

      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t(UI.contactWhatsApp)}
        className="group fixed right-4 bottom-24 z-[61] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_-14px_rgba(37,211,102,0.75)] ring-4 ring-white/15 transition-transform duration-300 hover:scale-105 md:right-6 md:bottom-6"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1,
          scale: 1,
          boxShadow: reduce
            ? "0 16px 34px -14px rgba(37,211,102,0.75)"
            : [
                "0 16px 34px -14px rgba(37,211,102,0.75)",
                "0 16px 38px -10px rgba(37,211,102,0.9)",
                "0 16px 34px -14px rgba(37,211,102,0.75)",
              ],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] },
          scale: { duration: 0.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] },
          boxShadow: reduce
            ? undefined
            : { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={reduce ? undefined : { scale: 1.06 }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-maroon-dark px-3 py-2 text-[0.7rem] tracking-[0.12em] text-ivory uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
          {t(UI.chatWhatsApp)}
        </span>
      </motion.a>
    </>
  );
}
