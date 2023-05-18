import Head from 'next/head';
import type { NextPage } from 'next';
import React from 'react';
import withAuth from '@oorsig/elements/withAuth';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard Page</title>
      </Head>
      <h1>Dashboard Page</h1>
    </>
  );
};

export default withAuth(HomePage);
