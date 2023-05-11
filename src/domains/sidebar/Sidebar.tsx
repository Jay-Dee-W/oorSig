import styled, { SystemProps, Theme, x } from '@xstyled/emotion';
import { FC } from 'react';

import { SidebarNavigation } from './SidebarNavigation';
import { SidebarBottom } from './SiderbarBottom';

interface SidebarProps extends Omit<SystemProps<Theme>, 'children'> {}

export const Sidebar: FC<SidebarProps> = (props) => {

  return (
    <Container {...props} display={'flex'} flexDirection={'column'} w="17.82125rem">
      <SidebarNavigation></SidebarNavigation>
      <SidebarBottom ></SidebarBottom>
    </Container>
  );
}

const Container = styled(x.div)`
  padding: 1rem;
  border-right: 1;
  border-right-color: gray-200;
  background-color: gray-300;
  positoin:relative;
`;
