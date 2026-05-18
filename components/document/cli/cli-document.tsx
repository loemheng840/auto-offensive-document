"use client";

import { useCallback, useEffect, useState } from "react";
import { useLocale } from "next-intl";
import CliContent from "./cli-content";
import {
  LeftSidebar,
  type SidebarSection,
} from "./cli-sidebar";

export default function CliDocument() {
  const locale = useLocale();
  const isKhmer = locale === "kh";
  const sidebarSections: SidebarSection[] = isKhmer
    ? [
      {
        label: "ចាប់ផ្តើម",
        items: [
          { id: "installation", title: "ការដំឡើង" },
          { id: "auth", title: "Authentication" },
          { id: "commands", title: "Commands" },
        ],
      },
      {
        label: "ការប្រើប្រាស់",
        items: [
          { id: "tools", title: "Tools ដែលគាំទ្រ" },
          { id: "execution", title: "Remote Execution" },
          { id: "streaming", title: "Output Streaming" },
          { id: "results", title: "ការគ្រប់គ្រង Results" },
        ],
      },
      {
        label: "ឯកសារយោង",
        items: [
          { id: "jobs", title: "Job Lifecycle" },
          { id: "security", title: "Security" },
          { id: "concept", title: "របៀបដំណើរការ" },
        ],
      },
    ]
    : [
      {
        label: "Getting Started",
        items: [
          { id: "installation", title: "Installation" },
          { id: "auth", title: "Authentication" },
          { id: "commands", title: "Commands" },
        ],
      },
      {
        label: "Usage",
        items: [
          { id: "tools", title: "Supported Tools" },
          { id: "execution", title: "Remote Execution" },
          { id: "streaming", title: "Output Streaming" },
          { id: "results", title: "Result Handling" },
        ],
      },
      {
        label: "Reference",
        items: [
          { id: "jobs", title: "Job Lifecycle" },
          { id: "security", title: "Security" },
          { id: "concept", title: "How It Works" },
        ],
      },
    ];
  const allSectionIds = ["installation", "auth", "commands", "tools", "execution", "streaming", "results", "jobs", "security", "concept"];
  const [activeId, setActiveId] = useState("installation");
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
          <CliContent />
        </main>
      </div>
    </div>
  );
}
