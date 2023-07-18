import React, { Suspense } from 'react';
import Head from 'next/head';
import { x } from '@xstyled/emotion';
import { ErrorBoundary } from '@elements/ErrorBoundary';
import { Spinner } from './Spinner';

export interface PageProps {
  children: React.ReactNode;
  title: string;
  noPadding?: boolean;
  customFallback?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  children,
  title,
  noPadding,
  customFallback,
}) => {
  const formattedTitle =
    title && title.length > 0 ? `${title} | OORSIG` : 'OORSIG';

  const childrenNode = noPadding ? (
    <x.div minH="100vh"> {children}</x.div>
  ) : (
    <x.div display="flex" flexGrow={1} maxWidth="100%" minH="100vh">
      {children}
    </x.div>
  );

  const fallbackNode = customFallback ?? <Spinner />;

  return (
    <x.div minHeight="100vh">
      <Head>
        <title>{formattedTitle}</title>
      </Head>
      <ErrorBoundary>
        <Suspense fallback={fallbackNode}>{childrenNode}</Suspense>
      </ErrorBoundary>
    </x.div>
  );
};
