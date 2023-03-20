import React from 'react';

import { SystemProps, x } from '@xstyled/emotion';

const paddingForSize = {
  xs: {
    px: 2.5,
    py: 1.5,
  },
  sm: {
    px: 3,
    py: 2,
  },
  md: {
    px: 4,
    py: 2,
  },
  lg: {
    px: 4,
    py: 2,
  },
  xl: {
    px: 6,
    py: 3,
  },
};

const textForSize = {
  xs: 'xs',
  sm: 'sm',
  md: 'sm',
  lg: 'default',
  xl: 'default',
};

const colorsForVariant = {
  primary: {
    bg: 'primary-600',
    hover: 'primary-300',
    text: 'white',
  },
  secondary: {
    bg: 'primary-100',
    hover: 'primary-200',
    text: 'primary-700',
  },
  white: {
    bg: 'white',
    hover: 'gray-50',
    text: 'gray-700',
  },
};

interface ButtonProps extends SystemProps {
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  loading,
  children,
  ...systemProps
}) => {
  disabled = loading ? true : disabled;

  return (
    <x.button
      onClick={onClick}
      display="inline-flex"
      alignItems="center"
      px={paddingForSize[size].px}
      py={paddingForSize[size].py}
      border
      borderColor={variant === 'white' ? 'gray-300' : 'transparent'}
      text={textForSize[size]}
      lineHeight={size === 'sm' ? 4 : undefined}
      fontWeight="medium"
      bg={{
        _: colorsForVariant[variant].bg,
        hover: !disabled ? colorsForVariant[variant].hover : undefined,
      }}
      opacity={disabled ? 0.6 : 1}
      cursor={disabled ? 'default' : undefined}
      color={colorsForVariant[variant].text}
      borderRadius="default"
      boxShadow="sm"
      disabled={disabled}
      animation={loading ? 'pulse' : undefined}
      {...systemProps}
    >
      {children}
    </x.button>
  );
};
