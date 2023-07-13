import React, { Suspense } from 'react';
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { x } from '@xstyled/emotion';

import { ErrorBoundary } from '@elements/ErrorBoundary';
import { Providers } from '@elements/Providers';
import { Sidebar } from '@domains/sidebar/Sidebar';
import { Spinner } from '@atoms/index';

function MyApp(
  { Component, pageProps }: AppProps,
  session: Session | null | undefined
) {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      <Providers>
        <Suspense fallback={<Spinner />}>
          {router.asPath === '/' ? (
            // Auth page (login or signup)
            <Component {...pageProps} />
          ) : (
            <x.div h="100vh" display="flex">
              <Sidebar />
              <x.div h="full" overflowY="auto" flex={1}>
                <ErrorBoundary>
                  <Component {...pageProps} />
                </ErrorBoundary>
              </x.div>
            </x.div>
          )}
        </Suspense>
      </Providers>
    </SessionProvider>
  );
}

export default MyApp;
