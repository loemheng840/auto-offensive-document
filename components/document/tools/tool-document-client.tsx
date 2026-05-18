'use client';

import dynamic from 'next/dynamic';
import DocumentSkeleton from '@/components/skeleton/document-skeleton';

const ToolDocument = dynamic(
    () => import('@/components/document/tools/tool-document'),
    { ssr: false, loading: () => <DocumentSkeleton /> }
);

export default function ToolDocumentClient() {
    return <ToolDocument />;
}
