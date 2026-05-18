"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TocEntry {
    id: string;
    text: string;
    level: 2 | 3;
}

interface TocProps {
    entries?: TocEntry[];
}

export default function TableOfContents({ entries }: TocProps) {
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        if (!entries?.length) return;
        const ids = entries.map(e => e.id);
        const observer = new IntersectionObserver(
            (obs) => {
                const visible = obs
                    .filter(o => o.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible.length) setActive(visible[0].target.id);
            },
            { rootMargin: "-80px 0px -60% 0px", threshold: [0.1, 0.5] }
        );
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [entries]);

    if (!entries?.length) return null;

    return (
        <aside className="hidden xl:block w-[var(--toc-w)] shrink-0 sticky top-[var(--header-h)] h-[calc(100vh-var(--header-h))] overflow-y-auto py-6 pl-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-subtle">
                On this page
            </p>
            <nav className="space-y-1">
                {entries.map(entry => (
                    <a
                        key={entry.id}
                        href={`#${entry.id}`}
                        className={cn(
                            "block text-sm transition-colors py-0.5",
                            entry.level === 3 && "pl-3",
                            active === entry.id
                                ? "text-accent font-medium"
                                : "text-text-muted hover:text-text"
                        )}
                    >
                        {entry.text}
                    </a>
                ))}
            </nav>
        </aside>
    );
}
