import type { NextConfig } from "next";

const isGHPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGHPages && { output: "export" }),
  basePath: isGHPages ? "/portfolio" : "",
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value:
              '</sitemap.xml>; rel="describedby"; type="application/xml", </robots.txt>; rel="service-doc"; type="text/plain"',
          },
        ],
      },
    ];
  },
  images: {
    unoptimized: isGHPages,
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "opfjwckyarxymdkzuwdk.supabase.co",
        protocol: "https",
      },
      {
        hostname: "ihichdejyaeignzbnfgb.supabase.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
