import React from 'react';
import { x } from '@xstyled/emotion';
import { Card } from './Card';
import { Divider } from '@atoms/Divider';
interface DailyProgressProps {
  prs: number;
  avg: number;
  bgColor?: string;
  title: string;
}

export const DailyProgress: React.FC<DailyProgressProps> = ({
  prs,
  avg,
  bgColor = 'primary-200',
  title,
}) => {
  return (
    <Card
      borderRadius="8px"
      p="0"
      width="17.21rem"
      height="9.97rem"
      bg={bgColor}
    >
      <x.div display="flex" flexDirection="column" fontFamily="inter">
        <x.div p="1.06rem 1.19rem 0 1.19rem">
          <x.p fontSize="20px" fontWeight="400px">
            {title}
          </x.p>
          <x.p fontSize="48px" fontWeight="bold" lineHeight="48px" pb="0.88rem">
            {prs}
          </x.p>
        </x.div>
        <Divider borderColor="white" />
        <x.div
          p="0.63rem 1.19rem 1.06rem 1.19rem"
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
    </Card>
  );
};
