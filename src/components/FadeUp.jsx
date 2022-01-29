import { motion } from "framer-motion";

export default function FadeUp({ timeout, children }) {
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
