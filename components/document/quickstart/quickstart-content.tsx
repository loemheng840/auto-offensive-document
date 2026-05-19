"use client";

import type { CSSProperties } from "react";
import { useRef, useState } from "react";
import { useLocale } from "next-intl";
import {
    HardDriveDownload,
    LogIn,
    FolderPlus,
    PlayCircle,
    ListChecks,
    Info,
    AlertTriangle,
    CheckCircle2,
    Clock,
} from "lucide-react";
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

function CodeBlock({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
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
        <div className="rounded-xl overflow-hidden my-4 border border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.14),0_1px_4px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/6 bg-[#16181F]">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                </div>
                <span className="font-mono text-[11px] text-white/30 tracking-wider">
                    {title}
                </span>
                <button
                    onClick={handleCopy}
                    className="font-mono text-[10px] text-white/30 bg-transparent border-none cursor-pointer hover:text-white/75 hover:bg-white/[0.07] px-2 py-0.5 rounded transition-all duration-150"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
            <div className="bg-[#16181F] px-5 py-4 overflow-x-auto">
                <code
                    ref={codeRef}
                    className="text-[14px] md:text-[15px] leading-[1.85] text-white/55 whitespace-pre"
                    style={monoFontStyle}
                >
                    {children}
                </code>
            </div>
        </div>
    );
}

const Prompt = () => <span className="text-white/25 select-none">$ </span>;
const Cmd = ({ children }: { children: React.ReactNode }) => (
    <span className="text-[#7DD3C8] font-medium">{children}</span>
);
const Flag = ({ children }: { children: React.ReactNode }) => (
    <span className="text-[#F9C860]">{children}</span>
);
const Val = ({ children }: { children: React.ReactNode }) => (
    <span className="text-[#A8D8A8]">{children}</span>
);
const Cm = ({ children }: { children: React.ReactNode }) => (
    <span className="text-white/22 italic">{children}</span>
);
const Ok = () => <span className="text-[#6EE7B7]">✓</span>;
const Dim = ({ children }: { children: React.ReactNode }) => (
    <span className="text-white/35">{children}</span>
);

function Callout({
    type = "info",
    icon,
    title,
    children,
}: {
    type?: "info" | "warn" | "tip";
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    const styles: Record<string, string> = {
        info: "border-l-[#1D57C8] bg-[rgba(29,87,200,0.04)]",
        warn: "border-l-[#B86800] bg-[rgba(184,104,0,0.04)]",
        tip: "border-l-[#1A7A4A] bg-[rgba(26,122,74,0.04)]",
    };
    const titleColors: Record<string, string> = {
        info: "text-[#1D57C8]",
        warn: "text-[#B86800]",
        tip: "text-[#1A7A4A]",
    };
    return (
        <div
            className={`flex gap-3 px-4 py-3.5 rounded-lg border border-[#E2DDD5] dark:border-white/10 border-l-[3px] my-4 dark:bg-white/3 ${styles[type]}`}
        >
            <span className="shrink-0 mt-0.5 [&_svg]:size-4">{icon}</span>
            <div className="flex-1">
                <div
                    className={`text-[11px] font-bold tracking-[0.07em] uppercase mb-1 ${titleColors[type]}`}
                >
                    {title}
                </div>
                <div
                    className="text-[15px] md:text-[16px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.65]"
                    style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

function StepHeading({
    num,
    icon,
    title,
}: {
    num: number;
    icon: React.ReactNode;
    title: string;
}) {
    return (
        <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#DDEBE7] bg-[#F4FBF8] text-[#0F766E] dark:border-white/10 dark:bg-white/5 dark:text-[#7DE7D8] [&_svg]:size-4.5">
                {icon}
            </div>
            <div>
                <div className="text-[10.5px] font-mono font-semibold tracking-[0.16em] uppercase text-[#0F766E] dark:text-[#7DE7D8]">
                    Step {num}
                </div>
                <h2
                    className="text-[1.5rem] md:text-[1.65rem] font-bold tracking-[-0.025em] text-[#1A1714] dark:text-white leading-tight"
                    style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                >
                    {title}
                </h2>
            </div>
        </div>
    );
}

export default function QuickstartContent() {
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
            <div className="mb-8 pb-8 border-b border-[#E2DDD5] dark:border-white/10">
                <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-[#00BCA1] bg-[rgba(0,188,161,0.07)] border border-[rgba(0,188,161,0.2)] px-2.5 py-1 rounded-full mb-4">
                    <Clock className="size-3" />
                    {isKhmer ? "ប្រហែល ៥ នាទី" : "About 5 minutes"}
                </div>
                <h1
                    className="text-[2.4rem] md:text-[2.8rem] font-bold tracking-[-0.035em] leading-[1.1] text-[#1A1714] dark:text-white mb-4"
                    style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                >
                    {isKhmer ? "ការចាប់ផ្តើមរហ័ស ៥ នាទី" : "5-Minute Quickstart"}
                </h1>
                <p
                    className="text-[17px] md:text-[19px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.7] max-w-[44rem]"
                    style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                >
                    {isKhmer
                        ? "ឆ្លងពីសូន្យទៅ scan សុវត្ថិភាពដំបូងរបស់អ្នកក្នុង session តែមួយ។ អ្នកនឹងដំឡើង CLI, ផ្ទៀងផ្ទាត់ និងដំណើរការ pipeline ពិតប្រាកដដែលរកឃើញ subdomains និង probe ពួកវាសម្រាប់ HTTP services។"
                        : "Get from zero to your first security scan in one session. You'll install the CLI, authenticate, and run a real pipeline that discovers subdomains and probes them for HTTP services."}
                </p>

                {/* What you'll do */}
                <div className="mt-6 rounded-xl border border-[#E2DDD5] dark:border-white/10 bg-white/80 dark:bg-[#101114] p-5">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#88837B] dark:text-[#9CA3AF] mb-3">
                        {isKhmer ? "អ្វីដែលអ្នកនឹងធ្វើ" : "What you'll do"}
                    </p>
                    <ol className="space-y-2">
                        {(isKhmer
                            ? [
                                "ដំឡើង aof CLI",
                                "ចូលជាមួយគណនី Auto-Offensive របស់អ្នក",
                                "បង្កើត project ដើម្បីរៀបចំការងាររបស់អ្នក",
                                "ដំណើរការ pipeline scan ពីរ tools",
                                "មើល findings",
                            ]
                            : [
                                "Install the aof CLI",
                                "Log in with your Auto-Offensive account",
                                "Create a project to organize your work",
                                "Run a two-tool pipeline scan",
                                "View the findings",
                            ]
                        ).map((line, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00BCA1]/10 text-[11px] font-mono font-semibold text-[#00BCA1]">
                                    {i + 1}
                                </span>
                                <span className="text-[15px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.6]">
                                    {line}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>

                <Callout
                    type="info"
                    icon={<Info className="text-[#1D57C8]" />}
                    title={isKhmer ? "មុនពេលអ្នកចាប់ផ្តើម" : "Before you start"}
                >
                    {isKhmer ? (
                        <>
                            អ្នកត្រូវការគណនី Auto-Offensive។ ប្រសិនបើអ្នកមិនមានទេ ចុះឈ្មោះនៅ{" "}
                            <InlineCode>app.auto-offensive.com/signup</InlineCode>។ Free tier
                            ផ្តល់ឱ្យអ្នកនូវអ្វីដែលអ្នកត្រូវការដើម្បីធ្វើតាមមគ្គុទ្ទេសក៍នេះ។
                        </>
                    ) : (
                        <>
                            You need an Auto-Offensive account. If you don&apos;t have one,
                            sign up at <InlineCode>app.auto-offensive.com/signup</InlineCode>.
                            The free tier gives you everything you need to follow this guide.
                        </>
                    )}
                </Callout>
            </div>

            {/* STEP 1 */}
            <section id="install" className="doc-section scroll-mt-24 mb-12">
                <StepHeading
                    num={1}
                    icon={<HardDriveDownload />}
                    title={isKhmer ? "ដំឡើង" : "Install"}
                />
                <Para>
                    {isKhmer
                        ? "ទាញយក និងដំឡើង CLI សម្រាប់ platform របស់អ្នក។"
                        : "Download and install the CLI for your platform."}
                </Para>

                <CodeBlock title="bash · Linux & macOS">
                    <Cm># Linux / macOS{"\n"}</Cm>
                    <Prompt />
                    <Cmd>curl</Cmd> <Flag>-sSL</Flag>{" "}
                    <Val>https://get.auto-offensive.com/install.sh</Val>{" "}
                    <Dim>|</Dim> bash{"\n\n"}
                    <Cm># Verify it works{"\n"}</Cm>
                    <Prompt />
                    <Cmd>aof</Cmd> version{"\n"}
                    <Dim>aof version 1.2.0</Dim>
                </CodeBlock>

                <Para>
                    {isKhmer ? (
                        <>
                            អ្នកនឹងឃើញ output ដូចជា <InlineCode>aof version 1.2.0</InlineCode>។
                            Installer បន្ថែម <InlineCode>aof</InlineCode> ទៅ PATH របស់អ្នកដោយ
                            ស្វ័យប្រវត្តិ។
                        </>
                    ) : (
                        <>
                            You&apos;ll see output like <InlineCode>aof version 1.2.0</InlineCode>.
                            The installer adds <InlineCode>aof</InlineCode> to your PATH
                            automatically.
                        </>
                    )}
                </Para>

                <Callout
                    type="tip"
                    icon={<Info className="text-[#1A7A4A]" />}
                    title={isKhmer ? "Windows" : "Windows users"}
                >
                    {isKhmer
                        ? "ទាញយក .exe ពី releases page ដាក់វាក្នុង folder មួយ ហើយបន្ថែម folder នោះទៅ PATH របស់អ្នក។"
                        : "Download the .exe from the releases page, place it in a folder, and add that folder to your PATH."}
                </Callout>
            </section>

            {/* STEP 2 */}
            <section id="login" className="doc-section scroll-mt-24 mb-12">
                <StepHeading
                    num={2}
                    icon={<LogIn />}
                    title={isKhmer ? "ចូល" : "Log in"}
                />
                <Para>
                    {isKhmer
                        ? "ផ្ទៀងផ្ទាត់ជាមួយគណនី Auto-Offensive របស់អ្នក។"
                        : "Authenticate with your Auto-Offensive account."}
                </Para>

                <CodeBlock title="bash · login flow">
                    <Prompt />
                    <Cmd>aof</Cmd> login{"\n\n"}
                    <Dim>Opening browser for authentication...{"\n"}</Dim>
                    <Ok /> <Dim>Login successful{"\n"}</Dim>
                    <Dim>Token saved to ~/.config/aof/token.json</Dim>
                </CodeBlock>

                <Para>
                    {isKhmer
                        ? "បញ្ជានេះបើក browser របស់អ្នកដើម្បីបញ្ចប់ការចូល OAuth។ CLI រក្សាទុក token របស់អ្នកនៅក្នុងម៉ាស៊ីន ហើយ refresh វាដោយស្វ័យប្រវត្តិ។ អ្នកនៅតែបានចូល រហូតដល់អ្នកដំណើរការ aof logout។"
                        : "This opens your browser to complete the OAuth login. The CLI stores your token locally and refreshes it automatically. You stay logged in until you run aof logout."}
                </Para>
            </section>

            {/* STEP 3 */}
            <section id="project" className="doc-section scroll-mt-24 mb-12">
                <StepHeading
                    num={3}
                    icon={<FolderPlus />}
                    title={isKhmer ? "បង្កើត project" : "Create a project"}
                />
                <Para>
                    {isKhmer
                        ? "Projects រៀបចំ scans និង findings របស់អ្នក។ បង្កើតមួយសម្រាប់ demo នេះ៖"
                        : "Projects organize your scans and findings. Create one for this demo:"}
                </Para>

                <CodeBlock title="bash · create project">
                    <Prompt />
                    <Cmd>aof</Cmd> projects create <Flag>--name</Flag>{" "}
                    <Val>&quot;Demo&quot;</Val> <Flag>--description</Flag>{" "}
                    <Val>&quot;Quickstart test project&quot;</Val>
                    {"\n\n"}
                    <Ok /> <Dim>Project created{"\n"}</Dim>
                    <Dim>ID: proj-abc123{"\n"}</Dim>
                    <Dim>Name: Demo</Dim>
                </CodeBlock>

                <Para>
                    {isKhmer
                        ? "CLI ចងចាំនេះថាជា project ដែលអ្នកប្រើចុងក្រោយ ដូច្នេះអ្នកមិនចាំបាច់បញ្ជាក់វារៀងរាល់ពេលឡើយ។"
                        : "The CLI remembers this as your last-used project, so you don't need to specify it every time."}
                </Para>
            </section>

            {/* STEP 4 */}
            <section id="scan" className="doc-section scroll-mt-24 mb-12">
                <StepHeading
                    num={4}
                    icon={<PlayCircle />}
                    title={isKhmer ? "ដំណើរការ scan ដំបូងរបស់អ្នក" : "Run your first scan"}
                />
                <Para>
                    {isKhmer ? (
                        <>
                            ឥឡូវនេះដំណើរការ pipeline ដែលភ្ជាប់ tools ពីរ —{" "}
                            <InlineCode>subfinder</InlineCode> រកឃើញ subdomains បន្ទាប់មក{" "}
                            <InlineCode>httpx</InlineCode> probe ពួកវានីមួយៗសម្រាប់ HTTP services៖
                        </>
                    ) : (
                        <>
                            Now run a pipeline that chains two tools —{" "}
                            <InlineCode>subfinder</InlineCode> finds subdomains, then{" "}
                            <InlineCode>httpx</InlineCode> probes each one for HTTP services:
                        </>
                    )}
                </Para>

                <CodeBlock title="bash · pipeline scan">
                    <Prompt />
                    <Cmd>aof</Cmd> scan <Flag>--project</Flag> <Val>&quot;Demo&quot;</Val>{" "}
                    <Val>&quot;subfinder -d example.com | httpx -sc&quot;</Val>
                </CodeBlock>

                <Para>
                    {isKhmer
                        ? "អ្នកនឹងឃើញ output ផ្ទាល់ដូច scan ដំណើរការ៖"
                        : "You'll see live output as the scan runs:"}
                </Para>

                <CodeBlock title="live output">
                    <Ok /> <Dim>Scan submitted: job-xyz789{"\n\n"}</Dim>
                    <Dim>[subfinder] Starting...{"\n"}</Dim>
                    <Dim>[subfinder] www.example.com{"\n"}</Dim>
                    <Dim>[subfinder] api.example.com{"\n"}</Dim>
                    <Dim>[subfinder] mail.example.com{"\n"}</Dim>
                    <Dim>[subfinder] </Dim>
                    <Ok /> <Dim>Completed (3 results){"\n\n"}</Dim>
                    <Dim>[httpx] Starting...{"\n"}</Dim>
                    <Dim>[httpx] https://www.example.com [200] [nginx/1.18.0]{"\n"}</Dim>
                    <Dim>[httpx] https://api.example.com [200] [nginx/1.18.0]{"\n"}</Dim>
                    <Dim>[httpx] https://mail.example.com [301] [redirect]{"\n"}</Dim>
                    <Dim>[httpx] </Dim>
                    <Ok /> <Dim>Completed (3 results){"\n\n"}</Dim>
                    <Ok /> <Dim>Scan finished in 12s</Dim>
                </CodeBlock>

                <Para>
                    {isKhmer ? (
                        <>
                            Tool នីមួយៗដំណើរការតាមលំដាប់។ Output ពី{" "}
                            <InlineCode>subfinder</InlineCode> (បញ្ជី subdomains) ហូរទៅក្នុង{" "}
                            <InlineCode>httpx</InlineCode> ដោយផ្ទាល់ ដែលធ្វើតេស្តពួកវាម្នាក់ៗ។
                            អ្នកមិនចាំបាច់ copy-paste លទ្ធផលរវាង tools — pipeline ដោះស្រាយវា។
                        </>
                    ) : (
                        <>
                            Each tool runs in order. Output from{" "}
                            <InlineCode>subfinder</InlineCode> (the list of subdomains) flows
                            directly into <InlineCode>httpx</InlineCode>, which tests each one.
                            You don&apos;t copy-paste results between tools — the pipeline
                            handles it.
                        </>
                    )}
                </Para>
            </section>

            {/* STEP 5 */}
            <section id="findings" className="doc-section scroll-mt-24 mb-12">
                <StepHeading
                    num={5}
                    icon={<ListChecks />}
                    title={isKhmer ? "មើល findings" : "View findings"}
                />
                <Para>
                    {isKhmer
                        ? "បញ្ជី findings ពី scan របស់អ្នក៖"
                        : "List the findings from your scan:"}
                </Para>

                <CodeBlock title="bash · list findings">
                    <Prompt />
                    <Cmd>aof</Cmd> findings list <Flag>--project</Flag>{" "}
                    <Val>&quot;Demo&quot;</Val>
                </CodeBlock>

                {/* Findings table preview */}
                <div className="overflow-x-auto my-4 rounded-xl border border-[#E2DDD5] dark:border-white/10 bg-white dark:bg-[#101114]">
                    <table className="w-full border-collapse text-[14px]">
                        <thead className="bg-[#F0EDE6] dark:bg-white/5">
                            <tr>
                                {(isKhmer
                                    ? ["Severity", "Host", "Port", "Details"]
                                    : ["Severity", "Host", "Port", "Details"]
                                ).map((h) => (
                                    <th
                                        key={h}
                                        className="text-[10.5px] font-bold tracking-[0.08em] uppercase text-[#88837B] dark:text-[#9CA3AF] px-3.5 py-2.5 text-left border-b border-[#E2DDD5] dark:border-white/10"
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    sev: "INFO",
                                    host: "www.example.com",
                                    port: "443",
                                    details: "HTTP 200, nginx",
                                },
                                {
                                    sev: "INFO",
                                    host: "api.example.com",
                                    port: "443",
                                    details: "HTTP 200, nginx",
                                },
                                {
                                    sev: "INFO",
                                    host: "mail.example.com",
                                    port: "443",
                                    details: "HTTP 301",
                                },
                            ].map((row, i) => (
                                <tr
                                    key={i}
                                    className="hover:bg-[#FAF8F2] dark:hover:bg-white/5"
                                >
                                    <td className="px-3.5 py-2.5 border-b border-[#E2DDD5] dark:border-white/10 last:border-b-0">
                                        <span className="font-mono text-[10.5px] font-bold tracking-[0.08em] px-2 py-0.5 rounded border border-[#88837B33] text-[#88837B] bg-[rgba(136,131,123,0.08)]">
                                            {row.sev}
                                        </span>
                                    </td>
                                    <td
                                        className="px-3.5 py-2.5 border-b border-[#E2DDD5] dark:border-white/10 text-[#1A1714] dark:text-white"
                                        style={monoFontStyle}
                                    >
                                        {row.host}
                                    </td>
                                    <td
                                        className="px-3.5 py-2.5 border-b border-[#E2DDD5] dark:border-white/10 text-[#4A4540] dark:text-[#C9CDD4]"
                                        style={monoFontStyle}
                                    >
                                        {row.port}
                                    </td>
                                    <td className="px-3.5 py-2.5 border-b border-[#E2DDD5] dark:border-white/10 text-[#4A4540] dark:text-[#C9CDD4]">
                                        {row.details}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Para>
                    {isKhmer
                        ? "ជួរនីមួយៗគឺជា finding មួយ — អ្វីមួយដែល scan បានរកឃើញ។ ក្នុងករណីនេះ services HTTPS បីដែលរស់។ Scans ពិតផលិត findings ដែលមាន severity ខ្ពស់ជាង (vulnerabilities, exposed services, misconfigurations)។"
                        : "Each row is a finding — something the scan discovered. In this case, three live HTTPS services. Real scans produce findings with higher severity (vulnerabilities, exposed services, misconfigurations)."}
                </Para>

                <Para>
                    {isKhmer ? "អ្នកអាចត្រងតាម severity, host ឬ port៖" : "You can filter by severity, host, or port:"}
                </Para>

                <CodeBlock title="bash · filter findings">
                    <Prompt />
                    <Cmd>aof</Cmd> findings list <Flag>--project</Flag>{" "}
                    <Val>&quot;Demo&quot;</Val> <Flag>--severity</Flag>{" "}
                    <Val>CRITICAL</Val>
                </CodeBlock>
            </section>

            {/* Common issue */}
            <section id="troubleshooting" className="doc-section scroll-mt-24 mb-12">
                <h2
                    className="text-[1.55rem] md:text-[1.7rem] font-bold tracking-[-0.025em] text-[#1A1714] dark:text-white mb-3 pt-2 flex items-center gap-2.5"
                    style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                >
                    {isKhmer ? "បញ្ហាទូទៅ៖ Login បរាជ័យ" : "Common issue: Login fails"}
                </h2>

                <div className="rounded-2xl border border-[#E2DDD5] dark:border-white/10 bg-white/95 dark:bg-[#101114] p-5 md:p-6 space-y-3">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="size-4 mt-1 text-[#B86800] shrink-0" />
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.07em] text-[#B86800] mb-1">
                                {isKhmer ? "រោគសញ្ញា" : "Symptom"}
                            </p>
                            <p className="text-[15px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.65]">
                                {isKhmer
                                    ? "Browser បើកប៉ុន្តែបង្ហាញ \"Unable to connect\" ឬ \"Redirect failed\"។"
                                    : 'Browser opens but shows "Unable to connect" or "Redirect failed."'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Info className="size-4 mt-1 text-[#1D57C8] shrink-0" />
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.07em] text-[#1D57C8] mb-1">
                                {isKhmer ? "មូលហេតុ" : "Cause"}
                            </p>
                            <p className="text-[15px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.65]">
                                {isKhmer ? (
                                    <>
                                        CLI ចាប់ផ្តើម local callback server នៅ{" "}
                                        <InlineCode>http://localhost:8085/callback</InlineCode>។ ប្រសិនបើ
                                        process ផ្សេងកំពុងប្រើ port នោះ login នឹងបរាជ័យ។
                                    </>
                                ) : (
                                    <>
                                        The CLI starts a local callback server on{" "}
                                        <InlineCode>http://localhost:8085/callback</InlineCode>. If
                                        another process is using that port, login fails.
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="size-4 mt-1 text-[#1A7A4A] shrink-0" />
                        <div className="flex-1">
                            <p className="text-[11px] font-bold uppercase tracking-[0.07em] text-[#1A7A4A] mb-1">
                                {isKhmer ? "ដំណោះស្រាយ" : "Fix"}
                            </p>
                            <p className="text-[15px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.65] mb-2">
                                {isKhmer
                                    ? "បញ្ឈប់ process ដែលប៉ះទង្គិចគ្នា ឬកំណត់ port ផ្ទាល់ខ្លួន៖"
                                    : "Stop the conflicting process, or set a custom port:"}
                            </p>
                            <CodeBlock title="bash · custom port">
                                <Prompt />
                                <Cmd>export</Cmd> AOF_REDIRECT_URL=
                                <Val>http://localhost:9999/callback</Val>
                                {"\n"}
                                <Prompt />
                                <Cmd>aof</Cmd> login
                            </CodeBlock>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next steps */}
            <section id="next-steps" className="doc-section scroll-mt-24 mb-8">
                <h2
                    className="text-[1.55rem] md:text-[1.7rem] font-bold tracking-[-0.025em] text-[#1A1714] dark:text-white mb-3 pt-2"
                    style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                >
                    {isKhmer ? "ជំហានបន្ទាប់" : "Next steps"}
                </h2>
                <Para>
                    {isKhmer
                        ? "អ្នកទើបតែដំណើរការ scan pipeline ដំបូង និងបានឃើញ findings ។ នេះជាអ្វីដែលត្រូវស្វែងយល់បន្ទាប់៖"
                        : "You just ran your first pipeline scan and saw findings. Here's what to explore next:"}
                </Para>

                <div className="grid gap-3 md:grid-cols-2 mt-4">
                    {[
                        {
                            href: "/cli",
                            title: isKhmer ? "ដំណើរការ pipelines ស្មុគ្រស្មាញ" : "Run more complex pipelines",
                            desc: isKhmer
                                ? "ភ្ជាប់ tools បីឬបួនសម្រាប់ reconnaissance ជ្រៅជាង។"
                                : "Chain three or four tools for deeper reconnaissance.",
                        },
                        {
                            href: "/cli#streaming",
                            title: isKhmer ? "ប្រើ interactive mode" : "Use interactive mode",
                            desc: isKhmer
                                ? "បន្ថែម -i ដើម្បីឃើញ live progress dashboard។"
                                : "Add -i to see a live progress dashboard.",
                        },
                        {
                            href: "/cli#jobs",
                            title: isKhmer ? "មើល scans ទាំងអស់របស់អ្នក" : "Browse all your scans",
                            desc: isKhmer
                                ? "ចុះបញ្ជី បោះបង់ និងភ្ជាប់ឡើងវិញទៅ jobs ដែលកំពុងដំណើរការ។"
                                : "List, cancel, and reconnect to running jobs.",
                        },
                        {
                            href: "/api",
                            title: isKhmer ? "បង្កើត API key" : "Generate an API key",
                            desc: isKhmer
                                ? "Automate scans ពី scripts ឬ CI/CD។"
                                : "Automate scans from scripts or CI/CD.",
                        },
                    ].map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="group block rounded-xl border border-[#E7E3DA] dark:border-white/10 bg-white dark:bg-[#101114] p-4 transition-all duration-200 hover:border-[#0F766E]/40 hover:shadow-[0_6px_20px_rgba(15,118,110,0.07)] dark:hover:border-[#7DE7D8]/30"
                        >
                            <h3
                                className="text-[16px] font-semibold text-[#1A1714] dark:text-white mb-1"
                                style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                            >
                                {item.title}
                            </h3>
                            <p className="text-[14px] text-[#5D554B] dark:text-[#C9CDD4] leading-[1.55]">
                                {item.desc}
                            </p>
                        </a>
                    ))}
                </div>

                <p
                    className="text-[15px] md:text-[16px] text-[#0F766E] dark:text-[#7DE7D8] font-medium mt-6 italic"
                    style={{ fontFamily: "var(--docs-sans-font), sans-serif" }}
                >
                    {isKhmer
                        ? "សូមស្វាគមន៍មកកាន់ Auto-Offensive។ អ្នករួចរាល់ហើយដើម្បី scan។"
                        : "Welcome to Auto-Offensive. You're ready to scan."}
                </p>
            </section>

            <DocsFooterNav
                previous={{ href: "/concepts", label: isKhmer ? "គោលគំនិតស្នូល" : "Core Concepts" }}
                next={{ href: "/cli", label: isKhmer ? "ឯកសារ CLI" : "CLI Reference" }}
                previousText={isKhmer ? "មុន" : "Previous"}
                nextText={isKhmer ? "បន្ទាប់" : "Next"}
            />
        </main>
    );
}
