import { MetadataRoute } from "next";

const BASE_URL = "https://sharmashiv24251.github.io/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
