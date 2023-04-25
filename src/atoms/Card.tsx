import React from 'react';
import { x } from '@xstyled/emotion';
import { Typography } from './Typography';

interface CardProps {
  title: string;
  value: string;
  theme?: 'gray' | 'danger' | 'success' | 'secondary' | 'primary';
}

const CardTheme = {
  gray: {
    color: 'white',
    background: 'gray-250',
  },
  danger: {
    color: 'red-400',
    background: 'red-100',
  },
  success: {
    color: 'green-400',
    background: 'green-100',
  },
  secondary: {
    color: 'secondary-100',
    background: 'secondary-400',
  },
  primary: {
    color: 'primary-400',
    background: 'primary-100',
  },
};

export const Card: React.FC<CardProps> = ({ title, value, theme = 'gray' }) => {
  return (
    <x.div
      p="0.8rem"
      backgroundColor={CardTheme[theme].background}
      color={CardTheme[theme].color}
      borderRadius="0.2rem"
      maxH="5.6rem"
      maxW="10rem"
    >
      <Typography>{title}</Typography>
      <Typography size="4xl">{value}</Typography>
    </x.div>
  );
};

export default Card;
