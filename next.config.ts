import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["./src/styles"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
