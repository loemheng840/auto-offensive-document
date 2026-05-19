"use client";

import ApiContent from "./api-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = [
  "overview",
  "auth",
  "ratelimit",
  "errors",
  "proj-list",
  "proj-create",
  "proj-get",
  "proj-delete",
  "scan-create",
  "scan-list",
  "scan-get",
  "scan-stop",
  "scan-retry",
  "results-get",
  "report-gen",
  "report-list",
  "report-download",
];

const TOC_EN: TocItem[] = [
  { id: "overview", labelEn: "Overview" },
  { id: "auth", labelEn: "Authentication" },
  { id: "ratelimit", labelEn: "Rate Limits" },
  { id: "errors", labelEn: "Error Codes" },
  { id: "proj-list", labelEn: "List Projects" },
  { id: "proj-create", labelEn: "Create Project" },
  { id: "proj-get", labelEn: "Get Project" },
  { id: "proj-delete", labelEn: "Delete Project" },
  { id: "scan-create", labelEn: "Create Scan" },
  { id: "scan-list", labelEn: "List Scans" },
  { id: "scan-get", labelEn: "Get Scan Status" },
  { id: "scan-stop", labelEn: "Stop Scan" },
  { id: "scan-retry", labelEn: "Retry Scan" },
  { id: "results-get", labelEn: "Get Results" },
  { id: "report-gen", labelEn: "Generate Report" },
  { id: "report-list", labelEn: "List Reports" },
  { id: "report-download", labelEn: "Download Report" },
];

const TOC_KH: TocItem[] = [
  { id: "overview", labelEn: "ទិដ្ឋភាពទូទៅ" },
  { id: "auth", labelEn: "Authentication" },
  { id: "ratelimit", labelEn: "Rate Limits" },
  { id: "errors", labelEn: "Error Codes" },
  { id: "proj-list", labelEn: "បញ្ជី Projects" },
  { id: "proj-create", labelEn: "បង្កើត Project" },
  { id: "proj-get", labelEn: "មើល Project" },
  { id: "proj-delete", labelEn: "លុប Project" },
  { id: "scan-create", labelEn: "បង្កើត Scan" },
  { id: "scan-list", labelEn: "បញ្ជី Scans" },
  { id: "scan-get", labelEn: "មើល Scan Status" },
  { id: "scan-stop", labelEn: "បញ្ឈប់ Scan" },
  { id: "scan-retry", labelEn: "Retry Scan" },
  { id: "results-get", labelEn: "មើល Results" },
  { id: "report-gen", labelEn: "បង្កើត Report" },
  { id: "report-list", labelEn: "បញ្ជី Reports" },
  { id: "report-download", labelEn: "ទាញយក Report" },
];

export default function ApiDocument() {
  const locale = useLocale();
  const isKhmer = locale === "kh";

  return (
    <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
      <ApiContent />
    </DocsLayout>
  );
}
