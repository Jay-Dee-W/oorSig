import { Button } from '@atoms/Button';
import { Card } from '@atoms/Card';
import { ChartData, ChartOptions } from 'chart.js';
import { Dropdown } from '@oorsig/atoms/Dropdown';
import { Line } from 'react-chartjs-2';
import React from 'react';
import { StatusBadge } from '@atoms/StatusBadge';
import { Table } from '@atoms/Table';
import { Typography } from '@oorsig/atoms';
import { x } from '@xstyled/emotion';

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

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
  responsive: true,
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
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
        color: 'gray',
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

const chartData: ChartData<'line'> = {
  labels: chartLabels,
  datasets: [
    {
      label: 'Open PRs',
      data: [100, 200, 300, 333, 89, 600, 700, 400, 300, 200, 700, 700],
      borderColor: 'green',
      backgroundColor: 'green',
      pointRadius: 0,
    },
    {
      label: 'Closed PRs',
      data: [700, 600, 500, 400, 300, 200, 400, 400, 300, 200, 700, 200],
      borderColor: 'red',
      backgroundColor: 'red',
      pointRadius: 0,
    },
    {
      label: 'Merged PRs',
      data: [400, 500, 500, 200, 200, 200, 500, 400, 300, 200, 400, 500],
      borderColor: 'blue',
      backgroundColor: 'blue',
      pointRadius: 0,
    },
  ],
};

const tableColumns = [
  {
    key: 'image',
    header: '',
    render: (value: string | undefined) => (
      <x.img src={value} alt="Image" w="2rem" h="2rem" />
    ),
  },
  { key: 'name', header: 'Name' },
  { key: 'teams', header: 'Teams' },
  { key: 'repositories', header: 'Repositories' },
  {
    key: 'administer',
    header: 'Administer',
    render: (value: boolean | undefined) => (
      <StatusBadge size="xs" isActive={value} />
    ),
  },
  {
    key: 'action',
    header: '',
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
    txtColor: 'red-400',
  },
  {
    label: 'Contribution',
    value: 20,
    bgColor: 'gray-200',
    txtColor: 'white',
  },
];
export const Home: React.FC = () => {
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
            oorSig by GitStart.
            <br /> Export data for further analysis and optimize your
            productivity.
          </Typography>
        </x.div>
        <x.div display="flex">
          <x.div flex="1">
            <Line options={options} data={chartData} />
          </x.div>
          <x.div display="grid" gridTemplateColumns="2" col gap="5" maxW="340">
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
      <x.div maxW="1200" mx="auto" p="1rem">
        <Typography size="3xl" mb="2">
          Organizations
        </Typography>
        <Table columns={tableColumns} data={tableData} />
      </x.div>
    </x.div>
  );
};
