"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, BookOpen, Code2, GitBranch, TerminalSquare } from "lucide-react";

const resources = [
  {
    href: "/api",
    icon: BookOpen,
    eyebrow: "REST API",
    titleEn: "API Reference",
    titleKh: "ឯកសារ API",
    descEn: "Production-ready API documentation with authentication, endpoints, payloads, and response examples.",
    descKh: "ឯកសារ API សម្រាប់ production ដែលមាន authentication, endpoints, payloads និង response examples។",
    links: [
      { href: "/api#overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
      { href: "/api#auth", labelEn: "Authentication", labelKh: "Authentication" },
      { href: "/api#projects", labelEn: "Endpoints", labelKh: "Endpoints" },
    ],
  },
  {
    href: "/cli",
    icon: TerminalSquare,
    eyebrow: "CLI",
    titleEn: "CLI Reference",
    titleKh: "ឯកសារ CLI",
    descEn: "Command usage, authentication flow, execution model, and result handling for the platform CLI.",
    descKh: "ឯកសារ command usage, authentication flow, execution model និង result handling សម្រាប់ platform CLI។",
    links: [
      { href: "/cli#installation", labelEn: "Installation", labelKh: "ការដំឡើង" },
      { href: "/cli#commands", labelEn: "Commands", labelKh: "ពាក្យបញ្ជា" },
      { href: "/cli#auth", labelEn: "Configuration", labelKh: "ការកំណត់" },
    ],
  },
  {
    href: "/ci-cd",
    icon: GitBranch,
    eyebrow: "PIPELINES",
    titleEn: "CI/CD Integration",
    titleKh: "ការរួមបញ្ចូល CI/CD",
    descEn: "Integrate scanning into build pipelines with secure auth, job tracking, and policy-based release gates.",
    descKh: "រួមបញ្ចូលការស្កេនទៅក្នុង build pipelines ជាមួយ secure auth, job tracking និង policy-based release gates។",
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
    descEn: "Scanner capabilities, parameter references, examples, output behavior, and operational limits.",
    descKh: "ឯកសារ scanner capabilities, parameter references, examples, output behavior និង operational limits។",
    links: [
      { href: "/tools#overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
      { href: "/tools#subfinder", labelEn: "Scanners", labelKh: "Scanners" },
      { href: "/tools#output", labelEn: "Outputs", labelKh: "លទ្ធផល" },
    ],
  },
];

export default function ResourceHub() {
  const locale = useLocale();
  const isKhmer = locale === "kh";

  return (
    <div className="min-h-screen bg-[#FCFCFA] px-4 py-10 text-[#141414] dark:bg-[#09090B] dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-[#E8E5DE] pb-10 dark:border-white/10">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#E6E1D7] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F766E] dark:border-white/10 dark:bg-white/5 dark:text-[#7DE7D8]">
              Documentation
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
              {isKhmer ? "ស្វែងរកឯកសារដែលច្បាស់ និងងាយប្រើ" : "Find the docs your team needs"}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#5F5A52] dark:text-[#C9CDD4] md:text-lg">
              {isKhmer
                ? "ចូលទៅកាន់ API, CLI, CI/CD និង tool references ទាំងអស់ក្នុងរចនាប័ទ្មឯកសារដែលសាមញ្ញ ស្អាត និងមានរចនាសម្ព័ន្ធច្បាស់។"
                : "Move through API, CLI, CI/CD, and tool references inside one cleaner documentation experience inspired by modern developer docs."}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
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
    </div>
  );
}
