import React from 'react';
import { useTheme } from '@xstyled/emotion';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

interface CircularProgressbarProps {
  percentage: number;
  pathColor?: string;
  trailColor?: string;
  textColor?: string;
  textSize?: number;
  strokeWidth?: number;
  strokeLinecap?: 'round' | 'butt';
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
  const theme = useTheme();
  trailColor = trailColor || theme.colors['gray-50'];
  pathColor = pathColor || theme.colors['primary-200'];
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
