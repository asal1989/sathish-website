import type { NextConfig } from "next";

// Served from the domain root (www.sielectricals.in), so no base path.
// Hardcoded since we know the repo. Override via NEXT_PUBLIC_BASE_PATH env var
// for previewing under a different path (e.g. custom domain → set to "").
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : process.env.NODE_ENV === "production"
      ? ""
      : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    // Expose to client-side code (for <Image> src in static export)
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
