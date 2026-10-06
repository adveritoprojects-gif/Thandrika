"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_EDITORIAL } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.996 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.32, ease: EASE_EDITORIAL }}
    >
      {children}
    </motion.div>
  );
}
