import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // basePath tells Next.js all routes are prefixed with /docs when proxied
  basePath: "/docs",

  // Asset prefix for static files (images, etc.)
  assetPrefix: "/docs",

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === "development", // Disable optimization in dev for faster loading
  },

  // Production optimizations
  reactStrictMode: true,
  poweredByHeader: false,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default withNextIntl(nextConfig);
