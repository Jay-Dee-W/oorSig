import React, { Suspense } from 'react';
import { ErrorBoundary } from '@elements/ErrorBoundary';
import { PageTitle } from '@elements/PageTitle';
import { Spinner } from './Spinner';

export interface PageProps {
  children: React.ReactNode;
  title?: string;
  fallback?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children, title, fallback }) => {
  const formattedTitle = title ? `${title} | OORSIG` : 'OORSIG';
  const fallbackNode = fallback || <Spinner />;

  return (
    <>
      <PageTitle title={formattedTitle} />
      <ErrorBoundary>
        <Suspense fallback={fallbackNode}>{children}</Suspense>
      </ErrorBoundary>
    </>
  );
};
