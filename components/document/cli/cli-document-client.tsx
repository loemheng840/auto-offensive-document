'use client';

import dynamic from 'next/dynamic';
import DocumentSkeleton from '@/components/skeleton/document-skeleton';

const CliDocument = dynamic(
    () => import('@/components/document/cli/cli-document'),
    { ssr: false, loading: () => <DocumentSkeleton /> }
);

export default function CliDocumentClient() {
    return <CliDocument />;
}
