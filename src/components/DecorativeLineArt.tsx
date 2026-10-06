/** Subtle traditional line motif — static SVG for parallax layering. */
export default function DecorativeLineArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 280"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d="M100 12c-28 42-62 78-62 128 0 38 28 68 62 68s62-30 62-68c0-50-34-86-62-128Z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.55"
      />
      <path
        d="M100 48c-18 26-38 48-38 82 0 24 17 42 38 42s38-18 38-42c0-34-20-56-38-82Z"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <circle cx="100" cy="130" r="3" fill="currentColor" opacity="0.35" />
      <path
        d="M40 220h120M70 240h60M85 260h30"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.3"
      />
    </svg>
  );
}
