import { SectionTitle } from "@/components/atoms/SectionTitle";

export default function CvPage() {
  return (
    <main className="space-y-6">
      <SectionTitle
        eyebrow="CV"
        title="Experience snapshot"
        description="A concise recruiter-friendly summary of work history, education, and impact."
      />

      {/* EXPERIENCE */}
      <section className="tech-panel rounded-lg p-6 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Internship Experience
        </h2>

        <div className="space-y-2 text-sm text-slate-700 sm:text-base">
          <p className="font-medium">Software Development Intern</p>
          <p className="text-slate-500">Enterprise-focused development environment</p>

          <ul className="mt-2 space-y-1">
            <li>• Contributed to full-stack internal applications and workflow-driven systems</li>
            <li>• Implemented frontend features, backend validation logic, and database interactions</li>
            <li>• Worked with REST APIs and structured business process requirements</li>
            <li>• Gained exposure to enterprise ecosystems including SAP-based solutions</li>
          </ul>
        </div>
      </section>
      

      {/* EDUCATION */}
      <section className="tech-panel rounded-lg p-6 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Education
        </h2>

        <div className="space-y-2 text-sm text-slate-700 sm:text-base">
          <p className="font-medium">Diploma in Computer Science</p>

          <ul className="mt-2 space-y-1">
            <li>• Academic grounding in Java programming and object-oriented principles</li>
            <li>• Relational database design, SQL querying, and normalization concepts</li>
            <li>• Exposure to software development lifecycle and system design fundamentals</li>
          </ul>
        </div>
      </section>

      {/* TECHNICAL FOCUS */}
      <section className="tech-panel rounded-lg p-6 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Technical Focus
        </h2>

        <p className="text-sm leading-7 text-slate-700 sm:text-base">
          My strongest practical experience is in full-stack JavaScript development,
          particularly backend service logic, API integration, and structured
          application design. I continue to strengthen my skills in scalable system
          architecture and enterprise-oriented software delivery.
        </p>
      </section>
    </main>
  );
}
