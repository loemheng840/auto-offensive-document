import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// When deployed standalone to Vercel, no basePath is needed.
// When proxied behind the main app at /docs, set NEXT_PUBLIC_BASE_PATH=/docs.
const isProxied = process.env.NEXT_PUBLIC_BASE_PATH === "/docs";

const nextConfig: NextConfig = {
  // basePath tells Next.js all routes are prefixed with /docs when proxied
  ...(isProxied && { basePath: "/docs", assetPrefix: "/docs" }),

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
