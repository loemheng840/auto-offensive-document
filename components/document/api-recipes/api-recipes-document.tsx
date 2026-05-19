"use client";

import ApiRecipesContent from "./api-recipes-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = [
    "projects",
    "proj-create",
    "proj-list",
    "proj-get",
    "proj-update",
    "proj-delete",
    "scans",
    "scan-basic",
    "scan-advanced",
    "scan-status",
    "scan-logs",
    "queue-position",
    "scan-cancel",
    "findings",
    "find-list",
    "find-filter",
    "find-get",
    "find-export-json",
    "find-export-csv",
    "errors",
    "quick-ref",
];

const TOC_EN: TocItem[] = [
    { id: "projects", labelEn: "Manage projects" },
    { id: "scans", labelEn: "Submit and track scans" },
    { id: "findings", labelEn: "Findings" },
    { id: "errors", labelEn: "Common errors" },
    { id: "quick-ref", labelEn: "Quick reference" },
];

const TOC_KH: TocItem[] = [
    { id: "projects", labelEn: "គ្រប់គ្រង Projects" },
    { id: "scans", labelEn: "ដាក់បញ្ជូន Scans" },
    { id: "findings", labelEn: "Findings" },
    { id: "errors", labelEn: "Errors ទូទៅ" },
    { id: "quick-ref", labelEn: "ឯកសារយោងលឿន" },
];

export default function ApiRecipesDocument() {
    const locale = useLocale();
    const isKhmer = locale === "kh";

    return (
        <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
            <ApiRecipesContent />
        </DocsLayout>
    );
}
