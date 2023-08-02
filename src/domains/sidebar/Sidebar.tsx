import { FC, Suspense, useCallback } from 'react';
import { GoRepo, GoGitPullRequest, GoIssueOpened } from 'react-icons/go';
import { TopNavigation } from './TopNavigation';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarBottom } from './SidebarBottom';
import { useSidebarContext } from './SidebarContext';
import { graphql } from 'relay-runtime';
import { MdSpaceDashboard } from 'react-icons/md';
import styled, { SystemProps, Theme, x } from '@xstyled/emotion';
import { useQueryLoader } from '@oorsig/relay/useQueryLoader';
import { SidebarQuery } from '@relay/__generated__/SidebarQuery.graphql';
import { TopNavigation } from './TopNavigation';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarBottom } from './SidebarBottom';

interface SidebarProps extends Omit<SystemProps<Theme>, 'children'> {}

export const sidebarQuery = graphql`
  query SidebarQuery(
    $organizationsFirst: Int!
    $organizationsCursor: String
    $teamsFirst: Int!
    $teamsCursor: String
  ) {
    viewer {
      ...Organizations_viewer
        @arguments(
          organizationsFirst: $organizationsFirst
          organizationsCursor: $organizationsCursor
          teamsFirst: $teamsFirst
          teamsCursor: $teamsCursor
        )
      ...SidebarBottom_viewer
    }
  }
`;

export const Sidebar: FC<SidebarProps> = props => {
  const loadedItem = 4;
  const { queryRef } = useQueryLoader<SidebarQuery>(
    sidebarQuery,
    {
      organizationsFirst: loadedItem,
      teamsFirst: loadedItem,
    },
    { fetchPolicy: 'store-and-network' }
  );

  const isActive = useCallback(
    (match: string) => (path: string) => path.includes(match),
    []
  );
  const { isSidebarOpen } = useSidebarContext();
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
        <SidebarContainer>
          <x.div
            p="1rem"
            borderRight="1"
            borderRightColor="gray-200"
            bg="gray-300"
            maxW="300px"
            h="100vh"
            zIndex="1"
            {...props}
            display={'flex'}
            flexDirection={'column'}
            className={isSidebarOpen ? 'sidebar is-active' : 'sidebar'}
          >
            <x.div flex={1}>
              <TopNavigation />
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
            <SidebarBottom
              SidebarBottomQuery={sidebarQuery}
              SidebarBottomQueryReference={queryRef}
            />
          </x.div>
        </SidebarContainer>
      )}
    </Suspense>
  );
};

const SidebarContainer = styled(x.div)`
  @media (max-width: ${props => props.theme.breakpoints['lg']}px) {
    .sidebar {
      left: -300px;
      transition: 0.2s linear;
    }
    .sidebar.is-active {
      left: 0;
    }
  }
`;
