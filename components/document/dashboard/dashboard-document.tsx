"use client";

import DashboardContent from "./dashboard-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = [
    "overview",
    "metrics",
    "vulnerability-trends",
    "asset-discovery",
    "risk-scoring",
    "top-charts",
];

const TOC_EN: TocItem[] = [
    { id: "overview", labelEn: "Overview" },
    { id: "metrics", labelEn: "Key metrics" },
    { id: "vulnerability-trends", labelEn: "Vulnerability trends" },
    { id: "asset-discovery", labelEn: "Asset discovery" },
    { id: "risk-scoring", labelEn: "Risk scoring" },
    { id: "top-charts", labelEn: "Top ports & services" },
];

const TOC_KH: TocItem[] = [
    { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
    { id: "metrics", labelEn: "Key metrics", labelKh: "Key metrics" },
    { id: "vulnerability-trends", labelEn: "Vulnerability trends", labelKh: "Vulnerability trends" },
    { id: "asset-discovery", labelEn: "Asset discovery", labelKh: "Asset discovery" },
    { id: "risk-scoring", labelEn: "Risk scoring", labelKh: "Risk scoring" },
    { id: "top-charts", labelEn: "Top ports & services", labelKh: "Top ports និង services" },
];

export default function DashboardDocument() {
    const locale = useLocale();
    const isKhmer = locale === "kh";
    return (
        <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
            <DashboardContent />
        </DocsLayout>
    );
}
