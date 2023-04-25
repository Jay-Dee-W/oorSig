import { Typography } from '@oorsig/atoms';
import { Logo } from '@oorsig/atoms/Logo';
import styled, { SystemProps, Theme, x } from '@xstyled/emotion';
import { FC } from 'react';
import {
  MdExpandMore,
  MdSpaceDashboard,
  MdOutlineMoreVert,
} from 'react-icons/md';
import { GoRepo, GoGitPullRequest, GoIssueOpened } from 'react-icons/go';
import Link from 'next/link';

interface NavigationProps extends Omit<SystemProps<Theme>, 'children'> {}

export const Navigation: FC<NavigationProps> = props => {
  return (
    <Container {...props} display={'flex'} flexDirection={'column'}>
      <x.div flex={1}>
        <x.div textAlign={'center'}>
          <Logo w="80%" />
        </x.div>
        <x.div>
          <x.div
            backgroundColor="gray-200"
            p="0.4rem"
            borderRadius="0.6rem 0.6rem 0 0"
            display={'flex'}
            alignItems={'center'}
            gap="0.3rem"
            color="gray-50"
          >
            <x.img
              src={'https://avatars.githubusercontent.com/u/31163758?v=4'}
              alt={'Main Logo'}
              title={'Logo'}
              h={'45'}
              w={'45'}
              borderRadius="0.4rem"
              borderColor="gray-50"
            />
            <x.div flex={1}>
              <Typography variant="h6" size="xs">
                Selected organization
              </Typography>

              <Typography variant="h4" size="base" color="white">
                GitStart
              </Typography>
            </x.div>
            <MdExpandMore size={'1.6rem'} />
          </x.div>

          <x.div
            backgroundColor="gray-250"
            p="0.4rem"
            borderRadius="0 0 0.6rem 0.6rem"
            display={'flex'}
            alignItems={'center'}
            gap="0.4rem"
            color="gray-50"
          >
            <x.img
              src={'https://avatars.githubusercontent.com/t/2919986?s=400&v=4'}
              alt={'Main Logo'}
              title={'Logo'}
              h={'8'}
              w={'8'}
              borderRadius="0.4rem"
              borderColor="gray-50"
            />
            <x.div flex={1}>
              <Typography variant="h4" size="base" color="white">
                Team hustle
              </Typography>
            </x.div>

            <MdExpandMore size={'1.6rem'} />
          </x.div>
        </x.div>

        <x.div mt="3rem" display={'flex'} flexDirection={'column'} gap="0.3rem">
          {[
            {
              icon: MdSpaceDashboard,
              title: 'Dashboard',
              href: '/dashboard',
            },
            {
              icon: GoRepo,
              title: 'Repositories',
              href: '/dashboard',
            },
            {
              icon: GoGitPullRequest,
              title: 'Pull Requests',
              href: '/dashboard',
            },
            {
              icon: GoIssueOpened,
              title: 'Issues',
              href: '/dashboard',
            },
          ].map((e, i) => {
            const Icon = e.icon;
            return (
              <Link href={e.href} key={i}>
                <x.div
                  p="1rem"
                  backgroundColor={i === 0 ? 'gray-250' : ''}
                  borderRadius="0.4rem"
                  display={'flex'}
                  gap={2}
                >
                  <Icon size="1.5rem" />
                  <Typography flex={1}>{e.title}</Typography>
                </x.div>
              </Link>
            );
          })}
        </x.div>
      </x.div>

      <x.div>
        <x.div
          display="flex"
          p="0.7rem"
          border="1"
          borderColor="gray-200"
          mb="1rem"
          borderRadius="0.4rem"
          alignItems={'center'}
          gap="2"
        >
          <x.img
            src={'https://avatars.githubusercontent.com/t/2919986?s=400&v=4'}
            alt={'Main Logo'}
            title={'Logo'}
            h="10"
            w="10"
            borderRadius="1000"
            borderColor="gray-50"
          />
          <Typography flex={1} color="white">
            Janvier
          </Typography>
          <MdOutlineMoreVert size="1.6rem" />
        </x.div>
        <Typography size="xs" color="gray-50">
          Copyright © 2023 Gitstart <br />
          All right reserved
        </Typography>
      </x.div>
    </Container>
  );
};

const Container = styled(x.div)`
  padding: 1rem;
  border-right: 1;
  border-right-color: gray-200;
  background-color: gray-300;
`;
