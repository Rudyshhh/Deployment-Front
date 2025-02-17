import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  typescript: {

    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable linting during builds
  },
};

export default nextConfig;
