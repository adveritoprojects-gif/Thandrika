import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  objectPosition = "50% 40%",
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[68svh] items-end overflow-hidden bg-maroon-dark lg:min-h-[76svh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-maroon-dark via-maroon-dark/75 to-maroon-dark/25"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-maroon-dark via-maroon-dark/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl"
      />

      <div className="container-site relative z-10 pb-16 pt-36 lg:pb-24 lg:pt-44">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-3 text-gold-light">
            <span aria-hidden className="h-px w-10 bg-gold-light/60" />
            {eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl text-[2.6rem] leading-[1.04] font-semibold text-ivory text-shadow-dark sm:text-[3.4rem] lg:text-[4.4rem]">
            {title}
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal delay={0.16}>
            <p className="eyebrow mt-5 text-gold-light">{subtitle}</p>
          </Reveal>
        )}

        {description && (
          <Reveal delay={0.24}>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ivory/75">
              {description}
            </p>
          </Reveal>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
    </section>
  );
}
