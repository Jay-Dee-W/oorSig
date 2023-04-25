import type { AppProps } from 'next/app';
import React from 'react';
import { useRouter } from 'next/router';
import { x } from '@xstyled/emotion';

import { ErrorBoundary } from '@elements/ErrorBoundary';
import { Providers } from '@elements/Providers';
import { Navigation } from '@oorsig/organism';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Providers>
      {router.asPath === '/' ? (
        // Auth page (login or signup)
        <Component {...pageProps} />
      ) : (
        <x.div h="100vh" display="flex">
          <Navigation w={{ lg: 256 }} />
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
