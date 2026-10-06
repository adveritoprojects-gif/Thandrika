import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import MasonryGallery from "@/components/MasonryGallery";
import ConsultationCTA from "@/components/ConsultationCTA";
import Reveal from "@/components/Reveal";
import { PAGE_METADATA, UI } from "@/lib/content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { resolvePageLang } from "@/lib/page-lang";
import { tr } from "@/lib/tr";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolvePageLang(params);
  const t = tr(lang);
  const meta = PAGE_METADATA.gallery;
  return buildPageMetadata({
    lang,
    path: "/gallery",
    title: t(meta.title),
    description: t(meta.description),
    openGraphTitle: t(meta.ogTitle),
    openGraphDescription: t(meta.ogDescription),
    images: ["/images/gallery-01.jpg"],
  });
}

export default async function GalleryPage({ params }: PageProps) {
  const lang = await resolvePageLang(params);
  const t = tr(lang);
  const gallery = UI.galleryPage;

  return (
    <>
      <PageHero
        eyebrow={t(gallery.hero.eyebrow)}
        title={t(gallery.hero.title)}
        subtitle={t(gallery.hero.subtitle)}
        description={t(gallery.hero.description)}
        image="/images/heritage.jpg"
        imageAlt={t(gallery.hero.imageAlt)}
        objectPosition="55% 60%"
      />

      <section className="bg-ivory py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow={t(gallery.collection.eyebrow)}
            title={t(gallery.collection.title)}
            description={t(gallery.collection.description)}
            align="left"
            className="max-w-2xl"
          />

          <div className="mt-10">
            <MasonryGallery />
          </div>
        </div>
      </section>

      <section className="bg-ivory-deep/60 py-14 lg:py-16">
        <div className="container-narrow">
          <Reveal>
            <p className="text-center text-[0.92rem] leading-relaxed text-charcoal/60">
              {t(gallery.note)}
            </p>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
