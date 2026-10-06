/** Shared easing and timing for premium, editorial motion. */
export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

export const TRANSITION = {
  fast: { duration: 0.3, ease: EASE_EDITORIAL },
  medium: { duration: 0.55, ease: EASE_EDITORIAL },
  slow: { duration: 0.85, ease: EASE_EDITORIAL },
  reveal: { duration: 0.75, ease: EASE_EDITORIAL },
} as const;
