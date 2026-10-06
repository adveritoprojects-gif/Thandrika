import Reveal from "@/components/Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className = "",
  as = "h2",
}: Props) {
  const Heading = as;
  const isLight = tone === "light";

  return (
    <Reveal className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <span
        className={`eyebrow inline-flex items-center gap-3 ${
          isLight ? "text-gold-light" : "text-gold"
        }`}
      >
        <span
          aria-hidden
          className={`h-px w-8 ${isLight ? "bg-gold-light/50" : "bg-gold/50"}`}
        />
        {eyebrow}
        <span
          aria-hidden
          className={`h-px w-8 ${isLight ? "bg-gold-light/50" : "bg-gold/50"}`}
        />
      </span>

      <Heading
        className={`mt-5 text-balance text-[2rem] leading-[1.12] font-semibold sm:text-[2.5rem] lg:text-[3.1rem] ${
          isLight ? "text-ivory" : "text-maroon-dark"
        }`}
      >
        {title}
      </Heading>

      {description && (
        <p
          className={`mx-auto mt-5 max-w-2xl text-[1.02rem] leading-relaxed ${
            isLight ? "text-ivory/70" : "text-charcoal/70"
          } ${align === "left" ? "mx-0" : ""}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
