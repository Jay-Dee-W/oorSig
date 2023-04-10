import React, { useState } from 'react';
import { x } from '@xstyled/emotion';


interface AlertProps {
    message: string;
    backgroundColor?: string;
    onDismiss?: () => void;
}
export const Alert: React.FC<AlertProps> = ({
    message,
    backgroundColor = '#F3D8DB',
    onDismiss,
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
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    padding="17px 18px"
    gap="10px"
    position="absolute"
    w="368px"
    h="58px"
    left="20px"
    top="20px"
    background={backgroundColor}
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
      color="#7A282B"
      flex="none"
      order="0"
      flexGrow="0"
      textAlign="center"
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
    >
      { message }
    </x.span>
    <x.span
      w="12px"
      h="12px"
      flex="none"
      order="1"
      left="320px"
      top="6px"
      flexGrow="0"
      cursor="pointer"
      onClick={handleClick}
      >
          &#215;
    </x.span>
  </x.div>
)
}
