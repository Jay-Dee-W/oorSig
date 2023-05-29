import React from 'react';
import { SizingProps } from '@xstyled/emotion';
import { Chart, AxisOptions } from 'react-charts';

interface LineChart extends SizingProps {}

type MyDatum = {
  date: Date;
  stars: number;
};

export const LineChart: React.FC<LineChart> = () => {
  const data = [
    {
      label: 'Merged PRs',
      data: [
        {
          date: new Date('2019'),
          stars: 4,
        },
        {
          date: new Date('2019'),
          stars: 12,
        },
        {
          date: new Date('2020'),
          stars: 18,
        },
        {
          date: new Date('2021'),
          stars: 16,
        },
        {
          date: new Date('2022'),
          stars: 29,
        },
        {
          date: new Date('2023'),
          stars: 40,
        },
      ],
    },
    {
      label: 'Open PRs',
      data: [
        {
          date: new Date('2019'),
          stars: 12,
        },
        {
          date: new Date('2019'),
          stars: 3,
        },
        {
          date: new Date('2020'),
          stars: 2,
        },
        {
          date: new Date('2021'),
          stars: 4,
        },
        {
          date: new Date('2022'),
          stars: 6,
        },
        {
          date: new Date('2023'),
          stars: 4,
        },
      ],
    },
    {
      label: 'Closed PRs',
      data: [
        {
          date: new Date('2019'),
          stars: 3,
        },
        {
          date: new Date('2019'),
          stars: 1,
        },
        {
          date: new Date('2020'),
          stars: 0,
        },
        {
          date: new Date('2021'),
          stars: 3,
        },
        {
          date: new Date('2022'),
          stars: 2,
        },
        {
          date: new Date('2023'),
          stars: 4,
        },
      ],
    },
  ];

  const primaryAxis = React.useMemo(
    (): AxisOptions<MyDatum> => ({
      getValue: datum => datum.date,
      elementType: 'line',
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
        getValue: datum => datum.stars,
        elementType: 'line',
      },
    ],
    []
  );

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
        dark: true,
        initialHeight: 200,
        defaultColors: ['#8CFFBC', '#A1CDFF', '#EB5545'],
        padding: 1,
      }}
    />
  );
};
