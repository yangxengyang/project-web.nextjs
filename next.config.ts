import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "teamplatedev.github.io",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;