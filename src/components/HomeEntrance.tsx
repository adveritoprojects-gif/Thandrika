"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import Emblem from "@/components/Emblem";
import { englishPathFromPathname } from "@/lib/routes";
import { SITE } from "@/lib/site";
import { EASE_EDITORIAL } from "@/lib/motion";

/**
 * Brief, non-blocking home entrance (~1.4s). Pointer-events-none throughout.
 */
export default function HomeEntrance() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const isHome = englishPathFromPathname(pathname) === "/";
  const [visible, setVisible] = useState(isHome && !reduce);

  useEffect(() => {
    if (!isHome || reduce) return;
    const timer = window.setTimeout(() => setVisible(false), 1450);
    return () => window.clearTimeout(timer);
  }, [isHome, reduce]);

  if (!isHome || !visible) return null;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center bg-maroon-dark/40 backdrop-blur-[2px]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.95, duration: 0.45, ease: EASE_EDITORIAL }}
      aria-hidden
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
      >
        <Emblem tone="light" className="h-14 w-14 sm:h-16 sm:w-16" />
      </motion.div>

      <motion.p
        className="mt-5 max-w-xs text-center font-display text-[1.15rem] leading-snug font-semibold tracking-wide text-ivory sm:text-[1.35rem]"
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.28, duration: 0.5, ease: EASE_EDITORIAL }}
      >
        {SITE.name}
      </motion.p>

      <motion.span
        className="eyebrow mt-3 text-[0.58rem] text-gold-light/85"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        {SITE.locality}
      </motion.span>
    </motion.div>
  );
}
