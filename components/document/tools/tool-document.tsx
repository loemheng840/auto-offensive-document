"use client";

import { useCallback, useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { ToolContent } from "./tool-content";
import {
  LeftSidebar,
  RightSidebar,
  type SidebarSection,
  type TocItem,
} from "./tool-sidebar";

export default function ToolDocument() {
  const locale = useLocale();
  const isKhmer = locale === "kh";
  const sidebarSections: SidebarSection[] = isKhmer
    ? [
      {
        label: "មូលដ្ឋាន",
        items: [
          { id: "overview", title: "ទិដ្ឋភាពទូទៅ" },
          { id: "versions", title: "Versions & Status" },
          { id: "limits", title: "Rate Limits" },
          { id: "output", title: "Output Formats" },
        ],
      },
      {
        label: "Scanners",
        items: [
          { id: "subfinder", title: "subfinder" },
          { id: "httpx", title: "httpx" },
          { id: "naabu", title: "naabu" },
          { id: "nuclei", title: "nuclei" },
        ],
      },
      {
        label: "ប្រតិបត្តិការ",
        items: [
          { id: "errors", title: "Error Reference" },
        ],
      },
    ]
    : [
      {
        label: "Foundation",
        items: [
          { id: "overview", title: "Overview" },
          { id: "versions", title: "Versions & Status" },
          { id: "limits", title: "Rate Limits" },
          { id: "output", title: "Output Formats" },
        ],
      },
      {
        label: "Scanners",
        items: [
          { id: "subfinder", title: "subfinder" },
          { id: "httpx", title: "httpx" },
          { id: "naabu", title: "naabu" },
          { id: "nuclei", title: "nuclei" },
        ],
      },
      {
        label: "Operations",
        items: [
          { id: "errors", title: "Error Reference" },
        ],
      },
    ];
  const toc: TocItem[] = isKhmer
    ? [
      { id: "overview", label: "ទិដ្ឋភាពទូទៅ" },
      { id: "versions", label: "Versions & Status" },
      { id: "limits", label: "Rate Limits" },
      { id: "output", label: "Output Formats" },
      { id: "subfinder", label: "subfinder" },
      { id: "httpx", label: "httpx" },
      { id: "naabu", label: "naabu" },
      { id: "nuclei", label: "nuclei" },
      { id: "errors", label: "Error Reference" },
    ]
    : [
      { id: "overview", label: "Overview" },
      { id: "versions", label: "Versions & Status" },
      { id: "limits", label: "Rate Limits" },
      { id: "output", label: "Output Formats" },
      { id: "subfinder", label: "subfinder" },
      { id: "httpx", label: "httpx" },
      { id: "naabu", label: "naabu" },
      { id: "nuclei", label: "nuclei" },
      { id: "errors", label: "Error Reference" },
    ];
  const allSectionIds = toc.map((item) => item.id);
  const [activeId, setActiveId] = useState("overview");
  const bodyFontFamily = isKhmer
    ? "var(--font-noto-khmer), var(--font-google-sans), sans-serif"
    : "var(--font-google-sans), var(--font-noto-khmer), sans-serif";

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-90px 0px -45% 0px",
      }
    );

    sections.forEach((section) => {
      if (allSectionIds.includes(section.id)) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [allSectionIds]);

  const navigate = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F5F0] dark:bg-[#09090B] transition-colors duration-300" style={{ fontFamily: bodyFontFamily }}>
      <div className="mx-auto flex w-full max-w-7xl items-start pt-22">
        <LeftSidebar
          sections={sidebarSections}
          activeId={activeId}
          onNavigate={navigate}
        />

        <main className="flex-1 min-w-0">
          <ToolContent />
        </main>

        <RightSidebar toc={toc} activeId={activeId} onNavigate={navigate} />
      </div>
    </div>
  );
}
