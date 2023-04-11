import React from 'react';

import { SystemProps, keyframes, x } from '@xstyled/emotion';

interface SpinnerProps extends SystemProps {
  active: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  active = true,
  ...systemProps
}) => {
  if (!active) return null;
  return (
    <x.div display="flex" justifyContent="center" alignItems="center">
      <x.div
        display="inline-block"
        w={30}
        h={30}
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
