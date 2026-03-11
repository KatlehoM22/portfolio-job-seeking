import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SITE } from "@/lib/constants";

export default function AboutPage() {
  const strengths = [
    {
      title: "Full-stack delivery",
      detail:
        "I can own features from frontend experience through API design and deployment-ready implementation.",
    },
    {
      title: "Architecture thinking",
      detail:
        "I prefer clear boundaries, typed contracts, and component systems that scale with product growth.",
    },
    {
      title: "Business alignment",
      detail:
        "I translate requirements into maintainable solutions that support real team workflows.",
    },
  ];

  const workingStyle = [
    "Break work into small, testable milestones.",
    "Document tradeoffs so teams can make informed decisions quickly.",
    "Prioritize accessibility, reliability, and clear UI feedback.",
    "Communicate blockers early and focus on delivery momentum.",
  ];

  return (
    <main className="space-y-8">
      <SectionTitle
        eyebrow="About"
        title={`${SITE.name} - Software Developer`}
        description="I build production-minded web applications with strong fundamentals in TypeScript, system design, and team collaboration."
      />

      <section className="tech-panel rounded-lg p-6">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Professional profile
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
          I am a {SITE.location}-based developer focused on reliable, maintainable
          software. My work combines practical frontend engineering, backend
          integration, and structured problem-solving. I care about writing code
          that teams can read, trust, and extend.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          What I bring to engineering teams
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
