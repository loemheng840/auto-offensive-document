import DocsSidebar from "./sidebar";
import TableOfContents, { type TocEntry } from "./toc";

interface DocsShellProps {
    children: React.ReactNode;
    toc?: TocEntry[];
}

export default function DocsShell({ children, toc }: DocsShellProps) {
    return (
        <div className="flex w-full max-w-[90rem] mx-auto">
            <DocsSidebar />

            {/* Main content */}
            <main className="flex-1 min-w-0 px-6 py-10 lg:px-10 xl:px-12">
                <article className="docs-prose max-w-3xl mx-auto">
                    {children}
                </article>
            </main>

            <TableOfContents entries={toc} />
        </div>
    );
}
