import { MetadataRoute } from "next";
import { getAllProjects } from "@/sanity/queries/project";
import { getAllExpertises } from "@/sanity/queries/expertise";
import { ALL_EXPERTISES_QUERYResult } from "@/sanity.types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://fortifyproductions.com";

  // Fetch all projects and expertises for dynamic routes
  const [projects, expertises] = await Promise.all([
    getAllProjects(),
    getAllExpertises(),
  ]);

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic project routes
  const projectRoutes: MetadataRoute.Sitemap =
    projects
      .filter((project) => !!project.slug?.current)
      .map((project) => ({
        url: `${baseUrl}/works/${project.slug!.current}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })) || [];

  // Dynamic service/expertise routes
  const serviceRoutes: MetadataRoute.Sitemap =
    (expertises as ALL_EXPERTISES_QUERYResult)
      .filter((expertise) => !!expertise.slug?.current)
      .map((expertise) => ({
        url: `${baseUrl}/services/${expertise.slug!.current}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })) || [];

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes];
}

