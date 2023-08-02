import React from 'react';
import styled, { x } from '@xstyled/emotion';
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ErrorBoundary } from '@elements/ErrorBoundary';
import { Providers } from '@elements/Providers';
import { Sidebar } from '@domains/sidebar/Sidebar';
import { SidebarProvider } from '@domains/sidebar/SidebarContext';

function MyApp(
  { Component, pageProps }: AppProps,
  session: Session | null | undefined
) {
  const router = useRouter();

  return (
    <SidebarProvider>
      <SessionProvider session={session}>
        <Providers>
          {router.asPath === '/' ? (
            // Auth page (login or signup)
            <Component {...pageProps} />
          ) : (
            <Container>
              <x.div display="flex" overflowY="auto" maxHeight="100vh">
                <Sidebar position="fixed" top="0" />
                <x.div className="content" flex="1">
                  <ErrorBoundary>
                    <Component {...pageProps} />
                  </ErrorBoundary>
                </x.div>
              </x.div>
            </Container>
          )}
        </Providers>
      </SessionProvider>
    </SidebarProvider>
  );
}

const Container = styled(x.div)`
  .content {
    margin-left: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints['lg']}px) {
    .content {
      margin-left: 0;
    }
  }
`;
export default MyApp;
