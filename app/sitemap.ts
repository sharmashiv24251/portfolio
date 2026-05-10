import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { canonicalUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const projectRoutes = projects.map((project) => ({
    url: canonicalUrl(`/project/${project.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: canonicalUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: canonicalUrl("/blogs"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: canonicalUrl("/freelance/give-give"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...projectRoutes,
  ];
}
