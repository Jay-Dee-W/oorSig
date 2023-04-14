import React from 'react';

import { SystemProps, keyframes, x } from '@xstyled/emotion';

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

interface SpinnerProps extends SystemProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'xs',
  ...systemProps
}) => {
  return (
    <x.div display="flex" justifyContent="center" alignItems="center">
      <x.div
        display="inline-block"
        w={WidthHeightSize[size].w}
        h={WidthHeightSize[size].w}
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
