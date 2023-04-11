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
  variant: 'success' | 'danger' | 'info';
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
      padding="17px 18px"
      gap="10px"
      position="absolute"
      w="368px"
      left="20px"
      top="20px"
      bg={colorsForVariant[variant].bg}
      color={colorsForVariant[variant].text}
      borderRadius="4px"
    >
      <x.span
        w="258px"
        h="24px"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="400"
        fontSize="16px"
        lineHeight="24px"
        flex="1"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {message}
      </x.span>
      <x.span
        h="12px"
        w="12px"
        flex="none"
        cursor="pointer"
        onClick={handleClick}
      >
        &#215;
      </x.span>
    </x.div>
  );
};
