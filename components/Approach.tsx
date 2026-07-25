import { Reveal } from "./Reveal";

const stages = [
  {
    number: "01",
    timing: "Week 1",
    title: "Find the leverage",
    body: "We map the work as it actually happens, identify the friction costing the business most, and select the highest-confidence opportunity.",
    outcome: "A focused implementation brief tied to one measurable business result.",
  },
  {
    number: "02",
    timing: "Weeks 2–3",
    title: "Build into the business",
    body: "We design and implement inside the systems your team already uses, with leadership visibility and frontline feedback built into the process.",
    outcome: "A production-ready workflow that feels native instead of bolted on.",
  },
  {
    number: "03",
    timing: "Week 4",
    title: "Launch, measure, expand",
    body: "We put the solution into live operations, track the metric it was built to move, and create the roadmap for the next layer of value.",
    outcome: "Measured impact, documented adoption, and a clear path to scale.",
  },
];

export function Approach() {
  return (
    <section className="border-y border-white/[.06] bg-panel/70" id="approach">
      <div className="wrap">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div className="section-head mb-0">
              <p className="eyebrow">Our operating model</p>
              <h2>Strategy and execution, connected from day one.</h2>
            </div>
            <p className="max-w-[620px] text-[1.05rem] text-muted lg:justify-self-end">
              Varekai works like an embedded transformation team: senior enough to shape the decision, practical enough to build the system, and accountable enough to measure what changed.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {stages.map((stage, index) => (
            <Reveal key={stage.number}>
              <article className="stage premium-card flex h-full flex-col p-7 md:p-9">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[.2em] text-blue">{stage.number}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[.65rem] uppercase tracking-[.14em] text-faint">
                    {stage.timing}
                  </span>
                </div>
                <h3 className="font-heading text-[1.45rem] leading-tight text-[#f4f7fb]">{stage.title}</h3>
                <p className="mt-4 text-[.96rem] text-muted">{stage.body}</p>
                <div className="mt-auto pt-8">
                  <div className="mb-4 h-px bg-gradient-to-r from-blue/50 to-transparent" />
                  <p className="text-sm text-[#c9d3df]"><span className="text-blue">Outcome:</span> {stage.outcome}</p>
                </div>
                <span className="sr-only">Step {index + 1}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
