import React from 'react';
import { x } from '@xstyled/emotion';

interface RadialProgressBarProps {
  progress: number;
  radius?: number;
  color?: string;
}

export const RadialProgressBar: React.FC<RadialProgressBarProps> = ({
  progress,
  radius = 100,
  color = 'primary-200',
}) => {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const fontSize = radius * 0.4;
  return (
    <x.svg width={radius * 2} height={radius * 2}>
      <x.circle
        cx={radius}
        cy={radius}
        r={radius - 8}
        fill="transparent"
        stroke={'gray-50'}
        strokeWidth={15}
      />
      <x.circle
        cx={radius}
        cy={radius}
        r={radius - 8}
        fill="transparent"
        stroke={color}
        strokeLinecap="round"
        strokeWidth={15}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90, 50, 50)"
        transform-origin="center"
      />
      <x.text
        x={radius}
        y={radius}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize={fontSize}
        fontWeight="400px"
        fill="white"
        fontStyle="italic"
      >
        {progress}%
      </x.text>
    </x.svg>
  );
};
