import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// The docs app is always served under the /docs path.
// - In production it sits behind the main frontend's /docs/* rewrite.
// - In local dev (next dev --port 3001) it responds at http://localhost:3001/docs.
// Keeping basePath identical in both environments avoids env-dependent surprises.
const nextConfig: NextConfig = {
  basePath: "/docs",
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
