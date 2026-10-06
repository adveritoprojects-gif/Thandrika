import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Mandala from "@/components/Mandala";
import ConsultationCTA from "@/components/ConsultationCTA";
import { ABOUT_PAGE, PAGE_METADATA, UI } from "@/lib/content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { resolvePageLang } from "@/lib/page-lang";
import { localizedHref } from "@/lib/routes";
import { tr } from "@/lib/tr";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolvePageLang(params);
  const t = tr(lang);
  const meta = PAGE_METADATA.about;
  return buildPageMetadata({
    lang,
    path: "/about",
    title: t(meta.title),
    description: t(meta.description),
    openGraphTitle: t(meta.ogTitle),
    openGraphDescription: t(meta.ogDescription),
    images: ["/images/portrait.jpg"],
  });
}

export default async function AboutPage({ params }: PageProps) {
  const lang = await resolvePageLang(params);
  const t = tr(lang);
  const contactHref = localizedHref("/contact#enquiry", lang);
  const santhidhamHref = localizedHref("/santhidham", lang);

  return (
    <>
      <PageHero
        eyebrow={t(ABOUT_PAGE.hero.eyebrow)}
        title={t(ABOUT_PAGE.hero.title)}
        subtitle={t(ABOUT_PAGE.hero.subtitle)}
        description={t(ABOUT_PAGE.hero.description)}
        image="/images/hero.jpg"
        imageAlt={t(UI.aboutPage.heroImageAlt)}
        objectPosition="65% 28%"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#introduction" className="btn-gold group">
            {t(UI.aboutPage.readMore)}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
          <Link href={contactHref} className="btn-outline-light">
            {t(UI.aboutPage.bookConsultation)}
          </Link>
        </div>
      </PageHero>

      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/3 h-[32rem] w-[32rem] text-gold/10"
        >
          <Mandala className="h-full w-full" />
        </div>

        {ABOUT_PAGE.sections.map((section, index) => {
          const imageLeft = index % 2 === 0;
          const tall =
            section.image.endsWith("hero-mobile.jpg") ||
            section.image.endsWith("portrait.jpg");

          return (
            <section
              key={section.id}
              id={section.id}
              className={`relative py-16 lg:py-24 ${
                index % 2 === 1 ? "bg-ivory-deep/55" : "bg-ivory"
              }`}
            >
              <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal
                  className={
                    imageLeft
                      ? "lg:col-span-5 lg:col-start-1"
                      : "lg:col-span-5 lg:col-start-8 lg:row-start-1"
                  }
                >
                  <div className="relative">
                    <div
                      aria-hidden
                      className={`absolute border border-gold/40 ${
                        imageLeft ? "-right-4 -top-4" : "-left-4 -top-4"
                      }`}
                    />
                    <div
                      className={`relative overflow-hidden bg-parchment ${
                        tall ? "aspect-[4/5]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={section.image}
                        alt={t(section.imageAlt)}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-maroon-dark/30 via-transparent to-transparent"
                      />
                    </div>
                    <span className="absolute -bottom-4 left-4 bg-ivory px-3 py-1.5 font-display text-[0.95rem] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>

                <div
                  className={
                    imageLeft
                      ? "lg:col-span-6 lg:col-start-7"
                      : "lg:col-span-6 lg:col-start-1 lg:row-start-1"
                  }
                >
                  <Reveal delay={0.06}>
                    <span className="eyebrow inline-flex items-center gap-3 text-gold">
                      <span aria-hidden className="h-px w-8 bg-gold/50" />
                      {t(section.eyebrow)}
                    </span>
                    <h2 className="mt-5 text-[1.95rem] leading-[1.14] font-semibold text-maroon-dark sm:text-[2.4rem]">
                      {t(section.title)}
                    </h2>
                  </Reveal>

                  <Reveal delay={0.12}>
                    <div className="mt-5 space-y-4 text-[1.02rem] leading-[1.75] text-charcoal/75">
                      {section.paragraphs.map((paragraph) => (
                        <p key={t(paragraph)}>{t(paragraph)}</p>
                      ))}
                    </div>
                  </Reveal>

                  {section.id === "santhidham" && (
                    <Reveal delay={0.18}>
                      <Link href={santhidhamHref} className="btn-outline-dark group mt-8">
                        {t(UI.exploreSanthidham)}
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </Reveal>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <ConsultationCTA />
    </>
  );
}
