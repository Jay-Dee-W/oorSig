import React from 'react';

import { SystemProps, x } from '@xstyled/emotion';

interface SpinnerProps extends SystemProps {
  active?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({ active= true , ...systemProps }) => {
  if (!active) return null;
  return (
    <x.div display="flex" justifyContent="center" alignItems="center">
      <x.div
        display="inline-block"
        w={8}
        h={8}
        border={3}
        borderColor={'red'}
        borderTopColor={'primary-600'}
        borderRadius="full"
        animation="spin"
        {...systemProps}
      />
    </x.div>
  );
};
