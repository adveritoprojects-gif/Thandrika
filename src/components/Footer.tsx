"use client";

import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Emblem from "@/components/Emblem";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CONTACT_PAGE, NAV_ITEMS, UI } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { useLocalizedHref } from "@/lib/useLocalizedHref";
import { SITE, telLink, whatsappLink } from "@/lib/site";

export default function Footer() {
  const { t } = useLanguage();
  const hrefFor = useLocalizedHref();
  const year = 2026;

  return (
    <footer className="relative overflow-hidden bg-maroon-dark text-ivory">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[26rem] w-[26rem] text-gold/10"
      />

      <div className="container-site relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <Emblem tone="light" className="h-12 w-12" />
            <span className="leading-tight">
              <span className="block font-display text-[1.3rem] font-semibold">
                {SITE.name}
              </span>
              <span className="eyebrow mt-1 block text-[0.58rem] text-gold-light/80">
                {SITE.locality}
              </span>
            </span>
          </div>

          <p className="mt-6 font-display text-[1.35rem] leading-snug text-gold-light">
            {SITE.person}
          </p>
          <p className="mt-1 text-sm text-ivory/70">{SITE.personTitle}</p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 border border-gold/40 px-5 py-3 text-[0.76rem] tracking-[0.16em] text-gold-light uppercase transition-colors duration-300 hover:bg-gold-light hover:text-maroon-dark"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t(CONTACT_PAGE.actions.whatsapp)}
          </a>
        </div>

        <nav className="lg:col-span-3 lg:col-start-6" aria-label="Footer">
          <h2 className="eyebrow text-gold-light">{t(UI.quickLinks)}</h2>
          <ul className="mt-5 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={hrefFor(item.href)}
                  className="group inline-flex items-center gap-2 text-[0.95rem] text-ivory/75 transition-colors duration-300 hover:text-gold-light"
                >
                  {t(item.label)}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    strokeWidth={1.5}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4 lg:col-start-9">
          <h2 className="eyebrow text-gold-light">{t(UI.contact)}</h2>
          <ul className="mt-5 space-y-4 text-[0.95rem]">
            <li>
              <a
                href={telLink()}
                className="flex items-start gap-3 text-ivory/80 transition-colors hover:text-gold-light"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-light/80" strokeWidth={1.5} />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-3 break-all text-ivory/80 transition-colors hover:text-gold-light"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-light/80" strokeWidth={1.5} />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-ivory/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light/80" strokeWidth={1.5} />
              <span className="leading-relaxed">{t(CONTACT_PAGE.channels[2].value)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/25">
        <div className="container-site flex flex-col gap-3 py-6 pb-28 text-[0.8rem] text-ivory/55 sm:flex-row sm:items-center sm:justify-between md:pb-6">
          <p>
            © {year} {SITE.name}. {t(UI.copyright)}
          </p>
          <p className="eyebrow text-[0.58rem] text-gold-light/70">
            {SITE.personTitle} · {SITE.locality}
          </p>
        </div>
      </div>
    </footer>
  );
}
