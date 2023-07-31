import { FC, Suspense, useCallback } from 'react';
import styled, { SystemProps, Theme, x } from '@xstyled/emotion';
import { MdSpaceDashboard } from 'react-icons/md';
import { GoRepo, GoGitPullRequest, GoIssueOpened } from 'react-icons/go';
import { TopNavigation } from './TopNavigation';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarBottom } from './SidebarBottom';
import { useSidebarContext } from './SidebarContext';

interface SidebarProps extends Omit<SystemProps<Theme>, 'children'> {}

import { graphql } from 'relay-runtime';
import { useQueryLoader } from '@oorsig/relay/useQueryLoader';
import { SidebarQuery } from '@relay/__generated__/SidebarQuery.graphql';

interface SidebarProps extends Omit<SystemProps<Theme>, 'children'> {}
interface ExtendedTheme {
  breakpoints: {
    [key: string]: number | undefined;
  };
}

export const sidebarQuery = graphql`
  query SidebarQuery {
    viewer {
      ...SidebarBottom_viewer
    }
  }
`;

export const Sidebar: FC<SidebarProps> = props => {
  const { queryRef } = useQueryLoader<SidebarQuery>(sidebarQuery, {
    fetchPolicy: 'store-and-network',
  });

  const isActive = useCallback(
    (match: string) => (path: string) => path.includes(match),
    []
  );
  const { sidebarVisible } = useSidebarContext();
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
          <Container
            {...props}
            display={'flex'}
            flexDirection={'column'}
            className={sidebarVisible ? 'sidebar is-active' : 'sidebar'}
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
          </Container>
        </SidebarContainer>
      )}
    </Suspense>
  );
};

const Container = styled(x.div)`
  padding: 1rem;
  border-right: 1;
  border-right-color: gray-200;
  background-color: gray-300;
`;
const SidebarContainer = styled(x.div)`
  .sidebar {
    max-width: 300px;
    height: 100vh;
  }
  @media (max-width: ${props =>
      (props.theme as ExtendedTheme).breakpoints['lg']}px) {
    .sidebar {
      left: -300px;
      height: 100vh;
      max-width: 300px;
      transition: 0.2s linear;
      z-index: 1;
    }
    .sidebar.is-active {
      left: 0;
    }
  }
`;
