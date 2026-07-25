import { Reveal } from "./Reveal";

const services = [
  {
    number: "01",
    title: "AI strategy and readiness",
    body: "Executive alignment, operational assessment, use-case prioritization, and a sequenced roadmap grounded in business value and implementation reality.",
    signal: "Know where AI belongs — and where it does not.",
  },
  {
    number: "02",
    title: "Workflow automation",
    body: "Production-grade agents, integrations, and automations designed around the way your teams, customers, and systems already operate.",
    signal: "Turn repetitive work into dependable infrastructure.",
  },
  {
    number: "03",
    title: "Revenue transformation",
    body: "AI-enabled improvements across lead response, sales execution, customer experience, retention, and management visibility.",
    signal: "Improve speed, consistency, and conversion.",
  },
  {
    number: "04",
    title: "Adoption and governance",
    body: "Operating standards, team enablement, measurement, and executive oversight that keep transformation useful, responsible, and scalable.",
    signal: "Make the change durable after launch.",
  },
];

export function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div className="section-head mb-0">
              <p className="eyebrow">Capabilities</p>
              <h2>From first opportunity to enterprise operating model.</h2>
            </div>
            <p className="max-w-[520px] text-[1.02rem] text-muted lg:justify-self-end">
              We combine advisory depth with implementation ownership, so recommendations do not die in a deck and technology does not get separated from the business outcome.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid border-l border-t border-white/[.08] md:grid-cols-2">
          {services.map((service) => (
            <Reveal key={service.number}>
              <article className="group relative h-full overflow-hidden border-b border-r border-white/[.08] p-8 transition duration-300 hover:bg-white/[.025] md:p-10 lg:p-12">
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-blue to-transparent transition duration-500 group-hover:scale-x-100" />
                <span className="font-mono text-xs tracking-[.2em] text-blue">{service.number}</span>
                <h3 className="mt-8 max-w-[420px] font-heading text-2xl leading-tight text-[#f3f6fb]">{service.title}</h3>
                <p className="mt-4 max-w-[500px] text-[.96rem] text-muted">{service.body}</p>
                <p className="mt-10 text-sm font-medium text-[#cbd6e3]">{service.signal}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
