import Head from 'next/head';
import type { NextPage } from 'next';
import React from 'react';

import { Home } from '@domains/Home';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>GitStart Team Hustle</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
