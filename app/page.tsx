const services = [
  ["AI Readiness", "Identify the highest-value opportunities and build a practical automation roadmap."],
  ["Workflow Automation", "Remove repetitive work and connect the systems your team already uses."],
  ["Custom AI Assistants", "Give teams secure, role-specific copilots that improve speed and consistency."],
  ["Business Intelligence", "Turn fragmented operational data into clear decisions and measurable action."],
  ["Voice AI Solutions", "Improve customer response, qualification, scheduling, and communication at scale."],
  ["Continuous Optimization", "Measure adoption, improve performance, and expand automation responsibly."],
];

const process = [
  ["01", "Assess", "We evaluate your operations and identify the automation opportunities with the clearest business value."],
  ["02", "Advise", "We create a prioritized roadmap aligned to your goals, systems, resources, and timeline."],
  ["03", "Implement", "We build and deploy practical AI solutions that fit naturally into the way your team works."],
  ["04", "Impact", "We measure outcomes, improve performance, and create a clear path for continued expansion."],
];

const industries = ["Home Services", "Healthcare", "Construction", "Manufacturing", "Professional Services", "Financial Services"];
const trusted = ["CHAMPION\nHOME SERVICES", "The Wrench\nGroup", "HRI\nHOME RESTORATION", "Renewal\nby Andersen", "ARS\nRESCUE ROOTER"];

function Icon({ index }: { index: number }) {
  const icons = ["✦", "⌘", "◫", "↗", "◔", "⟳"];
  return <span className="service-icon" aria-hidden="true">{icons[index]}</span>;
}

function WaveField() {
  return (
    <div className="wave-field" aria-hidden="true">
      <div className="wave-glow" />
      <svg viewBox="0 0 1000 620" role="presentation" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="waveA" x1="0" x2="1"><stop offset="0" stopColor="#073279" stopOpacity="0" /><stop offset=".44" stopColor="#087cff" stopOpacity=".72" /><stop offset="1" stopColor="#7dd0ff" stopOpacity="1" /></linearGradient>
          <linearGradient id="waveB" x1="0" x2="1"><stop offset="0" stopColor="#0b52c7" stopOpacity=".04" /><stop offset="1" stopColor="#158fff" stopOpacity=".9" /></linearGradient>
          <radialGradient id="dotFade"><stop offset="0" stopColor="#53b4ff" stopOpacity=".9" /><stop offset="1" stopColor="#0969dc" stopOpacity=".12" /></radialGradient>
          <filter id="softGlow"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          <pattern id="dots" width="15" height="15" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.45" fill="#2f91ff" opacity=".72" /></pattern>
        </defs>
        <path d="M-60 405 C135 215 300 260 455 345 S760 485 1060 230" fill="none" stroke="url(#waveA)" strokeWidth="5" filter="url(#softGlow)" />
        <path d="M-70 465 C120 315 310 310 470 388 S770 490 1060 308" fill="none" stroke="url(#waveB)" strokeWidth="2.5" />
        <path d="M-90 330 C115 195 285 225 445 315 S760 470 1080 165 L1080 660 L-90 660 Z" fill="url(#dots)" opacity=".82" />
        <path d="M-80 430 C130 270 330 360 490 430 S790 470 1080 285 L1080 660 L-80 660 Z" fill="url(#dots)" opacity=".5" />
        {[520, 590, 655, 720, 780, 835, 890, 940].map((x, i) => {
          const top = 95 + (i % 4) * 48;
          const bottom = 330 + (i % 3) * 30;
          return <g key={x} opacity={0.5 + i * 0.055}><line x1={x} y1={top} x2={x} y2={bottom} stroke="#2f92ff" strokeWidth="1" /><circle cx={x} cy={top} r="3.2" fill="#a8ddff" filter="url(#softGlow)" /></g>;
        })}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Varekai home"><img src="/varekai-logo-horizontal.svg" alt="Varekai AI" className="brand-logo" /></a>
        <nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#process">Process</a><a href="#industries">Industries</a><a href="#about">About</a><a href="#resources">Resources</a><a href="#contact">Contact</a></nav>
        <a className="nav-cta" href="#contact"><span aria-hidden="true">▣</span> Schedule Assessment</a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <h1>Automation.<br /><span>Instantly.</span></h1>
            <p className="hero-lede">AI consulting that delivers measurable business results.</p>
            <p className="hero-body">We help organizations identify high-impact automation opportunities, implement practical AI solutions, and create lasting operational advantages.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact"><span aria-hidden="true">▣</span> Schedule Your AI Assessment</a>
              <a className="text-button" href="#process"><span className="play">▶</span> Watch Overview</a>
            </div>
          </div>
          <WaveField />
        </section>

        <section className="trusted-strip" aria-label="Trusted organizations">
          <p>Trusted by forward-thinking organizations</p>
          <div>{trusted.map((name) => <span key={name}>{name.split("\n").map((line) => <b key={line}>{line}</b>)}</span>)}</div>
        </section>

        <section className="process-section section-band" id="process">
          <div className="section-title centered"><h2>The Varekai Process</h2><p>A proven framework for delivering automation that drives real impact.</p></div>
          <div className="process-grid">{process.map(([number, title, body], index) => <article className="process-step" key={number}><div className="process-icon">{["⌕", "▤", "⚙", "↗"][index]}</div><div className="process-heading"><span>{number}</span><h3>{title}</h3></div><p>{body}</p></article>)}</div>
        </section>

        <section className="services-section" id="services">
          <div className="section-title centered"><h2>Our Services</h2><p>Practical AI solutions designed to streamline operations and accelerate growth.</p></div>
          <div className="services-grid">{services.map(([title, body], index) => <article className="service-card" key={title}><Icon index={index} /><h3>{title}</h3><p>{body}</p><a href="#contact">Learn More <span>→</span></a></article>)}</div>
        </section>

        <section className="industries-section section-band" id="industries">
          <div className="section-title centered"><h2>Industries We Serve</h2><p>Deep industry knowledge. Practical AI solutions.</p></div>
          <div className="industries-grid">{industries.map((industry, index) => <div className="industry" key={industry}><span>{["⌂", "♡", "♜", "▥", "▣", "▤"][index]}</span><strong>{industry}</strong></div>)}</div>
        </section>

        <section className="about-strip" id="about"><div><p className="hero-label">Built for operators</p><h2>Strategy that becomes a working system.</h2></div><p>Varekai connects executive priorities to real implementation. We focus on practical systems your team can adopt, measurable outcomes leadership can see, and a roadmap that creates value beyond a single project.</p></section>
        <section className="cta-section" id="contact"><div><h2>Ready to automate what matters?</h2><p>Schedule your AI assessment and discover opportunities to save time, reduce costs, and grow your business.</p></div><a className="primary-button" href="mailto:hello@varekai.ai">Schedule Your AI Assessment</a></section>
      </main>

      <footer id="resources">
        <div className="footer-brand"><a className="brand" href="#top"><img src="/varekai-logo-horizontal.svg" alt="Varekai AI" className="brand-logo" /></a><p>We help organizations assess, advise, implement, and optimize AI solutions that deliver measurable business impact.</p></div>
        <div><h3>Company</h3><a href="#about">About Us</a><a href="#process">Our Process</a><a href="#contact">Careers</a><a href="#resources">Insights</a></div>
        <div><h3>Services</h3><a href="#services">AI Assessment</a><a href="#services">Automation</a><a href="#services">AI Assistants</a><a href="#services">Business Intelligence</a></div>
        <div><h3>Get in Touch</h3><a href="mailto:hello@varekai.ai">hello@varekai.ai</a><span>Dallas, Texas</span><a className="footer-button" href="#contact">Schedule Assessment</a></div>
        <div className="footer-bottom"><span>© 2026 Varekai AI, LLC. All rights reserved.</span><span>Privacy Policy &nbsp;&nbsp; Terms of Service</span></div>
      </footer>
    </div>
  );
}
