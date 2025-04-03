"use client";

import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Começa invisível e levemente deslocado
      animate={{ opacity: 1, y: 0 }} // Fica visível e volta à posição normal
      exit={{ opacity: 0, y: -20 }} // Some e sobe um pouco ao sair
      transition={{ duration: 0.5, ease: "easeInOut" }} // Suaviza a animação
    >
      {children}
    </motion.div>
  );
}
