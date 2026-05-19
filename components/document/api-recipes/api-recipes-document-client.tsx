'use client';
import { makeDocClient } from '@/components/document/shared/make-doc-client';

export default makeDocClient(
    () => import('@/components/document/api-recipes/api-recipes-document')
);
