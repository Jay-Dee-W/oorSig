import Head from 'next/head';
import type { NextPage } from 'next';


import { useSession, signIn } from 'next-auth/react';

const AuthPage: NextPage = () => {

  const { data: session } = useSession()

  if (!session) { signIn() }

  return (
    <Head>
      <title>Login | GitStart</title>
    </Head>
  );

};

export default AuthPage;
