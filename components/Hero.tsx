"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const proofPoints = [
  ["2–4 weeks", "to first production workflow"],
  ["Human-led", "strategy and implementation"],
  ["Built to scale", "from pilot to operating model"],
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <>
      <section id="top" className="hero-shell relative flex min-h-screen items-center overflow-hidden pt-[92px]">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <motion.div
          className="absolute -right-[10%] top-1/2 w-[720px] max-w-[66vw] -translate-y-1/2 opacity-50"
          initial={reduce ? false : { opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image src="/hero-mark.svg" alt="" width={720} height={720} priority />
        </motion.div>

        <motion.div
          className="wrap relative z-10 w-full py-20"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-[780px]">
            <div className="hero-kicker">
              <span className="hero-kicker-dot" />
              AI transformation for ambitious operators
            </div>

            <h1 className="mt-7 max-w-[760px] font-heading text-[clamp(3rem,7vw,6.4rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
              Turn AI into an <span className="text-gradient">operating advantage.</span>
            </h1>

            <p className="mt-7 max-w-[650px] text-[clamp(1.05rem,1.7vw,1.3rem)] leading-8 text-[#aeb6c8]">
              Varekai helps leadership teams identify the right opportunities, redesign critical workflows, and deploy practical AI systems that create measurable business impact.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a className="button" href="#contact">Start an AI assessment</a>
              <a className="button-secondary" href="#approach">Explore our approach</a>
            </div>

            <div className="mt-16 grid max-w-[800px] gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
              {proofPoints.map(([value, label]) => (
                <div key={value} className="bg-[#0b1020]/90 px-6 py-5 backdrop-blur-xl">
                  <div className="font-heading text-lg font-semibold text-white">{value}</div>
                  <div className="mt-1 text-sm leading-5 text-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      <ScanDivider />
    </>
  );
}

function ScanDivider() {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-[90px] items-center justify-center px-8" aria-hidden="true">
      <svg className="max-w-[1180px]" viewBox="0 0 1180 40" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line" x1="0" x2="1">
            <stop stopColor="#1e6fb8" stopOpacity="0" />
            <stop offset=".5" stopColor="#5bb0e6" stopOpacity=".9" />
            <stop offset="1" stopColor="#1e6fb8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0"
          y1="20"
          x2="1180"
          y2="20"
          stroke="url(#line)"
          strokeWidth="1.5"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
