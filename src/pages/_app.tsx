import { ErrorBoundary } from '@elements/ErrorBoundary';
import { Providers } from '@elements/Providers';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { useRouter } from 'next/router';
import React from 'react';
import type { AppProps } from 'next/app';
import { x } from '@xstyled/emotion';

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
          <x.div h="100vh" display="flex">
            <x.div bg="gray-800" w={{ lg: 256 }} />
            <x.div h="full" overflowY="auto" flex={1}>
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
