import React from 'react';
import { SystemProps, x } from '@xstyled/emotion';

import { Spinner } from './Spinner';

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
    bg: '#007AFF',
    hover: '#439bfa',
    text: 'white',
  },
  secondary: {
    bg: '#5B5B5B',
    hover: 'primary-500',
    text: 'white',
  },
  success: {
    bg: '#6FCF97',
    hover: '#81cca0',
    text: 'white',
  },
  danger: {
    bg: '#EB5545',
    hover: '#f06759',
    text: 'white',
  },
  light: {
    bg: '#D9D9D9',
    hover: 'primary-400',
    text: 'black',
  },
};

interface ButtonProps extends SystemProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  loading,
  children,
  icon,
  title,
  type='button',
  ...systemProps
}) => {
  return (
    <x.button
      onClick={onClick}
      disabled={disabled}
      title={title}
      type={type}
      animation={loading ? 'pulse' : undefined}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      w='130px'
      h='57px'
      px={paddingForSize[size].px}
      py={paddingForSize[size].py}
      border
      borderColor={'transparent'}
      text={textForSize[size]}
      lineHeight={size === 'sm' ? 4 : undefined}
      fontWeight="medium"
      opacity={disabled ? 0.6 : 1}
      cursor={disabled ? 'not-allowed' : undefined}
      color={disabled ? colorsForVariant['light'].text : colorsForVariant[variant].text}
      borderRadius='4px'
      boxShadow="sm"
      bg={{
        _: disabled ? colorsForVariant['light'].bg : colorsForVariant[variant].bg,
        hover: disabled ? undefined :colorsForVariant[variant].hover ,
      }}
      {...systemProps}
    >
      {
        loading ? (<Spinner active={true} borderColor={colorsForVariant[variant].text}></Spinner>):
          <>
            {icon && (
                <x.span
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  mr={2}
                >
                  {icon}
                </x.span>
              )}
              {children}
        </>
      } 
    </x.button>
  );
};
