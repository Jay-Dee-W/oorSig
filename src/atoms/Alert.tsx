import React, { useState } from 'react';
import { x } from '@xstyled/emotion';

const colorsVariant = {
  danger: {
    bg: '#F3D8DB',
    text: '#7A282B',
    iconColor: '#7A282B',
  },
  success: {
    bg: '#D6E6DF',
    text: '#265035',
    iconColor: '#265035',
  },
  info: {
    bg: '#44494B',
    text: 'white',
    iconColor: '#FEFEFF',
  },
};

interface AlertProps {
  message: string;
  variant?: 'success' | 'danger' | 'info';
  onDismiss?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  message,
  variant = 'success',
  onDismiss,
  ...systemProps
}) => {
  const [dismissed, setDismissed] = useState<boolean>(false);

  const onDismissClick = () => {
    setDismissed(true);
    onDismiss?.();
  };

  if (dismissed) {
    return null;
  }
  return (
    <x.div
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      p="1.0625rem 1.125rem"
      gap="0.625rem"
      w="23rem"
      left="1.25rem"
      top="1.25rem"
      bg={colorsVariant[variant].bg}
      color={colorsVariant[variant].text}
      borderRadius="0.25rem"
      {...systemProps}
    >
      <x.span
        w="16.125rem"
        h="1.5rem"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="400"
        fontSize="1rem"
        lineHeight="1.5rem"
        flex="1"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {message}
      </x.span>
      {onDismissClick && (
        <x.span
          h="0.75rem"
          w="0.75rem"
          flex="none"
          cursor="pointer"
          onClick={onDismissClick}
        >
          <x.svg
            w="12px"
            h="12px"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z"
              fill={colorsVariant[variant].iconColor}
            />
          </x.svg>
        </x.span>
      )}
    </x.div>
  );
};
