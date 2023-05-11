import styled, { SystemProps, Theme, x } from '@xstyled/emotion';
import { FC } from 'react';
import { TopNavigation } from './TopNavigation';

import { SidebarNavigation } from './SidebarNavigation';
import { SidebarBottom } from './SidebarBottom';

import { MdSpaceDashboard } from 'react-icons/md';
import { GoRepo, GoGitPullRequest, GoIssueOpened } from 'react-icons/go';

interface SidebarProps extends Omit<SystemProps<Theme>, 'children'> {}

export const Sidebar: FC<SidebarProps> = props => {
  return (
    <Container
      {...props}
      display={'flex'}
      flexDirection={'column'}
      w="17.82125rem"
    >
      <x.div flex={1}>
        <TopNavigation />
        <x.div mt="3rem">
          {[
            {
              icon: MdSpaceDashboard,
              title: 'Dashboard',
              href: '#',
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
          ].map((e, i) => {
            const Icon = e.icon;
            return (
              <SidebarNavigation
                href={e.href}
                key={i}
                title={e.title}
                icon={<Icon size="1.5rem" />}
              />
            );
          })}
        </x.div>
      </x.div>
      <SidebarBottom />
    </Container>
  );
};

const Container = styled(x.div)`
  padding: 1rem;
  border-right: 1;
  border-right-color: gray-200;
  background-color: gray-300;
  positoin: relative;
`;
