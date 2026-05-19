"use client";

import AIAnalysisContent from "./ai-analysis-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = [
    "overview",
    "modes",
    "next-steps",
    "deep-analysis",
    "mcp-tools",
    "models-cost",
    "feedback",
];

const TOC_EN: TocItem[] = [
    { id: "overview", labelEn: "Overview" },
    { id: "modes", labelEn: "Suggestion modes" },
    { id: "next-steps", labelEn: "Next steps mode" },
    { id: "deep-analysis", labelEn: "Deep analysis mode" },
    { id: "mcp-tools", labelEn: "MCP tools" },
    { id: "models-cost", labelEn: "Models & cost" },
    { id: "feedback", labelEn: "Feedback loop" },
];

const TOC_KH: TocItem[] = [
    { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
    { id: "modes", labelEn: "Suggestion modes", labelKh: "Modes" },
    { id: "next-steps", labelEn: "Next steps mode", labelKh: "Next steps" },
    { id: "deep-analysis", labelEn: "Deep analysis mode", labelKh: "Deep analysis" },
    { id: "mcp-tools", labelEn: "MCP tools", labelKh: "MCP tools" },
    { id: "models-cost", labelEn: "Models & cost", labelKh: "Models និងតម្លៃ" },
    { id: "feedback", labelEn: "Feedback loop", labelKh: "Feedback loop" },
];

export default function AIAnalysisDocument() {
    const locale = useLocale();
    const isKhmer = locale === "kh";
    return (
        <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
            <AIAnalysisContent />
        </DocsLayout>
    );
}
