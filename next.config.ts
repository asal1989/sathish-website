import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Full Next.js server app (no static export). Served from the domain root.
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
