"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<typeof motion.div> & { children: ReactNode; delay?: number };
export function Reveal({ children, delay = 0, ...props }: Props) {
  const reduce = useReducedMotion();
  return <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .6, delay, ease: "easeOut" }} {...props}>{children}</motion.div>;
}
