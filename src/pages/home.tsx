import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

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
