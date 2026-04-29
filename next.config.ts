import type { NextConfig } from "next";

const isGHPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGHPages && { output: "export" }),
  basePath: isGHPages ? "/portfolio" : "",
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
