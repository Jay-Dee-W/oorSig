import type { NextPage } from 'next';
import Head from 'next/head';
import { Auth } from '../domains/Auth';
import {RelayEnvironmentProvider } from 'react-relay/hooks'
import {environment} from '../relay/environment'


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