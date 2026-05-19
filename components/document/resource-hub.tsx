"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Code2,
  FileText,
  GitBranch,
  Radar,
  Rocket,
  TerminalSquare,
} from "lucide-react";

const featured = [
  {
    href: "/getting-started",
    icon: Rocket,
    eyebrow: "START HERE",
    eyebrowKh: "ចាប់ផ្តើមនៅទីនេះ",
    titleEn: "Getting Started",
    titleKh: "ការចាប់ផ្តើម",
    descEn:
      "Learn what Auto-Offensive is, install the aof CLI, and run your first pipeline scan in under 5 minutes.",
    descKh:
      "ស្វែងយល់ថា Auto-Offensive ជាអ្វី ដំឡើង aof CLI និងដំណើរការ pipeline scan ដំបូងរបស់អ្នកក្នុងតិចជាង ៥ នាទី។",
  },
  {
    href: "/scanning",
    icon: Radar,
    eyebrow: "PLATFORM CORE",
    eyebrowKh: "ស្នូលនៃផ្លេតហ្វម",
    titleEn: "Scanning",
    titleKh: "ការស្កេន",
    descEn:
      "Three scan modes — Basic, Medium, Advanced — and seven managed tools (subfinder, httpx, naabu, nuclei, nmap, gobuster, gitleaks).",
    descKh:
      "Scan modes ៣ ប្រភេទ — Basic, Medium, Advanced — និង tools ៧ ដែលគ្រប់គ្រង (subfinder, httpx, naabu, nuclei, nmap, gobuster, gitleaks)។",
  },
];

const features = [
  {
    href: "/ai-analysis",
    icon: Brain,
    eyebrow: "AI",
    titleEn: "AI Analysis",
    titleKh: "ការវិភាគ AI",
    descEn:
      "Claude-powered next-step suggestions and deep analysis enriched with 18 MCP tools (CVE, EPSS, OWASP, and more).",
    descKh:
      "Next-step suggestions និង deep analysis ដោយ Claude រួមជាមួយ MCP tools ១៨ (CVE, EPSS, OWASP, ល។)។",
    links: [
      { href: "/ai-analysis#modes", labelEn: "Suggestion modes", labelKh: "Modes" },
      { href: "/ai-analysis#mcp-tools", labelEn: "MCP tools", labelKh: "MCP tools" },
      { href: "/ai-analysis#models-cost", labelEn: "Models & cost", labelKh: "Models និងតម្លៃ" },
    ],
  },
  {
    href: "/code-scanning",
    icon: Code2,
    eyebrow: "SAST",
    titleEn: "Code Scanning",
    titleKh: "Code Scanning",
    descEn:
      "Static Application Security Testing on your repos — bugs, vulnerabilities, hotspots, and dependency CVEs.",
    descKh:
      "Static Application Security Testing — bugs, vulnerabilities, hotspots និង dependency CVEs។",
    links: [
      { href: "/code-scanning#trigger-scan", labelEn: "Trigger a scan", labelKh: "បើក scan" },
      { href: "/code-scanning#issues", labelEn: "Issues & severity", labelKh: "Issues" },
      { href: "/code-scanning#dependencies", labelEn: "Dependency vulns", labelKh: "Dependencies" },
    ],
  },
  {
    href: "/reports",
    icon: FileText,
    eyebrow: "REPORTING",
    titleEn: "Reports",
    titleKh: "របាយការណ៍",
    descEn:
      "Branded PDF, DOCX, XLSX, and JSON reports generated from any scan job, with scope filtering and column selection.",
    descKh:
      "PDF, DOCX, XLSX និង JSON reports ដែលមាន branding ពី scan job ណាមួយ ជាមួយ scope filtering។",
    links: [
      { href: "/reports#generate", labelEn: "Generate", labelKh: "បង្កើត" },
      { href: "/reports#formats", labelEn: "Formats", labelKh: "Formats" },
      { href: "/reports#scope", labelEn: "Scope", labelKh: "Scope" },
    ],
  },
  {
    href: "/dashboard",
    icon: BarChart3,
    eyebrow: "ANALYTICS",
    titleEn: "Dashboard & Analytics",
    titleKh: "Dashboard និង Analytics",
    descEn:
      "Aggregate vulnerability trends, asset discovery, risk scoring, and top ports/services across all your scans.",
    descKh:
      "Vulnerability trends, asset discovery, risk scoring និង top ports/services ពី scans ទាំងអស់។",
    links: [
      { href: "/dashboard#metrics", labelEn: "Key metrics", labelKh: "Key metrics" },
      { href: "/dashboard#vulnerability-trends", labelEn: "Trends", labelKh: "Trends" },
      { href: "/dashboard#risk-scoring", labelEn: "Risk scoring", labelKh: "Risk scoring" },
    ],
  },
];

const developer = [
  {
    href: "/cli",
    icon: TerminalSquare,
    eyebrow: "CLI",
    titleEn: "CLI Reference",
    titleKh: "ឯកសារ CLI",
    descEn:
      "Complete reference for the aof CLI — installation, authentication, commands, TUI, and environment variables.",
    descKh:
      "ឯកសារពេញលេញសម្រាប់ aof CLI — ការដំឡើង, authentication, commands, TUI និង environment variables។",
    links: [
      { href: "/cli#installation", labelEn: "Install", labelKh: "ដំឡើង" },
      { href: "/cli#commands", labelEn: "Commands", labelKh: "Commands" },
      { href: "/cli#env-vars", labelEn: "Env vars", labelKh: "Env vars" },
    ],
  },
  {
    href: "/api",
    icon: BookOpen,
    eyebrow: "REST API",
    titleEn: "REST API",
    titleKh: "REST API",
    descEn:
      "Full HTTP API documentation — projects, targets, scans, findings, AI, reports, dashboard, and recipes.",
    descKh:
      "ឯកសារ HTTP API ពេញលេញ — projects, targets, scans, findings, AI, reports, dashboard។",
    links: [
      { href: "/api#auth", labelEn: "Authentication", labelKh: "Authentication" },
      { href: "/api#scans", labelEn: "Scans", labelKh: "Scans" },
      { href: "/api/recipes", labelEn: "Recipes", labelKh: "Recipes" },
    ],
  },
  {
    href: "/ci-cd",
    icon: GitBranch,
    eyebrow: "CI/CD",
    titleEn: "CI/CD Integration",
    titleKh: "ការរួមបញ្ចូល CI/CD",
    descEn:
      "Integrate scans into GitHub Actions, GitLab CI, Jenkins, or any pipeline. Includes severity gates and quotas.",
    descKh:
      "រួមបញ្ចូល scans ទៅក្នុង GitHub Actions, GitLab CI, Jenkins។ មាន severity gates និង quotas។",
    links: [
      { href: "/ci-cd#workflow", labelEn: "Workflow", labelKh: "Workflow" },
      { href: "/ci-cd#pipeline", labelEn: "Pipeline example", labelKh: "Pipeline" },
      { href: "/ci-cd#thresholds", labelEn: "Severity gates", labelKh: "Severity gates" },
    ],
  },
];

export default function ResourceHub() {
  const locale = useLocale();
  const isKhmer = locale === "kh";

  return (
    <div className="min-h-screen bg-[#FCFCFA] px-4 py-10 text-[#141414] dark:bg-[#09090B] dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="border-b border-[#E8E5DE] pb-10 dark:border-white/10">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#E6E1D7] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F766E] dark:border-white/10 dark:bg-white/5 dark:text-[#7DE7D8]">
              Documentation
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
              {isKhmer
                ? "ឯកសារ Auto-Offensive"
                : "Auto-Offensive Documentation"}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#5F5A52] dark:text-[#C9CDD4] md:text-lg">
              {isKhmer
                ? "ផ្លេតហ្វមពេញលេញសម្រាប់ automated offensive security — scanning, AI analysis, code scanning, reports និង CI/CD integration។ ចាប់ផ្តើមជាមួយ Getting Started ឬជ្រៅទៅក្នុង feature ណាមួយខាងក្រោម។"
                : "The complete platform for automated offensive security — scanning, AI analysis, code scanning, reports, and CI/CD integration. Start with Getting Started or dive into any feature below."}
            </p>
          </div>

          {/* Featured */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featured.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative overflow-hidden rounded-3xl border border-[#DDEBE7] bg-gradient-to-br from-[#F4FBF8] via-white to-white p-7 transition-all duration-200 hover:border-[#0F766E]/40 hover:shadow-[0_12px_32px_rgba(15,118,110,0.08)] dark:border-white/10 dark:from-[#0F2A26] dark:via-[#101114] dark:to-[#101114] dark:hover:border-[#7DE7D8]/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#0F766E]/20 bg-white text-[#0F766E] dark:border-white/10 dark:bg-white/5 dark:text-[#7DE7D8]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#0F766E] dark:text-[#7DE7D8]">
                          {isKhmer ? item.eyebrowKh : item.eyebrow}
                        </p>
                        <h2 className="mt-1.5 text-[1.7rem] font-semibold tracking-[-0.035em] leading-tight">
                          {isKhmer ? item.titleKh : item.titleEn}
                        </h2>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-[#88837B] dark:text-[#A1A1AA] transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-4 text-[15px] leading-7 text-[#5D554B] dark:text-[#C9CDD4]">
                    {isKhmer ? item.descKh : item.descEn}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Platform features */}
        <div className="mt-12">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#88837B] dark:text-[#9CA3AF]">
            {isKhmer ? "មុខងារផ្លេតហ្វម" : "Platform Features"}
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {features.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.href}
                  className="group rounded-3xl border border-[#E7E3DA] bg-white p-6 transition-all duration-200 hover:border-[#C9D8D4] hover:bg-[#FFFEFC] dark:border-white/10 dark:bg-[#101114] dark:hover:border-white/15 dark:hover:bg-[#121419]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DDEBE7] bg-[#F4FBF8] text-[#0F766E] dark:border-white/10 dark:bg-white/5 dark:text-[#7DE7D8]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F766E] dark:text-[#7DE7D8]">
                          {resource.eyebrow}
                        </p>
                        <h2 className="mt-1 text-[1.5rem] font-semibold tracking-[-0.035em]">
                          {isKhmer ? resource.titleKh : resource.titleEn}
                        </h2>
                      </div>
                    </div>
                    <Link
                      href={resource.href}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DFD5] text-[#1A1714] transition-colors hover:border-[#0F766E] hover:text-[#0F766E] dark:border-white/10 dark:text-white dark:hover:text-[#7DE7D8]"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <p className="mt-4 text-[15px] leading-7 text-[#5D554B] dark:text-[#C9CDD4]">
                    {isKhmer ? resource.descKh : resource.descEn}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-[#F0EBE2] pt-5 dark:border-white/8">
                    {resource.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between rounded-2xl px-1 py-2 text-sm text-[#3D3731] transition-colors hover:text-[#0F766E] dark:text-[#D5DAE2] dark:hover:text-[#7DE7D8]"
                      >
                        <span>{isKhmer ? link.labelKh : link.labelEn}</span>
                        <ArrowRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Developer Reference */}
        <div className="mt-12">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#88837B] dark:text-[#9CA3AF]">
            {isKhmer ? "Developer Reference" : "Developer Reference"}
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {developer.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.href}
                  className="group rounded-3xl border border-[#E7E3DA] bg-white p-6 transition-all duration-200 hover:border-[#C9D8D4] hover:bg-[#FFFEFC] dark:border-white/10 dark:bg-[#101114] dark:hover:border-white/15 dark:hover:bg-[#121419]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DDEBE7] bg-[#F4FBF8] text-[#0F766E] dark:border-white/10 dark:bg-white/5 dark:text-[#7DE7D8]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Link
                      href={resource.href}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E5DFD5] text-[#1A1714] transition-colors hover:border-[#0F766E] hover:text-[#0F766E] dark:border-white/10 dark:text-white dark:hover:text-[#7DE7D8]"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="mt-4">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#0F766E] dark:text-[#7DE7D8]">
                      {resource.eyebrow}
                    </p>
                    <h2 className="mt-1 text-[1.3rem] font-semibold tracking-[-0.025em]">
                      {isKhmer ? resource.titleKh : resource.titleEn}
                    </h2>
                    <p className="mt-2 text-[14px] leading-[1.6] text-[#5D554B] dark:text-[#C9CDD4]">
                      {isKhmer ? resource.descKh : resource.descEn}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-[#F0EBE2] pt-4 dark:border-white/8">
                    {resource.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-[12.5px] px-2 py-0.5 rounded border border-[#E5DFD5] dark:border-white/10 text-[#3D3731] dark:text-[#D5DAE2] hover:border-[#0F766E] hover:text-[#0F766E] dark:hover:text-[#7DE7D8] transition-colors"
                      >
                        {isKhmer ? link.labelKh : link.labelEn}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
