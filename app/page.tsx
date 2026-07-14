import Link from "next/link";
import { SITE } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { getProjectSummaries } from "@/lib/projects";

const capabilities = [
  { index: "01", title: "Frontend systems", text: "Responsive, accessible interfaces built with React and a sharp eye for maintainability." },
  { index: "02", title: "Backend logic", text: "REST APIs, validation, authentication fundamentals, and structured service design." },
  { index: "03", title: "Data & delivery", text: "Relational data modelling, SQL, documentation, testing, and dependable workflows." },
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
          <p className="hero-summary">{SITE.summary}</p>
          <div className="hero-actions">
            <Link href={ROUTES.projects} className="button button-primary">view_projects()</Link>
            <Link href={ROUTES.contact} className="button button-secondary">contact_me()</Link>
          </div>
        </div>
        <a href="#about-preview" className="scroll-cue" aria-label="Scroll to introduction"><span /></a>
      </section>

      <section id="about-preview" className="home-section split-intro">
        <div>
          <p className="section-index">01 / ABOUT</p>
          <h2>Building useful software,<br /><span>one clear decision at a time.</span></h2>
        </div>
        <div className="intro-copy">
          <p>I&apos;m a Johannesburg-based developer focused on turning real requirements into reliable, understandable web applications.</p>
          <Link href={ROUTES.about} className="text-link">More about me <span>↗</span></Link>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div><p className="section-index">02 / CAPABILITIES</p><h2>What I work with</h2></div>
          <Link href={ROUTES.skills} className="text-link">Full skills matrix <span>↗</span></Link>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="tech-panel capability-card" key={item.index}>
              <span>{item.index}</span><h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div><p className="section-index">03 / SELECTED WORK</p><h2>Projects & case studies</h2></div>
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
                <div className="project-screenshot-placeholder">
                  <span className="tech-label">Project screenshot</span>
                  <p>Add screenshot here</p>
                </div>
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
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
