import React from 'react';
import { SystemProps, x } from '@xstyled/emotion';

const WidthHeightSize = {
  xs: {
    w: 12,
    h: 12,
  },
  sm: {
    w: 18,
    h: 18,
  },
  md: {
    w: 24,
    h: 24,
  },
  lg: {
    w: 30,
    h: 30,
  },
  xl: {
    w: 36,
    h: 36,
  },
};

interface StatusBadge extends SystemProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const StatusBadge: React.FC<StatusBadge> = ({
  size = 'md',
  ...systemProps
}) => {
  return (
    <x.div
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      w={WidthHeightSize[size].w}
      h={WidthHeightSize[size].w}
      {...systemProps}
    >
      {/* I need logo to add here */}
    </x.div>
  );
};
