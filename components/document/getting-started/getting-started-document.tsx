"use client";

import GettingStartedContent from "./getting-started-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = [
    "what-is-aof",
    "core-concepts",
    "install",
    "first-scan",
    "view-results",
    "next-steps",
];

const TOC_EN: TocItem[] = [
    { id: "what-is-aof", labelEn: "What is Auto-Offensive?" },
    { id: "core-concepts", labelEn: "Core Concepts" },
    { id: "install", labelEn: "Install the CLI" },
    { id: "first-scan", labelEn: "Run your first scan" },
    { id: "view-results", labelEn: "View results" },
    { id: "next-steps", labelEn: "Next steps" },
];

const TOC_KH: TocItem[] = [
    { id: "what-is-aof", labelEn: "What is Auto-Offensive?", labelKh: "Auto-Offensive ជាអ្វី?" },
    { id: "core-concepts", labelEn: "Core Concepts", labelKh: "គោលគំនិតស្នូល" },
    { id: "install", labelEn: "Install the CLI", labelKh: "ដំឡើង CLI" },
    { id: "first-scan", labelEn: "Run your first scan", labelKh: "ដំណើរការ scan ដំបូង" },
    { id: "view-results", labelEn: "View results", labelKh: "មើលលទ្ធផល" },
    { id: "next-steps", labelEn: "Next steps", labelKh: "ជំហានបន្ទាប់" },
];

export default function GettingStartedDocument() {
    const locale = useLocale();
    const isKhmer = locale === "kh";

    return (
        <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
            <GettingStartedContent />
        </DocsLayout>
    );
}
