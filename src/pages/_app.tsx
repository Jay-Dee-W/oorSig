import React from 'react';
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { x } from '@xstyled/emotion';

import { ErrorBoundary } from '@elements/ErrorBoundary';
import { Providers } from '@elements/Providers';
import { Sidebar } from '@domains/sidebar/Sidebar';
function MyApp(
  { Component, pageProps }: AppProps,
  session: Session | null | undefined
) {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      <Providers>
        {router.asPath === '/' ? (
          // Auth page (login or signup)
          <Component {...pageProps} />
        ) : (
          <x.div
            display="flex"
            overflowY="auto"
            maxHeight="100vh"
            overflowX="hidden"
          >
            <Sidebar position="sticky" top="0" />
            <x.div flex="1">
              <ErrorBoundary>
                <Component {...pageProps} />
              </ErrorBoundary>
            </x.div>
          </x.div>
        )}
      </Providers>
    </SessionProvider>
  );
}

export default MyApp;
