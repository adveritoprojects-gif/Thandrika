import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CircleCheck, Shield, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ConsultationCTA from "@/components/ConsultationCTA";
import { PAGE_METADATA, SERVICES, SERVICES_PAGE, UI } from "@/lib/content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { resolvePageLang } from "@/lib/page-lang";
import { localizedHref } from "@/lib/routes";
import { tr } from "@/lib/tr";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolvePageLang(params);
  const t = tr(lang);
  const meta = PAGE_METADATA.services;
  return buildPageMetadata({
    lang,
    path: "/services",
    title: t(meta.title),
    description: t(meta.description),
    openGraphTitle: t(meta.ogTitle),
    openGraphDescription: t(meta.ogDescription),
    images: ["/images/service-01.jpg"],
  });
}

export default async function ServicesPage({ params }: PageProps) {
  const lang = await resolvePageLang(params);
  const t = tr(lang);
  const contactHref = localizedHref("/contact#enquiry", lang);

  return (
    <>
      <PageHero
        eyebrow={t(SERVICES_PAGE.hero.eyebrow)}
        title={t(SERVICES_PAGE.hero.title)}
        subtitle={t(SERVICES_PAGE.hero.subtitle)}
        description={t(SERVICES_PAGE.hero.description)}
        image="/images/lamp.jpg"
        imageAlt={t(UI.servicesPage.heroImageAlt)}
        objectPosition="60% 50%"
      >
        <Link href={contactHref} className="btn-gold group">
          {t(UI.servicesPage.bookConsultation)}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </Link>
      </PageHero>

      <section className="bg-ivory py-16 lg:py-20">
        <div className="container-site">
          <Reveal className="flex flex-col gap-6 border border-gold/30 bg-ivory-deep/60 p-6 sm:flex-row sm:items-start lg:p-8">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-ivory text-gold">
              <Shield className="h-5 w-5" strokeWidth={1.4} />
            </span>
            <p className="text-[0.96rem] leading-relaxed text-charcoal/75">
              <span className="eyebrow mb-2 block text-gold">
                {t(SERVICES_PAGE.pleaseNote)}
              </span>
              {t(SERVICES_PAGE.disclaimer)}
            </p>
          </Reveal>
        </div>
      </section>

      <div>
        {SERVICES.map((service, index) => {
          const imageLeft = index % 2 === 0;

          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-28 py-16 lg:py-24 ${
                index % 2 === 1 ? "bg-ivory-deep/55" : "bg-ivory"
              }`}
            >
              <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal
                  className={
                    imageLeft
                      ? "lg:col-span-6 lg:col-start-1"
                      : "lg:col-span-6 lg:col-start-7 lg:row-start-1"
                  }
                >
                  <div className="relative">
                    <div className="relative aspect-[16/11] overflow-hidden bg-parchment">
                      <Image
                        src={service.image}
                        alt={t(service.title)}
                        fill
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-cover"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-maroon-dark/45 via-transparent to-transparent"
                      />
                    </div>
                    <span className="absolute -top-5 left-5 flex h-16 w-16 items-center justify-center border border-gold/50 bg-ivory font-display text-[1.6rem] font-semibold text-maroon">
                      {service.number}
                    </span>
                  </div>
                </Reveal>

                <div
                  className={
                    imageLeft
                      ? "lg:col-span-5 lg:col-start-8"
                      : "lg:col-span-5 lg:col-start-1 lg:row-start-1"
                  }
                >
                  <Reveal delay={0.06}>
                    <span className="eyebrow text-gold">
                      {t(SERVICES_PAGE.serviceNumber)} {service.number}
                    </span>
                    <h2 className="mt-4 text-[2rem] leading-[1.12] font-semibold text-maroon-dark sm:text-[2.4rem]">
                      {t(service.title)}
                    </h2>
                    <p className="mt-3 font-display text-[1.2rem] text-burgundy italic">
                      {t(service.tagline)}
                    </p>
                    <p className="mt-5 text-[1.02rem] leading-[1.75] text-charcoal/75">
                      {t(service.description)}
                    </p>
                  </Reveal>

                  <Reveal delay={0.12}>
                    <div className="mt-7 border border-gold/30 bg-ivory p-5">
                      <h3 className="flex items-center gap-2.5 text-[0.78rem] font-medium tracking-[0.16em] text-gold uppercase">
                        <Users className="h-4 w-4" strokeWidth={1.6} />
                        {t(SERVICES_PAGE.whoItIsFor)}
                      </h3>
                      <p className="mt-3 text-[0.96rem] leading-relaxed text-charcoal/75">
                        {t(service.whoItIsFor)}
                      </p>
                    </div>
                  </Reveal>

                  <Reveal delay={0.18}>
                    <div className="mt-5">
                      <h3 className="text-[0.78rem] font-medium tracking-[0.16em] text-gold uppercase">
                        {t(SERVICES_PAGE.focusHeading)}
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {service.focus.map((focus) => (
                          <li
                            key={t(focus)}
                            className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-charcoal/75"
                          >
                            <CircleCheck
                              className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold"
                              strokeWidth={1.5}
                            />
                            {t(focus)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  <Reveal delay={0.24}>
                    <Link href={contactHref} className="btn-maroon group mt-8">
                      {t(SERVICES_PAGE.ctaLabel)}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="bg-ivory py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow={t(SERVICES_PAGE.nextStepEyebrow)}
            title={t(SERVICES_PAGE.nextStep)}
            description={t(SERVICES_PAGE.nextStepDesc)}
          />
          <div className="mt-9 flex justify-center">
            <Link href={contactHref} className="btn-maroon group">
              {t(UI.bookConsultation)}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
