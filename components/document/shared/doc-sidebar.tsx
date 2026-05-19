"use client";

import { useLocale } from "next-intl";

export interface SidebarItem {
    id: string;
    title: string;
}

export interface SidebarSection {
    label: string;
    items: SidebarItem[];
}

export interface TocItem {
    id: string;
    label: string;
}

interface LeftSidebarProps {
    sections: SidebarSection[];
    activeId: string;
    onNavigate: (id: string) => void;
}

export function LeftSidebar({
    sections,
    activeId,
    onNavigate,
}: LeftSidebarProps) {
    const locale = useLocale();
    const sansFontStyle = {
        fontFamily:
            locale === "kh"
                ? "var(--font-noto-khmer), var(--font-google-sans), sans-serif"
                : "var(--font-google-sans), var(--font-noto-khmer), sans-serif",
    } as const;

    return (
        <aside className="hidden lg:block w-72 shrink-0 sticky top-22 self-start h-[calc(100vh-5.5rem)] overflow-y-auto py-5.5 border-r border-[#E2DDD5] dark:border-white/10 bg-[#F7F5F0] dark:bg-[#09090B]">
            <div className="px-5">
                {sections.map((section) => (
                    <div key={section.label} className="mb-7">
                        <p className="px-2 mb-2 font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-[#B5B0A8] dark:text-[#9CA3AF]">
                            {section.label}
                        </p>
                        <div className="flex flex-col gap-0.5">
                            {section.items.map((item) => {
                                const active = item.id === activeId;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => onNavigate(item.id)}
                                        className={`w-full text-left px-3 py-2 rounded-lg border transition-all duration-150 ${active
                                                ? "bg-[#00BCA1]/10 text-[#00BCA1] border-[#00BCA1]/25 font-medium"
                                                : "text-[#4A4540] dark:text-[#C9CDD4] border-transparent hover:bg-[#EEEAE2] dark:hover:bg-white/5 hover:text-[#1A1714] dark:hover:text-white"
                                            }`}
                                        style={{ ...sansFontStyle, fontSize: "17px", lineHeight: "1.5" }}
                                    >
                                        {item.title}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}

interface RightSidebarProps {
    toc: TocItem[];
    activeId: string;
    onNavigate: (id: string) => void;
}

export function RightSidebar({
    toc,
    activeId,
    onNavigate,
}: RightSidebarProps) {
    const locale = useLocale();
    const isKhmer = locale === "kh";
    const sansFontStyle = {
        fontFamily: isKhmer
            ? "var(--font-noto-khmer), var(--font-google-sans), sans-serif"
            : "var(--font-google-sans), var(--font-noto-khmer), sans-serif",
    } as const;

    return (
        <aside className="hidden xl:block w-72 shrink-0 sticky top-22 self-start max-h-[calc(100vh-5.5rem)] overflow-y-auto border-l border-[#E2DDD5] dark:border-white/10 px-6 py-7 bg-[#F7F5F0] dark:bg-[#09090B]">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-[#B5B0A8] dark:text-[#9CA3AF] mb-2.5">
                {isKhmer ? "នៅលើទំព័រនេះ" : "On this page"}
            </div>
            <nav className="flex flex-col gap-px">
                {toc.map((item) => {
                    const active = item.id === activeId;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`block w-full text-left py-1 rounded border-l-2 transition-all duration-150 pl-2 ${active
                                    ? "text-[#00BCA1] border-l-[#00BCA1] font-medium"
                                    : "text-[#88837B] dark:text-[#A1A1AA] border-l-transparent hover:text-[#1A1714] dark:hover:text-white"
                                }`}
                            style={{ ...sansFontStyle, fontSize: "15px", lineHeight: "1.5" }}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
}
