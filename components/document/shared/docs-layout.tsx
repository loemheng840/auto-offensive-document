"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { ChevronRight, Search } from "lucide-react";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
export interface TocItem {
    id: string;
    labelEn: string;
    labelKh?: string;
}

interface DocsLayoutProps {
    /** The section IDs on this page — used to drive the right-sidebar TOC highlight */
    sectionIds: string[];
    /** The TOC items shown in the right sidebar */
    toc: TocItem[];
    children: React.ReactNode;
}

/* ─────────────────────────────────────────────
   Global nav definition
   Left sidebar: all doc pages + their sub-sections
───────────────────────────────────────────── */
interface NavSection {
    id: string;
    labelEn: string;
    labelKh: string;
    href: string;
    items: { id: string; labelEn: string; labelKh: string }[];
}

const NAV: NavSection[] = [
    {
        id: "concepts",
        labelEn: "Core Concepts",
        labelKh: "គោលគំនិតស្នូល",
        href: "/concepts",
        items: [
            { id: "project", labelEn: "Project", labelKh: "Project" },
            { id: "target", labelEn: "Target", labelKh: "Target" },
            { id: "scan", labelEn: "Scan / Job", labelKh: "Scan / Job" },
            { id: "step", labelEn: "Step", labelKh: "Step" },
            { id: "finding", labelEn: "Finding", labelKh: "Finding" },
            { id: "pipeline", labelEn: "Pipeline", labelKh: "Pipeline" },
            { id: "api-key", labelEn: "API Key", labelKh: "API Key" },
            { id: "mental-model", labelEn: "Quick mental model", labelKh: "ទិដ្ឋភាពសរុប" },
        ],
    },
    {
        id: "quickstart",
        labelEn: "5-Minute Quickstart",
        labelKh: "ការចាប់ផ្តើមរហ័ស ៥ នាទី",
        href: "/quickstart",
        items: [
            { id: "install", labelEn: "Install", labelKh: "ដំឡើង" },
            { id: "login", labelEn: "Log in", labelKh: "ចូល" },
            { id: "project", labelEn: "Create a project", labelKh: "បង្កើត project" },
            { id: "scan", labelEn: "Run your first scan", labelKh: "ដំណើរការ scan" },
            { id: "findings", labelEn: "View findings", labelKh: "មើល findings" },
            { id: "troubleshooting", labelEn: "Troubleshooting", labelKh: "ការដោះស្រាយបញ្ហា" },
        ],
    },
    {
        id: "cli",
        labelEn: "CLI Reference",
        labelKh: "ឯកសារ CLI",
        href: "/cli",
        items: [
            { id: "installation", labelEn: "Installation", labelKh: "ការដំឡើង" },
            { id: "auth", labelEn: "Authentication", labelKh: "Authentication" },
            { id: "commands", labelEn: "Commands", labelKh: "Commands" },
            { id: "tools", labelEn: "Supported Tools", labelKh: "Tools ដែលគាំទ្រ" },
            { id: "execution", labelEn: "Remote Execution", labelKh: "Remote Execution" },
            { id: "streaming", labelEn: "Output Streaming", labelKh: "Output Streaming" },
            { id: "results", labelEn: "Result Handling", labelKh: "ការគ្រប់គ្រង Results" },
            { id: "jobs", labelEn: "Job Lifecycle", labelKh: "Job Lifecycle" },
            { id: "security", labelEn: "Security", labelKh: "Security" },
            { id: "concept", labelEn: "How It Works", labelKh: "របៀបដំណើរការ" },
        ],
    },
    {
        id: "api",
        labelEn: "API Reference",
        labelKh: "ឯកសារ API",
        href: "/api",
        items: [
            { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
            { id: "auth", labelEn: "Authentication", labelKh: "Authentication" },
            { id: "ratelimit", labelEn: "Rate Limits", labelKh: "Rate Limits" },
            { id: "errors", labelEn: "Error Codes", labelKh: "Error Codes" },
            { id: "proj-list", labelEn: "List Projects", labelKh: "បញ្ជី Projects" },
            { id: "proj-create", labelEn: "Create Project", labelKh: "បង្កើត Project" },
            { id: "proj-get", labelEn: "Get Project", labelKh: "មើល Project" },
            { id: "proj-delete", labelEn: "Delete Project", labelKh: "លុប Project" },
            { id: "scan-create", labelEn: "Create Scan", labelKh: "បង្កើត Scan" },
            { id: "scan-list", labelEn: "List Scans", labelKh: "បញ្ជី Scans" },
            { id: "scan-get", labelEn: "Get Scan Status", labelKh: "មើល Scan Status" },
            { id: "scan-stop", labelEn: "Stop Scan", labelKh: "បញ្ឈប់ Scan" },
            { id: "scan-retry", labelEn: "Retry Scan", labelKh: "Retry Scan" },
            { id: "results-get", labelEn: "Get Results", labelKh: "មើល Results" },
            { id: "report-gen", labelEn: "Generate Report", labelKh: "បង្កើត Report" },
            { id: "report-list", labelEn: "List Reports", labelKh: "បញ្ជី Reports" },
            { id: "report-download", labelEn: "Download Report", labelKh: "ទាញយក Report" },
        ],
    },
    {
        id: "api-recipes",
        labelEn: "API Recipes",
        labelKh: "ឯកសារយោង API",
        href: "/api/recipes",
        items: [
            { id: "projects", labelEn: "Manage projects", labelKh: "គ្រប់គ្រង Projects" },
            { id: "scans", labelEn: "Submit and track scans", labelKh: "ដាក់បញ្ជូន Scans" },
            { id: "findings", labelEn: "Query and export findings", labelKh: "Findings" },
            { id: "errors", labelEn: "Common errors", labelKh: "Errors ទូទៅ" },
            { id: "quick-ref", labelEn: "Quick reference", labelKh: "ឯកសារយោងលឿន" },
        ],
    },
    {
        id: "ci-cd",
        labelEn: "CI/CD Integration",
        labelKh: "ការរួមបញ្ចូល CI/CD",
        href: "/ci-cd",
        items: [
            { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
            { id: "workflow", labelEn: "CI/CD Workflow", labelKh: "លំហូរ CI/CD" },
            { id: "auth", labelEn: "Authentication", labelKh: "Authentication" },
            { id: "endpoints", labelEn: "API Endpoints", labelKh: "API Endpoints" },
            { id: "trigger", labelEn: "Trigger Scan", labelKh: "ការបើកការស្កេន" },
            { id: "status", labelEn: "Job Status", labelKh: "ស្ថានភាព Job" },
            { id: "results", labelEn: "Result Retrieval", labelKh: "ទាញយកលទ្ធផល" },
            { id: "report", labelEn: "Report Download", labelKh: "ទាញយក Report" },
            { id: "pipeline", labelEn: "Pipeline Example", labelKh: "ឧទាហរណ៍ Pipeline" },
            { id: "thresholds", labelEn: "Severity Thresholds", labelKh: "Severity Thresholds" },
            { id: "access", labelEn: "Access Scoping", labelKh: "Access Scoping" },
        ],
    },
    {
        id: "tools",
        labelEn: "Tool Reference",
        labelKh: "ឯកសារ Tools",
        href: "/tools",
        items: [
            { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
            { id: "subfinder", labelEn: "Subfinder", labelKh: "Subfinder" },
            { id: "httpx", labelEn: "Httpx", labelKh: "Httpx" },
            { id: "naabu", labelEn: "Naabu", labelKh: "Naabu" },
            { id: "nuclei", labelEn: "Nuclei", labelKh: "Nuclei" },
            { id: "output", labelEn: "Outputs", labelKh: "លទ្ធផល" },
        ],
    },
];

/* ─────────────────────────────────────────────
   Left Sidebar
───────────────────────────────────────────── */
function LeftSidebar({
    activeSectionId,
    isKhmer,
}: {
    activeSectionId: string;
    isKhmer: boolean;
}) {
    const pathname = usePathname();

    // Determine which top-level nav entry matches the current path
    const activeNav = NAV.find((n) => {
        if (n.href === "/api/recipes") return pathname === "/api/recipes";
        if (n.href === "/api") return pathname === "/api" || pathname.startsWith("/api/") && pathname !== "/api/recipes";
        return pathname === n.href || pathname.startsWith(n.href + "/");
    });

    const fontStyle = {
        fontFamily: isKhmer
            ? "var(--font-noto-khmer), var(--font-google-sans), sans-serif"
            : "var(--font-google-sans), var(--font-noto-khmer), sans-serif",
    } as const;

    return (
        <aside
            className="hidden lg:flex flex-col w-64 shrink-0 sticky top-14 self-start h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-[#E2DDD5] dark:border-white/10 bg-[#F7F5F0] dark:bg-[#09090B]"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#E2DDD5 transparent" }}
        >
            <nav className="py-6 px-4" style={fontStyle}>
                {NAV.map((section) => {
                    const isActive = activeNav?.id === section.id;

                    return (
                        <div key={section.id} className="mb-1">
                            {/* Top-level page link */}
                            <Link
                                href={section.href}
                                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-[18px] font-medium transition-colors duration-150 ${isActive
                                    ? "bg-[#00BCA1]/10 text-[#00BCA1]"
                                    : "text-[#4A4540] dark:text-[#C9CDD4] hover:bg-[#EEEAE2] dark:hover:bg-white/5 hover:text-[#1A1714] dark:hover:text-white"
                                    }`}
                            >
                                <span>{isKhmer ? section.labelKh : section.labelEn}</span>
                                {isActive && (
                                    <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />
                                )}
                            </Link>
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}

/* ─────────────────────────────────────────────
   Right Sidebar (On this page TOC)
───────────────────────────────────────────── */
function RightSidebar({
    toc,
    activeSectionId,
    isKhmer,
}: {
    toc: TocItem[];
    activeSectionId: string;
    isKhmer: boolean;
}) {
    const [query, setQuery] = useState("");
    const searchRef = useRef<HTMLInputElement>(null);

    const fontStyle = {
        fontFamily: isKhmer
            ? "var(--font-noto-khmer), var(--font-google-sans), sans-serif"
            : "var(--font-google-sans), var(--font-noto-khmer), sans-serif",
    } as const;

    // Ctrl+K / Cmd+K to focus search
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                searchRef.current?.focus();
                searchRef.current?.select();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    if (toc.length === 0) return null;

    const filteredToc = query.trim()
        ? toc.filter((item) => {
            const label = (isKhmer && item.labelKh ? item.labelKh : item.labelEn).toLowerCase();
            return label.includes(query.trim().toLowerCase());
        })
        : toc;

    return (
        <aside
            className="hidden xl:block w-56 shrink-0 sticky top-14 self-start h-[calc(100vh-3.5rem)] overflow-y-auto px-5 py-6"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#E2DDD5 transparent" }}
        >
            {/* Search input */}
            <div className="mb-4">
                <div className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-[#E2DDD5] dark:border-white/10 bg-white dark:bg-[#121214] transition-all duration-200 focus-within:border-[#00BCA1]/50 focus-within:shadow-[0_0_0_2px_rgba(0,188,161,0.08)]">
                    <Search className="w-3.5 h-3.5 text-[#9A9287] dark:text-[#8F96A3] shrink-0 transition-colors duration-200 group-focus-within:text-[#00BCA1]" />
                    <input
                        ref={searchRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={isKhmer ? "ស្វែងរក..." : "Search..."}
                        className="w-full bg-transparent outline-none text-[13px] text-[#4A4540] dark:text-[#E5E7EB] placeholder:text-[#9A9287] dark:placeholder:text-[#8F96A3]"
                        style={fontStyle}
                        aria-label={isKhmer ? "ស្វែងរកខ្លឹមសារ" : "Search content"}
                    />
                    <kbd className="shrink-0 font-mono text-[9px] px-1.5 py-0.5 rounded border border-[#E2DDD5] dark:border-white/10 bg-[#F6F2EA] dark:bg-white/5 text-[#8B8378] dark:text-[#A1A1AA]">
                        ⌘K
                    </kbd>
                </div>
            </div>

            <p
                className="mb-3 text-[10px] font-semibold tracking-[0.14em] uppercase text-[#B5B0A8] dark:text-[#9CA3AF]"
                style={fontStyle}
            >
                {isKhmer ? "នៅលើទំព័រនេះ" : "On this page"}
            </p>
            <nav className="flex flex-col gap-px" style={fontStyle}>
                {filteredToc.map((item) => {
                    const active = item.id === activeSectionId;
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`block py-1 pl-3 border-l-2 text-[16px] leading-[1.5] transition-colors duration-150 ${active
                                ? "border-l-[#00BCA1] text-[#00BCA1] font-medium"
                                : "border-l-transparent text-[#88837B] dark:text-[#A1A1AA] hover:text-[#1A1714] dark:hover:text-white hover:border-l-[#CEC9BF] dark:hover:border-l-white/20"
                                }`}
                        >
                            {isKhmer && item.labelKh ? item.labelKh : item.labelEn}
                        </a>
                    );
                })}
                {filteredToc.length === 0 && (
                    <p className="text-[12px] text-[#88837B] dark:text-[#A1A1AA] pl-3 py-2">
                        {isKhmer ? "រកមិនឃើញ" : "No results"}
                    </p>
                )}
            </nav>
        </aside>
    );
}

/* ─────────────────────────────────────────────
   Main DocsLayout
───────────────────────────────────────────── */
export default function DocsLayout({
    sectionIds,
    toc,
    children,
}: DocsLayoutProps) {
    const locale = useLocale();
    const isKhmer = locale === "kh";
    const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] ?? "");

    const bodyFontFamily = isKhmer
        ? "var(--font-noto-khmer), var(--font-google-sans), sans-serif"
        : "var(--font-google-sans), var(--font-noto-khmer), sans-serif";

    /* ── Sync active section with scroll via IntersectionObserver ── */
    useEffect(() => {
        if (sectionIds.length === 0) return;

        // Also read initial hash on mount
        const hash = window.location.hash.replace("#", "");
        if (hash && sectionIds.includes(hash)) {
            setActiveSectionId(hash);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    const id = visible[0].target.id;
                    setActiveSectionId(id);
                    // Update URL hash without pushing a new history entry
                    history.replaceState(null, "", `#${id}`);
                }
            },
            {
                threshold: [0.1, 0.3, 0.5],
                rootMargin: "-80px 0px -50% 0px",
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sectionIds]);

    /* ── Handle hash changes (browser back/forward, direct link) ── */
    useEffect(() => {
        const onHashChange = () => {
            const hash = window.location.hash.replace("#", "");
            if (hash && sectionIds.includes(hash)) {
                setActiveSectionId(hash);
            }
        };
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, [sectionIds]);

    return (
        <div
            className="min-h-screen bg-[#F7F5F0] dark:bg-[#09090B] transition-colors duration-300"
            style={{ fontFamily: bodyFontFamily }}
        >
            <div className="mx-auto flex w-full max-w-[90rem] items-start">
                {/* Left: global nav */}
                <LeftSidebar activeSectionId={activeSectionId} isKhmer={isKhmer} />

                {/* Centre: page content */}
                <main className="flex-1 min-w-0">
                    {children}
                </main>

                {/* Right: on-this-page TOC */}
                <RightSidebar
                    toc={toc}
                    activeSectionId={activeSectionId}
                    isKhmer={isKhmer}
                />
            </div>
        </div>
    );
}
