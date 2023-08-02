import '@emotion/react';
import { th } from '@xstyled/emotion';

type ThemeColors = {
  [key: string]: ReturnType<typeof th.color> | string;
};

declare module '@emotion/react' {
  export interface Theme {
    colors: ThemeColors;
    breakpoints: {
      [key: string]: number;
    };
  }
}
