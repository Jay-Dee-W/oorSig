import Head from 'next/head';
import type { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { environment } from '@relay/environment';
import { Auth } from '@oorsig/domains/Auth';

import { useSession, signIn } from 'next-auth/react';

const AuthPage: NextPage = () => {
  // return (
  //   <RelayEnvironmentProvider environment={environment}>
  //     <Head>
  //       <title>Login | GitStart</title>
  //     </Head>
  //     <Auth />
  //   </RelayEnvironmentProvider>
  // );

const {data:session} = useSession()

if (!session) { signIn() }

return (
  <>
  </>
)

};

export default AuthPage;
