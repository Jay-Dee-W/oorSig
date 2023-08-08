import React from 'react';
import type { NextPage } from 'next';
import { Home } from '@domains/Home/Home';
import { Page } from '@atoms/index';
import { HomeQuery } from '@domains/Home/Home';
import { useQueryLoader } from '@relay/useQueryLoader';
import { HomeQuery as HomeQueryType } from '@relay/__generated__/HomeQuery.graphql';

const HomePage: NextPage = () => {
  const { queryRef } = useQueryLoader<HomeQueryType>(HomeQuery, {
    fetchPolicy: 'store-and-network',
  });

  return <Page title="Home">{queryRef && <Home queryRef={queryRef} />}</Page>;
};

export default HomePage;
