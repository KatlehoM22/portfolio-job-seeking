import { SectionTitle } from "@/components/atoms/SectionTitle";
import {
  FaBriefcase,
  FaCheckCircle,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const experienceHighlights = [
  "Contributed to full-stack internal applications and workflow-driven systems",
  "Implemented frontend features, backend validation logic, and database interactions",
  "Worked with REST APIs and structured business process requirements",
  "Gained exposure to enterprise ecosystems including SAP-based solutions",
];

const educationHighlights = [
  "Academic grounding in Java programming and object-oriented principles",
  "Relational database design, SQL querying, and normalization concepts",
  "Exposure to software development lifecycle and system design fundamentals",
];

function HighlightList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
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
    <main className="space-y-6">
      <SectionTitle
        eyebrow="CV"
        title="Experience snapshot"
        description="A concise recruiter-friendly summary of work history, education, and impact."
      />

      <section className="tech-panel space-y-4 rounded-lg p-6">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
          <FaBriefcase className="h-4 w-4" aria-hidden="true" />
          Internship Experience
        </h2>

        <div className="space-y-2 text-sm text-slate-700 sm:text-base">
          <p className="font-medium">Software Development Intern</p>
          <p className="text-slate-500">
            Enterprise-focused development environment
          </p>

          <HighlightList items={experienceHighlights} />
        </div>
      </section>

      <section className="tech-panel space-y-4 rounded-lg p-6">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
          <FaGraduationCap className="h-4 w-4" aria-hidden="true" />
          Education
        </h2>

        <div className="space-y-2 text-sm text-slate-700 sm:text-base">
          <p className="font-medium">Diploma in Computer Science</p>

          <HighlightList items={educationHighlights} />
        </div>
      </section>

      <section className="tech-panel space-y-4 rounded-lg p-6">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
          <FaLaptopCode className="h-4 w-4" aria-hidden="true" />
          Technical Focus
        </h2>

        <p className="text-sm leading-7 text-slate-700 sm:text-base">
          My strongest practical experience is in full-stack JavaScript
          development, particularly backend service logic, API integration, and
          structured application design. I continue to strengthen my skills in
          scalable system architecture and enterprise-oriented software delivery.
        </p>
      </section>
    </main>
  );
}
