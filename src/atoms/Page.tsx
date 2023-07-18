import React, { Suspense } from 'react';
import Head from 'next/head';
import { x } from '@xstyled/emotion';
import { ErrorBoundary } from '@elements/ErrorBoundary';
import { Spinner } from './Spinner';

export interface PageProps {
  children: React.ReactNode;
  title: string;
  customFallback?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  children,
  title,
  customFallback,
}) => {
  const formattedTitle = title ? `${title} | OORSIG` : 'OORSIG';
  const fallbackNode = customFallback || <Spinner />;

  return (
    <x.div minHeight="100vh">
      <Head>
        <title>{formattedTitle}</title>
      </Head>
      <ErrorBoundary>
        <Suspense fallback={fallbackNode}>
          <x.div display="flex" flexGrow={1} maxWidth="100%" minH="100vh">
            {children}
          </x.div>
        </Suspense>
      </ErrorBoundary>
    </x.div>
  );
};
