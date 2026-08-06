import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { getProjectSummaries } from "@/lib/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Technical case studies covering full-stack applications, system integrations, dashboards, APIs, and database-driven workflows.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getProjectSummaries();

  return (
    <main className="space-y-8">
      <SectionTitle
        eyebrow="Projects"
        title="Projects I am proud of"
        description="Each project page is content-driven and version-controlled for fast updates."
      />

      <div className="project-card-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            summary={project.summary}
            stack={project.stack}
            screenshot={project.screenshot}
            github={project.github}
            context={project.context}
            role={project.role}
            status={project.status}
            challenge={project.challenge}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
