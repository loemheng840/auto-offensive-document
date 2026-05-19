'use client';

import dynamic from 'next/dynamic';
import DocumentSkeleton from '@/components/skeleton/document-skeleton';

/**
 * Factory that creates a lazy-loaded document client component.
 * Eliminates the boilerplate `*-document-client.tsx` files that are
 * identical except for the import path.
 *
 * Usage:
 *   const MyDocClient = makeDocClient(() => import('./my-document'));
 *   export default MyDocClient;
 */
export function makeDocClient(
    loader: () => Promise<{ default: React.ComponentType }>
) {
    const DocComponent = dynamic(loader, {
        ssr: false,
        loading: () => <DocumentSkeleton />,
    });

    return function DocClient() {
        return <DocComponent />;
    };
}
