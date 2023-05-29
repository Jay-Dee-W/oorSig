import React from 'react';
import { useTheme } from '@xstyled/emotion';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

interface CircularProgressbarProps {
  percentage: number;
  pathColor?: any;
  trailColor?: any;
  textColor?: string;
  textSize?: number;
  strokeWidth?: number;
  strokeLinecap?: 'round' | 'butt';
}

interface ExtendedTheme {
  colors: {
    [key: string]: string;
  };
}

export const CircularProgressbar: React.FC<CircularProgressbarProps> = ({
  percentage,
  pathColor,
  trailColor,
  textColor,
  textSize,
  strokeWidth,
  strokeLinecap,
}) => {
  const theme = useTheme() as ExtendedTheme;
  trailColor =
    theme.colors[trailColor] || trailColor || theme.colors['gray-50'];
  pathColor =
    theme.colors[pathColor] || pathColor || theme.colors['primary-200'];

  return (
    <CircularProgressbarWithChildren
      value={percentage}
      strokeWidth={strokeWidth}
      styles={buildStyles({
        strokeLinecap,
        pathColor,
        trailColor,
      })}
    >
      <div style={{ fontSize: textSize, color: textColor }}>
        <strong>{percentage}%</strong>
      </div>
    </CircularProgressbarWithChildren>
  );
};
