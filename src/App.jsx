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

const resumeData = {
  name: "Sunil Ambaljeri",
  title:
    "Deputy Manager | Product Owner | Technical Lead | Full Stack Developer",
  phone: "+91 9740470318",
  email: "sunilambaljeri6697@gmail.com",
  linkedin: "https://www.linkedin.com/in/sunil-ambaljeri/",
  location: "India",
  summary: `Results-driven Product Owner and Technical Leader with 7+ years of experience in designing, developing, and delivering enterprise-scale applications across Human Capital Management, Healthcare, and Supply Chain Management domains.

Progressed from Full Stack Developer Intern → Full Stack Developer → Technical Lead → Product Owner → Deputy Manager, demonstrating consistent growth in technical expertise, leadership, and product ownership.

Currently leading Deloitte India's Talent & Performance Management product portfolio, owning products that support 40,000+ employees across the organization. Successfully bridge business and technology by defining product strategy, gathering business requirements, prioritizing roadmaps, and leading Agile delivery while continuing to contribute hands-on to React.js frontend and Node.js backend development during business-critical releases.

Experienced in building enterprise applications from the ground up, leading cross-functional engineering teams, collaborating with senior stakeholders, and delivering scalable, high-performance solutions that align with organizational goals.

Strong expertise in Product Ownership, Agile Delivery, Technical Leadership, Solution Architecture, Full Stack Development, Enterprise Product Design, and End-to-End Software Development Lifecycle (SDLC).`,

  coreCompetencies: {
    productManagement: [
      "Product Ownership",
      "Product Strategy",
      "Product Roadmap",
      "Stakeholder Management",
      "Business Requirement Gathering",
      "Requirement Analysis",
      "User Story Writing",
      "Product Backlog Management",
      "Sprint Planning",
      "Release Planning",
      "Product Vision",
      "Agile Scrum",
      "Cross-functional Collaboration",
    ],
    technicalLeadership: [
      "Solution Architecture",
      "Enterprise Application Design",
      "Technical Leadership",
      "Team Mentoring",
      "Code Reviews",
      "Production Support",
      "Release Management",
      "Performance Optimization",
      "End-to-End SDLC",
    ],
    frontend: [
      "React.js",
      "Angular",
      "Ionic Framework",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
    ],
    backend: ["Node.js", "REST APIs"],
    database: ["SQL", "MongoDB"],
    cloudDevOps: ["AWS", "Git", "CI/CD"],
  },

  experience: [
    {
      company: "Deloitte India",
      roles: [
        {
          title: "Deputy Manager - Product Owner",
          duration: "June 2025 - Present",
          isCurrent: true,
          description: `Promoted to Deputy Manager on 1 June 2025 after successfully leading the technical delivery of Deloitte India's Talent & Performance Management ecosystem.

Currently own the complete product lifecycle for multiple enterprise applications supporting 40,000+ Deloitte India employees, including product strategy, roadmap planning, stakeholder management, Agile delivery, release planning, and continuous product enhancements.

Unlike a traditional Product Owner role, I continue to actively contribute to application development during business-critical releases by developing React.js user interfaces and Node.js APIs, ensuring timely delivery of complex business requirements while mentoring engineering teams.`,
          products: [
            {
              name: "Activity Tracker",
              description:
                "Enterprise workforce activity monitoring platform used across Deloitte India to capture employee activity every 10 seconds, enabling workforce utilization analysis and operational insights.",
              responsibilities: [
                "Led end-to-end product development from business requirements to production deployment.",
                "Defined product roadmap and enhancement strategy.",
                "Collaborated with business stakeholders to prioritize new features.",
                "Worked closely with engineering teams to deliver scalable solutions.",
                "Continued hands-on React.js and Node.js development during high-priority releases.",
                "Managed production support, issue resolution, and continuous product improvements.",
              ],
            },
            {
              name: "Goals & Performance Management System (GPMS)",
              description:
                "Enterprise quarterly performance management platform enabling employees and managers to create, monitor, and evaluate organizational and individual goals. The application serves as Deloitte India's central platform for quarterly performance tracking and goal management.",
              responsibilities: [
                "Led complete product development from inception.",
                "Defined product vision and roadmap.",
                "Collaborated with business stakeholders to understand evolving business requirements.",
                "Converted business requirements into user stories and acceptance criteria.",
                "Prioritized the product backlog based on business value.",
                "Led sprint planning and release management.",
                "Coordinated with Engineering, QA, UX, DevOps, and Business teams.",
                "Ensured successful enterprise-wide releases.",
                "Continued contributing to frontend and backend development during critical milestones.",
              ],
            },
            {
              name: "Performance Appraisal",
              description:
                "Enterprise semi-annual performance appraisal platform developed to simplify employee performance evaluations and promotion readiness. The application consolidates employee achievements from multiple enterprise systems into a single platform, calculates promotion eligibility using configurable business rules, and provides managers with a unified view of employee performance.",
              responsibilities: [
                "Led product planning and technical implementation.",
                "Defined functional requirements with business stakeholders.",
                "Designed workflows supporting promotion eligibility calculations.",
                "Coordinated integration with multiple enterprise systems.",
                "Prioritized enhancement requests based on business priorities.",
                "Supported production deployments and enterprise releases.",
                "Contributed to React.js UI and Node.js API development during major releases.",
              ],
            },
            {
              name: "Snapshots",
              description:
                "Enterprise application enabling employees and managers to capture project contributions, firm initiatives, achievements, and performance highlights throughout the year. The platform provides continuous performance tracking and supports quarterly and semi-annual performance evaluations.",
              responsibilities: [
                "Led product development and implementation.",
                "Defined roadmap and release priorities.",
                "Worked closely with stakeholders to improve user experience.",
                "Delivered scalable enterprise features supporting continuous performance management.",
                "Collaborated with engineering teams for successful production releases.",
                "Continued technical contributions during business-critical deliveries.",
              ],
            },
          ],
          poResponsibilities: {
            productStrategy: [
              "Define product vision and long-term roadmap.",
              "Align product initiatives with business objectives.",
              "Identify opportunities for continuous product improvements.",
              "Prioritize features based on business value and customer needs.",
            ],
            stakeholderManagement: [
              "Partner with Business Leaders, HR Teams, Engineering, QA, UX, and DevOps.",
              "Gather and analyze business requirements.",
              "Conduct product discussions and roadmap planning sessions.",
              "Manage stakeholder expectations throughout product delivery.",
            ],
            agileProductDelivery: [
              "Own product backlog prioritization.",
              "Write detailed user stories and acceptance criteria.",
              "Lead backlog refinement sessions.",
              "Participate in sprint planning, sprint reviews, and release planning.",
              "Ensure successful delivery of enterprise releases.",
            ],
            technicalLeadership: [
              "Leading engineering teams during critical business deliveries.",
              "Designing scalable technical solutions.",
              "Developing React.js user interfaces.",
              "Developing Node.js backend APIs.",
              "Reviewing application architecture and code quality.",
              "Mentoring developers and promoting engineering best practices.",
              "Supporting production deployments and resolving critical production issues.",
            ],
          },
          achievements: [
            "Built and currently own enterprise applications serving 40,000+ Deloitte India employees.",
            "Successfully progressed from Technical Lead to Product Owner based on technical expertise and business ownership.",
            "Continued hands-on software development while managing product strategy and delivery.",
            "Led cross-functional engineering teams delivering multiple enterprise-wide releases.",
            "Bridged business and technology by combining Product Ownership with deep technical expertise.",
            "Delivered scalable applications supporting Deloitte India's Talent & Performance Management ecosystem.",
          ],
        },
      ],
    },
    {
      company: "Deloitte India",
      roles: [
        {
          title: "Senior Executive II (Assistant Manager) - Technical Lead",
          duration: "Nov 2023 - May 2025",
          description: `Joined Deloitte India as a Senior Executive II(Assistant Manager) and served as the Technical Lead for Deloitte India's Talent & Performance Management ecosystem.

During this period, I was responsible for leading the architecture, design, development, and delivery of multiple enterprise applications.My technical leadership, product understanding, and ability to collaborate with business stakeholders enabled me to transition into the Product Owner role.

I worked closely with Product Owners, HR stakeholders, Business Analysts, UX designers, QA teams, DevOps engineers, and development teams to successfully deliver scalable enterprise solutions supporting 40,000+ employees across Deloitte India.`, keyResponsibilities: {
            technicalLeadership: [
              "Led end-to-end technical delivery of multiple enterprise applications.",
              "Designed scalable frontend and backend architectures.",
              "Converted business requirements into technical solutions.",
              "Conducted solution design discussions with business stakeholders.",
              "Led development teams throughout the Software Development Lifecycle (SDLC).",
              "Performed code reviews and established development standards.",
              "Mentored developers and supported knowledge-sharing initiatives.",
              "Planned and executed production deployments.",
              "Managed critical production incidents and post-production support.",
            ],
            applicationDevelopment: [
              "Developed enterprise applications using React.js and Node.js.",
              "Designed reusable UI components and scalable backend APIs.",
              "Optimized application performance and responsiveness.",
              "Integrated applications with multiple enterprise systems.",
              "Worked closely with QA teams during System Integration Testing (SIT) and User Acceptance Testing (UAT).",
              "Delivered multiple business-critical releases within aggressive timelines.",
            ],
            crossFunctional: [
              "Worked directly with Product Owners and Business stakeholders.",
              "Participated in requirement gathering workshops.",
              "Collaborated with UX teams to improve user experience.",
              "Coordinated with DevOps teams for deployment planning.",
              "Supported release management activities across multiple enterprise applications.",
            ],
          },
          additionalProducts: [
            {
              name: "360 Feedback",
              description:
                "Deloitte previously used a third-party platform for collecting and managing employee 360-degree feedback. As part of the modernization initiative, we rebuilt the application as an internally owned enterprise product to provide better integration with Deloitte's Talent Management ecosystem.",
              contributions: [
                "Participated in product planning and technical solution design.",
                "Developed React.js user interfaces and Node.js backend services.",
                "Rebuilt the application with improved scalability and maintainability.",
                "Integrated the platform with internal enterprise systems.",
                "Worked closely with business stakeholders throughout the delivery lifecycle.",
                "Supported production deployments and stabilization activities.",
              ],
            },
            {
              name: "DFF",
              description:
                "Enterprise business application supporting internal operational processes.",
              contributions: [
                "Delivered new features.",
                "Fixed production issues.",
                "Enhanced application performance.",
                "Worked with stakeholders to implement business improvements.",
                "Supported deployment and release activities.",
              ],
            },
          ],
          tech: ["React.js", "Node.js"],
        },
      ],
    },
    {
      company: "Pericius Technologies",
      roles: [
        {
          title: "Full Stack Developer",
          duration: "May 2021 - Nov 2023",
          description:
            "Worked as a Full Stack Developer building enterprise Supply Chain and Warehouse Management solutions. Collaborated with business stakeholders, solution architects, QA teams, and developers to build scalable applications that optimized warehouse operations, inventory visibility, and procurement processes.",
          project: {
            name: "Requisition Management System",
            description:
              "Enterprise Warehouse Management and Supply Chain Management platform used to manage inventory across multiple warehouses. The platform enabled organizations to monitor inventory movement, automate replenishment, improve supply chain planning, and maintain complete visibility of warehouse operations.",
          },
          responsibilities: [
            "Developed frontend applications using React.js.",
            "Built backend services using Node.js.",
            "Designed and implemented REST APIs.",
            "Developed reusable UI components.",
            "Collaborated with Business Analysts to understand functional requirements.",
            "Participated in sprint planning and Agile ceremonies.",
            "Supported production deployments and issue resolution.",
            "Improved application performance and scalability.",
          ],
          majorContributions: [
            {
              name: "Rule Engine",
              description:
                "Designed and developed a configurable Rule Engine that automatically initiated product replenishment whenever warehouse inventory dropped below predefined thresholds. The solution minimized manual intervention and significantly improved procurement efficiency.",
            },
            {
              name: "Seasonal Inventory Planning",
              description:
                "Developed functionality that enabled organizations to automatically place advance product orders during festival seasons and high-demand periods. This helped maintain inventory availability and improved supply chain continuity.",
            },
            {
              name: "Warehouse Goods Tracking",
              description:
                "Developed functionality to monitor the real-time location of goods across multiple warehouses. Provided warehouse users with complete inventory visibility, improving operational efficiency and inventory management.",
            },
            {
              name: "Damaged Goods Return Workflow",
              description:
                "Designed and implemented a workflow allowing warehouse users to report, track, and return damaged inventory through a structured approval process. This improved inventory accuracy and streamlined warehouse operations.",
            },
          ],
          tech: [
            "React.js",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "REST APIs",
            "SQL",
          ],
        },
      ],
    },
    {
      company: "Lucida Technology",
      roles: [
        {
          title: "Full Stack Developer",
          duration: "Dec 2019 - May 2021",
          isFullTime: true,
          description:
            "Joined as a Full Stack Developer Intern on 17 June 2019 and converted to a full-time employee after successfully completing six months of internship. Worked as part of a 4-member engineering team responsible for developing a UK-based Digital Pharmacy platform. The application supported Web, Android, and iOS users through a unified platform.",
          project: {
            name: "Charc - UK Digital Pharmacy Platform",
            description:
              "A comprehensive healthcare platform enabling patients to access pharmacy services digitally. The platform simplified healthcare services by allowing patients to consult doctors, order medicines, schedule appointments, and complete secure online payments.",
          },
          features: [
            "Online Appointment Booking",
            "Medicine Ordering",
            "Video Consultation",
            "Phone Consultation",
            "Digital Prescription Management",
            "Online Payment Gateway Integration",
            "Browser-based Web Application",
            "Android Application",
            "iOS Application",
          ],
          responsibilities: [
            "Developed frontend applications using Angular.",
            "Built Android and iOS applications using Angular and Ionic Framework.",
            "Developed backend services using Node.js.",
            "Designed reusable UI components.",
            "Integrated secure online payment gateway functionality.",
            "Developed REST APIs supporting healthcare workflows.",
            "Participated in architecture discussions.",
            "Worked throughout the complete Software Development Lifecycle.",
            "Collaborated closely within a lean team of four developers to deliver the entire platform.",
          ],
          tech: [
            "Angular",
            "Ionic Framework",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
            "REST APIs",
          ],
        },
      ],
    },
  ],

  awards: [
    {
      title: "Best Employee of the Year",
      org: "Lucida Technology",
      year: "2021",
    },
    {
      title: "Business President Award",
      org: "Deloitte India",
      year: "2024",
      note: "One of Deloitte India's highest organizational recognition awards",
    },
    { title: "Live the Dot Award", org: "Deloitte India", year: "2024" },
    { title: "Move the Dot Award", org: "Deloitte India", year: "2025" },
    { title: "Special Recognition Award", org: "Deloitte India", year: "2026" },
  ],

  technicalSkills: {
    productManagement:
      "Product Ownership, Product Strategy, Product Roadmap, Product Vision, Product Backlog Management, Stakeholder Management, Requirement Gathering, Business Requirement Analysis, User Story Writing, Acceptance Criteria Definition, Sprint Planning, Release Planning, Agile Scrum, Cross-functional Collaboration, Product Lifecycle Management",
    frontend:
      "React.js, Angular, Ionic Framework, JavaScript, TypeScript, HTML5, CSS3",
    backend: "Node.js, REST API Development, API Integration",
    databases: "SQL, MongoDB",
    cloudDevOps: "AWS, Git, CI/CD",
    softwareEngineering:
      "Solution Architecture, Enterprise Application Design, Full Stack Development, SDLC, Technical Leadership, Code Reviews, Production Support, Release Management, Performance Optimization, Application Modernization, System Integration",
  },

  careerHighlights: [
    "Over 7 years of experience in Product Ownership, Technical Leadership, and Full Stack Development.",
    "Successfully progressed from Full Stack Developer Intern → Full Stack Developer → Technical Lead → Product Owner → Deputy Manager.",
    "Built and currently own enterprise applications supporting 40,000+ employees across Deloitte India.",
    "Led the complete development lifecycle of multiple enterprise Talent & Performance Management applications from concept to production.",
    "Successfully transitioned from Technical Lead to Product Owner based on technical expertise, business understanding, and leadership capabilities.",
    "Continue contributing to React.js frontend and Node.js backend development during business-critical releases while managing product ownership responsibilities.",
    "Worked directly with Business Leaders, HR teams, Product Owners, UX Designers, QA Engineers, DevOps teams, and Engineering teams to deliver enterprise-wide solutions.",
    "Rebuilt enterprise applications from third-party platforms into internally owned products, improving scalability, maintainability, and integration capabilities.",
    "Developed enterprise warehouse management solutions featuring automated replenishment, rule engines, real-time goods tracking, and damaged goods return workflows.",
    "Developed a UK-based Digital Pharmacy platform supporting web, Android, and iOS users with appointment booking, medicine ordering, online consultations, digital prescriptions, and payment gateway integration.",
    "Recognized multiple times for technical excellence, leadership, innovation, and business impact through prestigious organizational awards.",
  ],

  majorProductsDelivered: {
    "Deloitte India": [
      "Activity Tracker",
      "Goals & Performance Management System (GPMS)",
      "Performance Appraisal",
      "Snapshots",
      "360 Feedback",
      "ISycle",
      "DFF",
      "FinOps",
    ],
    "Pericius Technologies": ["Requisition Management System"],
    "Lucida Technology": ["Charc - UK Digital Pharmacy Platform"],
  },

  technologyExperience: [
    { company: "Deloitte India", frontend: "React.js", backend: "Node.js" },
    {
      company: "Pericius Technologies",
      frontend: "React.js",
      backend: "Node.js",
    },
    {
      company: "Lucida Technology",
      frontend: "Angular, Ionic Framework",
      backend: "Node.js",
    },
  ],

  education: {
    degree: "Bachelor of Engineering (B.E.)",
    institution: "KLS Gogte Institute of Technology (GIT), Belagavi, Karnataka",
    year: "2019",
    cgpa: "8.40 / 10.00",
  },

  careerProgression: [
    {
      company: "Lucida Technology",
      role: "Full Stack Developer Intern",
      duration: "Jun 2019 - Dec 2019",
    },
    {
      company: "Lucida Technology",
      role: "Full Stack Developer",
      duration: "Dec 2019 - May 2021",
    },
    {
      company: "Pericius Technologies",
      role: "Full Stack Developer",
      duration: "May 2021 - Nov 2023",
    },
    {
      company: "Deloitte India",
      role: "Senior Executive II (Assistant Manager) - Technical Lead",
      duration: "Nov 2023 - May 2025",
    },
    {
      company: "Deloitte India",
      role: "Deputy Manager - Product Owner",
      duration: "Jun 2025 - Present",
    },
  ],

  languages: ["English", "Hindi", "Kannada"],

  professionalStrengths: [
    "Product Ownership with Hands-on Technical Expertise",
    "Enterprise Product Development",
    "Technical Leadership & Team Mentoring",
    "Product Strategy & Roadmap Planning",
    "Business & Stakeholder Management",
    "Agile Delivery & Scrum Leadership",
    "Full Stack Development",
    "Enterprise Solution Architecture",
    "Cross-functional Team Collaboration",
    "Performance & Talent Management Domain Expertise",
    "Supply Chain & Warehouse Management Domain Knowledge",
    "Healthcare Technology Domain Experience",
    "End-to-End Software Development Lifecycle (SDLC)",
  ],

  additionalInfo: [
    "Extensive experience in designing, developing, and delivering enterprise-scale applications used by 40,000+ users.",
    "Proven ability to balance Product Ownership responsibilities with hands-on software development, enabling faster delivery of business-critical features.",
    "Strong experience in leading cross-functional teams, driving enterprise releases, and collaborating with business stakeholders to translate strategic objectives into scalable technical solutions.",
    "Demonstrated success in building products from inception, modernizing legacy systems, and delivering high-quality, user-centric applications aligned with business goals.",
  ],
};

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
          <h1 className="hero-name">{resumeData.name}</h1>
          <p className="hero-title">{resumeData.title}</p>
          <p className="hero-summary">{resumeData.summary.split("\n\n")[0]}</p>
          <div className="hero-contact-row">
            <a
              href={"mailto:" + resumeData.email}
              className="hero-contact-link"
            >
              <FiBriefcase /> {resumeData.email}
            </a>
            <a
              href={resumeData.linkedin}
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
      {resumeData.summary
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
  const { coreCompetencies } = resumeData;
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
      {resumeData.experience.map((company, ci) => (
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
      {Object.entries(resumeData.majorProductsDelivered).map(
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
  const { technicalSkills } = resumeData;
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
      {resumeData.awards.map((award, i) => (
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
      {resumeData.careerHighlights.map((item, i) => {
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
      {resumeData.careerProgression.map((step, i) => (
        <div
          key={i}
          className="timeline-item"
        >
          <div className="timeline-marker">
            <div className="timeline-dot"></div>
            {i < resumeData.careerProgression.length - 1 && (
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
        <h4>{resumeData.education.degree}</h4>
        <p className="edu-inst">{resumeData.education.institution}</p>
        <div className="edu-meta">
          <span>Graduated: {resumeData.education.year}</span>
          <span className="edu-cgpa">
            CGPA: <strong>{resumeData.education.cgpa}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

function StrengthsSection() {
  return (
    <div className="strengths-grid">
      {resumeData.professionalStrengths.map((s, i) => (
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
      {resumeData.languages.map((lang, i) => (
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
          <span className="nav-brand">{resumeData.name}</span>
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
            <span className="footer-brand">{resumeData.name}</span>
            <span className="footer-sep">|</span>
            <span>Product Owner & Technical Leader</span>
          </div>
          <div className="footer-right">
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href={"mailto:" + resumeData.email}
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
