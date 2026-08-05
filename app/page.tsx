import Link from "next/link";
import { FaDatabase, FaEnvelope, FaGithub, FaLinkedin, FaServer } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { SITE } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { getProjectSummaries } from "@/lib/projects";

const capabilities = [
  { index: "01", title: "Frontend delivery", icon: SiReact, text: "Responsive, accessible interfaces built with React and a focus on maintainable product experiences." },
  { index: "02", title: "Backend foundations", icon: FaServer, text: "REST APIs, validation, authentication fundamentals, and structured service logic." },
  { index: "03", title: "Data & workflow support", icon: FaDatabase, text: "Relational data modelling, SQL, testing, and dependable delivery for real operational use." },
];

export default async function Home() {
  const projects = (await getProjectSummaries()).slice(0, 3);

  return (
    <main>
      <section className="hero-shell">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-content rise-in">
          <ThemeToggle />
          <p className="hero-kicker"><span>{"//"}</span> OPEN TO JUNIOR ROLES</p>
          <h1 className="hero-title">
            Junior software developer building reliable web applications
          </h1>
          <p className="hero-role"><span>&gt;</span> Full-stack thinking, practical delivery, and clear technical communication<span className="cursor">_</span></p>
          <p className="hero-summary">
            I build web experiences with strong frontend fundamentals, backend logic, and database-driven workflows that support real teams.
          </p>
          <div className="hero-actions">
            <Link href={ROUTES.cv} className="button button-primary">view_cv()</Link>
            <Link href={ROUTES.contact} className="button button-secondary">contact_me()</Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span className="rounded-full border border-border/80 bg-surface/70 px-3 py-1">Full-stack web apps</span>
            <span className="rounded-full border border-border/80 bg-surface/70 px-3 py-1">REST APIs & databases</span>
            <span className="rounded-full border border-border/80 bg-surface/70 px-3 py-1">Junior role ready</span>
          </div>
          <div className="social-links hero-social-links" aria-label="Social links">
            <a href={SITE.socials.github} target="_blank" rel="noreferrer">
              <FaGithub className="h-4 w-4" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a href={SITE.socials.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="h-4 w-4" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a href={SITE.socials.email}>
              <FaEnvelope className="h-4 w-4" aria-hidden="true" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div><p className="section-index">02 / STRENGTHS</p><h2>What I bring to a team</h2></div>
          <Link href={ROUTES.cv} className="text-link">View experience <span>↗</span></Link>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="tech-panel capability-card" key={item.index}>
              <div className="capability-card-topline">
                <span>{item.index}</span>
                <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div><p className="section-index">03 / EXPERIENCE</p><h2>Recent professional experience</h2></div>
          <Link href={ROUTES.cv} className="text-link">View full CV <span>↗</span></Link>
        </div>
        <div className="tech-panel rounded-lg p-6 sm:p-7">
          <p className="tech-label text-[0.72rem] font-semibold text-primary">Software Developer Intern · iHub Africa · 2025 – Present</p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Working on full-stack applications, REST APIs, database-backed workflows, and role-based dashboards for internal business use.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-border/80 bg-surface/70 px-3 py-1 text-sm text-muted-foreground">React</span>
            <span className="rounded-full border border-border/80 bg-surface/70 px-3 py-1 text-sm text-muted-foreground">Node.js</span>
            <span className="rounded-full border border-border/80 bg-surface/70 px-3 py-1 text-sm text-muted-foreground">PostgreSQL</span>
            <span className="rounded-full border border-border/80 bg-surface/70 px-3 py-1 text-sm text-muted-foreground">API integration</span>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div><p className="section-index">04 / PROJECTS</p><h2>Selected projects</h2></div>
          <Link href={ROUTES.projects} className="text-link">View all projects <span>↗</span></Link>
        </div>
        <div className="project-card-grid home-project-card-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              summary={project.summary}
              stack={project.stack}
              screenshot={project.screenshot}
              github={project.github}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="home-section contact-cta">
        <p className="section-index">05 / CONTACT</p>
        <h2>Interested in speaking further?</h2>
        <p>I&apos;m open to junior software development roles, internships, and thoughtful collaborations.</p>
        <Link href={ROUTES.contact} className="button button-primary">start_a_conversation()</Link>
      </section>
    </main>
  );
}
