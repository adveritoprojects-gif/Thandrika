"use client";

import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { HOME, TESTIMONIALS, UI } from "@/lib/content";
import { useLanguage } from "@/lib/language";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory-deep/60 py-24 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow={t(HOME.testimonials.eyebrow)}
            title={t(HOME.testimonials.title)}
            className="max-w-2xl"
          />
          <Reveal>
            <span className="inline-flex items-center gap-2 border border-gold/40 bg-ivory px-3 py-2 text-[0.64rem] tracking-[0.18em] text-gold uppercase">
              {t(UI.placeholderTestimonials)}
            </span>
          </Reveal>
        </div>

        <p className="mt-4 max-w-xl text-sm text-charcoal/55">
          {t(HOME.testimonials.note)}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.name.en} delay={index * 0.08}>
              <figure className="relative flex h-full flex-col border border-gold/25 bg-ivory p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_30px_60px_-45px_rgba(42,7,16,0.8)]">
                <Quote
                  className="h-7 w-7 text-gold/60"
                  strokeWidth={1.2}
                  aria-hidden
                />
                <blockquote className="mt-4 flex-1 font-display text-[1.28rem] leading-snug text-maroon-dark italic">
                  {t(testimonial.quote)}
                </blockquote>
                <figcaption className="mt-6 border-t border-gold/25 pt-4">
                  <span className="block text-[0.92rem] font-medium text-charcoal">
                    {t(testimonial.name)}
                  </span>
                  <span className="mt-0.5 block text-[0.8rem] text-charcoal/55">
                    {t(testimonial.location)}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
