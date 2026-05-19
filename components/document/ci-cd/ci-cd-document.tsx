"use client";

import CICDContent from "./ci-cd-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = [
  "overview",
  "workflow",
  "auth",
  "endpoints",
  "trigger",
  "status",
  "results",
  "report",
  "pipeline",
  "thresholds",
  "access",
];

const TOC_EN: TocItem[] = [
  { id: "overview", labelEn: "Overview" },
  { id: "workflow", labelEn: "CI/CD Workflow" },
  { id: "auth", labelEn: "Authentication" },
  { id: "endpoints", labelEn: "API Endpoints" },
  { id: "trigger", labelEn: "Triggering a Scan" },
  { id: "status", labelEn: "Job Status" },
  { id: "results", labelEn: "Result Retrieval" },
  { id: "report", labelEn: "Report Download" },
  { id: "pipeline", labelEn: "Pipeline Example" },
  { id: "thresholds", labelEn: "Severity Thresholds" },
  { id: "access", labelEn: "Access Scoping" },
];

const TOC_KH: TocItem[] = [
  { id: "overview", labelEn: "ទិដ្ឋភាពទូទៅ" },
  { id: "workflow", labelEn: "លំហូរ CI/CD" },
  { id: "auth", labelEn: "Authentication" },
  { id: "endpoints", labelEn: "API Endpoints" },
  { id: "trigger", labelEn: "ការបើកការស្កេន" },
  { id: "status", labelEn: "ស្ថានភាព Job" },
  { id: "results", labelEn: "ទាញយកលទ្ធផល" },
  { id: "report", labelEn: "ទាញយក Report" },
  { id: "pipeline", labelEn: "ឧទាហរណ៍ Pipeline" },
  { id: "thresholds", labelEn: "Severity Thresholds" },
  { id: "access", labelEn: "Access Scoping" },
];

export default function CICDDocument() {
  const locale = useLocale();
  const isKhmer = locale === "kh";

  return (
    <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
      <CICDContent />
    </DocsLayout>
  );
}
