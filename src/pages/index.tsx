import type { NextPage } from 'next';
import Head from 'next/head';
import {RelayEnvironmentProvider } from 'react-relay/hooks'

import { Auth } from '@oorsig/domains/Auth';
import {environment} from '@oorsig/relay/environment'


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
