"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const rows = [
  ["Manual capacity recovered", "37 hrs / week"],
  ["Priority workflows identified", "6"],
  ["Highest-leverage opportunity", "Customer intake"],
  ["Expected launch window", "27 days"],
  ["Executive recommendation", "Proceed to implementation"],
];

const summary = [
  ["01", "Value case", "Where the economic upside is concentrated and how it should be measured."],
  ["02", "Build plan", "The systems, owners, dependencies, and sequence required to move into production."],
  ["03", "Adoption path", "How the new workflow reaches the team without creating operational drag."],
];

export function Readout() {
  const reduce = useReducedMotion();

  return (
    <section className="border-y border-white/[.06] bg-panel/70">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">What leadership receives</p>
            <h2>A decision-ready transformation blueprint.</h2>
            <p>Not a generic AI report. A practical view of the opportunity, the operating impact, and the path to production.</p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-white/[.1] bg-[#0a1120]/90 shadow-[0_28px_100px_rgba(0,0,0,.3)]">
              <div className="flex items-center justify-between gap-4 border-b border-white/[.08] px-5 py-4 font-mono text-[.68rem] uppercase tracking-[.12em] text-faint md:px-7">
                <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-blue shadow-[0_0_14px_rgba(91,176,230,.8)]" />Transformation assessment</span>
                <span>Executive readout</span>
              </div>
              <div className="p-5 md:p-8">
                {rows.map(([label, value], index) => (
                  <motion.div
                    className="grid gap-2 border-b border-white/[.07] py-5 last:border-0 sm:grid-cols-[1fr_auto] sm:items-center"
                    key={label}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                  >
                    <span className="text-sm text-muted">{label}</span>
                    <span className={index >= 2 ? "font-mono text-sm text-blue" : "font-heading text-xl text-[#f0f4f9]"}>{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {summary.map(([number, title, body]) => (
              <Reveal key={number}>
                <article className="premium-card h-full p-6 md:p-7">
                  <div className="flex gap-5">
                    <span className="font-mono text-xs tracking-[.18em] text-blue">{number}</span>
                    <div>
                      <h3 className="font-heading text-lg text-[#f0f4f9]">{title}</h3>
                      <p className="mt-2 text-sm text-muted">{body}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
