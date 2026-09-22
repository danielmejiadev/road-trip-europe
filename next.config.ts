import type { NextConfig } from "next";

// GitHub Pages project site: assets need /road-trip-europe prefix only in CI builds.
const basePath = process.env.GITHUB_ACTIONS ? "/road-trip-europe" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
