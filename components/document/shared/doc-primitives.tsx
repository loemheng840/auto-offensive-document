"use client";

import { useRef, useState } from "react";

export const monoFontStyle = { fontFamily: "var(--docs-mono-font), monospace" } as const;
export const sansFontStyle = { fontFamily: "var(--docs-sans-font), sans-serif" } as const;

export function InlineCode({ children }: { children: React.ReactNode }) {
    return (
        <code
            className="text-[14px] md:text-[15px] bg-[#F0EDE6] dark:bg-white/5 text-[#00BCA1] px-1.5 py-px rounded border border-[#E2DDD5] dark:border-white/10"
            style={monoFontStyle}
        >
            {children}
        </code>
    );
}

export function Para({ children }: { children: React.ReactNode }) {
    return (
        <p
            className="text-[16px] md:text-[17px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.78] mb-3"
            style={sansFontStyle}
        >
            {children}
        </p>
    );
}

export function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2
            id={id}
            className="doc-section text-[1.7rem] md:text-[1.9rem] font-bold tracking-[-0.03em] text-[#1A1714] dark:text-white mb-4 pt-12 scroll-mt-6"
            style={sansFontStyle}
        >
            {children}
        </h2>
    );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="text-[1.2rem] font-semibold text-[#1A1714] dark:text-white mt-6 mb-2" style={sansFontStyle}>
            {children}
        </h3>
    );
}

export function CodeBlock({ title, children }: { title: string; children: React.ReactNode }) {
    const [copied, setCopied] = useState(false);
    const codeRef = useRef<HTMLElement>(null);

    const handleCopy = () => {
        if (codeRef.current) {
            navigator.clipboard.writeText(codeRef.current.innerText).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1600);
            });
        }
    };

    return (
        <div className="rounded-xl overflow-hidden my-4 border border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.14)]">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/6 bg-[#16181F]">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                </div>
                <span className="font-mono text-[11px] text-white/30 tracking-wider">{title}</span>
                <button
                    onClick={handleCopy}
                    className="font-mono text-[10px] text-white/30 hover:text-white/75 hover:bg-white/[0.07] px-2 py-0.5 rounded transition-all"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
            <div className="bg-[#16181F] px-5 py-4 overflow-x-auto">
                <code
                    ref={codeRef}
                    className="text-[14px] md:text-[15px] leading-[1.85] text-white/65 whitespace-pre"
                    style={monoFontStyle}
                >
                    {children}
                </code>
            </div>
        </div>
    );
}

export function Callout({
    type = "info",
    icon,
    title,
    children,
}: {
    type?: "info" | "tip" | "warn";
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    const styles: Record<string, string> = {
        info: "border-l-[#1D57C8] bg-[rgba(29,87,200,0.04)]",
        tip: "border-l-[#1A7A4A] bg-[rgba(26,122,74,0.04)]",
        warn: "border-l-[#B86800] bg-[rgba(184,104,0,0.04)]",
    };
    const titleColors: Record<string, string> = {
        info: "text-[#1D57C8]",
        tip: "text-[#1A7A4A]",
        warn: "text-[#B86800]",
    };
    return (
        <div className={`flex gap-3 px-4 py-3.5 rounded-lg border border-[#E2DDD5] dark:border-white/10 border-l-[3px] my-4 dark:bg-white/3 ${styles[type]}`}>
            <span className="shrink-0 mt-0.5 [&_svg]:size-4">{icon}</span>
            <div className="flex-1">
                <div className={`text-[11px] font-bold tracking-[0.07em] uppercase mb-1 ${titleColors[type]}`}>{title}</div>
                <div className="text-[15px] md:text-[16px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.65]" style={sansFontStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export function Table({
    headers,
    rows,
}: {
    headers: string[];
    rows: React.ReactNode[][];
}) {
    return (
        <div className="overflow-x-auto rounded-xl border border-[#E2DDD5] dark:border-white/10 my-4 bg-white dark:bg-[#121214]">
            <table className="w-full border-collapse text-left text-[14.5px]">
                <thead className="bg-[#F0EDE6] dark:bg-white/5">
                    <tr>
                        {headers.map((h) => (
                            <th
                                key={h}
                                className="px-4 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#88837B] dark:text-[#9CA3AF] border-b border-[#E2DDD5] dark:border-white/10"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className="hover:bg-[#FAF8F2] dark:hover:bg-white/5">
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    className="px-4 py-2.5 border-b border-[#E2DDD5] dark:border-white/10 last:border-b-0 align-top"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export function getPageFontVars(isKhmer: boolean) {
    return {
        "--docs-sans-font": isKhmer
            ? "var(--font-noto-khmer), var(--font-google-sans)"
            : "var(--font-google-sans), var(--font-noto-khmer)",
        "--docs-mono-font": isKhmer
            ? "var(--font-jetbrains-mono), var(--font-noto-khmer), var(--font-google-sans)"
            : "var(--font-jetbrains-mono), var(--font-google-sans), var(--font-noto-khmer)",
    } as React.CSSProperties;
}
