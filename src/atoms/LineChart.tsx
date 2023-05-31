import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}
interface ChartDataset {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  pointRadius?: number;
}

interface ChartOptions {
  responsive?: boolean;
  plugins?: {
    legend?: {
      display?: boolean;
      position?: 'top' | 'bottom' | 'left' | 'right';
    };
    title?: {
      display?: boolean;
      text?: string;
    };
  };
  scales?: {
    x?: {
      grid?: {
        display?: boolean;
        color?: string;
      };
      border?: {
        display: boolean;
        color?: string;
      };
      ticks?: {
        color?: string;
        fontSize?: string | number;
        fontFamily?: string;
      };
    };
    y?: {
      grid?: {
        display?: boolean;
        color?: string;
      };
      border?: {
        display?: boolean;
        color?: string;
      };
      ticks?: {
        color: string;
        fontSize?: string | number;
        fontFamily?: string;
      };
    };
  };
}
interface LineChartProps {
  options?: ChartOptions;
  data: ChartData;
}

export const LineChart: React.FC<LineChartProps> = ({ options, data }) => {
  return <Line options={options} data={data} />;
};
