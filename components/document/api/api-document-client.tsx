'use client';

import dynamic from 'next/dynamic';
import DocumentSkeleton from '@/components/skeleton/document-skeleton';

const ApiDocument = dynamic(
    () => import('@/components/document/api/api-document'),
    { ssr: false, loading: () => <DocumentSkeleton /> }
);

export default function ApiDocumentClient() {
    return <ApiDocument />;
}
