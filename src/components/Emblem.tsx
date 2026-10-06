type EmblemProps = {
  className?: string;
  /** "light" for dark backgrounds, "dark" for ivory backgrounds */
  tone?: "light" | "dark";
  title?: string;
};

export default function Emblem({
  className = "h-11 w-11",
  tone = "dark",
  title,
}: EmblemProps) {
  const gold = tone === "light" ? "#E3C88A" : "#B08D3E";
  const goldSoft = tone === "light" ? "rgba(227,200,138,0.55)" : "rgba(176,141,62,0.5)";
  const core = "#5A1220";
  const petals = Array.from({ length: 16 });

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      <defs>
        <g id="emblem-petal">
          <path
            d="M24 3.4c1.5 1.9 2.3 3.6 2.3 5.2 0 1.6-.8 3-2.3 4.6-1.5-1.6-2.3-3-2.3-4.6 0-1.6.8-3.3 2.3-5.2Z"
            fill={gold}
            opacity="0.9"
          />
        </g>
      </defs>

      {petals.map((_, i) => (
        <use
          key={i}
          href="#emblem-petal"
          transform={`rotate(${i * 22.5} 24 24)`}
        />
      ))}

      <circle cx="24" cy="24" r="17.5" fill={core} stroke={gold} strokeWidth="1.2" />
      <circle
        cx="24"
        cy="24"
        r="14"
        stroke={goldSoft}
        strokeWidth="0.7"
        strokeDasharray="1.6 2.4"
      />
      <text
        x="24"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="15.5"
        fill={gold}
        fontFamily="'Noto Serif Malayalam', 'Cormorant Garamond', Georgia, serif"
      >
        ॐ
      </text>
    </svg>
  );
}
