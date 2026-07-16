import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { getProjectSummaries } from "@/lib/projects";

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
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
