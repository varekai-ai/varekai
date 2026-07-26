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

function Icon({ index }: { index: number }) {
  const icons = ["✦", "⌘", "◫", "↗", "◔", "⟳"];
  return <span className="service-icon" aria-hidden="true">{icons[index]}</span>;
}

function WaveField() {
  return (
    <div className="wave-field" aria-hidden="true">
      <div className="wave-glow" />
      <svg viewBox="0 0 900 520" role="presentation">
        <defs>
          <linearGradient id="waveA" x1="0" x2="1">
            <stop offset="0" stopColor="#0b2d62" stopOpacity="0" />
            <stop offset=".42" stopColor="#1373ff" stopOpacity=".65" />
            <stop offset="1" stopColor="#64b5ff" stopOpacity=".95" />
          </linearGradient>
          <linearGradient id="waveB" x1="0" x2="1">
            <stop offset="0" stopColor="#1564d8" stopOpacity=".05" />
            <stop offset="1" stopColor="#1a8cff" stopOpacity=".75" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="#2f8cff" opacity=".5" />
          </pattern>
        </defs>
        <path d="M-20 360 C150 220 280 250 410 330 S690 435 940 235" fill="none" stroke="url(#waveA)" strokeWidth="4" filter="url(#softGlow)" />
        <path d="M-20 405 C155 285 285 280 420 350 S710 435 940 285" fill="none" stroke="url(#waveB)" strokeWidth="2.2" />
        <path d="M-30 300 C125 205 260 210 390 285 S680 415 940 180 L940 520 L-30 520 Z" fill="url(#dots)" opacity=".7" />
        <path d="M-30 380 C160 250 305 315 450 385 S720 420 940 265 L940 520 L-30 520 Z" fill="url(#dots)" opacity=".45" />
        {[500, 570, 640, 705, 770, 825].map((x, i) => (
          <g key={x} opacity={0.45 + i * 0.08}>
            <line x1={x} y1={115 + (i % 3) * 45} x2={x} y2={300 + (i % 2) * 35} stroke="#2e8dff" strokeWidth="1" />
            <circle cx={x} cy={115 + (i % 3) * 45} r="3" fill="#8ac8ff" filter="url(#softGlow)" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Varekai home"><img src="/varekai-logo-horizontal.svg" alt="Varekai AI" className="brand-logo" /></a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a><a href="#process">Process</a><a href="#industries">Industries</a><a href="#about">About</a><a href="#resources">Resources</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Schedule Assessment</a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="hero-label">Practical AI transformation</p>
            <h1>Automation.<br /><span>Instantly.</span></h1>
            <p className="hero-lede">AI consulting that delivers measurable business results.</p>
            <p className="hero-body">We help organizations identify high-impact automation opportunities, implement practical AI solutions, and create lasting operational advantages.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">Schedule Your AI Assessment</a>
              <a className="text-button" href="#process"><span>▶</span> Watch Overview</a>
            </div>
          </div>
          <WaveField />
        </section>

        <section className="process-section section-band" id="process">
          <div className="section-title centered"><h2>The Varekai Process</h2><p>A proven framework for delivering automation that drives real impact.</p></div>
          <div className="process-grid">
            {process.map(([number, title, body], index) => (
              <article className="process-step" key={number}>
                <div className="process-icon">{["⌕", "▤", "⚙", "↗"][index]}</div>
                <div className="process-heading"><span>{number}</span><h3>{title}</h3></div>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-title centered"><h2>Our Services</h2><p>Practical AI solutions designed to streamline operations and accelerate growth.</p></div>
          <div className="services-grid">
            {services.map(([title, body], index) => (
              <article className="service-card" key={title}><Icon index={index} /><h3>{title}</h3><p>{body}</p><a href="#contact">Learn More <span>→</span></a></article>
            ))}
          </div>
        </section>

        <section className="industries-section section-band" id="industries">
          <div className="section-title centered"><h2>Industries We Serve</h2><p>Deep industry knowledge. Practical AI solutions.</p></div>
          <div className="industries-grid">
            {industries.map((industry, index) => <div className="industry" key={industry}><span>{["⌂", "♡", "♜", "▥", "▣", "▤"][index]}</span><strong>{industry}</strong></div>)}
          </div>
        </section>

        <section className="about-strip" id="about">
          <div><p className="hero-label">Built for operators</p><h2>Strategy that becomes a working system.</h2></div>
          <p>Varekai connects executive priorities to real implementation. We focus on practical systems your team can adopt, measurable outcomes leadership can see, and a roadmap that creates value beyond a single project.</p>
        </section>

        <section className="cta-section" id="contact">
          <div><h2>Ready to automate what matters?</h2><p>Schedule your AI assessment and discover opportunities to save time, reduce costs, and grow your business.</p></div>
          <a className="primary-button" href="mailto:hello@varekai.ai">Schedule Your AI Assessment</a>
        </section>
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
