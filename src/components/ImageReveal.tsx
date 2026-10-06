"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_EDITORIAL, TRANSITION } from "@/lib/motion";

export default function ImageReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-ivory-deep via-parchment to-maroon/20"
        variants={{
          hidden: { x: "-5%" },
          shown: { x: "105%" },
        }}
        transition={{ duration: 1.05, ease: EASE_EDITORIAL }}
      />
      <motion.div
        variants={{
          hidden: { scale: 1.04, opacity: 0.85 },
          shown: { scale: 1, opacity: 1 },
        }}
        transition={TRANSITION.slow}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
