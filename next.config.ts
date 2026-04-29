import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
