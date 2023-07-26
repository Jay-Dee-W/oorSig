import React, { useState } from 'react';
import { x } from '@xstyled/emotion';
import { Typography } from '@atoms/Typography';
import { Backdrop } from '@atoms/index';
import { FiMenu } from 'react-icons/fi';

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
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(prevState => !prevState);
  };
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
      {sidebarVisible && <Backdrop onClick={toggleSidebar} />}
      <x.div flex="1">
        <Typography fontSize="2xl" fontWeight="bold">
          {title}
        </Typography>
        <x.div className="subtitle">
          <Typography color="gray-50">{subtitle}</Typography>
        </x.div>
      </x.div>
      <x.div>{children}</x.div>
    </x.div>
  );
};
