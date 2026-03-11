import fs from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";

type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
};

type ImportedProjectModule = {
  metadata: Omit<ProjectMeta, "slug">;
  default: ComponentType;
};

const contentDirectory = path.join(process.cwd(), "content", "projects");

async function getProjectFiles() {
  const files = await fs.readdir(contentDirectory);
  return files.filter((file) => file.endsWith(".mdx"));
}

export async function getProjectSlugs() {
  const files = await getProjectFiles();
  return files.map((file) => file.replace(/\.mdx$/, ""));
}

async function importProject(slug: string): Promise<ImportedProjectModule | null> {
  try {
    return (await import(`@/content/projects/${slug}.mdx`)) as ImportedProjectModule;
  } catch {
    return null;
  }
}

export async function getProjectSummaries(): Promise<ProjectMeta[]> {
  const slugs = await getProjectSlugs();

  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const project = await importProject(slug);

      if (!project) {
        return null;
      }

      return {
        slug,
        ...project.metadata,
      } satisfies ProjectMeta;
    }),
  );

  return projects.filter((project): project is ProjectMeta => project !== null);
}

export async function getProjectBySlug(slug: string) {
  const project = await importProject(slug);

  if (!project) {
    return null;
  }

  return {
    meta: {
      slug,
      ...project.metadata,
    },
    Content: project.default,
  };
}
