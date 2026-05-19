"use client";

import CodeScanningContent from "./code-scanning-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = [
    "overview",
    "git-integration",
    "trigger-scan",
    "issues",
    "hotspots",
    "dependencies",
    "quality-gates",
];

const TOC_EN: TocItem[] = [
    { id: "overview", labelEn: "Overview" },
    { id: "git-integration", labelEn: "Git integration" },
    { id: "trigger-scan", labelEn: "Trigger a code scan" },
    { id: "issues", labelEn: "Issues & severity" },
    { id: "hotspots", labelEn: "Security hotspots" },
    { id: "dependencies", labelEn: "Dependency vulns" },
    { id: "quality-gates", labelEn: "Quality gates" },
];

const TOC_KH: TocItem[] = [
    { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
    { id: "git-integration", labelEn: "Git integration", labelKh: "Git integration" },
    { id: "trigger-scan", labelEn: "Trigger a code scan", labelKh: "បើក code scan" },
    { id: "issues", labelEn: "Issues & severity", labelKh: "Issues និង severity" },
    { id: "hotspots", labelEn: "Security hotspots", labelKh: "Security hotspots" },
    { id: "dependencies", labelEn: "Dependency vulns", labelKh: "Dependency vulnerabilities" },
    { id: "quality-gates", labelEn: "Quality gates", labelKh: "Quality gates" },
];

export default function CodeScanningDocument() {
    const locale = useLocale();
    const isKhmer = locale === "kh";
    return (
        <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
            <CodeScanningContent />
        </DocsLayout>
    );
}
