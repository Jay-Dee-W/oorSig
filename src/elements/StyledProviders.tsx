import React from 'react';
import { th, defaultTheme, ThemeProvider, Preflight } from '@xstyled/emotion';
import { createGlobalStyle } from '@xstyled/emotion';

export const GlobalStyle = createGlobalStyle`
  :root, body, #root {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
`;

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: th.color('white'),
    brand: 'gray-900',

    ['primary-50']: defaultTheme.colors['gray-50'],
    ['primary-100']: defaultTheme.colors['gray-100'],
    ['primary-200']: defaultTheme.colors['gray-200'],
    ['primary-300']: defaultTheme.colors['gray-300'],
    ['primary-400']: defaultTheme.colors['gray-400'],
    ['primary-500']: defaultTheme.colors['gray-500'],
    ['primary-600']: defaultTheme.colors['gray-600'],
    ['primary-700']: defaultTheme.colors['gray-700'],
    ['primary-800']: defaultTheme.colors['gray-800'],
    ['primary-900']: defaultTheme.colors['gray-900'],

    modes: {
      dark: {
        background: th.color('gray-800'),
      },
    },
  },
};

interface StyledProviderProps {
  children: JSX.Element;
}

export const StyledProvider: React.FC<StyledProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
