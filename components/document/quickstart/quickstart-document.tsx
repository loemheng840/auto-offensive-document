"use client";

import QuickstartContent from "./quickstart-content";
import DocsLayout, { type TocItem } from "@/components/document/shared/docs-layout";
import { useLocale } from "next-intl";

const SECTION_IDS = [
    "install",
    "login",
    "project",
    "scan",
    "findings",
    "troubleshooting",
    "next-steps",
];

const TOC_EN: TocItem[] = [
    { id: "install", labelEn: "Step 1: Install" },
    { id: "login", labelEn: "Step 2: Log in" },
    { id: "project", labelEn: "Step 3: Create a project" },
    { id: "scan", labelEn: "Step 4: Run your first scan" },
    { id: "findings", labelEn: "Step 5: View findings" },
    { id: "troubleshooting", labelEn: "Common issue: Login fails" },
    { id: "next-steps", labelEn: "Next steps" },
];

const TOC_KH: TocItem[] = [
    { id: "install", labelEn: "ជំហាន ១៖ ដំឡើង" },
    { id: "login", labelEn: "ជំហាន ២៖ ចូល" },
    { id: "project", labelEn: "ជំហាន ៣៖ បង្កើត project" },
    { id: "scan", labelEn: "ជំហាន ៤៖ ដំណើរការ scan" },
    { id: "findings", labelEn: "ជំហាន ៥៖ មើល findings" },
    { id: "troubleshooting", labelEn: "ការដោះស្រាយបញ្ហា" },
    { id: "next-steps", labelEn: "ជំហានបន្ទាប់" },
];

export default function QuickstartDocument() {
    const locale = useLocale();
    const isKhmer = locale === "kh";

    return (
        <DocsLayout sectionIds={SECTION_IDS} toc={isKhmer ? TOC_KH : TOC_EN}>
            <QuickstartContent />
        </DocsLayout>
    );
}
