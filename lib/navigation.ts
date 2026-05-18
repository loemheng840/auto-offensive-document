/**
 * Documentation navigation structure
 * Centralized configuration for sidebar, mobile nav, and search
 */

export interface NavItem {
    title: string;
    titleKh?: string;
    href?: string;
    items?: NavItem[];
    badge?: string;
}

export const DOCS_NAV: NavItem[] = [
    {
        title: "Getting Started",
        titleKh: "ចាប់ផ្តើម",
        items: [
            {
                title: "Overview",
                titleKh: "ទិដ្ឋភាពទូទៅ",
                href: "/"
            },
        ],
    },
    {
        title: "API Reference",
        titleKh: "ឯកសារ API",
        items: [
            {
                title: "Overview",
                titleKh: "ទិដ្ឋភាពទូទៅ",
                href: "/api"
            },
            {
                title: "Authentication",
                titleKh: "ការផ្ទៀងផ្ទាត់",
                href: "/api/authentication"
            },
            {
                title: "Rate Limits",
                titleKh: "ដែនកំណត់អត្រា",
                href: "/api/rate-limits"
            },
            {
                title: "Error Codes",
                titleKh: "លេខកូដកំហុស",
                href: "/api/error-codes"
            },
            {
                title: "Projects",
                titleKh: "គម្រោង",
                href: "/api/projects"
            },
            {
                title: "Scan Jobs",
                titleKh: "ការងារស្កេន",
                href: "/api/scan-jobs"
            },
            {
                title: "Results",
                titleKh: "លទ្ធផល",
                href: "/api/results"
            },
            {
                title: "Reports",
                titleKh: "របាយការណ៍",
                href: "/api/reports"
            },
        ],
    },
    {
        title: "CLI",
        titleKh: "CLI",
        items: [
            {
                title: "Overview",
                titleKh: "ទិដ្ឋភាពទូទៅ",
                href: "/cli"
            },
            {
                title: "Installation",
                titleKh: "ការដំឡើង",
                href: "/cli/installation"
            },
            {
                title: "Commands",
                titleKh: "ពាក្យបញ្ជា",
                href: "/cli/commands"
            },
            {
                title: "Configuration",
                titleKh: "ការកំណត់រចនាសម្ព័ន្ធ",
                href: "/cli/configuration"
            },
            {
                title: "Authentication",
                titleKh: "ការផ្ទៀងផ្ទាត់",
                href: "/cli/authentication"
            },
        ],
    },
    {
        title: "CI/CD",
        titleKh: "CI/CD",
        items: [
            {
                title: "Overview",
                titleKh: "ទិដ្ឋភាពទូទៅ",
                href: "/ci-cd"
            },
            {
                title: "GitHub Actions",
                titleKh: "GitHub Actions",
                href: "/ci-cd/github-actions"
            },
            {
                title: "GitLab CI",
                titleKh: "GitLab CI",
                href: "/ci-cd/gitlab-ci"
            },
            {
                title: "Jenkins",
                titleKh: "Jenkins",
                href: "/ci-cd/jenkins"
            },
            {
                title: "Azure Pipelines",
                titleKh: "Azure Pipelines",
                href: "/ci-cd/azure-pipelines"
            },
        ],
    },
    {
        title: "Tools",
        titleKh: "ឧបករណ៍",
        items: [
            {
                title: "Overview",
                titleKh: "ទិដ្ឋភាពទូទៅ",
                href: "/tools"
            },
            {
                title: "Subfinder",
                titleKh: "Subfinder",
                href: "/tools/subfinder"
            },
            {
                title: "Httpx",
                titleKh: "Httpx",
                href: "/tools/httpx"
            },
            {
                title: "Nuclei",
                titleKh: "Nuclei",
                href: "/tools/nuclei"
            },
            {
                title: "Nmap",
                titleKh: "Nmap",
                href: "/tools/nmap"
            },
            {
                title: "Custom Tools",
                titleKh: "ឧបករណ៍ផ្ទាល់ខ្លួន",
                href: "/tools/custom"
            },
        ],
    },
];

/**
 * Flatten navigation for search indexing
 */
export function flattenNav(items: NavItem[], section = ""): Array<{
    section: string;
    title: string;
    titleKh?: string;
    href: string;
}> {
    const result: Array<{
        section: string;
        title: string;
        titleKh?: string;
        href: string;
    }> = [];

    for (const item of items) {
        const currentSection = section || item.title;

        if (item.href) {
            result.push({
                section: currentSection,
                title: item.title,
                titleKh: item.titleKh,
                href: item.href,
            });
        }

        if (item.items) {
            result.push(...flattenNav(item.items, currentSection));
        }
    }

    return result;
}
