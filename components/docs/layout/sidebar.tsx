"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DOCS_NAV, type NavItem } from "@/lib/navigation";

function SidebarGroup({ item }: { item: NavItem }) {
    const pathname = usePathname();
    const locale = useLocale();
    const isKhmer = locale === "kh";
    const isAnyActive = item.items?.some(i => i.href === pathname);
    const [open, setOpen] = useState(isAnyActive ?? true);

    return (
        <div className="mb-1">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-subtle hover:text-text transition-colors"
            >
                {isKhmer && item.titleKh ? item.titleKh : item.title}
                <ChevronRight
                    className={cn("size-3.5 transition-transform duration-150", open && "rotate-90")}
                />
            </button>

            {open && item.items && (
                <ul className="mt-0.5 space-y-0.5">
                    {item.items.map(child => (
                        <SidebarLink key={child.href} item={child} />
                    ))}
                </ul>
            )}
        </div>
    );
}

function SidebarLink({ item }: { item: NavItem }) {
    const pathname = usePathname();
    const locale = useLocale();
    const isKhmer = locale === "kh";
    const isActive = pathname === item.href;

    return (
        <li>
            <Link
                href={item.href ?? "#"}
                className={cn(
                    "flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors group",
                    isActive
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-text-muted hover:text-text hover:bg-bg-muted"
                )}
            >
                <span>{isKhmer && item.titleKh ? item.titleKh : item.title}</span>
                {item.badge && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/10 text-accent">
                        {item.badge}
                    </span>
                )}
            </Link>
        </li>
    );
}

export default function DocsSidebar() {
    return (
        <aside className="hidden lg:block w-[var(--sidebar-w)] shrink-0 sticky top-[var(--header-h)] h-[calc(100vh-var(--header-h))] overflow-y-auto border-r border-border py-6 px-4">
            <nav className="space-y-4">
                {DOCS_NAV.map(section => (
                    <SidebarGroup key={section.title} item={section} />
                ))}
            </nav>
        </aside>
    );
}
