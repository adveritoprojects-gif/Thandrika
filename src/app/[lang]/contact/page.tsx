import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import InquiryForm from "@/components/InquiryForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CONTACT_PAGE, PAGE_METADATA, UI } from "@/lib/content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { resolvePageLang } from "@/lib/page-lang";
import { tr } from "@/lib/tr";
import { SITE, telLink, whatsappLink } from "@/lib/site";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolvePageLang(params);
  const t = tr(lang);
  const meta = PAGE_METADATA.contact;
  return buildPageMetadata({
    lang,
    path: "/contact",
    title: t(meta.title),
    description: t(meta.description),
    openGraphTitle: t(meta.ogTitle),
    openGraphDescription: t(meta.ogDescription),
    images: ["/images/santhidham-wide.jpg"],
  });
}

const CHANNEL_ICONS = [Phone, Mail, MapPin];

export default async function ContactPage({ params }: PageProps) {
  const lang = await resolvePageLang(params);
  const t = tr(lang);

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${SITE.name} ${SITE.address.line2} ${SITE.locality} Kerala`,
  )}`;

  return (
    <>
      <PageHero
        eyebrow={t(CONTACT_PAGE.hero.eyebrow)}
        title={t(CONTACT_PAGE.hero.title)}
        subtitle={t(CONTACT_PAGE.hero.subtitle)}
        description={t(CONTACT_PAGE.hero.description)}
        image="/images/santhidham-wide.jpg"
        imageAlt={t(CONTACT_PAGE.hero.imageAlt)}
        objectPosition="70% 55%"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={telLink()} className="btn-gold group">
            <Phone className="h-4 w-4" strokeWidth={1.6} />
            {t(CONTACT_PAGE.actions.call)}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
          >
            <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
            {t(CONTACT_PAGE.actions.whatsapp)}
          </a>
          <a href="#enquiry" className="btn-outline-light group">
            {t(CONTACT_PAGE.actions.book)}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </PageHero>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="container-site grid gap-5 md:grid-cols-3">
          {CONTACT_PAGE.channels.map((channel, index) => {
            const Icon = CHANNEL_ICONS[index];
            const href =
              index === 0
                ? telLink()
                : index === 1
                  ? `mailto:${SITE.email}`
                  : mapsHref;
            const external = index === 2;

            return (
              <Reveal key={t(channel.label)} delay={index * 0.07}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col border border-gold/30 bg-ivory-deep/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/70 hover:bg-ivory hover:shadow-[0_30px_60px_-45px_rgba(42,7,16,0.8)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ivory text-gold transition-colors duration-300 group-hover:bg-gold-light group-hover:text-maroon-dark">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="eyebrow mt-5 text-gold">
                    {t(channel.label)}
                  </span>
                  <span className="mt-2 text-[1.05rem] leading-relaxed text-charcoal/80">
                    {t(channel.value)}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={telLink()} className="btn-maroon">
            <Phone className="h-4 w-4" strokeWidth={1.6} />
            {t(CONTACT_PAGE.actions.call)}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark"
          >
            <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
            {t(CONTACT_PAGE.actions.whatsapp)}
          </a>
        </Reveal>
      </section>

      <section id="enquiry" className="scroll-mt-28 bg-ivory-deep/60 py-16 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow={t(CONTACT_PAGE.form.eyebrow)}
                title={t(CONTACT_PAGE.form.title)}
                description={t(CONTACT_PAGE.form.description)}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 border-t border-gold/30 pt-6">
                <p className="eyebrow text-gold">{t(UI.directContact)}</p>
                <a
                  href={telLink()}
                  className="mt-3 block font-display text-[1.6rem] text-maroon-dark transition-colors hover:text-maroon"
                >
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 block break-all text-[1rem] text-charcoal/70 transition-colors hover:text-maroon"
                >
                  {SITE.email}
                </a>
                <p className="mt-4 text-[0.97rem] leading-relaxed text-charcoal/65">
                  {t(CONTACT_PAGE.channels[2].value)}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.08}>
              <InquiryForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
