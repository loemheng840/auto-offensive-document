'use client';

import dynamic from 'next/dynamic';
import DocumentSkeleton from '@/components/skeleton/document-skeleton';

const CiCdDocument = dynamic(
    () => import('@/components/document/ci-cd/ci-cd-document'),
    { ssr: false, loading: () => <DocumentSkeleton /> }
);

export default function CiCdDocumentClient() {
    return <CiCdDocument />;
}
