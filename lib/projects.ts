import fs from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";

export type ProjectScreenshot = {
  src: string;
  label: string;
  caption: string;
  alt?: string;
};

export type ProjectGitHub =
  | { status: "public"; url: string }
  | { status: "private" | "unavailable" };

type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  screenshot?: string;
  screenshots: ProjectScreenshot[];
  github: ProjectGitHub;
};

type ImportedProjectMetadata = Partial<
  Omit<ProjectMeta, "slug" | "screenshots" | "github">
> & {
  screenshots?: ProjectScreenshot[];
  github?: {
    status?: string;
    url?: string;
  };
};

type ImportedProjectModule = {
  metadata?: ImportedProjectMetadata;
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

function normalizeProjectMeta(
  slug: string,
  metadata: ImportedProjectModule["metadata"],
): ProjectMeta {
  const screenshots = Array.isArray(metadata?.screenshots)
    ? metadata.screenshots.filter(
        (item): item is ProjectScreenshot =>
          typeof item?.src === "string" &&
          typeof item?.label === "string" &&
          typeof item?.caption === "string",
      )
    : [];

  if (screenshots.length === 0 && metadata?.screenshot) {
    screenshots.push({
      src: metadata.screenshot,
      label: "Product overview",
      caption: "A representative view of the product and its primary experience.",
    });
  }

  let github: ProjectGitHub = { status: "unavailable" };

  if (metadata?.github?.status === "private") {
    github = { status: "private" };
  } else if (
    metadata?.github?.status === "public" &&
    typeof metadata.github.url === "string"
  ) {
    github = { status: "public", url: metadata.github.url };
  }

  return {
    slug,
    title: metadata?.title ?? slug,
    summary: metadata?.summary ?? "",
    stack: Array.isArray(metadata?.stack) ? metadata.stack : [],
    screenshot: screenshots[0]?.src ?? metadata?.screenshot,
    screenshots,
    github,
  };
}

export async function getProjectSummaries(): Promise<ProjectMeta[]> {
  const slugs = await getProjectSlugs();

  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const project = await importProject(slug);

      if (!project) {
        return null;
      }

      return normalizeProjectMeta(slug, project.metadata);
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
    meta: normalizeProjectMeta(slug, project.metadata),
    Content: project.default,
  };
}
