import { createGlobalStyle } from '@xstyled/emotion';
import React from 'react';
import { th, defaultTheme, ThemeProvider, Preflight } from '@xstyled/emotion';

export const GlobalStyle = createGlobalStyle`
  :root, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  body {
    background-color: #1C1E1F;
    color: white
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
    ['gray-50']: '#A0A2A2',
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
    ['secondary-100']: '#FFF793',
    ['secondary-200']: '#FFF02D',
    ['secondary-300']: '#D1C412',
    ['secondary-400']: '#736A00',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  lineHeights: {
    xs: '1rem',
    sm: '1.25rem',
    base: '1.5rem',
    lg: '1.75rem',
    xl: '1.75rem',
    '2xl': '2rem',
    '3xl': '2.25rem',
    '4xl': '2.5rem',
    '5xl': '1',
    '6xl': '1',
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
