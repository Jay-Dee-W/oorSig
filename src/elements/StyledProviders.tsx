import { createGlobalStyle } from '@xstyled/emotion';
import React from 'react';
import { th, defaultTheme, ThemeProvider, Preflight } from '@xstyled/emotion';

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
    background: th.color('gray-400'),
    brand: th.color('primary-200'),

    ['primary-100']: '#A1CDFF',
    ['primary-200']: '#007AFF',
    ['primary-300']: '#016ADC',
    ['primary-400']: '#0052AB',
    ['gray-100']: '#5B5B5B',
    ['gray-200']: '#44494B',
    ['gray-300']: '#2C2F30',
    ['gray-400']: '#1C1E1F',
    ['red-100']: '#F3D8DB',
    ['red-200']: '#EB5545',
    ['red-300']: '#DC3422',
    ['red-400']: '#7A282B',
    ['green-100']: '#8CFFBC',
    ['green-200']: '#27AE60',
    ['green-300']: '#219653',
    ['green-400']: '#106C37',
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
