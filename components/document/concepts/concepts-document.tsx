"use client";

import ConceptsContent from "./concepts-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = [
    "project",
    "target",
    "scan",
    "step",
    "finding",
    "pipeline",
    "api-key",
    "mental-model",
];

const TOC_EN: TocItem[] = [
    { id: "project", labelEn: "Project" },
    { id: "target", labelEn: "Target" },
    { id: "scan", labelEn: "Scan / Job" },
    { id: "step", labelEn: "Step" },
    { id: "finding", labelEn: "Finding" },
    { id: "pipeline", labelEn: "Pipeline" },
    { id: "api-key", labelEn: "API Key" },
    { id: "mental-model", labelEn: "Quick mental model" },
];

const TOC_KH: TocItem[] = [
    { id: "project", labelEn: "Project" },
    { id: "target", labelEn: "Target" },
    { id: "scan", labelEn: "Scan / Job" },
    { id: "step", labelEn: "Step" },
    { id: "finding", labelEn: "Finding" },
    { id: "pipeline", labelEn: "Pipeline" },
    { id: "api-key", labelEn: "API Key" },
    { id: "mental-model", labelEn: "ទិដ្ឋភាពសរុបក្នុងគំនិត" },
];

export default function ConceptsDocument() {
    const locale = useLocale();
    const isKhmer = locale === "kh";

    return (
        <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
            <ConceptsContent />
        </DocsLayout>
    );
}
