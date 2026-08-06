import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { ProfessionalFacts } from "@/components/molecules/ProfessionalFacts";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { SITE } from "@/lib/constants";
import { getProjectSummaries } from "@/lib/projects";
import { ROUTES } from "@/lib/routes";

const facts = [
  { label: "Current role", value: "Software Developer Intern at iHub Africa" },
  { label: "Experience", value: "Two software development internships" },
  { label: "Qualification", value: "Diploma in Computer Science" },
  { label: "Location", value: "Johannesburg, South Africa" },
];

const capabilities = [
  { title: "Frontend", text: "React, JavaScript, responsive interfaces, and role-based dashboards." },
  { title: "Backend and APIs", text: "Node.js, Express, REST APIs, validation, and system integrations." },
  { title: "Data and enterprise", text: "PostgreSQL, SQL, OData, SAPUI5/Fiori, and ABAP." },
];

const experience = [
  {
    role: "Software Developer Intern",
    company: "iHub Africa",
    period: "October 2025–present",
    detail: "Build internal React and Node.js applications, REST APIs, reporting features, and PostgreSQL-backed workflows.",
  },
  {
    role: "Software Developer Intern",
    company: "ByteCode Consulting",
    period: "September 2024–August 2025",
    detail: "Contributed to full-stack tracking software and worked with SAPUI5/Fiori, OData, ABAP, and enterprise workflows.",
  },
];

export default async function Home() {
  const projects = (await getProjectSummaries()).slice(0, 3);

  return (
    <main>
      <section className="hero-shell" aria-labelledby="home-title">
        <div className="hero-content rise-in">
          <div className="hero-utility-row">
            <p className="availability"><span aria-hidden="true" />Available for junior software development roles</p>
            <ThemeToggle />
          </div>
          <h1 id="home-title" className="hero-title">
            Junior full-stack developer building software for real business workflows
          </h1>
          <p className="hero-summary">
            I build internal applications with React, Node.js, Express, and PostgreSQL—from role-based interfaces and REST APIs to validation, reporting, and database-backed workflows.
          </p>
          <p className="hero-proof">Software Developer Intern at iHub Africa · 2 development internships · Diploma in Computer Science</p>
          <div className="hero-actions">
            <Link href={ROUTES.projects} className="button button-primary">View professional projects</Link>
            <Link href={ROUTES.cv} className="button button-secondary">View CV</Link>
            <Link href={ROUTES.contact} className="button button-ghost">Contact me</Link>
          </div>
          <div className="social-links hero-social-links" aria-label="Professional profiles">
            <a href={SITE.socials.linkedin} target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /><span>LinkedIn</span><span className="sr-only"> (opens in a new tab)</span></a>
            <a href={SITE.socials.github} target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /><span>GitHub</span><span className="sr-only"> (opens in a new tab)</span></a>
            <a href={SITE.socials.email}><FaEnvelope aria-hidden="true" /><span>Email</span></a>
          </div>
        </div>
      </section>

      <section className="home-section home-proof" aria-labelledby="proof-title">
        <div className="section-heading compact-heading">
          <div><p className="section-kicker">Professional proof</p><h2 id="proof-title">Employment snapshot</h2></div>
        </div>
        <ProfessionalFacts facts={facts} />
      </section>

      <section className="home-section" aria-labelledby="projects-title">
        <div className="section-heading">
          <div><p className="section-kicker">Selected evidence</p><h2 id="projects-title">Professional work and technical case studies</h2></div>
          <Link href={ROUTES.projects} className="text-link">View all projects <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="project-card-grid home-project-card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="capabilities-title">
        <div className="section-heading">
          <div><p className="section-kicker">Applied skills</p><h2 id="capabilities-title">Technical capabilities</h2></div>
          <Link href={ROUTES.skills} className="text-link">View all technical skills <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="card card--soft capability-card" key={item.title}>
              <h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="experience-title">
        <div className="section-heading">
          <div><p className="section-kicker">Employment</p><h2 id="experience-title">Work experience</h2></div>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-entry" key={`${item.company}-${item.period}`}>
              <p className="experience-period">{item.period}</p>
              <div><h3>{item.role}</h3><p className="experience-company">{item.company}</p><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
        <div className="section-actions">
          <Link href={ROUTES.cv} className="button button-primary">View CV</Link>
        </div>
      </section>

      <section className="home-section contact-cta" aria-labelledby="contact-title">
        <p className="section-kicker">Contact</p>
        <h2 id="contact-title">Open to junior software development roles</h2>
        <p>I’m interested in full-stack web, API, database, and enterprise application opportunities in Johannesburg or remote teams.</p>
        <div className="contact-actions">
          <Link href={ROUTES.contact} className="button button-primary">Contact me</Link>
          <a href={SITE.socials.email} className="button button-secondary">Email Katleho</a>
        </div>
      </section>
    </main>
  );
}
