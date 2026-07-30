import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";
import { getProjectSlugs } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectSlugs = await getProjectSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: new URL("/", SITE_URL).toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/about", SITE_URL).toString(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: new URL("/skills", SITE_URL).toString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/projects", SITE_URL).toString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: new URL("/cv", SITE_URL).toString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/contact", SITE_URL).toString(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: new URL(`/projects/${slug}`, SITE_URL).toString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
