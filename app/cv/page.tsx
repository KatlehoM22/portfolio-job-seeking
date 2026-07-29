import type { Metadata } from "next";
import {
  FaBriefcase,
  FaCheckCircle,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import { SectionTitle } from "@/components/atoms/SectionTitle";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Katleho Makoro's software development experience, education, and technical skills.",
};

const experience = [
  {
    role: "Software Developer Intern",
    company: "iHub Africa",
    period: "October 2025 – Present",
    highlights: [
      "Develop and maintain internal full-stack applications using JavaScript, React, Node.js, and PostgreSQL.",
      "Design REST APIs and integrate external systems and data into operational applications.",
      "Implement role-based dashboards, validation, reporting, and workflow-focused data features.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "ByteCode Consulting",
    location: "Midrand, South Africa",
    period: "September 2024 – August 2025",
    highlights: [
      "Gained practical experience with SAP ERP, SAPUI5/Fiori, OData, and ABAP development.",
      "Contributed frontend and backend features to a full-stack Meeting and Project Tracker.",
      "Researched CMS platforms and supported the integration of SAP applications into business workflows.",
    ],
  },
];

const skillGroups = [
  {
    label: "Web development",
    skills: ["Java", "JavaScript", "React", "HTML", "CSS", "Node.js", "Express.js"],
  },
  {
    label: "Data and APIs",
    skills: ["REST APIs", "OData", "SQL", "PostgreSQL", "SQLite"],
  },
  {
    label: "Enterprise development",
    skills: ["SAP ERP", "SAPUI5/Fiori", "ABAP", "ABAP Dictionary"],
  },
  {
    label: "Engineering tools",
    skills: ["Git", "VS Code", "GitHub Copilot", "Codex", "Claude"],
  },
];

function HighlightList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <FaCheckCircle
            className="mt-1 h-3.5 w-3.5 shrink-0 text-primary"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CvPage() {
  return (
    <main className="space-y-10">
      <SectionTitle
        eyebrow="CV"
        title="Experience and qualifications"
        description="A focused overview of my software development experience, education, and technical strengths."
      />

      <section className="tech-panel rounded-lg p-6 sm:p-7">
        <p className="section-index">PROFESSIONAL PROFILE</p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground sm:text-base">
          Junior software developer with a Diploma in Computer Science and
          internship experience across full-stack web development, enterprise
          systems, and database-driven applications. I build role-based
          interfaces, REST APIs, integrations, and internal workflow systems,
          with a strong focus on maintainable solutions, collaboration, and
          continuous learning.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <FaBriefcase className="h-4 w-4" aria-hidden="true" />
          <h2 className="tech-label text-sm font-semibold">
            Professional experience
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {experience.map((position) => (
            <article
              key={`${position.company}-${position.period}`}
              className="tech-panel rounded-lg p-6"
            >
              <p className="tech-label text-[0.68rem] text-primary">
                {position.period}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {position.role}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {position.company}
                {position.location ? ` · ${position.location}` : ""}
              </p>
              <HighlightList items={position.highlights} />
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <article className="tech-panel rounded-lg p-6">
          <div className="flex items-center gap-2 text-primary">
            <FaGraduationCap className="h-4 w-4" aria-hidden="true" />
            <h2 className="tech-label text-sm font-semibold">Education</h2>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-foreground">
            Diploma in Computer Science
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Tshwane University of Technology · Pretoria
          </p>
          <p className="mt-1 text-sm font-medium text-primary">
            Completed in 2025
          </p>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Coursework included software development, database development,
            and system design.
          </p>
        </article>

        <article className="tech-panel rounded-lg p-6">
          <div className="flex items-center gap-2 text-primary">
            <FaLaptopCode className="h-4 w-4" aria-hidden="true" />
            <h2 className="tech-label text-sm font-semibold">
              Core technologies
            </h2>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-semibold text-foreground">
                  {group.label}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {group.skills.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

    </main>
  );
}
