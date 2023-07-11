import React from 'react';
import { SystemProps, x } from '@xstyled/emotion';

interface BackdropProps extends SystemProps {
  onClick?: () => void;
}

export const Backdrop: React.FC<BackdropProps> = ({
  onClick,
  ...systemProps
}) => {
  return (
    <x.div
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="gray-400"
      opacity={0.3}
      onClick={onClick}
      {...systemProps}
    />
  );
};
