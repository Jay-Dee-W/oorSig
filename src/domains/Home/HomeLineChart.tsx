import React from 'react';
import { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@xstyled/emotion';
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

export const HomeLineChart = () => {
  const theme = useTheme();
  const chartData: ChartData<'line'> = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Open PRs',
        data: [100, 200, 300, 333, 89, 600, 700, 400, 300, 200, 700, 700],
        borderColor: theme.colors['green-100'] as string,
        pointRadius: 0,
      },
      {
        label: 'Closed PRs',
        data: [700, 600, 500, 400, 300, 200, 400, 400, 300, 200, 700, 200],
        borderColor: theme.colors['red-200'] as string,
        pointRadius: 0,
      },
      {
        label: 'Merged PRs',
        data: [400, 500, 500, 200, 200, 200, 500, 400, 300, 200, 400, 500],
        borderColor: theme.colors['primary-200'] as string,
        pointRadius: 0,
      },
    ],
  };

  return (
    <>
      <Line options={options} data={chartData} style={{ maxHeight: '300px' }} />
    </>
  );
};
