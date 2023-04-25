import Head from 'next/head';
import type { NextPage } from 'next';
import React from 'react';

import { Dashboard } from '@domains/Dashboard';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>GitStart Team Hustle</title>
      </Head>
      <Dashboard />
    </>
  );
};

export default HomePage;
