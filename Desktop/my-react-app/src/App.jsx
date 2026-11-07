import { useState } from 'react'
import './App.css'

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

const services = [
  {
    number: '01',
    title: 'Commercial construction',
    description:
      'Purpose-built spaces for the people and businesses moving your industry forward.',
  },
  {
    number: '02',
    title: 'Residential building',
    description:
      'Thoughtful homes, built with care, designed to feel like yours from day one.',
  },
  {
    number: '03',
    title: 'Renovation & fit-outs',
    description:
      'A fresh perspective on existing spaces, with craftsmanship in every detail.',
  },
  {
    number: '04',
    title: 'Project management',
    description:
      'One steady team keeping your project on track, on budget and moving forward.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Foreman home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <path d="M4 31V5h28v8H13v5h16v8H13v5H4Z" fill="currentColor" />
              <path d="M23 18h9v13h-9z" fill="#e99155" />
            </svg>
          </span>
          <span className="brand-name">foreman<span>.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>What we do</a>
          <a href="#about" onClick={closeMenu}>Our approach</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="mailto:hello@foreman.build" onClick={closeMenu}>
            Start a project <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span /> Built with purpose. Built together.</p>
            <h1>Good work.<br />Grounded in <em>trust.</em></h1>
            <p className="hero-copy">
              We bring good people together to build places that make life better.
              From first sketch to final handover, we make the complicated feel simple.
            </p>
            <div className="hero-actions">
              <a className="button button-accent" href="#projects">
                See what we build <ArrowIcon />
              </a>
              <a className="text-link hero-link" href="#about">
                Get to know us <ArrowIcon diagonal />
              </a>
            </div>
          </div>
          <div className="hero-caption">
            <span className="caption-line" />
            <span>Considered from the ground up</span>
          </div>
          <a className="hero-scroll" href="#services" aria-label="Scroll to our services">
            <span>Scroll to explore</span><span className="scroll-track" />
          </a>
        </section>

        <section className="intro section-wrap" aria-label="Foreman at a glance">
          <p className="eyebrow eyebrow-dark">A better way to build</p>
          <p className="intro-copy">
            We’re more than builders. We’re your <span>people on the ground</span>—
            bringing clarity, care and a little more humanity to every project.
          </p>
          <div className="intro-note">
            <span className="note-mark">F.</span>
            <p>Good partnerships build<br />great things.</p>
          </div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark">How we can help</p>
              <h2>Built around <em>you.</em></h2>
            </div>
            <p className="section-side-copy">
              The right expertise, the right people and a clear plan. Whatever
              you’re building, we’re in it with you.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <a className="service-card" href="#contact" key={service.number}>
                <span className="service-number">{service.number}</span>
                <span className="service-arrow"><ArrowIcon diagonal /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="approach" id="about">
          <div className="approach-image" role="img" aria-label="Builders working together on a construction site" />
          <div className="approach-content">
            <p className="eyebrow">The Foreman difference</p>
            <h2>Solid plans.<br />Straight talk.<br /><em>Good people.</em></h2>
            <p>
              Building can feel like a big undertaking. We think it should feel
              like a shared one. Our team brings practical experience, honest
              communication and genuine care to every conversation and every
              corner of the site.
            </p>
            <a className="text-link light-link" href="#contact">
              More about our approach <ArrowIcon />
            </a>
            <div className="approach-stats">
              <div><strong>15<span>+</span></strong><span>years building together</span></div>
              <div><strong>86</strong><span>projects brought to life</span></div>
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark">A few things we’ve built</p>
              <h2>Made to <em>matter.</em></h2>
            </div>
            <a className="text-link dark-link" href="mailto:hello@foreman.build">
              Talk to us about your project <ArrowIcon diagonal />
            </a>
          </div>
          <div className="project-grid">
            <article className="project-card project-large">
              <div className="project-image project-image-one" role="img" aria-label="Modern timber and glass home in a green landscape" />
              <div className="project-meta">
                <div><span>Residential</span><h3>The Ridge House</h3></div>
                <span className="project-location">North Shore · 2024</span>
              </div>
            </article>
            <article className="project-card project-small">
              <div className="project-image project-image-two" role="img" aria-label="Modern commercial office building exterior" />
              <div className="project-meta">
                <div><span>Commercial</span><h3>Common Ground</h3></div>
                <span className="project-location">City Centre · 2023</span>
              </div>
            </article>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">Your next chapter starts here</p>
            <h2>Got a good thing<br />in the <em>works?</em></h2>
            <p>Tell us what you’re thinking. We’re good listeners, and we’d love to hear about it.</p>
            <a className="button button-light" href="mailto:hello@foreman.build">
              Let’s talk about it <ArrowIcon diagonal />
            </a>
          </div>
          <span className="contact-mark" aria-hidden="true">F.</span>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home" aria-label="Foreman home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <path d="M4 31V5h28v8H13v5h16v8H13v5H4Z" fill="currentColor" />
              <path d="M23 18h9v13h-9z" fill="#e99155" />
            </svg>
          </span>
          <span className="brand-name">foreman<span>.</span></span>
        </a>
        <p>Good work. Good people. Built to last.</p>
        <a href="mailto:hello@foreman.build">hello@foreman.build</a>
        <span className="copyright">© 2026 Foreman Build Co.</span>
      </footer>
    </>
  )
}

export default App
