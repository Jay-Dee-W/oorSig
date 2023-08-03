import React from 'react';
import {
  GraphQLTaggedNode,
  PreloadedQuery,
  usePreloadedQuery,
} from 'react-relay';
import Link from 'next/link';
import { x } from '@xstyled/emotion';
import { SidebarQuery } from '@relay/__generated__/SidebarQuery.graphql';
import { Logo } from '@atoms/index';
import { Organizations } from '@domains/Organiztions/Organizations';
interface TopNavigationProps {
  TopNavigationQuery: GraphQLTaggedNode;
  TopNavigationQueryReference: PreloadedQuery<SidebarQuery>;
  loadedItem: number;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  TopNavigationQuery,
  TopNavigationQueryReference,
  loadedItem,
}) => {
  const { viewer } = usePreloadedQuery(
    TopNavigationQuery,
    TopNavigationQueryReference
  );

  return (
    <x.div alignItems="center">
      <Link href="/home">
        <x.div cursor="pointer" w="80%" m="auto">
          <Logo w="100%" />
        </x.div>
      </Link>
      <Organizations OrganizationsRef={viewer} loadedItem={loadedItem} />
    </x.div>
  );
};
