import Head from 'next/head';
import type { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { environment } from '@relay/environment';
import { Auth } from '@oorsig/domains/Auth';

const AuthPage: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Head>
        <title>Login | GitStart</title>
      </Head>
      <Auth />
    </RelayEnvironmentProvider>
  );
};

export default AuthPage;
