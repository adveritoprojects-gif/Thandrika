"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { HOME, SERVICES } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { useLocalizedHref } from "@/lib/useLocalizedHref";

export default function ServicesSection() {
  const { t } = useLanguage();
  const hrefFor = useLocalizedHref();

  return (
    <section id="services" className="bg-ivory-deep/60 py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow={t(HOME.services.eyebrow)}
          title={t(HOME.services.title)}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06} className="h-full">
              <ServiceCard
                service={service}
                ctaLabel={t(HOME.services.cta)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link href={hrefFor("/services")} className="btn-outline-dark group">
            {t(HOME.services.cta)}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
