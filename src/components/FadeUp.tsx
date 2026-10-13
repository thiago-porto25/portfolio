import { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeUpProps = { timeout?: number; children: ReactNode };

export default function FadeUp({ timeout, children }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: timeout || 1 }}
    >
      {children}
    </motion.div>
  );
}
