import { SectionTitle } from "@/components/atoms/SectionTitle";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function AboutPage() {
  const strengths = [
    {
      title: "Full-stack delivery",
      detail:
        "I am comfortable taking a feature from initial requirement through frontend implementation, backend logic, database interaction, and final testing.I focus on building soultions that are reliable and easy for teams to maintain.",
    },
    {
      title: "Structured system thinking",
      detail:
        "I approach development with a focus on clear separation between UI, business logic, and data layers. This helps me design applications that remain understandableand scalable.",
    },
    {
      title: "Practical problem solving",
      detail:
        "My goal is to deliver solutions that improve efficiency and support long-term use.",
    },
  ];

  const workingStyle = [
    "I break complex tasks into manageable milestones so progress remains visible and easier to test.",
    "I document key decisions and trade-offs to help teams understand system behaviour and future impact.",
    "I prioritise reliability, clear user feedback, and predictable application behaviour in the systems I build.",
    "I communicate risks or blockers early and stay focused on maintaining steady delivery progress.",
  ];

  return (
    <main className="space-y-8">
      <SectionTitle
        eyebrow="About"
        title={`${SITE.name} - Software Developer`}
        description="I build production-minded web applications with strong fundamentals in system design, software development, and team collaboration."
      />

      <section className="about-profile-grid">
        <article className="tech-panel rounded-lg p-6">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Professional profile
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            I am a {SITE.location}-based developer with experience building modern web applications 
            using Javascript frameworks, RESTful APIs, and relational databases.
            My work focuses on translating business requirements into scalable and 
            maintainable systems that support real operational workflows. I care about writing code
            that teams can read, trust, and extend.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            I hold a diploma in Computer Science. My technical foundation includes academic exposure to Java, object-oriented 
            programming principles, data structures, and relational database design. These fundamentals have shaped my approach 
            towards backend logic, data modeling, and structured application development.
          </p>
        </article>

        <aside className="profile-photo-card tech-panel rounded-lg p-4" aria-label="Profile photo placeholder">
          <div className="profile-photo-frame">
            <Image 
              src="/katleho_profile.jpg" 
              alt="Katleho Makoro"
              fill
              className="profile-photo object-cover" 
            />
          </div>
          <div className="profile-photo-caption">
            <span className="status-dot" />
            Available for junior developer opportunities
          </div>
        </aside>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          What I bring to development teams
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {strengths.map((item) => (
            <article
              key={item.title}
              className="tech-panel rounded-lg p-5"
            >
              <h3 className="tech-label text-[0.74rem] font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.3fr_1fr]">
        <article className="tech-panel rounded-lg p-6">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            How I work
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
            {workingStyle.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="tech-panel rounded-lg p-6">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Current focus
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Seeking opportunities where I can contribute as a software developer,
            grow with experienced teams, and deliver measurable value through
            thoughtful engineering.
          </p>
        </article>
      </section>
    </main>
  );
}
