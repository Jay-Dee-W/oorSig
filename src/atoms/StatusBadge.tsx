import React from 'react';
import { SystemProps, x } from '@xstyled/emotion';

const WidthHeightSize = {
  xs: {
    w: '1.3rem',
    h: '1.3rem',
  },
  sm: {
    w: '1.5rem',
    h: '1.5rem',
  },
  md: {
    w: '2rem',
    h: '2rem',
  },
  lg: {
    w: '2.5rem',
    h: '2.5rem',
  },
  xl: {
    w: '3rem',
    h: '3rem',
  },
};

interface StatusBadge extends SystemProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isAdmin?: boolean;
}

export const StatusBadge: React.FC<StatusBadge> = ({
  isAdmin = false,
  size = 'md',
  ...systemProps
}) => {
  return (
    <x.div
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      {...systemProps}
    >
      {isAdmin ? (
        <x.svg
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          w={WidthHeightSize[size].w}
          h={WidthHeightSize[size].w}
        >
          <x.ellipse
            cx="18.1913"
            cy="17.3604"
            rx="17.541"
            ry="17.0382"
            fill="#C8FFEB"
          />
          <x.path
            d="M26.5248 11.4178L15.5248 22.4178L10.5248 17.4178"
            stroke="#265035"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </x.svg>
      ) : (
        <x.svg
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          w={WidthHeightSize[size].w}
          h={WidthHeightSize[size].w}
        >
          <x.ellipse
            cx="18.1913"
            cy="17.4956"
            rx="17.541"
            ry="17.0382"
            fill="#F3D8DB"
          />
          <x.path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.0648 12.2128C25.4609 11.828 25.4701 11.1949 25.0853 10.7987C24.7005 10.4026 24.0674 10.3934 23.6713 10.7782L18.191 16.1014L12.7107 10.7782C12.3145 10.3934 11.6814 10.4026 11.2966 10.7987C10.9118 11.1949 10.921 11.828 11.3172 12.2128L16.7557 17.4955L11.3172 22.7782C10.921 23.163 10.9118 23.7961 11.2966 24.1922C11.6814 24.5884 12.3145 24.5976 12.7107 24.2128L18.191 18.8896L23.6713 24.2128C24.0674 24.5976 24.7005 24.5884 25.0853 24.1922C25.4701 23.7961 25.4609 23.163 25.0648 22.7782L19.6262 17.4955L25.0648 12.2128Z"
            fill="#EB5545"
          />
        </x.svg>
      )}
    </x.div>
  );
};
