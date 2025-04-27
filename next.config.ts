import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false  // Disable CSS optimization that uses native modules
  },
  webpack: (config) => {
    // Prevent loading the native Tailwind CSS Oxide module
    config.resolve.alias = {
      ...config.resolve.alias,
      '@tailwindcss/oxide': false
    };
    return config;
  }
};

export default nextConfig;
