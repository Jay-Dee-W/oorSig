import { x } from '@xstyled/emotion';
import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 10 }) => {
  if (src) {
    return (
      <x.img
        src={src}
        alt={alt}
        title={alt}
        h={size}
        w={size}
        borderRadius="full"
      />
    );
  }

  return (
    <x.span
      display="inline-block"
      h={size}
      w={size}
      borderRadius="full"
      overflow="hidden"
      backgroundColor="primary-200"
    >
      <x.svg
        h="full"
        w="full"
        color="primary-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <x.path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </x.svg>
    </x.span>
  );
};