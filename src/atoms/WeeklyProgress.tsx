import React from 'react';
import { x } from '@xstyled/emotion';
import { RadialProgressBar } from './RadialProgressBar';

interface WeeklyProgressProps {
  progress: number;
  total: number;
  avg: number;
}

export const WeeklyProgress: React.FC<WeeklyProgressProps> = ({
  progress,
  total,
  avg,
}) => {
  return (
    <x.div
      display="flex"
      flexDirection="row"
      border="1px solid "
      borderColor="gray-300"
      borderRadius="8px"
      fontFamily="inter"
      w="35.38rem"
      h="19.41rem"
      p="2.5rem 2.19rem"
      bg="gray-300"
      alignItems="center"
    >
      <x.div>
        <RadialProgressBar progress={progress} />
      </x.div>
      <x.div pl="1.25rem">
        <x.p fontSize="30px" fontWeight="700px" lineHeight="36px" pb="0.94rem">
          My Pr(s)
        </x.p>
        <x.div borderBottom="1px solid" borderColor="gray-50" pb="0.81rem">
          <x.p fontSize="18px" fontWeight="700px" color="gray-50">
            Total PR
          </x.p>
          <x.p fontSize="36px">{total}</x.p>
        </x.div>
        <x.div pt="0.81rem">
          <x.p fontSize="18px" fontWeight="700px" color="gray-50">
            Average weekly Goal
          </x.p>
          <x.p fontSize="36px">{avg}</x.p>
        </x.div>
      </x.div>
    </x.div>
  );
};
