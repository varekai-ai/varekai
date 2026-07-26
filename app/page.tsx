const services = [
  ["AI Readiness", "Find the highest-value opportunities and build a practical roadmap."],
  ["Workflow Automation", "Remove repetitive work and connect the systems your team already uses."],
  ["Custom AI Assistants", "Deploy secure, role-specific copilots that improve speed and consistency."],
  ["Business Intelligence", "Turn fragmented operational data into clear decisions and measurable action."],
  ["Voice AI Solutions", "Improve response, qualification, scheduling, and communication at scale."],
  ["Continuous Optimization", "Measure adoption, improve performance, and expand responsibly."],
];

const process = [
  ["01", "Assess", "We uncover the automation opportunities with the clearest business value."],
  ["02", "Advise", "We create a prioritized roadmap aligned to your goals, systems, and timeline."],
  ["03", "Implement", "We build practical AI solutions that fit naturally into your operation."],
  ["04", "Impact", "We measure outcomes, optimize performance, and scale what works."],
];

const industries = [
  "Home Services",
  "Healthcare",
  "Construction",
  "Manufacturing",
  "Professional Services",
  "Financial Services",
];

function Wave() {
  const nodes = [570, 645, 715, 782, 842, 900, 950];

  return (
    <div className="wave" aria-hidden="true">
      <div className="wave-orb" />
      <svg viewBox="0 0 1000 610" role="presentation" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineA" x1="0" x2="1">
            <stop stopColor="#0a4dbe" stopOpacity="0" />
            <stop offset=".42" stopColor="#1488ff" />
            <stop offset="1" stopColor="#7ed7ff" />
          </linearGradient>
          <pattern id="mesh" width="15" height="15" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.35" fill="#258cff" opacity=".64" />
          </pattern>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path className="wave-fill one" d="M-30 390C155 222 305 265 430 340s307 135 600-104v420H-30z" fill="url(#mesh)" />
        <path className="wave-fill two" d="M-30 470c205-169 353-95 497-28s315 47 563-104v318H-30z" fill="url(#mesh)" />
        <path className="wave-line" d="M-30 405C150 245 295 268 430 352s325 123 600-120" fill="none" stroke="url(#lineA)" strokeWidth="4" filter="url(#glow)" />
        <path d="M-30 466c210-157 353-103 500-30s322 57 560-98" fill="none" stroke="#1689ff" strokeOpacity=".72" strokeWidth="2" />
        {nodes.map((x, index) => {
          const top = 130 + (index % 3) * 52;
          const bottom = 365 + (index % 2) * 38;
          return (
            <g key={x}>
              <line x1={x} y1={top} x2={x} y2={bottom} stroke="#258cff" strokeOpacity={0.3 + index * 0.07} />
              <circle cx={x} cy={top} r="3" fill="#9ddcff" filter="url(#glow)" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Varekai home">
          <img src="/varekai-logo-horizontal.svg" alt="Varekai — Automation. Instantly." />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#industries">Industries</a>
          <a href="#about">About</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button nav-cta" href="#contact">Schedule Assessment</a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Enterprise AI transformation</p>
            <h1>Automation.<br /><span>Instantly.</span></h1>
            <p className="hero-lede">AI consulting that delivers measurable business results.</p>
            <p className="hero-body">We help organizations identify high-impact automation opportunities, implement practical AI solutions, and create lasting operational advantages.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Schedule Your AI Assessment</a>
              <a className="watch" href="#process"><i aria-hidden="true">▶</i> Watch Overview</a>
            </div>
          </div>
          <Wave />
        </section>

        <section className="trust" aria-label="Trusted organizations">
          <p>Trusted by forward-thinking organizations</p>
          <div>
            <span>CHAMPION<small>HOME SERVICES</small></span>
            <span>The Wrench Group</span>
            <span>HRI<small>HOME RESTORATION</small></span>
            <span>Renewal<small>by Andersen</small></span>
            <span>ARS<small>RESCUE ROOTER</small></span>
          </div>
        </section>

        <section className="section band" id="process">
          <header className="section-title">
            <p className="eyebrow">How we create value</p>
            <h2>The Varekai Process</h2>
            <p>A focused framework for turning AI strategy into real operational impact.</p>
          </header>
          <div className="process-grid">
            {process.map(([number, title, body]) => (
              <article key={number}>
                <div className="step-icon">{number}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section services" id="services">
          <header className="section-title">
            <p className="eyebrow">Capabilities</p>
            <h2>Our Services</h2>
            <p>Practical AI systems designed to streamline operations and accelerate growth.</p>
          </header>
          <div className="services-grid">
            {services.map(([title, body], index) => (
              <article className="service-card" key={title}>
                <div className="service-icon" aria-hidden="true">{["✦", "⌘", "◫", "↗", "◔", "⟳"][index]}</div>
                <h3>{title}</h3>
                <p>{body}</p>
                <a href="#contact">Learn More <span>→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section band" id="industries">
          <header className="section-title">
            <p className="eyebrow">Industry focus</p>
            <h2>Industries We Serve</h2>
            <p>Deep operating knowledge. Practical AI solutions.</p>
          </header>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div className="industry" key={industry}>
                <span aria-hidden="true">{["⌂", "♡", "♜", "▥", "▣", "▤"][index]}</span>
                <strong>{industry}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div>
            <p className="eyebrow">Built for operators</p>
            <h2>Strategy that becomes a working system.</h2>
          </div>
          <p>Varekai connects executive priorities to real implementation. We focus on systems teams can adopt, outcomes leadership can measure, and a roadmap that creates value beyond a single project.</p>
        </section>

        <section className="cta" id="contact">
          <div>
            <h2>Ready to automate what matters?</h2>
            <p>Schedule your AI assessment and discover opportunities to save time, reduce costs, and grow your business.</p>
          </div>
          <a className="button primary" href="mailto:hello@varekai.ai">Schedule Your AI Assessment</a>
        </section>
      </main>

      <footer id="resources">
        <div className="footer-brand">
          <a className="brand" href="#top"><img src="/varekai-logo-horizontal.svg" alt="Varekai" /></a>
          <p>We assess, advise, implement, and optimize AI solutions that deliver measurable business impact.</p>
        </div>
        <div><h3>Company</h3><a href="#about">About Us</a><a href="#process">Our Process</a><a href="#contact">Careers</a><a href="#resources">Insights</a></div>
        <div><h3>Services</h3><a href="#services">AI Assessment</a><a href="#services">Automation</a><a href="#services">AI Assistants</a><a href="#services">Business Intelligence</a></div>
        <div><h3>Get in Touch</h3><a href="mailto:hello@varekai.ai">hello@varekai.ai</a><span>Dallas, Texas</span><a className="footer-button" href="#contact">Schedule Assessment</a></div>
        <div className="footer-bottom"><span>© 2026 Varekai AI, LLC. All rights reserved.</span><span>Privacy Policy &nbsp;&nbsp; Terms of Service</span></div>
      </footer>
    </div>
  );
}
