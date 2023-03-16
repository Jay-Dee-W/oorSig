import React from 'react';
import type { AppProps } from 'next/app';
import { ErrorBoundary } from '../elements/ErrorBoundary';
import { x } from '@xstyled/emotion';
import { useRouter } from 'next/router';
import { Providers } from '../elements/Providers';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
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
  );
}

export default MyApp;
