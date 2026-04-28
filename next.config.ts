import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
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
