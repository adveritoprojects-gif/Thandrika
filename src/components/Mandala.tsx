export default function Mandala({
  className = "",
  strokeWidth = 1,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  const petals = Array.from({ length: 24 });
  const inner = Array.from({ length: 12 });

  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="120" cy="120" r="116" opacity="0.5" />
      <circle cx="120" cy="120" r="96" opacity="0.35" />
      <circle
        cx="120"
        cy="120"
        r="76"
        opacity="0.4"
        strokeDasharray="3 6"
      />
      <circle cx="120" cy="120" r="44" opacity="0.55" />

      {petals.map((_, i) => (
        <path
          key={`p${i}`}
          d="M120 12c9 22 13 42 13 58 0 16-4.5 31-13 46-8.5-15-13-30-13-46 0-16 4-36 13-58Z"
          opacity="0.35"
          transform={`rotate(${i * 15} 120 120)`}
        />
      ))}

      {inner.map((_, i) => (
        <circle
          key={`c${i}`}
          cx="120"
          cy="44"
          r="3.4"
          opacity="0.5"
          transform={`rotate(${i * 30} 120 120)`}
        />
      ))}

      <path
        d="M120 76c8 12 12 24 12 34s-4 20-12 30c-8-10-12-19-12-30s4-22 12-34Z"
        opacity="0.6"
      />
    </svg>
  );
}
