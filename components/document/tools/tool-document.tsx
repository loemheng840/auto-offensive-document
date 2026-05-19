"use client";

import { ToolContent } from "./tool-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = [
  "overview",
  "versions",
  "limits",
  "output",
  "subfinder",
  "httpx",
  "naabu",
  "nuclei",
  "errors",
];

const TOC_EN: TocItem[] = [
  { id: "overview", labelEn: "Overview" },
  { id: "versions", labelEn: "Versions & Status" },
  { id: "limits", labelEn: "Rate Limits" },
  { id: "output", labelEn: "Output Formats" },
  { id: "subfinder", labelEn: "subfinder" },
  { id: "httpx", labelEn: "httpx" },
  { id: "naabu", labelEn: "naabu" },
  { id: "nuclei", labelEn: "nuclei" },
  { id: "errors", labelEn: "Error Reference" },
];

const TOC_KH: TocItem[] = [
  { id: "overview", labelEn: "ទិដ្ឋភាពទូទៅ" },
  { id: "versions", labelEn: "Versions & Status" },
  { id: "limits", labelEn: "Rate Limits" },
  { id: "output", labelEn: "Output Formats" },
  { id: "subfinder", labelEn: "subfinder" },
  { id: "httpx", labelEn: "httpx" },
  { id: "naabu", labelEn: "naabu" },
  { id: "nuclei", labelEn: "nuclei" },
  { id: "errors", labelEn: "Error Reference" },
];

export default function ToolDocument() {
  const locale = useLocale();
  const isKhmer = locale === "kh";

  return (
    <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
      <ToolContent />
    </DocsLayout>
  );
}
