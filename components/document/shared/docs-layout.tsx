"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import {
    ChevronRight,
    Search,
    Rocket,
    Radar,
    Brain,
    Code2,
    FileText,
    BarChart3,
    TerminalSquare,
    BookOpen,
    GitBranch,
} from "lucide-react";

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
   Left sidebar: groups + pages + sub-section anchors
───────────────────────────────────────────── */
interface NavItem {
    id: string;
    labelEn: string;
    labelKh: string;
}

interface NavPage {
    id: string;
    labelEn: string;
    labelKh: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
    items?: NavItem[];
}

interface NavGroup {
    id: string;
    labelEn: string;
    labelKh: string;
    pages: NavPage[];
}

const NAV: NavGroup[] = [
    {
        id: "introduction",
        labelEn: "Introduction",
        labelKh: "សេចក្តីផ្តើម",
        pages: [
            {
                id: "getting-started",
                labelEn: "Getting Started",
                labelKh: "ការចាប់ផ្តើម",
                href: "/getting-started",
                icon: Rocket,
                items: [
                    { id: "what-is-aof", labelEn: "What is Auto-Offensive?", labelKh: "Auto-Offensive ជាអ្វី?" },
                    { id: "core-concepts", labelEn: "Core Concepts", labelKh: "គោលគំនិតស្នូល" },
                    { id: "install", labelEn: "Install the CLI", labelKh: "ដំឡើង CLI" },
                    { id: "first-scan", labelEn: "Run your first scan", labelKh: "ដំណើរការ scan ដំបូង" },
                    { id: "view-results", labelEn: "View results", labelKh: "មើលលទ្ធផល" },
                    { id: "next-steps", labelEn: "Next steps", labelKh: "ជំហានបន្ទាប់" },
                ],
            },
        ],
    },
    {
        id: "platform-features",
        labelEn: "Platform Features",
        labelKh: "មុខងារផ្លេតហ្វម",
        pages: [
            {
                id: "scanning",
                labelEn: "Scanning",
                labelKh: "ការស្កេន",
                href: "/scanning",
                icon: Radar,
                items: [
                    { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
                    { id: "basic-scan", labelEn: "Basic scan", labelKh: "Basic scan" },
                    { id: "medium-scan", labelEn: "Medium scan", labelKh: "Medium scan" },
                    { id: "advanced-scan", labelEn: "Advanced pipeline scan", labelKh: "Advanced pipeline scan" },
                    { id: "tools", labelEn: "Supported tools", labelKh: "Tools ដែលគាំទ្រ" },
                    { id: "queue", labelEn: "Queue & lifecycle", labelKh: "Queue និង lifecycle" },
                    { id: "streaming", labelEn: "Real-time streaming", labelKh: "Real-time streaming" },
                ],
            },
            {
                id: "ai-analysis",
                labelEn: "AI Analysis",
                labelKh: "ការវិភាគ AI",
                href: "/ai-analysis",
                icon: Brain,
                items: [
                    { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
                    { id: "modes", labelEn: "Suggestion modes", labelKh: "Modes នៃការវិភាគ" },
                    { id: "next-steps", labelEn: "Next steps mode", labelKh: "Next steps mode" },
                    { id: "deep-analysis", labelEn: "Deep analysis mode", labelKh: "Deep analysis mode" },
                    { id: "mcp-tools", labelEn: "MCP tools", labelKh: "MCP tools" },
                    { id: "models-cost", labelEn: "Models & cost", labelKh: "Models និងតម្លៃ" },
                    { id: "feedback", labelEn: "Feedback loop", labelKh: "Feedback loop" },
                ],
            },
            {
                id: "code-scanning",
                labelEn: "Code Scanning (SAST)",
                labelKh: "Code Scanning (SAST)",
                href: "/code-scanning",
                icon: Code2,
                items: [
                    { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
                    { id: "git-integration", labelEn: "Git integration", labelKh: "Git integration" },
                    { id: "trigger-scan", labelEn: "Trigger a code scan", labelKh: "បើក code scan" },
                    { id: "issues", labelEn: "Issues & severity", labelKh: "Issues និង severity" },
                    { id: "hotspots", labelEn: "Security hotspots", labelKh: "Security hotspots" },
                    { id: "dependencies", labelEn: "Dependency vulns", labelKh: "Dependency vulnerabilities" },
                    { id: "quality-gates", labelEn: "Quality gates", labelKh: "Quality gates" },
                ],
            },
            {
                id: "reports",
                labelEn: "Reports",
                labelKh: "របាយការណ៍",
                href: "/reports",
                icon: FileText,
                items: [
                    { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
                    { id: "generate", labelEn: "Generate a report", labelKh: "បង្កើត report" },
                    { id: "formats", labelEn: "Export formats", labelKh: "Export formats" },
                    { id: "templates", labelEn: "Templates & branding", labelKh: "Templates និង branding" },
                    { id: "scope", labelEn: "Scope & filtering", labelKh: "Scope និង filtering" },
                    { id: "manage", labelEn: "Manage reports", labelKh: "គ្រប់គ្រង reports" },
                ],
            },
            {
                id: "dashboard",
                labelEn: "Dashboard & Analytics",
                labelKh: "Dashboard និង Analytics",
                href: "/dashboard",
                icon: BarChart3,
                items: [
                    { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
                    { id: "metrics", labelEn: "Key metrics", labelKh: "Key metrics" },
                    { id: "vulnerability-trends", labelEn: "Vulnerability trends", labelKh: "Vulnerability trends" },
                    { id: "asset-discovery", labelEn: "Asset discovery", labelKh: "Asset discovery" },
                    { id: "risk-scoring", labelEn: "Risk scoring", labelKh: "Risk scoring" },
                    { id: "top-charts", labelEn: "Top ports & services", labelKh: "Top ports និង services" },
                ],
            },
        ],
    },
    {
        id: "developer-reference",
        labelEn: "Developer Reference",
        labelKh: "Developer Reference",
        pages: [
            {
                id: "cli",
                labelEn: "CLI Reference",
                labelKh: "ឯកសារ CLI",
                href: "/cli",
                icon: TerminalSquare,
                items: [
                    { id: "installation", labelEn: "Installation", labelKh: "ការដំឡើង" },
                    { id: "auth", labelEn: "Authentication", labelKh: "Authentication" },
                    { id: "commands", labelEn: "Commands", labelKh: "Commands" },
                    { id: "tui", labelEn: "Interactive TUI", labelKh: "Interactive TUI" },
                    { id: "execution", labelEn: "Execution model", labelKh: "Execution model" },
                    { id: "streaming", labelEn: "Output streaming", labelKh: "Output streaming" },
                    { id: "jobs", labelEn: "Job lifecycle", labelKh: "Job lifecycle" },
                    { id: "security", labelEn: "Security", labelKh: "Security" },
                    { id: "env-vars", labelEn: "Environment variables", labelKh: "Environment variables" },
                ],
            },
            {
                id: "api",
                labelEn: "REST API",
                labelKh: "REST API",
                href: "/api",
                icon: BookOpen,
                items: [
                    { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
                    { id: "auth", labelEn: "Authentication", labelKh: "Authentication" },
                    { id: "ratelimit", labelEn: "Rate limits", labelKh: "Rate limits" },
                    { id: "errors", labelEn: "Error codes", labelKh: "Error codes" },
                    { id: "projects", labelEn: "Projects", labelKh: "Projects" },
                    { id: "targets", labelEn: "Targets", labelKh: "Targets" },
                    { id: "scans", labelEn: "Scans", labelKh: "Scans" },
                    { id: "jobs", labelEn: "Jobs & history", labelKh: "Jobs និង history" },
                    { id: "findings", labelEn: "Findings", labelKh: "Findings" },
                    { id: "ai", labelEn: "AI suggestions", labelKh: "AI suggestions" },
                    { id: "reports", labelEn: "Reports", labelKh: "Reports" },
                    { id: "dashboard", labelEn: "Dashboard", labelKh: "Dashboard" },
                    { id: "apikeys", labelEn: "API keys", labelKh: "API keys" },
                    { id: "recipes", labelEn: "API recipes", labelKh: "API recipes" },
                ],
            },
            {
                id: "ci-cd",
                labelEn: "CI/CD Integration",
                labelKh: "ការរួមបញ្ចូល CI/CD",
                href: "/ci-cd",
                icon: GitBranch,
                items: [
                    { id: "overview", labelEn: "Overview", labelKh: "ទិដ្ឋភាពទូទៅ" },
                    { id: "workflow", labelEn: "Integration workflow", labelKh: "Integration workflow" },
                    { id: "auth", labelEn: "API key auth", labelKh: "API key auth" },
                    { id: "endpoints", labelEn: "API endpoints", labelKh: "API endpoints" },
                    { id: "trigger", labelEn: "Trigger scan", labelKh: "បើក scan" },
                    { id: "status", labelEn: "Job status", labelKh: "Job status" },
                    { id: "results", labelEn: "Result retrieval", labelKh: "Result retrieval" },
                    { id: "pipeline", labelEn: "Pipeline example", labelKh: "Pipeline example" },
                    { id: "thresholds", labelEn: "Severity gates", labelKh: "Severity gates" },
                    { id: "quotas", labelEn: "Quotas & rate limits", labelKh: "Quotas និង rate limits" },
                    { id: "errors", labelEn: "Error handling", labelKh: "Error handling" },
                ],
            },
        ],
    },
];

/* Flatten NAV for active page resolution */
const ALL_PAGES: NavPage[] = NAV.flatMap((g) => g.pages);

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

    // Find which page is active
    const activePage = ALL_PAGES.find((p) => {
        if (p.href === "/api") return pathname === "/api" || (pathname.startsWith("/api/") && pathname !== "/api/recipes");
        return pathname === p.href || pathname.startsWith(p.href + "/");
    });

    const fontStyle = {
        fontFamily: isKhmer
            ? "var(--font-noto-khmer), var(--font-google-sans), sans-serif"
            : "var(--font-google-sans), var(--font-noto-khmer), sans-serif",
    } as const;

    return (
        <aside
            className="hidden lg:flex flex-col w-72 shrink-0 sticky top-14 self-start h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-[#E2DDD5] dark:border-white/10 bg-[#F7F5F0] dark:bg-[#09090B]"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#E2DDD5 transparent" }}
        >
            <nav className="py-6 px-4" style={fontStyle}>
                {NAV.map((group) => (
                    <div key={group.id} className="mb-6">
                        <p className="px-3 mb-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#88837B] dark:text-[#9CA3AF]">
                            {isKhmer ? group.labelKh : group.labelEn}
                        </p>
                        {group.pages.map((page) => {
                            const isActive = activePage?.id === page.id;
                            const Icon = page.icon;
                            return (
                                <div key={page.id} className="mb-0.5">
                                    <Link
                                        href={page.href}
                                        className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-[14.5px] font-medium transition-colors duration-150 ${isActive
                                                ? "bg-[#00BCA1]/10 text-[#00BCA1]"
                                                : "text-[#4A4540] dark:text-[#C9CDD4] hover:bg-[#EEEAE2] dark:hover:bg-white/5 hover:text-[#1A1714] dark:hover:text-white"
                                            }`}
                                    >
                                        {Icon && <Icon className="h-4 w-4 shrink-0" />}
                                        <span className="flex-1 truncate">{isKhmer ? page.labelKh : page.labelEn}</span>
                                        {isActive && <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />}
                                    </Link>
                                    {/* Show sub-items only for the active page */}
                                    {isActive && page.items && page.items.length > 0 && (
                                        <div className="ml-7 mt-1 mb-2 flex flex-col border-l border-[#E2DDD5] dark:border-white/10">
                                            {page.items.map((item) => {
                                                const isItemActive = item.id === activeSectionId;
                                                return (
                                                    <a
                                                        key={item.id}
                                                        href={`#${item.id}`}
                                                        className={`block py-1 pl-3 -ml-px border-l-2 text-[13px] leading-[1.5] transition-colors duration-150 ${isItemActive
                                                                ? "border-l-[#00BCA1] text-[#00BCA1] font-medium"
                                                                : "border-l-transparent text-[#88837B] dark:text-[#A1A1AA] hover:text-[#1A1714] dark:hover:text-white"
                                                            }`}
                                                    >
                                                        {isKhmer ? item.labelKh : item.labelEn}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
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
                            className={`block py-1 pl-3 border-l-2 text-[13.5px] leading-[1.5] transition-colors duration-150 ${active
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

    useEffect(() => {
        if (sectionIds.length === 0) return;

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
                <LeftSidebar activeSectionId={activeSectionId} isKhmer={isKhmer} />

                <main className="flex-1 min-w-0">
                    {children}
                </main>

                <RightSidebar
                    toc={toc}
                    activeSectionId={activeSectionId}
                    isKhmer={isKhmer}
                />
            </div>
        </div>
    );
}
