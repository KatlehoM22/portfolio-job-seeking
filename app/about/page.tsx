import { SectionTitle } from "@/components/atoms/SectionTitle";
import Image from "next/image";
import { FaBullseye, FaLayerGroup, FaProjectDiagram } from "react-icons/fa";
import { SITE } from "@/lib/constants";

export default function AboutPage() {
  const strengths = [
    {
      title: "Full-stack delivery",
      icon: FaLayerGroup,
      detail:
        "I am comfortable taking a feature from initial requirements through frontend implementation, backend logic, database interaction, and final testing. I focus on building solutions that are reliable and easy for teams to maintain.",
    },
    {
      title: "Structured system thinking",
      icon: FaProjectDiagram,
      detail:
        "I approach development with a focus on clear separation between UI, business logic, and data layers. This helps me design applications that remain understandable and scalable.",
    },
    {
      title: "Practical problem solving",
      icon: FaBullseye,
      detail:
        "My goal is to deliver solutions that improve efficiency and support long-term use.",
    },
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
            using JavaScript frameworks, RESTful APIs, and relational databases.
            My work focuses on translating business requirements into scalable and 
            maintainable systems that support real operational workflows. I care about writing code
            that teams can read, trust, and extend.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            I hold a diploma in Computer Science. My technical foundation includes academic exposure to Java, object-oriented 
            programming principles, data structures, and relational database design. These fundamentals have shaped my approach 
            to backend logic, data modeling, and structured application development.
          </p>
        </article>

        <aside className="profile-photo-card tech-panel rounded-lg p-4" aria-label="Profile photo placeholder">
          <div className="profile-photo-frame">
            <Image 
              src="/katleho_profile.jpg" 
              alt="Katleho Makoro"
              fill
              priority
              loading="eager"
              sizes="(max-width: 720px) calc(100vw - 2.5rem), 340px"
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
              <div className="flex items-center gap-2 text-primary">
                <item.icon className="h-4 w-4" aria-hidden="true" />
                <h3 className="tech-label text-[0.74rem] font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
