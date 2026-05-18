'use client';

import dynamic from 'next/dynamic';
import DocumentSkeleton from '@/components/skeleton/document-skeleton';

const ResourceHub = dynamic(
    () => import('@/components/document/resource-hub'),
    { ssr: false, loading: () => <DocumentSkeleton /> }
);

export default function ResourceHubClient() {
    return <ResourceHub />;
}
