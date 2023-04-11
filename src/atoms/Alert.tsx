import React, { useState } from 'react';
import { x, SystemProps } from '@xstyled/emotion';

const colorsForVariant = {
  danger: {
    bg: '#F3D8DB',
    text: '#7A282B',
  },
  success: {
    bg: '#D6E6DF',
    text: '#265035',
  },
  info: {
    bg: '#44494B',
    text: 'white',
  },
};

interface AlertProps extends SystemProps {
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
  const [dismissed, setDismissed] = useState(false);

  const handleClick = () => {
    setDismissed(true);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (dismissed) {
    return null;
  }
  return (
    <x.div
      {...systemProps}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      p="1.0625rem 1.125rem"
      gap="0.625rem"
      position="absolute"
      w="23rem"
      left="1.25rem"
      top="1.25rem"
      bg={colorsForVariant[variant].bg}
      color={colorsForVariant[variant].text}
      borderRadius="0.25rem"
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
      <x.span
        h="0.75rem"
        w="0.75rem"
        flex="none"
        cursor="pointer"
        onClick={handleClick}
      >
        &#215;
      </x.span>
    </x.div>
  );
};
