import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40" id="contact">
      <div className="cta-orb cta-orb-one" aria-hidden="true" />
      <div className="cta-orb cta-orb-two" aria-hidden="true" />
      <div className="wrap relative">
        <Reveal>
          <div className="mx-auto max-w-[900px] rounded-[2rem] border border-white/[.1] bg-white/[.035] px-6 py-16 text-center shadow-[0_30px_120px_rgba(0,0,0,.3)] backdrop-blur-xl md:px-14 md:py-20">
            <p className="eyebrow text-center">Begin with clarity</p>
            <h2 className="mx-auto mt-5 max-w-[760px] font-heading text-[clamp(2.15rem,5vw,4.35rem)] font-semibold leading-[1.02] tracking-[-.04em]">
              Find the transformation opportunity worth acting on first.
            </h2>
            <p className="mx-auto mt-6 max-w-[610px] text-[1.04rem] text-muted md:text-[1.12rem]">
              A focused executive conversation is enough to determine where AI can create measurable value, what it would take to implement, and whether Varekai is the right partner.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:hello@varekai.com?subject=Varekai%20Transformation%20Assessment" className="button">
                Start a conversation
              </a>
              <a href="#approach" className="button-secondary">
                Review our approach
              </a>
            </div>
            <p className="mt-8 font-mono text-[.68rem] uppercase tracking-[.15em] text-faint">Strategy · Implementation · Measured impact</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
