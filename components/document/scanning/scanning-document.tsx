"use client";

import ScanningContent from "./scanning-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = [
    "overview",
    "basic-scan",
    "medium-scan",
    "advanced-scan",
    "tools",
    "queue",
    "streaming",
];

const TOC_EN: TocItem[] = [
    { id: "overview", labelEn: "Overview" },
    { id: "basic-scan", labelEn: "Basic scan" },
    { id: "medium-scan", labelEn: "Medium scan" },
    { id: "advanced-scan", labelEn: "Advanced pipeline scan" },
    { id: "tools", labelEn: "Supported tools" },
    { id: "queue", labelEn: "Queue & lifecycle" },
    { id: "streaming", labelEn: "Real-time streaming" },
];

const TOC_KH: TocItem[] = [
    { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
    { id: "basic-scan", labelEn: "Basic scan", labelKh: "Basic scan" },
    { id: "medium-scan", labelEn: "Medium scan", labelKh: "Medium scan" },
    { id: "advanced-scan", labelEn: "Advanced pipeline scan", labelKh: "Advanced pipeline scan" },
    { id: "tools", labelEn: "Supported tools", labelKh: "Tools ដែលគាំទ្រ" },
    { id: "queue", labelEn: "Queue & lifecycle", labelKh: "Queue និង lifecycle" },
    { id: "streaming", labelEn: "Real-time streaming", labelKh: "Real-time streaming" },
];

export default function ScanningDocument() {
    const locale = useLocale();
    const isKhmer = locale === "kh";
    return (
        <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
            <ScanningContent />
        </DocsLayout>
    );
}
