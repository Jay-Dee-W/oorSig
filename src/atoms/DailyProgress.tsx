import React from 'react';
import { x } from '@xstyled/emotion';

interface DailyProgressProps {
  prs: number;
  avg: number;
  bgColor?: string;
}

export const DailyProgress: React.FC<DailyProgressProps> = ({
  prs,
  avg,
  bgColor = 'primary-200',
}) => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      border="1px solid "
      borderColor={bgColor}
      fontFamily="inter"
      borderRadius="8px"
      w="273.93px"
      h="159.57px"
      bg={bgColor}
    >
      <x.div p="17px 19px 0 19px">
        <x.p fontSize="20px" fontWeight="400px">
          Active Pr(s)
        </x.p>
        <x.p fontSize="48px" fontWeight="bold" lineHeight="48px" pb="14px">
          {prs}
        </x.p>
      </x.div>
      <x.div
        borderTop="1px solid"
        borderColor="#FFFFFF"
        p="10px 19px 17px 19px"
        display="flex"
        flexDirection="row"
        fontSize="16px"
        fontWeight="400px"
        lineHeight="24px"
      >
        <x.p color="gray-50">Average daily goal:</x.p>
        <x.p color="white" fontWeight="bold">
          {avg}
        </x.p>
      </x.div>
    </x.div>
  );
};
