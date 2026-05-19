"use client";

import { useLocale } from "next-intl";
import { BarChart3, TrendingUp, Network, Gauge, Server, Info } from "lucide-react";
import DocsFooterNav from "@/components/document/docs-footer-nav";
import {
    InlineCode,
    Para,
    SectionHeading,
    SubHeading,
    CodeBlock,
    Callout,
    Table,
    getPageFontVars,
    sansFontStyle,
} from "@/components/document/shared/doc-primitives";

export default function DashboardContent() {
    const locale = useLocale();
    const isKhmer = locale === "kh";

    return (
        <main
            className="flex-1 min-w-0 px-8 md:px-12 xl:px-14 pt-12 pb-24 max-[640px]:px-5"
            lang={isKhmer ? "km" : "en"}
            style={{ fontFamily: "var(--docs-sans-font), sans-serif", ...getPageFontVars(isKhmer) }}
        >
            <div className="mb-10 pb-8 border-b border-[#E2DDD5] dark:border-white/10">
                <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-[#00BCA1] bg-[rgba(0,188,161,0.07)] border border-[rgba(0,188,161,0.2)] px-2.5 py-1 rounded-full mb-4">
                    <BarChart3 className="size-3" />
                    {isKhmer ? "Aggregate analytics" : "Aggregate analytics"}
                </div>
                <h1 className="text-[2.4rem] md:text-[3rem] font-bold tracking-[-0.035em] leading-[1.1] text-[#1A1714] dark:text-white mb-4" style={sansFontStyle}>
                    {isKhmer ? "Dashboard និង Analytics" : "Dashboard & Analytics"}
                </h1>
                <p className="text-[17px] md:text-[19px] text-[#4A4540] dark:text-[#C9CDD4] leading-[1.7] max-w-[44rem]">
                    {isKhmer
                        ? "ឃើញរូបភាពធំ។ Dashboard បង្ហាញ vulnerabilities, assets, risk scores, និង trends ឆ្លងពេលវេលា — ដោយប្រមូលផ្តុំទិន្នន័យពី scans ទាំងអស់នៅក្នុងគណនីរបស់អ្នក។"
                        : "See the big picture. The dashboard surfaces vulnerabilities, assets, risk scores, and trends over time — aggregating data from every scan in your account."}
                </p>
            </div>

            {/* Overview */}
            <section id="overview" className="doc-section scroll-mt-24 mb-12">
                <SectionHeading id="overview">{isKhmer ? "ទិដ្ឋភាពទូទៅ" : "Overview"}</SectionHeading>
                <Para>
                    {isKhmer
                        ? "Dashboard analytics endpoints ទាំងអស់ត្រូវបានបង្ហាញនៅក្រោម /api/v1/dashboard។ ពួកវាគឺជា read-only ហើយ scoped ទៅគណនីដែលបាន authenticate។ ប្រើពួកវាដើម្បីបង្កើត internal dashboards, executive views ឬ aggregate widgets ។"
                        : "All dashboard analytics endpoints are exposed under /api/v1/dashboard. They're read-only and scoped to the authenticated account. Use them to build internal dashboards, executive views, or aggregate widgets."}
                </Para>

                <Callout type="info" icon={<Info className="text-[#1D57C8]" />} title={isKhmer ? "Web UI parity" : "Web UI parity"}>
                    {isKhmer
                        ? "Web dashboard បង្ហាញ visualizations ដូចគ្នានឹងការទទួលបានពី API endpoints ទាំងនេះ។ បើអ្នកសាងសង់ custom dashboards អ្នកនឹងទទួលបានទិន្នន័យដូចគ្នាទាំងអស់ដែល Web UI ប្រើ។"
                        : "The web dashboard renders the same visualizations you get from these API endpoints. If you build a custom dashboard, you have access to the exact same data the web UI uses."}
                </Callout>
            </section>

            {/* Key metrics */}
            <section id="metrics" className="doc-section scroll-mt-24 mb-12">
                <SectionHeading id="metrics">{isKhmer ? "Key metrics" : "Key metrics"}</SectionHeading>
                <Para>
                    {isKhmer
                        ? "Endpoint ទិដ្ឋភាពទូទៅ /api/v1/dashboard/overview ត្រឡប់នូវ aggregate counts ដ៏សំខាន់ៗបំផុត។"
                        : "The overview endpoint /api/v1/dashboard/overview returns the most important aggregate counts."}
                </Para>

                <CodeBlock title="bash · GET /api/v1/dashboard/overview">
                    {`curl https://api.auto-offensive.com/api/v1/dashboard/overview \\
  -H "Authorization: Bearer $AOF_API_KEY"

# Response
{
  "ips_total": 142,
  "hostnames_total": 318,
  "open_ports_total": 487,
  "protocols_total": 6,
  "services_total": 24,
  "technologies_total": 38,
  "vulnerabilities_total": 67,
  "vulnerabilities_by_severity": {
    "critical": 2,
    "high": 11,
    "medium": 28,
    "low": 26
  }
}`}
                </CodeBlock>

                <SubHeading>{isKhmer ? "Severity distribution" : "Severity distribution"}</SubHeading>
                <CodeBlock title="bash · GET /vulnerabilities/severity">
                    {`# Returns chart data for severity breakdown
GET /api/v1/dashboard/vulnerabilities/severity

# Response
{
  "labels": ["Critical", "High", "Medium", "Low", "Info"],
  "data": [2, 11, 28, 26, 12]
}`}
                </CodeBlock>
            </section>

            {/* Vulnerability trends */}
            <section id="vulnerability-trends" className="doc-section scroll-mt-24 mb-12">
                <SectionHeading id="vulnerability-trends">{isKhmer ? "Vulnerability trends" : "Vulnerability trends"}</SectionHeading>
                <Para>
                    {isKhmer
                        ? "តាមដាន vulnerabilities ឆ្លងពេលវេលាដើម្បីមើល progress និងភ្ជាប់ regressions ទៅ deployments ឬ release windows។"
                        : "Track vulnerabilities over time to see progress and tie regressions to deployments or release windows."}
                </Para>

                <CodeBlock title="bash · GET /vulnerabilities/trend">
                    {`# Default range is 30 days
GET /api/v1/dashboard/vulnerabilities/trend?range=30d

# Custom date range
GET /api/v1/dashboard/vulnerabilities/trend?startDate=2026-01-01&endDate=2026-04-30

# Response
{
  "labels": ["2026-04-01", "2026-04-02", ...],
  "data": [42, 45, 41, 38, ...]
}`}
                </CodeBlock>

                <Table
                    headers={[isKhmer ? "Range" : "Range", isKhmer ? "ចំនួនថ្ងៃ" : "Days"]}
                    rows={[
                        [<InlineCode key="1">7d</InlineCode>, "7"],
                        [<InlineCode key="2">30d</InlineCode>, "30 (default)"],
                        [<InlineCode key="3">90d</InlineCode>, "90"],
                        [<InlineCode key="4">1y</InlineCode>, "365"],
                    ]}
                />
            </section>

            {/* Asset discovery */}
            <section id="asset-discovery" className="doc-section scroll-mt-24 mb-12">
                <SectionHeading id="asset-discovery">{isKhmer ? "Asset discovery" : "Asset discovery"}</SectionHeading>
                <Para>
                    {isKhmer
                        ? "មើលថា attack surface របស់អ្នកធំធាត់ឬតូចថយឆ្លងពេលវេលា — រួមបញ្ចូល subdomains ថ្មី, hosts ដែលបង្ហាញ, និងសេវាកម្មដែលបានរកឃើញ។"
                        : "See whether your attack surface is growing or shrinking over time — including new subdomains, exposed hosts, and discovered services."}
                </Para>

                <CodeBlock title="bash · asset trends">
                    {`# Asset discovery trend over time
GET /api/v1/dashboard/assets/trend?range=30d

# Most vulnerable assets (paginated, sortable)
GET /api/v1/dashboard/assets/most-vulnerable?\\
  page=1&pageSize=20&sortBy=riskScore&order=desc

# Response (excerpt)
{
  "assets": [
    {
      "id": "asset_1",
      "hostname": "api.example.com",
      "ip": "203.0.113.10",
      "risk_score": 87,
      "highest_severity": "critical",
      "vuln_count": 8,
      "last_scanned_at": "2026-05-19T14:20:00Z"
    }
  ],
  "total": 142,
  "page": 1,
  "page_size": 20
}`}
                </CodeBlock>
            </section>

            {/* Risk scoring */}
            <section id="risk-scoring" className="doc-section scroll-mt-24 mb-12">
                <SectionHeading id="risk-scoring">{isKhmer ? "Risk scoring" : "Risk scoring"}</SectionHeading>
                <Para>
                    {isKhmer
                        ? "Asset នីមួយៗទទួលបាន risk score 0-100 ដែលគណនាពី severity, exploitability, និងភាពថ្មីៗនៃការរកឃើញ។ Endpoint distribution បំបែក assets ទៅជា risk buckets៖"
                        : "Each asset gets a 0-100 risk score computed from severity, exploitability, and recency of findings. The distribution endpoint buckets assets into risk tiers:"}
                </Para>

                <CodeBlock title="bash · risk distribution">
                    {`GET /api/v1/dashboard/risk/distribution

# Response
{
  "buckets": [
    {"range": "0-20",  "label": "Low",      "count": 89},
    {"range": "21-40", "label": "Medium",   "count": 32},
    {"range": "41-60", "label": "High",     "count": 14},
    {"range": "61-80", "label": "Critical", "count": 6},
    {"range": "81-100", "label": "Severe",  "count": 1}
  ]
}`}
                </CodeBlock>

                <Callout type="info" icon={<Gauge className="text-[#1D57C8]" />} title={isKhmer ? "ការគណនា Risk score" : "How risk score is calculated"}>
                    {isKhmer
                        ? "Risk score = (severity_weight × cvss_avg) + exploit_availability + recency_factor។ Critical CVE ដែលថ្មីៗបង្កើនពិន្ទុកាន់តែខ្ពស់ជាង Low CVE ចាស់ៗ។"
                        : "Risk score = (severity_weight × cvss_avg) + exploit_availability + recency_factor. A recent critical CVE pushes the score higher than an old low-severity CVE."}
                </Callout>
            </section>

            {/* Top charts */}
            <section id="top-charts" className="doc-section scroll-mt-24 mb-12">
                <SectionHeading id="top-charts">{isKhmer ? "Top ports និង services" : "Top ports & services"}</SectionHeading>
                <Para>
                    {isKhmer
                        ? "មើលលំនាំនៅទូទាំង scans ទាំងអស់របស់អ្នក — ports បើកចំហរច្រើនបំផុត, services ដែលប្រើច្រើនបំផុត, និង technologies ដែលបង្ហាញខ្លួនច្រើន។"
                        : "See patterns across all your scans — most-open ports, most-deployed services, and frequently exposed technologies."}
                </Para>

                <CodeBlock title="bash · top charts">
                    {`# Top open ports
GET /api/v1/dashboard/ports/top?limit=10

# Top services
GET /api/v1/dashboard/services/top?limit=10

# Top technologies
GET /api/v1/dashboard/technologies/top?limit=10

# Sample response (top ports)
[
  {"port": 443, "protocol": "tcp", "count": 287},
  {"port": 80,  "protocol": "tcp", "count": 245},
  {"port": 22,  "protocol": "tcp", "count": 67}
]`}
                </CodeBlock>

                <Callout type="info" icon={<Server className="text-[#1D57C8]" />} title={isKhmer ? "Aggregate count caveat" : "Aggregate count caveat"}>
                    {isKhmer
                        ? "Counts គឺឆ្លងពី scans ទាំងអស់របស់អ្នក។ បើ host មួយលេចមួយឡើងនៅក្នុង scans បួនថ្មីៗ វានឹងរាប់ម្តង (deduplicated by hostname/IP) មិនមែនបួនទេ។"
                        : "Counts are aggregated across all your scans. If a host appears in four recent scans, it counts once (deduplicated by hostname/IP), not four times."}
                </Callout>
            </section>

            <DocsFooterNav
                previous={{ href: "/reports", label: isKhmer ? "របាយការណ៍" : "Reports" }}
                next={{ href: "/cli", label: isKhmer ? "ឯកសារ CLI" : "CLI Reference" }}
                previousText={isKhmer ? "មុន" : "Previous"}
                nextText={isKhmer ? "បន្ទាប់" : "Next"}
            />
        </main>
    );
}
