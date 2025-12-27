import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.jiesen-huang.com',
        pathname: '/portfolio/**',
      },
    ],
  },
};

export default nextConfig;
