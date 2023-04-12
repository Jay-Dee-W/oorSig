import React from 'react';

import { SystemProps, keyframes, x } from '@xstyled/emotion';

const WidthHeightSize = {
  xs: {
    w: 12,
    h: 12,
  },
  sm: {
    w: 24,
    h: 24,
  },
  md: {
    w: 30,
    h: 30,
  },
  lg: {
    w: 36,
    h: 36,
  },
  xl: {
    w: 42,
    h: 42,
  },
};

interface SpinnerProps extends SystemProps {
  active?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Spinner: React.FC<SpinnerProps> = ({
  active = true,
  size = 'md',
  ...systemProps
}) => {
  if (!active) return null;
  return (
    <x.div display="flex" justifyContent="center" alignItems="center">
      <x.div
        display="inline-block"
        w={WidthHeightSize[size].w || systemProps}
        h={WidthHeightSize[size].w || systemProps}
        border={3}
        borderColor={'white'}
        borderTopColor="#C8C8C8"
        borderRadius="50%"
        animation={`1s infinite linear ${animations['spin']}`}
        {...systemProps}
      />
    </x.div>
  );
};

const animations = {
  spin: keyframes`
  to {
    transform: rotate(360deg);
  }
  `,
};
