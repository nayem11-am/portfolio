import Image from "next/image";
import ScrollReset from "./scroll-reset";
import MobileNav from "./mobile-nav";

const technologies = [
  { title: "Frontend", items: "React · Next.js · TypeScript · Tailwind CSS" },
  { title: "Backend", items: "Node.js · Express.js · Python · REST APIs" },
  { title: "Data & AI", items: "Machine Learning · Data Analysis · Explainable AI" },
  { title: "Tools & infrastructure", items: "PostgreSQL · Prisma · Cloudinary · Git · Vercel · Cloud deployment" },
];

const interests = [
  "Applied AI", "Product development", "Modern web architecture", "Automation",
  "Developer tools", "Business software", "Human-centered technology",
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      <ScrollReset />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Nayem Chowdhury, home">
          <span className="wordmark-mark">N</span>
          <span className="wordmark-name">Nayem Chowdhury</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#technologies">Technologies</a>
          <a href="#pleron">Pleron Labs</a>
          <a className="nav-contact" href="#contact">Contact <Arrow /></a>
        </nav>
        <MobileNav />
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> SOFTWARE DEVELOPER <span className="eyebrow-divider">/</span> FOUNDER</p>
          <h1>Building useful<br />things for the <em>real world.</em></h1>
          <p className="hero-intro">I’m Nayem, a developer and founder from Bangladesh. I turn ideas and practical problems into thoughtful digital products.</p>
          <p className="hero-detail">Working across modern web development, backend systems and applied AI—guided by the problem, not the trend.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#about">A little about me <span>↓</span></a>
            <a className="text-link" href="#contact">Get in touch <Arrow /></a>
          </div>
          <div className="hero-location"><span className="location-line" /> BASED IN BANGLADESH</div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image
              src="/image/WhatsApp%20Image%202026-09-12%20at%2011.31.18%20AM.jpeg"
              alt="Portrait of Nayem Chowdhury"
              fill
              priority
              sizes="(max-width: 760px) 78vw, 36vw"
              className="portrait"
            />
          </div>
          <div className="portrait-caption"><span>NA YEM CHOWDHURY</span><span>DEVELOPER · FOUNDER</span></div>
          <span className="portrait-stamp">IDEAS<br />INTO<br /><i>USEFUL</i></span>
        </div>
        <div className="hero-bottom"><span>INDEPENDENT BY NATURE</span></div>
      </section>

      <section className="intro-band" id="about">
        <div className="shell intro-grid">
          <p className="section-label">01 <span>—</span> A LITTLE ABOUT ME</p>
          <div className="intro-content">
            <h2>Curious about how things work.<br /><em>More curious about what they can do.</em></h2>
            <div className="intro-columns">
              <p>I enjoy taking an idea from the first question to something people can actually use. That means understanding the problem, choosing a sensible approach, and building a product that holds up beyond the first release.</p>
              <p>I’m interested in modern web development, product thinking and the ways AI and machine learning can address real problems. I’m still learning, still building, and always looking for the next useful question to explore.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section shell" id="experience">
        <div className="experience-top">
          <p className="section-label">02 <span>—</span> HANDS-ON EXPERIENCE</p>
          <p className="experience-note">A little context on the work, while keeping client projects private.</p>
        </div>
        <div className="experience-number"><span>10</span><sup>+</sup></div>
        <div className="experience-description">
          <h2>Websites &<br />digital products</h2>
          <p>Across my development work, I’ve contributed to more than ten websites and digital products—from business websites and e-commerce to custom web applications and software solutions.</p>
        </div>
        <div className="experience-rule"><span>MADE WITH CARE</span><span>DETAILS KEPT PRIVATE</span></div>
      </section>

      <section className="technology-section" id="technologies">
        <div className="shell technology-grid">
          <div className="technology-heading">
            <p className="section-label">03 <span>—</span> THE TOOLKIT</p>
            <h2>Tools are choices.<br /><em>The problem comes first.</em></h2>
            <p className="technology-note">These are some of the tools I reach for, depending on what a project needs.</p>
          </div>
          <div className="technology-list">
            {technologies.map((group, index) => (
              <div className="technology-row" key={group.title}>
                <span className="technology-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section shell" id="pleron">
        <div className="founder-content">
          <p className="section-label">04 <span>—</span> BUILDING AS A FOUNDER</p>
          <h2>Making room for<br />ideas to become <em>real.</em></h2>
          <p className="founder-copy">I founded <strong>Pleron Labs</strong> to work at the intersection of technology, products and business problems. I like figuring out what should be built, then shaping it into practical software—from custom applications and business tools to e-commerce and applied AI.</p>
          <a className="text-link" href="https://pleronlabs.com/" target="_blank" rel="noreferrer">More about Pleron Labs <Arrow /></a>
        </div>
        <div className="founder-aside">
          <Image
            src="/image/WhatsApp%20Image%202026-01-24%20at%208.07.33%20AM.jpeg"
            alt="Pleron Labs — Software and AI Systems"
            width={1000}
            height={1000}
            sizes="(max-width: 640px) 84vw, (max-width: 900px) 145px, 180px"
            className="founder-image"
          />
        
        </div>
      </section>

      <section className="builder-section">
        <div className="shell builder-grid">
          <p className="section-label">05 <span>—</span> HOW I THINK</p>
          <div>
            <h2>I don’t just enjoy writing code.<br /><em>I like understanding why it should exist.</em></h2>
            <p className="builder-copy">Good product work starts before the editor opens: understand the people and the problem, choose an appropriate approach, then build, test and improve. The learning is part of the work.</p>
            <div className="process-line"><span>UNDERSTAND</span><i>→</i><span>MAKE</span><i>→</i><span>IMPROVE</span><i>→</i><span>LEARN</span></div>
          </div>
        </div>
      </section>

      <section className="explore-section shell">
        <div className="explore-heading">
          <p className="section-label">06 <span>—</span> OPEN TABS</p>
          <h2>Currently<br /><em>exploring.</em></h2>
          <p>Questions and areas I keep coming back to. Not a checklist—just things that make me curious.</p>
        </div>
        <ul className="interest-list">
          {interests.map((interest, index) => <li key={interest}><span>0{index + 1}</span>{interest}<Arrow /></li>)}
        </ul>
      </section>

      <section className="philosophy-section">
        <div className="shell philosophy-inner">
          <p className="section-label">A SIMPLE PRINCIPLE</p>
          <h2>Build useful <em>things.</em></h2>
          <p>The most interesting part of development is turning a real problem or unfinished idea into something useful.</p>
          <span className="philosophy-star" aria-hidden="true">✳</span>
        </div>
      </section>

      <section className="timeline-section shell">
        <div className="timeline-heading"><p className="section-label">07 <span>—</span> EXPERIENCE</p><h2>Where I’m<br /><em>building.</em></h2></div>
        <div className="timeline-entry">
          <span className="timeline-marker" />
          <div className="timeline-meta"><span>FOUNDER</span><span>BANGLADESH</span></div>
          <h3>Pleron Labs</h3>
          <p>Building software products, working with clients and exploring practical applications of modern technology.</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <p className="section-label">08 <span>—</span> SAY HELLO</p>
          <h2>Have an idea<br />worth <em>building?</em></h2>
          <div className="contact-bottom">
            <p>Whether you’re shaping a product, exploring an idea or solving a problem with software, I’d be glad to hear from you.</p>
            <div className="contact-links">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chowduhrynayem1468%40gmail.com" target="_blank" rel="noreferrer">
                Email <Arrow />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href="https://pleronlabs.com/" target="_blank" rel="noreferrer">Pleron Labs <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <a className="footer-name" href="#top">Nayem Chowdhury<span>.</span></a>
        <span>SOFTWARE DEVELOPER & FOUNDER<br />BANGLADESH</span>
        <span>© {new Date().getFullYear()} NAYEM CHOWDHURY</span>
      </footer>
      <a className="back-top" href="#top" aria-label="Back to top">↑</a>
    </main>
  );
}
