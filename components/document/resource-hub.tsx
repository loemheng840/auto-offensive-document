"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Compass,
  GitBranch,
  Rocket,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

const featured = [
  {
    href: "/concepts",
    icon: Compass,
    eyebrow: "START HERE",
    eyebrowKh: "ចាប់ផ្តើមនៅទីនេះ",
    titleEn: "Core Concepts & Vocabulary",
    titleKh: "គោលគំនិត និង វាក្យសព្ទ",
    descEn:
      "Learn the seven ideas that organize every workflow in Auto-Offensive — Project, Target, Scan, Step, Finding, Pipeline, and API Key.",
    descKh:
      "រៀនគំនិតទាំងប្រាំពីរដែលរៀបចំរាល់ workflow នៅក្នុង Auto-Offensive — Project, Target, Scan, Step, Finding, Pipeline និង API Key។",
  },
  {
    href: "/quickstart",
    icon: Rocket,
    eyebrow: "5-MINUTE GUIDE",
    eyebrowKh: "មគ្គុទ្ទេស ៥ នាទី",
    titleEn: "5-Minute Quickstart",
    titleKh: "ការចាប់ផ្តើមរហ័ស ៥ នាទី",
    descEn:
      "Install the aof CLI, log in, create a project, and run a real two-tool pipeline scan that discovers subdomains and probes them for HTTP services.",
    descKh:
      "ដំឡើង aof CLI, ចូល, បង្កើត project និងដំណើរការ pipeline scan ដែលស្វែងរក subdomains និង probe ពួកវាសម្រាប់ HTTP services។",
  },
];

const resources = [
  {
    href: "/cli",
    icon: TerminalSquare,
    eyebrow: "CLI",
    titleEn: "CLI Reference",
    titleKh: "ឯកសារ CLI",
    descEn:
      "Command usage, authentication flow, execution model, and result handling for the platform CLI.",
    descKh:
      "ឯកសារ command usage, authentication flow, execution model និង result handling សម្រាប់ platform CLI។",
    links: [
      { href: "/cli#installation", labelEn: "Installation", labelKh: "ការដំឡើង" },
      { href: "/cli#commands", labelEn: "Commands", labelKh: "ពាក្យបញ្ជា" },
      { href: "/cli#auth", labelEn: "Configuration", labelKh: "ការកំណត់" },
    ],
  },
  {
    href: "/api",
    icon: BookOpen,
    eyebrow: "REST API",
    titleEn: "API Reference",
    titleKh: "ឯកសារ API",
    descEn:
      "Production-ready API documentation with authentication, endpoints, payloads, and response examples.",
    descKh:
      "ឯកសារ API សម្រាប់ production ដែលមាន authentication, endpoints, payloads និង response examples។",
    links: [
      { href: "/api#overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
      { href: "/api#auth", labelEn: "Authentication", labelKh: "Authentication" },
      { href: "/api#proj-list", labelEn: "Endpoints", labelKh: "Endpoints" },
    ],
  },
  {
    href: "/ci-cd",
    icon: GitBranch,
    eyebrow: "PIPELINES",
    titleEn: "CI/CD Integration",
    titleKh: "ការរួមបញ្ចូល CI/CD",
    descEn:
      "Integrate scanning into build pipelines with secure auth, job tracking, and policy-based release gates.",
    descKh:
      "រួមបញ្ចូលការស្កេនទៅក្នុង build pipelines ជាមួយ secure auth, job tracking និង policy-based release gates។",
    links: [
      { href: "/ci-cd#overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
      { href: "/ci-cd#workflow", labelEn: "Workflow", labelKh: "Workflow" },
      { href: "/ci-cd#pipeline", labelEn: "Pipeline Patterns", labelKh: "Pipeline Patterns" },
    ],
  },
  {
    href: "/tools",
    icon: Code2,
    eyebrow: "TOOLING",
    titleEn: "Tool Reference",
    titleKh: "ឯកសារ Tools",
    descEn:
      "Scanner capabilities, parameter references, examples, output behavior, and operational limits.",
    descKh:
      "ឯកសារ scanner capabilities, parameter references, examples, output behavior និង operational limits។",
    links: [
      { href: "/tools#overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
      { href: "/tools#subfinder", labelEn: "Scanners", labelKh: "Scanners" },
      { href: "/tools#output", labelEn: "Outputs", labelKh: "លទ្ធផល" },
    ],
  },
];

const deepdive = [
  {
    href: "/api/recipes",
    icon: Sparkles,
    eyebrow: "API RECIPES",
    eyebrowKh: "Recipes សម្រាប់ API",
    titleEn: "API Recipes",
    titleKh: "ឯកសារយោង API",
    descEn:
      "Copy-paste curl recipes for Projects, Scans, and Findings — request, response, filters, exports, and the errors you'll see along the way.",
    descKh:
      "Recipes curl ច្បាស់លាស់សម្រាប់ Projects, Scans និង Findings — request, response, filters, exports និង errors ដែលអ្នកនឹងជួបក្នុងផ្លូវ។",
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
                ? "ស្វែងរកឯកសារដែលច្បាស់ និងងាយប្រើ"
                : "Find the docs your team needs"}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#5F5A52] dark:text-[#C9CDD4] md:text-lg">
              {isKhmer
                ? "ចាប់ផ្តើមជាមួយ Core Concepts ឬដំណើរការ Quickstart ៥ នាទី បន្ទាប់មកជ្រៅទៅក្នុង CLI, API, CI/CD និង tool references ពេញលេញ។"
                : "Start with the core concepts or run the 5-minute quickstart, then go deeper with the CLI, API, CI/CD, and tool references."}
            </p>
          </div>

          {/* Featured: Concepts + Quickstart */}
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

        {/* References */}
        <div className="mt-12">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#88837B] dark:text-[#9CA3AF]">
            {isKhmer ? "ឯកសារយោង" : "References"}
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {resources.map((resource) => {
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
                        <h2 className="mt-1 text-[1.65rem] font-semibold tracking-[-0.035em]">
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

        {/* Recipes */}
        <div className="mt-12">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#88837B] dark:text-[#9CA3AF]">
            {isKhmer ? "Recipes" : "Recipes"}
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {deepdive.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start justify-between gap-5 rounded-3xl border border-[#E7E3DA] bg-white p-6 transition-all duration-200 hover:border-[#0F766E]/40 hover:shadow-[0_10px_28px_rgba(15,118,110,0.08)] dark:border-white/10 dark:bg-[#101114] dark:hover:border-[#7DE7D8]/30"
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DDEBE7] bg-[#F4FBF8] text-[#0F766E] dark:border-white/10 dark:bg-white/5 dark:text-[#7DE7D8]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#0F766E] dark:text-[#7DE7D8]">
                        {isKhmer ? item.eyebrowKh : item.eyebrow}
                      </p>
                      <h2 className="mt-1 text-[1.4rem] font-semibold tracking-[-0.025em] leading-tight">
                        {isKhmer ? item.titleKh : item.titleEn}
                      </h2>
                      <p className="mt-2 text-[14.5px] leading-[1.65] text-[#5D554B] dark:text-[#C9CDD4]">
                        {isKhmer ? item.descKh : item.descEn}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-[#88837B] dark:text-[#A1A1AA] transition-transform group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
