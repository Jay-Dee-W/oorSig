import React from 'react';
import styled, { x } from '@xstyled/emotion';
import { Backdrop, Typography } from '@atoms/index';
import { FiMenu } from 'react-icons/fi';
import { useSidebarContext } from '@domains/sidebar/SidebarContext';
import useMobileView from '@oorsig/hooks/useMobileView';

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
  const { isSidebarOpen, toggleSidebar } = useSidebarContext();
  const isMobileView = useMobileView();
  return (
    <HeaderContainer>
      <x.div
        p="1rem"
        bg="gray-300"
        display="flex"
        alignItems="center"
        backgroundColor="gray-300"
        borderBottom="1"
        borderBottomColor="gray-200"
        className="header"
      >
        <x.span
          display={isMobileView ? 'block' : 'none'}
          cursor="pointer"
          mr="1rem"
        >
          <FiMenu
            onClick={toggleSidebar}
            cursor="pointer"
            className="menu-toggle"
            fontSize="3rem"
          />
        </x.span>
        <x.div flex="1" className="header">
          <x.div className="headerTitle" fontWeight="bold">
            <Typography fontSize="2xl">{title}</Typography>
          </x.div>
          <x.div className="subtitle">
            <Typography color="gray-50">{subtitle}</Typography>
          </x.div>
        </x.div>
        <x.div>{children}</x.div>
        {isSidebarOpen && <Backdrop onClick={toggleSidebar} />}
      </x.div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(x.div)`
  .header {
    box-sizing: 'border-box';
  }
  @media (max-width: ${props => props.theme.breakpoints['md']}px) {
    .subtitle {
      display: none;
    }
    .headerTitle {
      font-weight: normal;
    }
    .menu-toggle {
      font-size: 2rem;
    }
  }
`;
