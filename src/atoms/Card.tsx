import React from 'react';
import { x } from '@xstyled/emotion';

interface CardProps {
  children: React.ReactNode;
  bg?: string;
  borderRadius?: number | string;
  p?: number | string;
  m?: number | string;
  boxShadow?: string;
  height?: number | string;
  width?: number | string;
}

export const Card: React.FC<CardProps> = ({
  children,
  bg = 'white',
  borderRadius = 4,
  p = 4,
  m = 0,
  boxShadow = 'lg',
  height,
  width,
}) => {
  return (
    <x.div
      bg={bg}
      borderRadius={borderRadius}
      p={p}
      m={m}
      boxShadow={boxShadow}
      h={height}
      w={width}
    >
      {children}
    </x.div>
  );
};

export default Card;
