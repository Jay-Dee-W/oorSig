import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { x } from '@xstyled/emotion';
import { ErrorBoundary } from '@elements/ErrorBoundary';
import { Providers } from '@elements/Providers';
import { Sidebar } from '@domains/sidebar/Sidebar';
import { Backdrop } from '@atoms/index';
import { FiMenu } from 'react-icons/fi';
import './style.css';

function MyApp(
  { Component, pageProps }: AppProps,
  session: Session | null | undefined
) {
  const router = useRouter();

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(prevState => !prevState);
  };

  return (
    <SessionProvider session={session}>
      <Providers>
        {router.asPath === '/' ? (
          // Auth page (login or signup)
          <Component {...pageProps} />
        ) : (
          <x.div display="flex" overflowY="auto" maxHeight="100vh">
            {/* <FiMenu
              className="menu-toggle"
              onClick={toggleSidebar}
              cursor="pointer"
            />
            {sidebarVisible && <Backdrop onClick={toggleSidebar} />} */}

            <Sidebar visible={sidebarVisible} position="fixed" top="0" />
            <x.div className="content">
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
