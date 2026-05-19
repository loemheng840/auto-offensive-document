"use client";

import CliContent from "./cli-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = [
  "installation",
  "auth",
  "commands",
  "tools",
  "execution",
  "streaming",
  "results",
  "jobs",
  "security",
  "concept",
];

const TOC_EN: TocItem[] = [
  { id: "installation", labelEn: "Installation & Setup" },
  { id: "auth", labelEn: "Authentication" },
  { id: "commands", labelEn: "Command Execution" },
  { id: "tools", labelEn: "Supported Tools" },
  { id: "execution", labelEn: "Remote Execution Model" },
  { id: "streaming", labelEn: "Output Streaming" },
  { id: "results", labelEn: "Result Handling" },
  { id: "jobs", labelEn: "Job Lifecycle" },
  { id: "security", labelEn: "Security & Access Control" },
  { id: "concept", labelEn: "How It Works" },
];

const TOC_KH: TocItem[] = [
  { id: "installation", labelEn: "ការដំឡើង និង Setup" },
  { id: "auth", labelEn: "Authentication" },
  { id: "commands", labelEn: "ការប្រើ Commands" },
  { id: "tools", labelEn: "Tools ដែលគាំទ្រ" },
  { id: "execution", labelEn: "Remote Execution Model" },
  { id: "streaming", labelEn: "Output Streaming" },
  { id: "results", labelEn: "ការគ្រប់គ្រង Results" },
  { id: "jobs", labelEn: "Job Lifecycle" },
  { id: "security", labelEn: "Security និង Access Control" },
  { id: "concept", labelEn: "របៀបដំណើរការ" },
];

export default function CliDocument() {
  const locale = useLocale();
  const isKhmer = locale === "kh";

  return (
    <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
      <CliContent />
    </DocsLayout>
  );
}
