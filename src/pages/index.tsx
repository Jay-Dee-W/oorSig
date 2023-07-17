import Head from 'next/head';
import type { NextPage } from 'next';

import { LandingPage } from '@domains/LandingPage';

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>OORSIG</title>
      </Head>
      <LandingPage />
    </>
  );
};

export default AuthPage;
