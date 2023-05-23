import React from 'react';
import { x } from '@xstyled/emotion';
import { RadialProgressBar } from './RadialProgressBar';

interface WeeklyProgressProps {
  total: number;
  avg: number;
}

export const WeeklyProgress: React.FC<WeeklyProgressProps> = ({
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
      w="566px"
      h="310.56px"
      p="40px 35px"
      bg="gray-300"
      alignItems="center"
    >
      <x.div>
        <RadialProgressBar progress={75} />
      </x.div>
      <x.div pl="20px">
        <x.p fontSize="30px" fontWeight="700px" lineHeight="36px" pb="15px">
          My Pr(s)
        </x.p>
        <x.div borderBottom="1px solid" borderColor="gray-50" pb="13px">
          <x.p fontSize="18px" fontWeight="700px" color="gray-50">
            Total PR
          </x.p>
          <x.p fontSize="36px">{total}</x.p>
        </x.div>
        <x.span
          borderBottom="1px solid gray-50"
          bg="red"
          h="1px"
          w="100%"
        ></x.span>
        <x.div pt="13px">
          <x.p fontSize="18px" fontWeight="700px" color="gray-50">
            Average weekly Goal
          </x.p>
          <x.p fontSize="36px">{avg}</x.p>
        </x.div>
      </x.div>
    </x.div>
  );
};
