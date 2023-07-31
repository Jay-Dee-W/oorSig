import React from 'react';
import styled, { x } from '@xstyled/emotion';
import { Backdrop, Typography } from '@atoms/index';
import { FiMenu } from 'react-icons/fi';
import { useSidebarContext } from '@domains/sidebar/SidebarContext';

interface ExtendedTheme {
  breakpoints: {
    [key: string]: number;
  };
}

interface TopHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  title,
  subtitle,
  children,
}) => {
  const { sidebarVisible, toggleSidebar } = useSidebarContext();
  return (
    <Container>
      <FiMenu
        className="menu-toggle"
        onClick={toggleSidebar}
        cursor="pointer"
      />
      <x.div flex="1" className="header">
        <x.div className="headerTitle">
          <Typography fontSize="2xl">{title}</Typography>
        </x.div>
        <x.div className="subtitle">
          <Typography color="gray-50">{subtitle}</Typography>
        </x.div>
      </x.div>
      <x.div>{children}</x.div>
      {sidebarVisible && <Backdrop onClick={toggleSidebar} />}
    </Container>
  );
};

const Container = styled(x.div)`
  padding: 1rem;
  background-color: gray-300;
  display: flex;
  alignitems: center;
  backgroundcolor: gray-300;
  border-bottom: 1;
  border-bottom-color: gray-200;
  .headerTitle {
    font-weight: bold;
  }
  .menu-toggle {
    display: none;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    margin-right: 1rem;
  }
  @media (max-width: ${props =>
      (props.theme as ExtendedTheme).breakpoints['lg']}px) {
    .menu-toggle {
      display: block;
    }
  }
  @media (max-width: ${props =>
      (props.theme as ExtendedTheme).breakpoints['md']}px) {
    .subtitle {
      display: none;
    }
    .headerTitle {
      font-weight: normal;
    }
    .menu-toggle {
      width: 2rem;
      height: 2rem;
    }
  }
`;
