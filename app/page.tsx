import Link from "next/link";
import Image from "next/image";
import { FaDatabase, FaGithub, FaLinkedin, FaServer } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { TechIcon } from "@/components/atoms/TechIcon";
import { SITE } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { getProjectSummaries } from "@/lib/projects";

const capabilities = [
  { index: "01", title: "Frontend systems", icon: SiReact, text: "Responsive, accessible interfaces built with React and a sharp eye for maintainability." },
  { index: "02", title: "Backend logic", icon: FaServer, text: "REST APIs, validation, authentication fundamentals, and structured service design." },
  { index: "03", title: "Data & delivery", icon: FaDatabase, text: "Relational data modelling, SQL, documentation, testing, and dependable workflows." },
];

export default async function Home() {
  const projects = (await getProjectSummaries()).slice(0, 2);

  return (
    <main>
      <section className="hero-shell">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-content rise-in">
          <p className="hero-kicker"><span>{"//"}</span> HELLO, WORLD</p>
          <h1 className="hero-title">
            I&apos;m <span>{SITE.name}</span>
          </h1>
          <p className="hero-role"><span>&gt;</span> Junior Software Developer<span className="cursor">_</span></p>
          <p className="hero-tagline">Dark-mode is Dev-mode</p>
          <p className="hero-summary">{SITE.summary}</p>
          <div className="hero-actions">
            <Link href={ROUTES.projects} className="button button-primary">view_projects()</Link>
            <Link href={ROUTES.contact} className="button button-secondary">contact_me()</Link>
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
          </div>
        </div>
        <a href="#about-preview" className="scroll-cue" aria-label="Scroll to introduction"><span /></a>
      </section>

      <section id="about-preview" className="home-section split-intro">
        <div>
          <p className="section-index">01 / ABOUT</p>
          <h2>Building useful software,<br /><span>one clear decision at a time.</span></h2>
          <Link href={ROUTES.about} className="text-link">More about me <span>↗</span></Link>
        </div>
        <aside className="home-profile-card tech-panel p-4" aria-label="AI profile picture">
          <div className="profile-photo-frame">
            <Image
              src="/AI_profile.png"
              alt="AI profile illustration"
              fill
              sizes="(max-width: 720px) 280px, 360px"
              className="home-profile-image"
            />
          </div>
        </aside>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div><p className="section-index">02 / CAPABILITIES</p><h2>What I work with</h2></div>
          <Link href={ROUTES.skills} className="text-link">Full skills matrix <span>↗</span></Link>
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
          <div><p className="section-index">03 / PROJECTS</p><h2>Projects & case studies</h2></div>
          <Link href={ROUTES.projects} className="text-link">View all projects <span>↗</span></Link>
        </div>
        <div className="project-card-grid">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} className="tech-panel project-card" key={project.slug}>
              <div className="project-card-topline">
                <span>0{index + 1}</span>
                <span>case_study()</span>
              </div>
              <div className="project-screenshot-frame">
                {project.screenshot ? (
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 720px) calc(100vw - 2.5rem), 540px"
                    className="project-screenshot-image"
                  />
                ) : (
                  <div className="project-screenshot-placeholder">
                    <span className="tech-label">Project screenshot</span>
                    <p>Add screenshot here</p>
                  </div>
                )}
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>
                    <TechIcon name={item} />
                    <span>-</span>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="project-card-link">View project <span>↗</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section contact-cta">
        <p className="section-index">04 / CONTACT</p>
        <h2>Have an opportunity in mind?</h2>
        <p>I&apos;m open to junior software development roles, internships, and thoughtful collaborations.</p>
        <Link href={ROUTES.contact} className="button button-primary">start_a_conversation()</Link>
      </section>
    </main>
  );
}
