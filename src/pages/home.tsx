import React from 'react';
import type { NextPage } from 'next';
import { Home } from '@domains/Home';
import { Page } from '@atoms/index';

const HomePage: NextPage = () => {
  return (
    <Page title="Home">
        <Home/>
    </Page>
  );
};

export default HomePage;
