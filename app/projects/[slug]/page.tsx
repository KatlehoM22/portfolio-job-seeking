import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { CaseStudyCarousel } from "@/components/molecules/CaseStudyMedia";
import { ExpandableCaseStudy } from "@/components/organisms/ExpandableCaseStudy";
import { createPageMetadata } from "@/lib/metadata";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return createPageMetadata({
    title: project.meta.title,
    description: project.meta.summary,
    path: `/projects/${slug}`,
    image: project.meta.screenshot,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { Content } = project;

  return (
    <main className="space-y-8">
      <SectionTitle
        eyebrow="Case Study"
        title={project.meta.title}
        description={project.meta.summary}
      />

      <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
        {project.meta.stack.map((item) => (
          <li
            key={item}
            className="tech-label rounded border border-border bg-surface-muted px-2.5 py-1 text-[0.62rem] font-semibold text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>

      <CaseStudyCarousel
        screenshots={project.meta.screenshots}
        title={project.meta.title}
      />

      <ExpandableCaseStudy>
        <Content />
      </ExpandableCaseStudy>
    </main>
  );
}
