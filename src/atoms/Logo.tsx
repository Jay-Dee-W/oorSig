import React from 'react';
import { SystemProps, x } from '@xstyled/emotion';

const WidthHeightSize = {
  xs: {
    w: 8,
    h: 8,
  },
  sm: {
    w: 12,
    h: 12,
  },
  md: {
    w: 16,
    h: 16,
  },
  lg: {
    w: 24,
    h: 24,
  },
};

interface StatusBadge extends SystemProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<StatusBadge> = ({
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
      OORSIG
    </x.div>
  );
};
