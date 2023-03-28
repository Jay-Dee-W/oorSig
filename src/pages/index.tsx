import Head from 'next/head';
import type { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { environment } from '@relay/environment';

const AuthPage: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Head>
        <title>Login | GitStart</title>
      </Head>
      <p>LOGIN PAGE</p>
    </RelayEnvironmentProvider>
  );
};

export default AuthPage;
