import React from 'react';
import { x } from '@xstyled/emotion';
import { Card } from '@atoms/Card';
import { Typography } from '@atoms/Typography';
import useMobileView from '@oorsig/hooks/useMobileView';
const userGithubStatistics = [
  {
    label: 'Merged PRs',
    value: 12,
    bgColor: 'green-100',
    txtColor: 'green-400',
  },

  {
    label: 'My Repos',
    value: 5,
    bgColor: 'gray-200',
    txtColor: 'white',
  },
  {
    label: 'Open PRs',
    value: 20,
    bgColor: 'primary-100',
    txtColor: 'primary-400',
  },
  {
    label: 'Organizations',
    value: 10,
    bgColor: 'gray-200',
    txtColor: 'white',
  },

  {
    label: 'Closed PRs',
    value: 15,
    bgColor: 'red-100',
    txtColor: 'red-200',
  },
  {
    label: 'Contribution',
    value: 20,
    bgColor: 'gray-200',
    txtColor: 'white',
  },
];
export const HomeCard = () => {
  const isMobileView = useMobileView();
  const sortGithubStatisticsForMobile = () => {
    const order = [0, 2, 4, 1, 3, 5];
    return order.map(index => userGithubStatistics[index]);
  };

  return (
    <>
      {isMobileView
        ? sortGithubStatisticsForMobile().map((item, index) => (
            <Card key={index} bg={item?.bgColor}>
              <x.p color={item?.txtColor} pb="0.5rem">
                {item?.label}
              </x.p>
              <Typography fontSize="4xl" color={item?.txtColor}>
                {item?.value}
              </Typography>
            </Card>
          ))
        : userGithubStatistics.map((item, index) => (
            <Card key={index} bg={item.bgColor}>
              <x.p color={item.txtColor} pb="0.5rem">
                {item.label}
              </x.p>
              <Typography fontSize="4xl" color={item.txtColor}>
                {item.value}
              </Typography>
            </Card>
          ))}
    </>
  );
};
