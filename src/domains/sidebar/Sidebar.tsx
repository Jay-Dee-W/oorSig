import { FC, Suspense, useCallback } from 'react';
import styled, { SystemProps, Theme, x } from '@xstyled/emotion';
import { MdSpaceDashboard } from 'react-icons/md';
import { GoRepo, GoGitPullRequest, GoIssueOpened } from 'react-icons/go';
import { TopNavigation } from './TopNavigation';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarBottom } from './SidebarBottom';
import { graphql } from 'relay-runtime';
import { useQueryLoader } from '@oorsig/relay/useQueryLoader';
import { SidebarQuery } from '@relay/__generated__/SidebarQuery.graphql';

interface SidebarProps extends Omit<SystemProps<Theme>, 'children'> {}

export const sidebarQuery = graphql`
  query SidebarQuery($organizationsFirst: Int!, $organizationsCursor: String) {
    viewer {
      ...TopNavigation_viewer
        @arguments(
          organizationsFirst: $organizationsFirst
          organizationsCursor: $organizationsCursor
        )
    }
  }
`;

export const Sidebar: FC<SidebarProps> = props => {
  const loadedItem = 4;
  const { queryRef } = useQueryLoader<SidebarQuery>(
    sidebarQuery,
    {
      organizationsFirst: loadedItem,
    },
    { fetchPolicy: 'store-and-network' }
  );

  const isActive = useCallback(
    (match: string) => (path: string) => path.includes(match),
    []
  );
  const routes = [
    {
      icon: MdSpaceDashboard,
      title: 'Dashboard',
      href: '/home',
    },
    {
      icon: GoRepo,
      title: 'Repositories',
      href: '#',
    },
    {
      icon: GoGitPullRequest,
      title: 'Pull Requests',
      href: '#',
    },
    {
      icon: GoIssueOpened,
      title: 'Issues',
      href: '#',
    },
  ];
  return (
    <Suspense>
      {queryRef && (
        <Container
          {...props}
          display={'flex'}
          flexDirection={'column'}
          w="17.82125rem"
        >
          <x.div flex={1}>
            <TopNavigation
              TopNavigationQuery={sidebarQuery}
              TopNavigationQueryReference={queryRef}
              loadedItem={loadedItem}
            />
            <x.div mt="3rem">
              {routes.map((e, i) => {
                const Icon = e.icon;
                return (
                  <SidebarNavigation
                    href={e.href}
                    key={i}
                    title={e.title}
                    icon={<Icon size="1.5rem" />}
                    active={isActive(e.href)}
                  />
                );
              })}
            </x.div>
          </x.div>
          <SidebarBottom />
        </Container>
      )}
    </Suspense>
  );
};

const Container = styled(x.div)`
  padding: 1rem;
  border-right: 1;
  border-right-color: gray-200;
  background-color: gray-300;
  position: relative;
`;
