import React from 'react';
import { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@xstyled/emotion';
import { x } from '@xstyled/emotion';
import { Button } from '@atoms/Button';
import { Card } from '@atoms/Card';
import { Dropdown } from '@atoms/Dropdown';
import { StatusBadge } from '@atoms/StatusBadge';
import { Table } from '@atoms/Table';
import { Typography } from '@atoms/Typography';

import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  Legend,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

interface ExtendedTheme {
  colors: {
    [key: string]: string;
  };
}

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options: ChartOptions<'line'> = {
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
      text: '',
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'white',
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
        color: 'gray',
      },
      ticks: {
        color: 'white',
      },
      border: {
        display: false,
      },
    },
  },
};

const dropDownOptions = [
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
];

const chartLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const tableColumns = [
  {
    key: 'image',
    style: {
      paddingLeft: '0.8rem',
    },
    header: '',
    render: (value: string) => (
      <x.img src={value} alt="Image" w="2rem" h="2rem" />
    ),
  },
  { key: 'name', header: 'Name' },
  { key: 'teams', header: 'Teams' },
  { key: 'repositories', header: 'Repositories' },
  {
    key: 'administer',
    header: 'Administer',
    render: (value: boolean) => <StatusBadge size="sm" isActive={value} />,
  },
  {
    key: 'action',
    header: '',
    style: {
      textAlign: 'right' as 'right',
    },
    render: (value: string) => <Button variant="secondary">{value}</Button>,
  },
];
const tableData = [
  {
    image: '/team.png',
    name: 'Gitsart HQ',
    teams: 25,
    repositories: 100,
    administer: true,
    action: 'Open',
  },
  {
    image: '/team.png',
    name: 'Meta',
    teams: 30,
    repositories: 50,
    administer: false,
    action: 'Close',
  },
];
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
export const Home: React.FC = () => {
  const theme = useTheme() as ExtendedTheme;
  const chartData: ChartData<'line'> = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Open PRs',
        data: [100, 200, 300, 333, 89, 600, 700, 400, 300, 200, 700, 700],
        borderColor: theme.colors['green-100'],
        pointRadius: 0,
      },
      {
        label: 'Closed PRs',
        data: [700, 600, 500, 400, 300, 200, 400, 400, 300, 200, 700, 200],
        borderColor: theme.colors['red-200'],
        pointRadius: 0,
      },
      {
        label: 'Merged PRs',
        data: [400, 500, 500, 200, 200, 200, 500, 400, 300, 200, 400, 500],
        borderColor: theme.colors['primary-200'],
        pointRadius: 0,
      },
    ],
  };
  return (
    <x.div className="App">
      <x.div
        padding="1rem"
        backgroundColor="gray-300"
        display="flex"
        alignItems={'center'}
        borderBottom="1"
        borderBottomColor="gray-200"
      >
        <x.div flex="1">
          <Typography fontSize="2xl" fontWeight="bold">
            Dashboard
          </Typography>
          <Typography color="gray-50">Welcome to your dashboard</Typography>
        </x.div>
        <x.div>
          <Dropdown options={dropDownOptions} placeholder="Weekly" />
        </x.div>
      </x.div>
      <x.div p="1rem" backgroundColor="gray-300" w="100%">
        <x.div display="flex" mb="3" gap="2" alignItems="center">
          <Typography size="3xl">🤖</Typography>
          <Typography size="sm">
            Access and visualize all your Github metrics in one place with
            OorSig by GitStart.
            <br /> Export data for further analysis and optimize your
            productivity.
          </Typography>
        </x.div>
        <x.div
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          flexWrap="wrap"
          justifyContent="space-between"
          w="100%"
        >
          <x.div flex="1" mb={{ base: '4', md: '0' }} w="100%">
            <Line options={options} data={chartData} />
          </x.div>
          <x.div
            display="grid"
            gridTemplateColumns="repeat(2, minmax(0, 1fr))"
            gap="5"
            maxW="100%"
            w="25vw"
            minWidth="300px"
          >
            {userGithubStatistics.map(item => (
              <Card key="" bg={item.bgColor}>
                <x.p color={item.txtColor} pb="0.5rem">
                  {item.label}
                </x.p>
                <Typography fontSize="4xl" color={item.txtColor}>
                  {item.value}
                </Typography>
              </Card>
            ))}
          </x.div>
        </x.div>
      </x.div>
      <x.div p="1rem">
        <Typography size="3xl" mb="2">
          Organizations
        </Typography>
        <x.div overflowX="auto" mb="3rem">
          <Table columns={tableColumns} data={tableData} />
        </x.div>
      </x.div>
    </x.div>
  );
};
