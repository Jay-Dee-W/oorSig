import React from 'react';
import { x } from '@xstyled/emotion';
import { CircularProgressbar } from '@atoms/CircularProgressbar';
import { Card } from '@atoms/Card';
interface WeeklyProgressProps {
  percentage: number;
  total: number;
  avg: number;
  title: string;
}

export const WeeklyProgress: React.FC<WeeklyProgressProps> = ({
  percentage,
  total,
  avg,
  title,
}) => {
  return (
    <Card
      bg="gray-300"
      borderRadius="8px"
      width="35.38rem"
      height="19.41rem"
      p="2.5rem 2.19rem"
    >
      <x.div
        display="flex"
        flexDirection="row"
        alignItems="center"
        fontFamily="inter"
      >
        <x.div w="14.41rem" h="14.41rem">
          <CircularProgressbar percentage={percentage} strokeLinecap="round" />
        </x.div>
        <x.div pl="1.25rem">
          <x.p
            fontSize="30px"
            fontWeight="700px"
            lineHeight="36px"
            pb="0.94rem"
          >
            {title}
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
    </Card>
  );
};
