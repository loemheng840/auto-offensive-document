"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DOCS_NAV, type NavItem } from "@/lib/navigation";

function MobileSidebarGroup({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
    const pathname = usePathname();
    const locale = useLocale();
    const isKhmer = locale === "kh";
    const isAnyActive = item.items?.some(i => i.href === pathname);
    const [open, setOpen] = useState(isAnyActive ?? true);

    return (
        <div className="mb-1">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-text-subtle hover:text-text transition-colors"
            >
                {isKhmer && item.titleKh ? item.titleKh : item.title}
                <ChevronRight
                    className={cn("size-4 transition-transform duration-150", open && "rotate-90")}
                />
            </button>

            {open && item.items && (
                <ul className="mt-0.5 space-y-0.5 pl-2">
                    {item.items.map(child => (
                        <MobileSidebarLink key={child.href} item={child} onNavigate={onNavigate} />
                    ))}
                </ul>
            )}
        </div>
    );
}

function MobileSidebarLink({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
    const pathname = usePathname();
    const locale = useLocale();
    const isKhmer = locale === "kh";
    const isActive = pathname === item.href;

    return (
        <li>
            <Link
                href={item.href ?? "#"}
                onClick={onNavigate}
                className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
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

export default function MobileSidebar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Close on route change
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Prevent body scroll when open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Close on escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, []);

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setOpen(true)}
                className="lg:hidden grid size-9 place-items-center rounded-md border border-border text-text-muted hover:text-text hover:bg-bg-muted transition-colors"
                aria-label="Open navigation menu"
            >
                <Menu className="size-5" />
            </button>

            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Slide-over panel */}
            <div
                className={cn(
                    "fixed top-0 left-0 bottom-0 z-50 w-[280px] bg-bg border-r border-border transform transition-transform duration-300 ease-out lg:hidden",
                    open ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Header */}
                <div className="flex items-center justify-between h-[var(--header-h)] px-4 border-b border-border">
                    <span className="text-sm font-semibold text-text">Navigation</span>
                    <button
                        onClick={() => setOpen(false)}
                        className="grid size-8 place-items-center rounded-md hover:bg-bg-muted transition-colors"
                        aria-label="Close navigation menu"
                    >
                        <X className="size-5 text-text-muted" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="overflow-y-auto h-[calc(100vh-var(--header-h))] py-4 px-2">
                    <div className="space-y-2">
                        {DOCS_NAV.map(section => (
                            <MobileSidebarGroup
                                key={section.title}
                                item={section}
                                onNavigate={() => setOpen(false)}
                            />
                        ))}
                    </div>
                </nav>
            </div>
        </>
    );
}
