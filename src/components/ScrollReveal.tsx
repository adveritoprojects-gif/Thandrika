"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TRANSITION } from "@/lib/motion";

export type ScrollRevealVariant =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "scale-in";

const OFF = { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };

function hiddenFor(
  variant: ScrollRevealVariant,
  reduce: boolean,
  y: number,
): Record<string, number | string> {
  if (reduce) return OFF;
  switch (variant) {
    case "fade-in":
      return { opacity: 0, y: y * 0.35, x: 0, scale: 1, filter: "blur(6px)" };
    case "slide-left":
      return { opacity: 0, x: 28, y: 0, scale: 1, filter: "blur(0px)" };
    case "scale-in":
      return { opacity: 0, y: y * 0.5, x: 0, scale: 0.97, filter: "blur(4px)" };
    case "fade-up":
    default:
      return { opacity: 0, y, x: 0, scale: 1, filter: "blur(0px)" };
  }
}

export default function ScrollReveal({
  children,
  delay = 0,
  y = 26,
  className = "",
  once = true,
  variant = "fade-up",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  variant?: ScrollRevealVariant;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={hiddenFor(variant, Boolean(reduce), y)}
      whileInView={OFF}
      viewport={{ once, margin: "-80px" }}
      transition={{ ...TRANSITION.reveal, delay }}
    >
      {children}
    </motion.div>
  );
}
