import { SectionTitle } from "@/components/atoms/SectionTitle";

const skillGroups = [
  {
    area: "Frontend",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "Accessibility"],
  },
  {
    area: "Backend",
    items: ["Node.js", "REST APIs", "Data modeling", "Authentication fundamentals"],
  },
  {
    area: "Engineering",
    items: ["Component architecture", "Testing basics", "Documentation", "CI-aware workflows"],
  },
];

export default function SkillsPage() {
  return (
    <main className="space-y-8">
      <SectionTitle
        eyebrow="Skills"
        title="Tools and practices I ship with"
        description="I prioritize maintainable architecture, typed interfaces, and predictable delivery."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <section
            key={group.area}
            className="tech-panel rounded-lg p-5"
          >
            <h2 className="tech-label text-[0.74rem] font-semibold text-primary">{group.area}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
