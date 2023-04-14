import React from 'react';
import { SystemProps, x } from '@xstyled/emotion';

const WidthHeightSize = {
  xs: {
    w: 12,
    h: 12,
  },
  sm: {
    w: "200px",
    h: "200px",
  },
  md: {
    w: 24,
    h: 24,
  },
  lg: {
    w: 30,
    h: 30,
  },
  xl: {
    w: 36,
    h: 36,
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
          w={WidthHeightSize[size].w}
          h={WidthHeightSize[size].w}
          viewBox="0 0 76 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <x.ellipse
            cx="37.541"
            cy="91.257"
            rx="17.541"
            ry="17.0382"
            fill="#C8FFEB"
          />
          <x.path
            d="M45.8745 85.3145L34.8745 96.3145L29.8745 91.3145"
            stroke="#265035"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </x.svg>
      ) : (
        <x.svg
          w={WidthHeightSize[size].w}
          h={WidthHeightSize[size].w}
          viewBox="0 0 76 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <x.ellipse
            cx="37.541"
            cy="37.1808"
            rx="17.541"
            ry="17.0382"
            fill="#F3D8DB"
          />
          <x.path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.4145 31.898C44.8107 31.5132 44.8199 30.8801 44.4351 30.4839C44.0503 30.0878 43.4172 30.0785 43.021 30.4634L37.5407 35.7866L32.0604 30.4634C31.6642 30.0785 31.0311 30.0878 30.6463 30.4839C30.2615 30.8801 30.2707 31.5132 30.6669 31.898L36.1055 37.1807L30.6669 42.4634C30.2707 42.8482 30.2615 43.4813 30.6463 43.8774C31.0311 44.2736 31.6642 44.2828 32.0604 43.898L37.5407 38.5748L43.021 43.898C43.4172 44.2828 44.0503 44.2736 44.4351 43.8774C44.8199 43.4813 44.8107 42.8482 44.4145 42.4634L38.9759 37.1807L44.4145 31.898Z"
            fill="#EB5545"
          />
        </x.svg>
      )}
    </x.div>
  );
};
