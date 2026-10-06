import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Flame,
  HandHeart,
  Landmark,
  Sparkles,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ConsultationCTA from "@/components/ConsultationCTA";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CONTACT_PAGE, PAGE_METADATA, SANTHIDHAM_PAGE, UI } from "@/lib/content";
import { GALLERY_ITEMS } from "@/lib/gallery";
import { buildPageMetadata } from "@/lib/page-metadata";
import { resolvePageLang } from "@/lib/page-lang";
import { localizedHref } from "@/lib/routes";
import { tr } from "@/lib/tr";
import { SITE, telLink, whatsappLink } from "@/lib/site";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolvePageLang(params);
  const t = tr(lang);
  const meta = PAGE_METADATA.santhidham;
  return buildPageMetadata({
    lang,
    path: "/santhidham",
    title: t(meta.title),
    description: t(meta.description),
    openGraphTitle: t(meta.ogTitle),
    openGraphDescription: t(meta.ogDescription),
    images: ["/images/santhidham-hero.jpg"],
  });
}

const PURPOSE_ICONS = [BookOpen, HandHeart, Users, Landmark];
const KNOWLEDGE_ICONS = [Sparkles, Flame, BookOpen, HandHeart];

export default async function SanthidhamPage({ params }: PageProps) {
  const lang = await resolvePageLang(params);
  const t = tr(lang);
  const contactHref = localizedHref("/contact#enquiry", lang);
  const galleryHref = localizedHref("/gallery", lang);
  const galleryPreview = GALLERY_ITEMS.slice(0, 6);
  const sd = UI.santhidham;
  const preview = SANTHIDHAM_PAGE.galleryPreview;

  return (
    <>
      <PageHero
        eyebrow={t(SANTHIDHAM_PAGE.hero.eyebrow)}
        title={t(SANTHIDHAM_PAGE.hero.title)}
        subtitle={t(SANTHIDHAM_PAGE.hero.subtitle)}
        description={t(SANTHIDHAM_PAGE.hero.description)}
        image="/images/santhidham-hero.jpg"
        imageAlt={t(sd.heroImageAlt)}
        objectPosition="60% 55%"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={contactHref} className="btn-gold group">
            {t(UI.bookConsultation)}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
          <a href="#gallery" className="btn-outline-light">
            {t(SANTHIDHAM_PAGE.hero.viewGallery)}
          </a>
        </div>
      </PageHero>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow inline-flex items-center gap-3 text-gold">
              <span aria-hidden className="h-px w-8 bg-gold/50" />
              {t(SANTHIDHAM_PAGE.about.eyebrow)}
            </span>
            <h2 className="mt-5 text-[2rem] leading-[1.12] font-semibold text-maroon-dark sm:text-[2.5rem]">
              {t(SANTHIDHAM_PAGE.about.title)}
            </h2>
            <div className="mt-6 space-y-4 text-[1.02rem] leading-[1.75] text-charcoal/75">
              {SANTHIDHAM_PAGE.about.paragraphs.map((paragraph) => (
                <p key={t(paragraph)}>{t(paragraph)}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -right-4 -top-4 h-full w-full border border-gold/40"
              />
              <div className="relative aspect-[4/3] overflow-hidden bg-parchment">
                <Image
                  src="/images/heritage.jpg"
                  alt={t(sd.aboutImageAlt)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-maroon-deep py-16 text-ivory lg:py-24">
        <div className="container-site">
          <SectionHeading
            tone="light"
            eyebrow={t(SANTHIDHAM_PAGE.purpose.eyebrow)}
            title={t(SANTHIDHAM_PAGE.purpose.title)}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SANTHIDHAM_PAGE.purpose.items.map((item, index) => {
              const Icon = PURPOSE_ICONS[index];
              return (
                <Reveal key={t(item.title)} delay={index * 0.07}>
                  <div className="h-full border border-gold/30 bg-maroon/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/70">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-light">
                      <Icon className="h-5 w-5" strokeWidth={1.4} />
                    </span>
                    <h3 className="mt-5 font-display text-[1.4rem] font-semibold text-ivory">
                      {t(item.title)}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ivory/70">
                      {t(item.text)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
                <Image
                  src="/images/service-02.jpg"
                  alt={t(sd.knowledgeImageAlt)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-4 -left-4 h-24 w-24 border-b border-l border-gold/50"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-3 text-gold">
                <span aria-hidden className="h-px w-8 bg-gold/50" />
                {t(SANTHIDHAM_PAGE.knowledge.eyebrow)}
              </span>
              <h2 className="mt-5 text-[2rem] leading-[1.12] font-semibold text-maroon-dark sm:text-[2.5rem]">
                {t(SANTHIDHAM_PAGE.knowledge.title)}
              </h2>
              <div className="mt-6 space-y-4 text-[1.02rem] leading-[1.75] text-charcoal/75">
                {SANTHIDHAM_PAGE.knowledge.paragraphs.map((paragraph) => (
                  <p key={t(paragraph)}>{t(paragraph)}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {SANTHIDHAM_PAGE.knowledge.points.map((point, index) => {
                  const Icon = KNOWLEDGE_ICONS[index];
                  return (
                    <li
                      key={t(point)}
                      className="flex items-start gap-3 border-t border-gold/30 pt-4 text-[0.97rem] leading-relaxed text-charcoal/75"
                    >
                      <Icon
                        className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold"
                        strokeWidth={1.5}
                      />
                      {t(point)}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory-deep/60 py-16 lg:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-3 text-gold">
                <span aria-hidden className="h-px w-8 bg-gold/50" />
                {t(SANTHIDHAM_PAGE.practices.eyebrow)}
              </span>
              <h2 className="mt-5 text-[2rem] leading-[1.12] font-semibold text-maroon-dark sm:text-[2.5rem]">
                {t(SANTHIDHAM_PAGE.practices.title)}
              </h2>
              <div className="mt-6 space-y-4 text-[1.02rem] leading-[1.75] text-charcoal/75">
                {SANTHIDHAM_PAGE.practices.paragraphs.map((paragraph) => (
                  <p key={t(paragraph)}>{t(paragraph)}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ol className="mt-8 space-y-0 border-t border-gold/30">
                {SANTHIDHAM_PAGE.practices.items.map((item, index) => (
                  <li
                    key={t(item)}
                    className="flex items-baseline gap-5 border-b border-gold/30 py-4"
                  >
                    <span className="font-display text-[1.15rem] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1rem] text-charcoal/80">{t(item)}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -left-4 -top-4 h-full w-full border border-gold/40"
              />
              <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
                <Image
                  src="/images/gallery-04.jpg"
                  alt={t(sd.practicesImageAlt)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow={t(SANTHIDHAM_PAGE.activities.eyebrow)}
            title={t(SANTHIDHAM_PAGE.activities.title)}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SANTHIDHAM_PAGE.activities.items.map((item, index) => (
              <Reveal key={t(item.title)} delay={index * 0.07}>
                <div className="h-full border border-gold/25 bg-ivory p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_30px_60px_-45px_rgba(42,7,16,0.8)]">
                  <span className="font-display text-[2rem] leading-none text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-[1.35rem] font-semibold text-maroon-dark">
                    {t(item.title)}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-charcoal/70">
                    {t(item.text)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-ivory-deep/60 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow={t(preview.eyebrow)}
            title={t(preview.title)}
            description={t(preview.description)}
          />

          <div className="mt-11 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
            {galleryPreview.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <Link
                  href={galleryHref}
                  className="group relative block aspect-[4/3] overflow-hidden border border-gold/20 bg-parchment"
                  aria-label={`${t(sd.galleryViewAria)} — ${t(item.caption)}`}
                >
                  <Image
                    src={item.src}
                    alt={t(item.alt)}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-maroon-dark/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex justify-center">
            <Link href={galleryHref} className="btn-outline-dark group">
              {t(preview.viewMore)}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <span className="eyebrow inline-flex items-center gap-3 text-gold">
              <span aria-hidden className="h-px w-8 bg-gold/50" />
              {t(preview.contact)}
            </span>
            <h2 className="mt-5 text-[1.9rem] leading-tight font-semibold text-maroon-dark">
              {t(preview.visitTitle)}
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-charcoal/70">
              {t(preview.visitDesc)}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={telLink()} className="btn-maroon">
                {t(sd.callNow)}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark"
              >
                <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
                {t(sd.whatsapp)}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-gold/30 bg-ivory-deep/60 p-6">
                <span className="eyebrow text-gold">{t(sd.phone)}</span>
                <a
                  href={telLink()}
                  className="mt-3 block font-display text-[1.5rem] text-maroon-dark transition-colors hover:text-maroon"
                >
                  {SITE.phone}
                </a>
              </div>
              <div className="border border-gold/30 bg-ivory-deep/60 p-6">
                <span className="eyebrow text-gold">{t(sd.email)}</span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-3 block break-all text-[1.05rem] text-maroon-dark transition-colors hover:text-maroon"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="border border-gold/30 bg-ivory-deep/60 p-6 sm:col-span-2">
                <span className="eyebrow text-gold">{t(sd.location)}</span>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-charcoal/80">
                  {t(CONTACT_PAGE.channels[2].value)}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
