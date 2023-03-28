import type { NextPage } from 'next';
import Head from 'next/head';
<<<<<<< HEAD
import {RelayEnvironmentProvider } from 'react-relay/hooks'

import { Auth } from '@domains/Auth';
import {environment} from '@relay/environment'

=======
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { environment } from '../relay/environment';
>>>>>>> main

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
