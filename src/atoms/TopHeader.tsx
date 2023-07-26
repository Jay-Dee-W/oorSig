import React from 'react';
import { x } from '@xstyled/emotion';
import { Typography } from '@atoms/Typography';
import { Backdrop } from '@atoms/index';
import { FiMenu } from 'react-icons/fi';
import { useSidebarContext } from '@domains/sidebar/SidebarContext';

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
    <x.div
      p="1rem"
      bg="gray-300"
      display="flex"
      alignItems="center"
      backgroundColor="gray-300"
      borderBottom="1"
      borderBottomColor="gray-200"
    >
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
    </x.div>
  );
};
