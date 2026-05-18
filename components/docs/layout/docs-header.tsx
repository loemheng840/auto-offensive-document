"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTheme } from "@/components/theme-provider";
import { Search, Sun, Moon, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { flattenNav, DOCS_NAV } from "@/lib/navigation";
import MobileSidebar from "./mobile-sidebar";

// Flatten nav for search
const SEARCH_INDEX = flattenNav(DOCS_NAV);

// Theme toggle
function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="size-8 rounded-md" />;
    const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";
    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="grid size-8 place-items-center rounded-md border border-border text-text-muted hover:text-text hover:bg-bg-muted transition-colors"
        >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
    );
}

// Language toggle
function LangToggle() {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const locale = useLocale();
    const isEn = locale === "en";
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="h-8 w-14 rounded-md" />;
    const toggle = () => {
        const next = isEn ? "kh" : "en";
        document.cookie = `locale=${next};path=/;max-age=31536000;SameSite=Lax`;
        router.refresh();
    };
    return (
        <button
            onClick={toggle}
            className="flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-border text-xs font-semibold text-text-muted hover:text-text hover:bg-bg-muted transition-colors"
        >
            <span className="text-sm">{isEn ? "🇬🇧" : "🇰🇭"}</span>
            {isEn ? "EN" : "KH"}
        </button>
    );
}

// Search modal
function SearchModal({ onClose }: { onClose: () => void }) {
    const [q, setQ] = useState("");
    const ref = useRef<HTMLInputElement>(null);
    const locale = useLocale();
    const isKh = locale === "kh";

    useEffect(() => {
        ref.current?.focus();
        const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", esc);
        return () => window.removeEventListener("keydown", esc);
    }, [onClose]);

    const results = q.trim()
        ? SEARCH_INDEX.filter(
            i => {
                const title = isKh && i.titleKh ? i.titleKh : i.title;
                return title.toLowerCase().includes(q.toLowerCase()) ||
                    i.section.toLowerCase().includes(q.toLowerCase());
            }
        ).slice(0, 10)
        : [];

    const grouped = results.reduce<Record<string, typeof results>>((acc, r) => {
        (acc[r.section] ??= []).push(r);
        return acc;
    }, {});

    return (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[12vh] px-4" onClick={onClose}>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div
                className="relative w-full max-w-lg rounded-xl border border-border bg-bg shadow-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                    <Search className="size-4 text-text-muted shrink-0" />
                    <input
                        ref={ref}
                        value={q}
                        onChange={e => setQ(e.target.value)}
                        placeholder={isKh ? "ស្វែងរក..." : "Search docs..."}
                        className="flex-1 bg-transparent text-sm text-text outline-none placeholder:text-text-subtle"
                    />
                    <button onClick={onClose} className="p-1 rounded hover:bg-bg-muted">
                        <X className="size-4 text-text-muted" />
                    </button>
                </div>

                <div className="max-h-[55vh] overflow-y-auto">
                    {!q.trim() ? (
                        <p className="px-4 py-6 text-center text-sm text-text-subtle">
                            {isKh ? "វាយដើម្បីស្វែងរក..." : "Type to search..."}
                        </p>
                    ) : results.length === 0 ? (
                        <p className="px-4 py-6 text-center text-sm text-text-subtle">
                            {isKh ? `រកមិនឃើញ "${q}"` : `No results for "${q}"`}
                        </p>
                    ) : (
                        <div className="py-2">
                            {Object.entries(grouped).map(([section, items]) => (
                                <div key={section}>
                                    <p className="px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-subtle">
                                        {section}
                                    </p>
                                    {items.map(item => {
                                        const title = isKh && item.titleKh ? item.titleKh : item.title;
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={onClose}
                                                className="flex items-center justify-between px-4 py-2 text-sm text-text-muted hover:text-text hover:bg-bg-subtle transition-colors group"
                                            >
                                                {title}
                                                <ArrowRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-3 px-4 py-2 border-t border-border text-[11px] text-text-subtle">
                    <span><kbd className="font-mono">↵</kbd> select</span>
                    <span><kbd className="font-mono">Esc</kbd> close</span>
                </div>
            </div>
        </div>
    );
}

// Logo
function Logo() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="w-24 h-8" />;
    const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";
    return (
        <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
                src={isDark ? "/Auto_Offensive_Dark-mode.png" : "/Auto_Offensive_Light-mode.png"}
                alt="Auto-Offensive"
                width={90}
                height={32}
                priority
                style={{ width: "auto", height: "auto" }}
            />
            <span className="hidden sm:block text-xs font-semibold text-text-subtle border-l border-border pl-2">
                Docs
            </span>
        </Link>
    );
}

// Main header
export default function DocsHeader() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 4);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setSearchOpen(true);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "sticky top-0 z-50 h-[var(--header-h)] w-full flex items-center border-b border-border bg-bg transition-shadow duration-200",
                    scrolled && "shadow-sm"
                )}
            >
                <div className="flex w-full items-center gap-4 px-4 max-w-[90rem] mx-auto">
                    <MobileSidebar />
                    <Logo />

                    {/* Search bar */}
                    <button
                        onClick={() => setSearchOpen(true)}
                        className="flex flex-1 max-w-xs items-center gap-2 h-8 px-3 rounded-md border border-border bg-bg-subtle text-sm text-text-subtle hover:border-accent/40 transition-colors"
                    >
                        <Search className="size-3.5 shrink-0" />
                        <span className="flex-1 text-left">Search docs...</span>
                        <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono border border-border rounded px-1 py-0.5 bg-bg-muted">
                            ⌘K
                        </kbd>
                    </button>

                    <div className="ml-auto flex items-center gap-2">
                        <LangToggle />
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
        </>
    );
}
