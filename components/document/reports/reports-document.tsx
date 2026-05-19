"use client";

import ReportsContent from "./reports-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = ["overview", "generate", "formats", "templates", "scope", "manage"];

const TOC_EN: TocItem[] = [
    { id: "overview", labelEn: "Overview" },
    { id: "generate", labelEn: "Generate a report" },
    { id: "formats", labelEn: "Export formats" },
    { id: "templates", labelEn: "Templates & branding" },
    { id: "scope", labelEn: "Scope & filtering" },
    { id: "manage", labelEn: "Manage reports" },
];

const TOC_KH: TocItem[] = [
    { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
    { id: "generate", labelEn: "Generate a report", labelKh: "បង្កើត report" },
    { id: "formats", labelEn: "Export formats", labelKh: "Export formats" },
    { id: "templates", labelEn: "Templates & branding", labelKh: "Templates និង branding" },
    { id: "scope", labelEn: "Scope & filtering", labelKh: "Scope និង filtering" },
    { id: "manage", labelEn: "Manage reports", labelKh: "គ្រប់គ្រង reports" },
];

export default function ReportsDocument() {
    const locale = useLocale();
    const isKhmer = locale === "kh";
    return (
        <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
            <ReportsContent />
        </DocsLayout>
    );
}
