import { useState, useEffect } from "react";
import {
  FiBriefcase,
  FiTrendingUp,
  FiAward,
  FiCode,
  FiBookOpen,
  FiStar,
  FiBox,
  FiCpu,
  FiUsers,
  FiTarget,
  FiLayers,
  FiGlobe,
  FiChevronDown,
  FiMail,
  FiX,
  FiSend,
  FiCheck,
  FiDownload,
  FiLinkedin,
  FiArrowUp,
  FiGithub,
} from "react-icons/fi";
import {MASTER_DATA} from "./util";

function Accordion({
  title,
  subtitle,
  icon,
  children,
  defaultOpen = false,
  badge,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`accordion ${isOpen ? "accordion-open" : ""}`}>
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="accordion-header-left">
          {icon && <span className="accordion-icon">{icon}</span>}
          <div>
            <span className="accordion-title">{title}</span>
            {subtitle && <span className="accordion-subtitle">{subtitle}</span>}
          </div>
        </div>
        <div className="accordion-header-right">
          {badge && <span className="accordion-badge">{badge}</span>}
          <FiChevronDown
            className={`accordion-chevron ${isOpen ? "rotated" : ""}`}
          />
        </div>
      </button>
      <div className={`accordion-body ${isOpen ? "expanded" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div >
  );
}

const VISITOR_KEY = "resume_visitor_logged";

function VisitorModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const logged = sessionStorage.getItem(VISITOR_KEY);
    if (!logged) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSending(true);

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_3yyhwcu",
          template_id: "template_3itow0v",
          user_id: "cYreBRZ9WXblnjkN5",
          template_params: {
            from_name: name || "Anonymous Visitor",
            from_email: email,
            to_email: "sunilambaljeri6697@gmail.com",
            visited_at: new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            }),
            message: `${name || "Someone"}(${email}) viewed your resume portfolio at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST.`,
          },
        }),
      });

      if (res.ok) {
        setSent(true);
        sessionStorage.setItem(VISITOR_KEY, "true");
      } else {
        const fallbackSuccess = sendViaMailto(email, name);
        if (!fallbackSuccess) {
          setError("Something went wrong. Please try again.");
        } else {
          setSent(true);
          sessionStorage.setItem(VISITOR_KEY, "true");
        }
      }
    } catch {
      const fallbackSuccess = sendViaMailto(email, name);
      if (!fallbackSuccess) {
        setError("Network error. Please try again.");
      } else {
        setSent(true);
        sessionStorage.setItem(VISITOR_KEY, "true");
      }
    }
    setSending(false);
  };

  const sendViaMailto = (visitorEmail, visitorName) => {
    const subject = encodeURIComponent("New visitor on your resume portfolio");
    const body = encodeURIComponent(
      `${visitorName || "Someone"} (${visitorEmail}) viewed your resume portfolio at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST.`
    );
    window.open(
      `mailto:sunilambaljeri6697@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    sessionStorage.setItem(VISITOR_KEY, "true");
    return true;
  };

  const handleSkip = () => {
    sessionStorage.setItem(VISITOR_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={handleSkip}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={handleSkip}
        >
          <FiX />
        </button>

        {!sent ? (
          <>
            <div className="modal-icon-wrap">
              <FiMail className="modal-icon" />
            </div>
            <h3 className="modal-title">Welcome to my portfolio!</h3>
            <p className="modal-desc">
              I'd love to know who's visiting. Please share your email.
            </p>
            <form
              onSubmit={handleSubmit}
              className="modal-form"
            >
              <input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="modal-input"
              />
              <input
                type="email"
                placeholder="Your email address *"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className={`modal-input ${error ? "modal-input-error" : ""}`}
                required
              />
              {error && <p className="modal-error">{error}</p>}
              <button
                type="submit"
                className="modal-submit"
                disabled={sending}
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend /> Say Hello
                  </>
                )}
              </button>
            </form>
            <button
              className="modal-skip"
              onClick={handleSkip}
            >
              Skip & view portfolio →
            </button>
          </>
        ) : (
          <div className="modal-success">
            <div className="modal-success-icon">
              <FiCheck />
            </div>
            <h3 className="modal-title">Thank you!</h3>
            <p className="modal-desc">
              Your visit has been noted. Enjoy exploring my portfolio.
            </p>
            <button
              className="modal-submit"
              onClick={() => setIsOpen(false)}
            >
              Explore Portfolio →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ id, title, subtitle, icon, children }) {
  return (
    <section
      className="portfolio-section"
      id={id}
    >
      <div className="section-header">
        <div className="section-icon">{icon}</div>
        <div>
          <h2 className="section-heading">{title}</h2>
          <p className="section-subheading">{subtitle}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
      <div className="hero-inner">
        <div className="hero-info">
          <span className="hero-label">Hello, I'm</span>
          <h1 className="hero-name">{MASTER_DATA.name}</h1>
          <p className="hero-title">{MASTER_DATA.title}</p>
          <p className="hero-summary">{MASTER_DATA.summary.split("\n\n")[0]}</p>
          <div className="hero-contact-row">
            <a
              href={"mailto:" + MASTER_DATA.email}
              className="hero-contact-link"
            >
              <FiBriefcase /> {MASTER_DATA.email}
            </a>
            <a
              href={MASTER_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-contact-link"
            >
              <FiUsers /> LinkedIn
            </a>
          </div>
          <div className="hero-stats-row">
            <StatCard
              value="7+"
              label="Years Experience"
            />
            <StatCard
              value="40K+"
              label="Users Served"
            />
            <StatCard
              value="10+"
              label="Products Built"
            />
            <StatCard
              value="5"
              label="Awards Won"
            />
          </div>
          <div className="hero-cta">
            <a
              onClick={onDownload}
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FiBox /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <span className="stat-card-value">{value}</span>
      <span className="stat-card-label">{label}</span>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="about-grid">
      {MASTER_DATA.summary
        .split("\n\n")
        .filter((p) => p.trim())
        .map((p, i) => {
          const parts = p.split(/(\*\*[^*]+\*\*)/g);
          return (
            <p
              key={i}
              className="about-paragraph"
            >
              {parts.map((part, j) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong
                      key={j}
                      className="highlight"
                    >
                      {part.slice(2, -2)}
                    </strong>
                  );
                }
                return part;
              })}
            </p>
          );
        })}
    </div>
  );
}

function CompetenciesSection() {
  const { coreCompetencies } = MASTER_DATA;
  return (
    <div className="competencies-grid">
      <CompetencyCard
        title="Product Management"
        icon={<FiTarget />}
        items={coreCompetencies.productManagement}
        color="blue"
      />
      <CompetencyCard
        title="Technical Leadership"
        icon={<FiLayers />}
        items={coreCompetencies.technicalLeadership}
        color="green"
      />
      <CompetencyCard
        title="Frontend"
        icon={<FiCode />}
        items={coreCompetencies.frontend}
        color="purple"
      />
      <CompetencyCard
        title="Backend"
        icon={<FiCpu />}
        items={coreCompetencies.backend}
        color="orange"
      />
      <CompetencyCard
        title="Database"
        icon={<FiBox />}
        items={coreCompetencies.database}
        color="teal"
      />
      <CompetencyCard
        title="Cloud & DevOps"
        icon={<FiLayers />}
        items={coreCompetencies.cloudDevOps}
        color="red"
      />
    </div>
  );
}

function CompetencyCard({ title, icon, items, color }) {
  return (
    <div className={`competency - card competency-${color}`}>
      <div className="competency-card-header">
        <span className="competency-card-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="competency-tags">
        {items.map((item, i) => (
          <span
            key={i}
            className={`skill-tag skill-tag-${color}`}
          >
            {item}
          </span>
        ))}
      </div >
    </div >
  );
}

function ExperienceSection() {
  return (
    <div className="experience-list">
      {MASTER_DATA.experience.map((company, ci) => (
        <div
          key={ci}
          className="company-section"
        >
          <h3 className="company-heading">{company.company}</h3>
          <div className="company-roles">
            {company.roles.map((role, ri) => (
              <Accordion
                key={ri}
                title={role.title}
                subtitle={role.duration}
                icon={<FiBriefcase />}
                defaultOpen={ci === 0 && ri === 0}
                badge={role.isCurrent ? "Current" : undefined}
              >
                <RoleDetails role={role} />
              </Accordion>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function RoleDetails({ role }) {
  return (
    <div className="role-details">
      {role.description && (
        <div className="role-desc">
          {role.description
            .split("\n\n")
            .filter((p) => p.trim())
            .map((p, i) => {
              const parts = p.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i}>
                  {parts.map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={j}>{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
        </div>
      )}

      {role.project && (
        <ProjectCard
          name={role.project.name}
          description={role.project.description}
        />
      )}

      {role.features && (
        <div className="features-card">
          <h4>Key Features</h4>
          <div className="features-grid">
            {role.features.map((f, i) => (
              <span
                key={i}
                className="feature-chip"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {role.products && (
        <div className="products-accordion-list">
          <h4>Product Portfolio</h4>
          {role.products.map((product, pi) => (
            <Accordion
              key={pi}
              title={product.name}
              icon={<FiBox />}
              defaultOpen={pi === 0}
              badge="40K+ Users"
            >
              <p className="product-acc-desc">{product.description}</p>
              {product.responsibilities && (
                <>
                  <h5>Key Responsibilities</h5>
                  <ul className="detail-list">
                    {product.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </>
              )}
            </Accordion>
          ))}
        </div>
      )}

      {role.poResponsibilities && (
        <div className="po-grid">
          {Object.entries(role.poResponsibilities).map(([key, items]) => (
            <Accordion
              key={key}
              title={formatPOKey(key)}
              icon={<FiTarget />}
            >
              <ul className="detail-list">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Accordion>
          ))}
        </div>
      )}

      {role.keyResponsibilities && (
        <div className="key-resp-accordion">
          {Object.entries(role.keyResponsibilities).map(([key, items]) => (
            <Accordion
              key={key}
              title={formatRespKey(key)}
              icon={<FiLayers />}
            >
              <ul className="detail-list">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Accordion>
          ))}
        </div>
      )}

      {role.additionalProducts && (
        <div className="additional-accordion">
          <h4>Additional Enterprise Products</h4>
          {role.additionalProducts.map((product, pi) => (
            <Accordion
              key={pi}
              title={product.name}
              icon={<FiBox />}
            >
              {product.description && (
                <p className="product-acc-desc">{product.description}</p>
              )}
              {product.contributions && (
                <ul className="detail-list">
                  {product.contributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              )}
            </Accordion>
          ))}
        </div>
      )}

      {role.responsibilities && !role.products && !role.keyResponsibilities && (
        <div className="resp-card">
          <h4>Key Responsibilities</h4>
          <ul className="detail-list">
            {role.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}

      {role.majorContributions && (
        <div className="contributions-grid">
          {role.majorContributions.map((c, i) => (
            <div
              key={i}
              className="contribution-card"
            >
              <div className="contribution-card-header">
                <FiStar className="contribution-star" />
                <h5>{c.name}</h5>
              </div>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      )}

      {role.achievements && (
        <div className="achievements-card">
          <h4>Key Achievements</h4>
          <ul className="detail-list highlight-list">
            {role.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}

      {role.tech && (
        <div className="tech-card">
          <span className="tech-card-label">Technologies</span>
          <div className="tech-tags-row">
            {role.tech.map((t, i) => (
              <span
                key={i}
                className="tech-pill"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ name, description }) {
  return (
    <div className="project-card-info">
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

function ProductsSection() {
  return (
    <div className="products-delivered-grid">
      {Object.entries(MASTER_DATA.majorProductsDelivered).map(
        ([company, items], i) => (
          <div
            key={i}
            className="delivered-card"
          >
            <h4 className="delivered-card-company">{company}</h4>
            <div className="delivered-items">
              {items.map((item, j) => (
                <span
                  key={j}
                  className="delivered-chip"
                >
                  <FiBox className="delivered-chip-icon" /> {item}
                </span>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

function SkillsSection() {
  const { technicalSkills } = MASTER_DATA;
  return (
    <div className="skills-grid">
      {Object.entries(technicalSkills).map(([key, value], i) => (
        <div
          key={i}
          className="skills-category-card"
        >
          <h4 className="skills-category-title">{formatSkillKey(key)}</h4>
          <div className="skills-tags-wrap">
            {value.split(", ").map((skill, j) => (
              <span
                key={j}
                className="skill-pill"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function AwardsSection() {
  return (
    <div className="awards-grid-portfolio">
      {MASTER_DATA.awards.map((award, i) => (
        <div
          key={i}
          className="award-card"
        >
          <div className="award-card-icon">
            <FiAward />
          </div>
          <div className="award-card-content">
            <h4>{award.title}</h4>
            <p className="award-card-org">
              {award.org} &middot; {award.year}
            </p>
            {award.note && <p className="award-card-note">{award.note}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function HighlightsSection() {
  return (
    <div className="highlights-portfolio">
      {MASTER_DATA.careerHighlights.map((item, i) => {
        const parts = item.split(/(\*\*[^*]+\*\*)/g);
        return (
          <div
            key={i}
            className="highlight-card"
          >
            <span className="highlight-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p>
              {parts.map((part, j) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return <strong key={j}>{part.slice(2, -2)}</strong>;
                }
                return part;
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function ProgressionSection() {
  return (
    <div className="timeline">
      {MASTER_DATA.careerProgression.map((step, i) => (
        <div
          key={i}
          className="timeline-item"
        >
          <div className="timeline-marker">
            <div className="timeline-dot"></div>
            {i < MASTER_DATA.careerProgression.length - 1 && (
              <div className="timeline-line"></div>
            )}
          </div>
          <div className="timeline-content">
            <span className="timeline-duration">{step.duration}</span>
            <h4 className="timeline-role">{step.role}</h4>
            <p className="timeline-company">{step.company}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function EducationSection() {
  return (
    <div className="education-card-portfolio">
      <div className="edu-icon-large">
        <FiBookOpen />
      </div>
      <div className="edu-details-portfolio">
        <h4>{MASTER_DATA.education.degree}</h4>
        <p className="edu-inst">{MASTER_DATA.education.institution}</p>
        <div className="edu-meta">
          <span>Graduated: {MASTER_DATA.education.year}</span>
          <span className="edu-cgpa">
            CGPA: <strong>{MASTER_DATA.education.cgpa}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

function StrengthsSection() {
  return (
    <div className="strengths-grid">
      {MASTER_DATA.professionalStrengths.map((s, i) => (
        <div
          key={i}
          className="strength-card"
        >
          <FiStar className="strength-icon" />
          <span>{s}</span>
        </div>
      ))}
    </div>
  );
}

function LanguagesSection() {
  return (
    <div className="languages-row">
      {MASTER_DATA.languages.map((lang, i) => (
        <div
          key={i}
          className="language-card"
        >
          <FiGlobe className="lang-card-icon" />
          <span>{lang}</span>
        </div>
      ))}
    </div>
  );
}

function formatPOKey(key) {
  const map = {
    productStrategy: "Product Strategy & Planning",
    stakeholderManagement: "Stakeholder Management",
    agileProductDelivery: "Agile Product Delivery",
    technicalLeadership: "Technical Leadership",
  };
  return (
    map[key] ||
    key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())
  );
}

function formatRespKey(key) {
  const map = {
    technicalLeadership: "Technical Leadership",
    applicationDevelopment: "Application Development",
    crossFunctional: "Cross-functional Collaboration",
  };
  return (
    map[key] ||
    key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())
  );
}

function formatSkillKey(key) {
  const map = {
    productManagement: "Product Management",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    cloudDevOps: "Cloud & DevOps",
    softwareEngineering: "Software Engineering",
  };
  return (
    map[key] ||
    key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())
  );
}

function Portfolio() {
  return (
    <div className="portfolio">
      <HeroSection />
      <div className="portfolio-content">
        <Section
          id="summary"
          title="About Me"
          subtitle="Who I am"
          icon={<FiTarget />}
        >
          <AboutSection />
        </Section>
        <Section
          id="competencies"
          title="Core Competencies"
          subtitle="What I bring"
          icon={<FiCpu />}
        >
          <CompetenciesSection />
        </Section>
        <Section
          id="experience"
          title="Professional Experience"
          subtitle="Where I've worked"
          icon={<FiBriefcase />}
        >
          <ExperienceSection />
        </Section>
        <Section
          id="products"
          title="Products Delivered"
          subtitle="What I've built"
          icon={<FiBox />}
        >
          <ProductsSection />
        </Section>
        <Section
          id="skills"
          title="Technical Skills"
          subtitle="My toolkit"
          icon={<FiCode />}
        >
          <SkillsSection />
        </Section>
        <Section
          id="awards"
          title="Awards & Recognition"
          subtitle="Achievements"
          icon={<FiAward />}
        >
          <AwardsSection />
        </Section>
        <Section
          id="highlights"
          title="Career Highlights"
          subtitle="Key milestones"
          icon={<FiTrendingUp />}
        >
          <HighlightsSection />
        </Section>
        <Section
          id="progression"
          title="Career Progression"
          subtitle="My journey"
          icon={<FiTrendingUp />}
        >
          <ProgressionSection />
        </Section>
        <Section
          id="education"
          title="Education"
          subtitle="Academic background"
          icon={<FiBookOpen />}
        >
          <EducationSection />
        </Section>
        <Section
          id="strengths"
          title="Professional Strengths"
          subtitle="What defines me"
          icon={<FiStar />}
        >
          <StrengthsSection />
        </Section>
        <Section
          id="languages"
          title="Languages"
          subtitle="Communication"
          icon={<FiGlobe />}
        >
          <LanguagesSection />
        </Section>
      </div>
    </div>
  );
}
const onDownload = () => {
  const link = document.createElement("a");
  link.href = `${import.meta.env.BASE_URL}Sunil Ambaljeri Resume.pdf`;
  link.download = "Sunil Ambaljeri Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <VisitorModal />
      <nav className="navbar">
        <div className="nav-inner">
          <span className="nav-brand">{MASTER_DATA.name}</span>
          <div className="nav-links">
            <a href="#summary">About</a>
            <a href="#competencies">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#awards">Awards</a>
            <a
              className="nav-download"
              onClick={onDownload}
            >
              <FiDownload /> Resume
            </a>
          </div>
        </div>
      </nav>

      <Portfolio />

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <span className="footer-brand">{MASTER_DATA.name}</span>
            <span className="footer-sep">|</span>
            <span>Product Owner & Technical Leader</span>
          </div>
          <div className="footer-right">
            <a
              href={MASTER_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href={"mailto:" + MASTER_DATA.email}
              className="footer-link"
            >
              <FiMail /> Email
            </a>
            <a
              href="https://github.com/sambaljeri/my-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </div>
      </footer>

      <button
        className="scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </div>
  );
}

export default App;
