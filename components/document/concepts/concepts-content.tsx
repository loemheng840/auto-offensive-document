"use client";

import type { CSSProperties } from "react";
import { useLocale } from "next-intl";
import {
    FolderKanban,
    Crosshair,
    Activity,
    ListOrdered,
    AlertTriangle,
    Workflow,
    KeyRound,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";
import DocsFooterNav from "@/components/document/docs-footer-nav";

const monoFontStyle = {
    fontFamily: "var(--docs-mono-font), monospace",
} as const;

function InlineCode({ children }: { children: React.ReactNode }) {
    return (
        <code
            className="text-[14px] md:text-[15px] bg-[#F0EDE6] dark:bg-white/5 text-[#00BCA1] px-1.5 py-px rounded border border-[#E2DDD5] dark:border-white/10"
            style={monoFontStyle}
        >
            {children}
        </code>
    );
}

function SectionHeading({
    id,
    children,
}: {
    id: string;
    children: React.ReactNode;
}) {
    return (
        <h2
            id={id}
            className="doc-section text-[1.7rem] md:text-[1.8rem] font-bold tracking-[-0.03em] text-[#1A1714] dark:text-white mb-3 pt-10 scroll-mt-6 flex items-center gap-2.5"
            style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
        >
            {children}
        </h2>
    );
}

function Para({ children }: { children: React.ReactNode }) {
    return (
        <p
            className="text-[16px] md:text-[17px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.78] mb-3"
            style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
        >
            {children}
        </p>
    );
}

function ConceptCard({
    id,
    icon,
    title,
    tag,
    children,
}: {
    id: string;
    icon: React.ReactNode;
    title: string;
    tag: string;
    children: React.ReactNode;
}) {
    return (
        <section
            id={id}
            className="doc-section scroll-mt-24 mb-10 rounded-2xl border border-[#E2DDD5] dark:border-white/10 bg-white/95 dark:bg-[#101114] p-6 md:p-7 shadow-[0_8px_24px_rgba(26,23,20,0.04)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
        >
            <div className="flex items-start gap-4 mb-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DDEBE7] bg-[#F4FBF8] text-[#0F766E] dark:border-white/10 dark:bg-white/5 dark:text-[#7DE7D8] [&_svg]:size-5">
                    {icon}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#0F766E] dark:text-[#7DE7D8] mb-1">
                        {tag}
                    </p>
                    <h3
                        className="text-[1.45rem] font-semibold tracking-[-0.025em] text-[#1A1714] dark:text-white"
                        style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                    >
                        {title}
                    </h3>
                </div>
            </div>
            <div className="space-y-3">{children}</div>
        </section>
    );
}

function MentalModelStep({
    num,
    title,
    desc,
}: {
    num: number;
    title: string;
    desc: React.ReactNode;
}) {
    return (
        <div className="flex gap-4 items-start">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00BCA1] text-white font-mono text-[13px] font-semibold">
                {num}
            </div>
            <div className="flex-1 pt-0.5">
                <div
                    className="text-[16px] md:text-[17px] font-semibold text-[#1A1714] dark:text-white"
                    style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                >
                    {title}
                </div>
                <div
                    className="text-[15px] md:text-[16px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.7] mt-0.5"
                    style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                >
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default function ConceptsContent() {
    const locale = useLocale();
    const isKhmer = locale === "kh";
    const pageFontVars = {
        "--docs-sans-font": isKhmer
            ? "var(--font-noto-khmer), var(--font-google-sans)"
            : "var(--font-google-sans), var(--font-noto-khmer)",
        "--docs-mono-font": isKhmer
            ? "var(--font-jetbrains-mono), var(--font-noto-khmer), var(--font-google-sans)"
            : "var(--font-jetbrains-mono), var(--font-google-sans), var(--font-noto-khmer)",
    } as CSSProperties;

    return (
        <main
            className="flex-1 min-w-0 px-8 md:px-12 xl:px-14 pt-12 pb-24 max-[640px]:px-5"
            lang={isKhmer ? "km" : "en"}
            style={{ fontFamily: "var(--docs-sans-font), sans-serif", ...pageFontVars }}
        >
            {/* Page header */}
            <div className="mb-10 pb-8 border-b border-[#E2DDD5] dark:border-white/10">
                <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-[#00BCA1] bg-[rgba(0,188,161,0.07)] border border-[rgba(0,188,161,0.2)] px-2.5 py-1 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BCA1] animate-pulse" />
                    {isKhmer ? "ចាប់ផ្តើមនៅទីនេះ" : "Start here"}
                </div>
                <h1
                    className="text-[2.4rem] md:text-[2.8rem] font-bold tracking-[-0.035em] leading-[1.1] text-[#1A1714] dark:text-white mb-4"
                    style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                >
                    {isKhmer ? "គោលគំនិត និង វាក្យសព្ទ" : "Core Concepts & Vocabulary"}
                </h1>
                <p
                    className="text-[17px] md:text-[19px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.7] max-w-[44rem]"
                    style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                >
                    {isKhmer
                        ? "Auto-Offensive រៀបចំការងារសុវត្ថិភាពរបស់អ្នកជុំវិញគំនិតសំខាន់មួយចំនួន។ រៀនពួកវាម្តង នោះអ្វីៗដែលនៅសល់នឹងភ្ជាប់គ្នាទៅវិញទៅមក។"
                        : "Auto-Offensive organizes your security work around a few key ideas. Learn them once, and the rest clicks into place."}
                </p>
            </div>

            {/* Concept cards */}
            <ConceptCard
                id="project"
                icon={<FolderKanban />}
                title={isKhmer ? "Project" : "Project"}
                tag={isKhmer ? "កន្លែងធ្វើការ" : "Workspace"}
            >
                <Para>
                    {isKhmer
                        ? "Project គឺជាកន្លែងធ្វើការរបស់អ្នក — container ដែលប្រមូលផ្តុំអ្វីៗគ្រប់យ៉ាងពាក់ព័ន្ធនឹងកម្មវិធី domain ឬ scope តែមួយ។ អ្នកបង្កើត project មួយសម្រាប់រាល់អ្វីៗដែលអ្នកកំពុងសាកល្បង។"
                        : "A project is your workspace — a container that groups everything related to one application, domain, or scope. You create a project for each thing you're testing."}
                </Para>
                <Para>
                    {isKhmer ? (
                        <>
                            ឧទាហរណ៍៖ <InlineCode>acme-web-app</InlineCode>,{" "}
                            <InlineCode>internal-network</InlineCode>,{" "}
                            <InlineCode>api-staging</InlineCode>។ Targets, scans, និង findings
                            ទាំងអស់រស់នៅខាងក្នុង project។ គិតថាវាដូចជា folder នៅលើ
                            computer របស់អ្នក ប៉ុន្តែសម្រាប់ការងារសុវត្ថិភាព។
                        </>
                    ) : (
                        <>
                            Examples: <InlineCode>acme-web-app</InlineCode>,{" "}
                            <InlineCode>internal-network</InlineCode>,{" "}
                            <InlineCode>api-staging</InlineCode>. All your targets, scans, and
                            findings live inside a project. Think of it like a folder on your
                            computer, but for security work.
                        </>
                    )}
                </Para>
            </ConceptCard>

            <ConceptCard
                id="target"
                icon={<Crosshair />}
                title={isKhmer ? "Target" : "Target"}
                tag={isKhmer ? "អ្វីដែលអ្នកស្កេន" : "What you scan"}
            >
                <Para>
                    {isKhmer
                        ? "Target គឺជាអ្វីដែលអ្នកកំពុងស្កេនពិតប្រាកដ។ វាអាចជា domain, IP address, URL, CIDR range ឬអ្វីផ្សេងទៀតដែលអ្នកចង់សាកល្បង។"
                        : "A target is what you're actually scanning. It can be a domain, an IP address, a URL, a CIDR range, or anything else you want to test."}
                </Para>
                <div className="grid gap-2 sm:grid-cols-2 mt-3">
                    {[
                        { type: "domain", value: "example.com" },
                        { type: "ip", value: "192.168.1.1" },
                        { type: "url", value: "https://api.example.com" },
                        { type: "cidr", value: "10.0.0.0/24" },
                    ].map((row) => (
                        <div
                            key={row.type}
                            className="flex items-center justify-between gap-3 rounded-lg border border-[#E2DDD5] dark:border-white/10 bg-[#FAF8F2] dark:bg-white/5 px-3 py-2"
                        >
                            <span
                                className="text-[12px] font-mono uppercase tracking-[0.08em] text-[#88837B] dark:text-[#9CA3AF]"
                                style={monoFontStyle}
                            >
                                {row.type}
                            </span>
                            <span
                                className="text-[13.5px] text-[#1A1714] dark:text-white truncate"
                                style={monoFontStyle}
                            >
                                {row.value}
                            </span>
                        </div>
                    ))}
                </div>
                <Para>
                    {isKhmer
                        ? "Targets ជាកម្មសិទ្ធិរបស់ project។ អ្នកបន្ថែម targets ម្តង បន្ទាប់មកប្រើពួកវាឡើងវិញនៅក្នុង scans ច្រើន។"
                        : "Targets belong to a project. You add targets once, then reuse them across multiple scans."}
                </Para>
            </ConceptCard>

            <ConceptCard
                id="scan"
                icon={<Activity />}
                title={isKhmer ? "Scan / Job" : "Scan / Job"}
                tag={isKhmer ? "ការដំណើរការមួយ" : "One execution"}
            >
                <Para>
                    {isKhmer
                        ? "Scan (ដែលហៅផងដែរថា job) គឺជាការដំណើរការមួយ — ការដំណើរការមួយដងនៃ security tools របស់អ្នក។ វាអាចមានភាពសាមញ្ញដូចជាការដំណើរការ tool តែមួយ ឬស្មុគស្មាញដូចជា pipeline ច្រើនជំហាន។"
                        : "A scan (also called a job) is one execution — a single run of your security tools. It can be as simple as running one tool or as complex as a multi-step pipeline."}
                </Para>
                <Para>
                    {isKhmer
                        ? "នៅពេលអ្នកដាក់បញ្ជូន scan វាទទួលបាន ID ពិសេសមួយ ចូលក្នុងជួរ និងដំណើរការនៅលើ backend។ អ្នកអាចមើលវាដោយផ្ទាល់ បោះបង់វា ឬភ្ជាប់ឡើងវិញនៅពេលក្រោយ។"
                        : "When you submit a scan, it gets a unique ID, enters a queue, and runs on the backend. You can watch it live, cancel it, or reconnect to it later."}
                </Para>
            </ConceptCard>

            <ConceptCard
                id="step"
                icon={<ListOrdered />}
                title={isKhmer ? "Step" : "Step"}
                tag={isKhmer ? "Tool មួយក្នុង pipeline" : "One tool in a pipeline"}
            >
                <Para>
                    {isKhmer
                        ? "Step គឺជា tool មួយដែលដំណើរការនៅខាងក្នុង pipeline។ ប្រសិនបើអ្នកភ្ជាប់ tools បីទៅគ្នា (subfinder | httpx | naabu) នោះគឺជា steps បី។"
                        : "A step is one tool running inside a pipeline. If you chain three tools together (subfinder | httpx | naabu), that's three steps."}
                </Para>
                <Para>
                    {isKhmer
                        ? "Step នីមួយៗដំណើរការតាមលំដាប់ និង output ពី step មួយត្រូវបានបញ្ចូលទៅក្នុង step បន្ទាប់។ អ្នកអាចមើល logs របស់ step នីមួយៗក្នុងពេលជាក់ស្តែង។"
                        : "Each step runs in order, and the output from one step feeds into the next. You can watch each step's logs in real time and see when it completes."}
                </Para>
            </ConceptCard>

            <ConceptCard
                id="finding"
                icon={<AlertTriangle />}
                title={isKhmer ? "Finding" : "Finding"}
                tag={isKhmer ? "លទ្ធផល" : "A result"}
            >
                <Para>
                    {isKhmer
                        ? "Finding គឺជាលទ្ធផល — អ្វីមួយដែល scan បានរកឃើញ។ Finding នីមួយៗមាន severity (Critical, High, Medium, Low, Info), host ឬ IP, port (បើមាន), និងព័ត៌មានលម្អិតអំពីអ្វីដែលត្រូវបានរកឃើញ។"
                        : "A finding is a result — something the scan discovered. Every finding has a severity (Critical, High, Medium, Low, Info), a host or IP, a port (if applicable), and details about what was found."}
                </Para>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {[
                        { label: "CRITICAL", color: "#C42828", bg: "rgba(196,40,40,0.08)" },
                        { label: "HIGH", color: "#B86800", bg: "rgba(184,104,0,0.08)" },
                        { label: "MEDIUM", color: "#1D57C8", bg: "rgba(29,87,200,0.08)" },
                        { label: "LOW", color: "#1A7A4A", bg: "rgba(26,122,74,0.08)" },
                        { label: "INFO", color: "#88837B", bg: "rgba(136,131,123,0.08)" },
                    ].map((s) => (
                        <span
                            key={s.label}
                            className="font-mono text-[10.5px] font-bold tracking-[0.08em] px-2 py-1 rounded border"
                            style={{
                                color: s.color,
                                background: s.bg,
                                borderColor: `${s.color}33`,
                            }}
                        >
                            {s.label}
                        </span>
                    ))}
                </div>
                <Para>
                    {isKhmer
                        ? "Findings ត្រូវបាន deduplicate ដោយស្វ័យប្រវត្តិ ដូច្នេះអ្នកមិនឃើញលទ្ធផលដូចគ្នាពីរដងទេ។ អ្នកមើល តម្រង និង export findings បន្ទាប់ពី scan បានបញ្ចប់។"
                        : "Findings are deduplicated automatically, so you don't see the same result twice. You browse, filter, and export findings after a scan completes."}
                </Para>
            </ConceptCard>

            <ConceptCard
                id="pipeline"
                icon={<Workflow />}
                title={isKhmer ? "Pipeline" : "Pipeline"}
                tag={isKhmer ? "ការភ្ជាប់ Tool បែប Unix" : "Unix-style chaining"}
            >
                <Para>
                    {isKhmer
                        ? "Pipeline គឺជាការភ្ជាប់ tool បែប Unix។ អ្នកសរសេរ commands តាមរបៀបដែលអ្នកនឹងសរសេរនៅក្នុង terminal ដោយប្រើ pipes (|) ដើម្បីភ្ជាប់ tools។"
                        : "A pipeline is Unix-style tool chaining. You write commands the way you would in a terminal, using pipes (|) to connect tools."}
                </Para>
                <div className="rounded-xl overflow-hidden my-3 border border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.14)]">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/6 bg-[#16181F]">
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                            <div className="w-2 h-2 rounded-full bg-[#28CA41]" />
                        </div>
                        <span className="font-mono text-[11px] text-white/30 tracking-wider">
                            pipeline example
                        </span>
                        <span />
                    </div>
                    <div
                        className="bg-[#16181F] px-5 py-4 overflow-x-auto"
                        style={monoFontStyle}
                    >
                        <code className="text-[14px] md:text-[15px] leading-[1.7] text-white/55 whitespace-pre">
                            <span className="text-[#7DD3C8] font-medium">subfinder</span>{" "}
                            <span className="text-[#F9C860]">-d</span>{" "}
                            <span className="text-[#A8D8A8]">example.com</span>{" "}
                            <span className="text-white/40">|</span>{" "}
                            <span className="text-[#7DD3C8] font-medium">httpx</span>{" "}
                            <span className="text-[#F9C860]">-sc</span>{" "}
                            <span className="text-white/40">|</span>{" "}
                            <span className="text-[#7DD3C8] font-medium">naabu</span>{" "}
                            <span className="text-[#F9C860]">-p</span>{" "}
                            <span className="text-[#A8D8A8]">80,443</span>
                        </code>
                    </div>
                </div>
                <Para>
                    {isKhmer ? (
                        <>
                            Output ពី <InlineCode>subfinder</InlineCode> (subdomains) ហូរទៅក្នុង{" "}
                            <InlineCode>httpx</InlineCode> (ដែល probe ពួកវាសម្រាប់ HTTP) ហើយ
                            បន្ទាប់មកទៅក្នុង <InlineCode>naabu</InlineCode> (ដែលស្កេន ports
                            ជាក់លាក់)។ Pipelines អនុញ្ញាតឱ្យអ្នកធ្វើ deep reconnaissance ក្នុង
                            command មួយ ជំនួសឱ្យការដំណើរការ tools ដោយដៃ និងចម្លងលទ្ធផលចន្លោះពួកវា។
                        </>
                    ) : (
                        <>
                            Output from <InlineCode>subfinder</InlineCode> (subdomains) flows
                            into <InlineCode>httpx</InlineCode> (which probes them for HTTP),
                            and then into <InlineCode>naabu</InlineCode> (which scans specific
                            ports). Pipelines let you do deep reconnaissance in one command
                            instead of running tools manually and copying results between them.
                        </>
                    )}
                </Para>
            </ConceptCard>

            <ConceptCard
                id="api-key"
                icon={<KeyRound />}
                title={isKhmer ? "API Key" : "API Key"}
                tag={isKhmer ? "សម្រាប់ Automation" : "For automation"}
            >
                <Para>
                    {isKhmer
                        ? "API key គឺជា credential ដែលអ្នកប្រើដើម្បី automate scans និងអាន results តាម program។ វាត្រូវបានកំណត់សម្រាប់ project មួយ ដូច្នេះ key មួយអាចចូលប្រើបានតែ scans និង findings នៅក្នុង project នោះប៉ុណ្ណោះ។"
                        : "An API key is a credential you use to automate scans and read results programmatically. It's scoped to a project, so one key can only access scans and findings in that project."}
                </Para>
                <Para>
                    {isKhmer
                        ? "អ្នកបង្កើត API key មួយដង រក្សាទុកវាដោយសុវត្ថិភាព (ដូចជា password) និងប្រើវានៅក្នុង scripts, CI/CD pipelines ឬឧបករណ៍ផ្សេងៗ។ API keys ល្អប្រសើរជាង passwords សម្រាប់ automation ពីព្រោះអ្នកអាចដកវាចេញដោយមិនចាំបាច់ផ្លាស់ប្តូរ login របស់អ្នក។"
                        : "You create an API key once, store it securely (like a password), and use it in scripts, CI/CD pipelines, or any tool that needs to talk to Auto-Offensive. API keys are better than passwords for automation because you can revoke them without changing your login."}
                </Para>
            </ConceptCard>

            {/* Remote execution callout */}
            <div className="mt-10 mb-10 flex gap-3 px-5 py-4 rounded-xl border border-[#DDEBE7] dark:border-[#0F766E]/30 bg-gradient-to-r from-[#F4FBF8] to-white dark:from-[#0F2A26]/50 dark:to-[#101114] border-l-[3px] border-l-[#0F766E]">
                <span className="shrink-0 mt-0.5 text-[#0F766E] dark:text-[#7DE7D8]">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" /></svg>
                </span>
                <div className="flex-1">
                    <div className="text-[11px] font-bold tracking-[0.07em] uppercase mb-1 text-[#0F766E] dark:text-[#7DE7D8]">
                        {isKhmer ? "ការដំណើរការពីចម្ងាយ" : "Remote execution"}
                    </div>
                    <p className="text-[15px] md:text-[16px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.7]" style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}>
                        {isKhmer
                            ? "Tools ទាំងអស់ដំណើរការពីចម្ងាយនៅក្នុង sandboxed Docker + gVisor containers នៅលើ backend។ គ្មានអ្វីដំណើរការនៅលើម៉ាស៊ីន local របស់អ្នកទេ — CLI គ្រាន់តែផ្ញើ commands និង stream results ត្រឡប់មកវិញ។"
                            : "All tools execute remotely in sandboxed Docker + gVisor containers on the backend. Nothing runs on your local machine — the CLI simply sends commands and streams results back."}
                    </p>
                </div>
            </div>

            {/* Mental model */}
            <section
                id="mental-model"
                className="doc-section scroll-mt-24 mt-12 rounded-2xl border border-[#DDEBE7] dark:border-[#0F766E]/30 bg-gradient-to-br from-[#F4FBF8] to-white dark:from-[#0F2A26] dark:to-[#101114] p-6 md:p-8"
            >
                <SectionHeading id="mental-model">
                    {isKhmer ? "ទិដ្ឋភាពសរុបក្នុងគំនិត" : "Quick mental model"}
                </SectionHeading>
                <Para>
                    {isKhmer
                        ? "នេះជារបៀបដែលគំនិតនិមួយៗភ្ជាប់ទៅគ្នាក្នុង workflow ធម្មតា៖"
                        : "Here's how the pieces fit together in a typical workflow:"}
                </Para>
                <div className="space-y-4 mt-4">
                    <MentalModelStep
                        num={1}
                        title={isKhmer ? "បង្កើត project សម្រាប់រាល់ app" : "Create a project for each app"}
                        desc={
                            isKhmer
                                ? "Project នីមួយៗគឺជាកន្លែងធ្វើការដាច់ដោយឡែក។"
                                : "Each project is its own dedicated workspace."
                        }
                    />
                    <MentalModelStep
                        num={2}
                        title={isKhmer ? "កំណត់ targets" : "Define targets"}
                        desc={
                            isKhmer
                                ? "បន្ថែម domains, IPs, URLs ឬ CIDR ranges ដែលអ្នកចង់សាកល្បង។"
                                : "Add the domains, IPs, URLs, or CIDR ranges you want to test."
                        }
                    />
                    <MentalModelStep
                        num={3}
                        title={isKhmer ? "ដាក់បញ្ជូន scan (job) មួយ" : "Submit a scan (a job)"}
                        desc={
                            isKhmer
                                ? "Scan ដំណើរការ steps មួយឬច្រើន (tools)។"
                                : "A scan runs one or more steps (tools)."
                        }
                    />
                    <MentalModelStep
                        num={4}
                        title={isKhmer ? "Step នីមួយៗបង្កើត findings" : "Each step produces findings"}
                        desc={
                            isKhmer
                                ? "Findings ត្រូវបាន deduplicate ដោយស្វ័យប្រវត្តិ និងផ្តល់ severity ។"
                                : "Findings are deduplicated and assigned severity automatically."
                        }
                    />
                    <MentalModelStep
                        num={5}
                        title={isKhmer ? "ភ្ជាប់ tools ក្នុង pipeline" : "Chain tools in a pipeline"}
                        desc={
                            isKhmer
                                ? "Automate multi-step reconnaissance ក្នុង command តែមួយ។"
                                : "Automate multi-step reconnaissance with a single command."
                        }
                    />
                    <MentalModelStep
                        num={6}
                        title={isKhmer ? "ប្រើ API key សម្រាប់ scripts" : "Use an API key for scripts"}
                        desc={
                            isKhmer
                                ? "Automate រាល់អ្វីៗទាំងនេះពី scripts ឬ CI/CD ។"
                                : "Automate all of this from scripts or CI/CD."
                        }
                    />
                </div>
            </section>

            {/* CTA cards */}
            <section className="mt-12 grid gap-4 md:grid-cols-2">
                <Link
                    href="/quickstart"
                    className="group flex items-start justify-between gap-4 rounded-2xl border border-[#E7E3DA] bg-white p-5 transition-all duration-200 hover:border-[#0F766E]/40 hover:shadow-[0_8px_24px_rgba(15,118,110,0.08)] dark:border-white/10 dark:bg-[#101114] dark:hover:border-[#7DE7D8]/30"
                >
                    <div className="min-w-0">
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#0F766E] dark:text-[#7DE7D8] mb-1">
                            {isKhmer ? "ជំហានបន្ទាប់" : "Next up"}
                        </p>
                        <h3
                            className="text-[1.15rem] font-semibold tracking-[-0.02em] text-[#1A1714] dark:text-white mb-1"
                            style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                        >
                            {isKhmer ? "ការចាប់ផ្តើមរហ័ស ៥ នាទី" : "5-Minute Quickstart"}
                        </h3>
                        <p className="text-[14.5px] text-[#5D554B] dark:text-[#C9CDD4] leading-[1.6]">
                            {isKhmer
                                ? "ដំឡើង CLI, ផ្ទៀងផ្ទាត់, និងដំណើរការ scan ដំបូងរបស់អ្នក។"
                                : "Install the CLI, authenticate, and run your first scan."}
                        </p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-[#88837B] dark:text-[#A1A1AA] transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                    href="/cli"
                    className="group flex items-start justify-between gap-4 rounded-2xl border border-[#E7E3DA] bg-white p-5 transition-all duration-200 hover:border-[#0F766E]/40 hover:shadow-[0_8px_24px_rgba(15,118,110,0.08)] dark:border-white/10 dark:bg-[#101114] dark:hover:border-[#7DE7D8]/30"
                >
                    <div className="min-w-0">
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#0F766E] dark:text-[#7DE7D8] mb-1">
                            {isKhmer ? "ឯកសារយោង" : "Reference"}
                        </p>
                        <h3
                            className="text-[1.15rem] font-semibold tracking-[-0.02em] text-[#1A1714] dark:text-white mb-1"
                            style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                        >
                            {isKhmer ? "ឯកសារ CLI" : "CLI Reference"}
                        </h3>
                        <p className="text-[14.5px] text-[#5D554B] dark:text-[#C9CDD4] leading-[1.6]">
                            {isKhmer
                                ? "Commands, authentication, និង execution model ពេញលេញ។"
                                : "Full command reference, authentication, and execution model."}
                        </p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-[#88837B] dark:text-[#A1A1AA] transition-transform group-hover:translate-x-1" />
                </Link>
            </section>

            <DocsFooterNav
                previous={{ href: "/", label: isKhmer ? "ផ្ទាំងឯកសារ" : "Documentation hub" }}
                next={{ href: "/quickstart", label: isKhmer ? "ការចាប់ផ្តើមរហ័ស ៥ នាទី" : "5-Minute Quickstart" }}
                previousText={isKhmer ? "មុន" : "Previous"}
                nextText={isKhmer ? "បន្ទាប់" : "Next"}
            />
        </main>
    );
}
