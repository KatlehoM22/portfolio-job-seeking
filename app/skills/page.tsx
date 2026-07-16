import { SectionTitle } from "@/components/atoms/SectionTitle";
import { CERTIFICATES } from "@/lib/constants";
import type { IconType } from "react-icons";
import {
  FaBookOpen,
  FaCodeBranch,
  FaCubes,
  FaDatabase,
  FaJava,
  FaLock,
  FaServer,
  FaVial,
} from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import {
  SiExpress,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const skillGroups = [
  {
    area: "Languages",
    items: ["JavaScript", "SQL", "Java"],
  },
  {
    area: "Frontend",
    items: ["React", "Tailwind CSS", "Responsive UI development"],
  },
  {
    area: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Data modeling", "Authentication fundamentals"],
  },
  {
    area: "Engineering",
    items: ["Component architecture", "Testing basics", "Documentation", "CI-aware workflows"],
  },
  {
    area: "Databases",
    items: ["PostgreSQL", "MySQL","Database design principles"],
  }
];

const skillIcons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  SQL: FaDatabase,
  Java: FaJava,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Responsive UI development": MdDevices,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": FaServer,
  "Data modeling": FaDatabase,
  "Authentication fundamentals": FaLock,
  "Component architecture": FaCubes,
  "Testing basics": FaVial,
  Documentation: FaBookOpen,
  "CI-aware workflows": FaCodeBranch,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  "Database design principles": FaDatabase,
};

export default function SkillsPage() {
  return (
    <main className="space-y-8">
      <SectionTitle
        eyebrow="Skills"
        title="Tools and practices I ship with"
        description="My strongest practical experience is in full-stack JavaScript development, with additional academic grounding in Java and relational databases, plus exposure to SAP-based enterprise systems."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <section
            key={group.area}
            className="tech-panel rounded-lg p-5"
          >
            <h2 className="tech-label text-[0.74rem] font-semibold text-primary">{group.area}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {group.items.map((item) => {
                const Icon = skillIcons[item];

                return (
                  <li key={item} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span className="font-mono text-xs text-primary">-</span>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <section className="space-y-4">
        <div>
          <p className="section-index">CERTIFICATES</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            Credentials and learning milestones
          </h2>
        </div>

        <div className="certificate-grid">
          {CERTIFICATES.map((certificate) => (
            <a
              href={certificate.href}
              className="tech-panel certificate-card"
              key={certificate.id}
            >
              <div className="certificate-card-topline">
                <span>{certificate.status}</span>
                <span>{certificate.year}</span>
              </div>
              <div>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
              </div>
              <span className="certificate-link">View credential <span>↗</span></span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
