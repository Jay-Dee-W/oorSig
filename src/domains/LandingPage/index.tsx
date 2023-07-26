import React from 'react';
import { createGlobalStyle } from '@xstyled/emotion';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { Features } from './Features';
import { FAQ } from './Faq';
import { CTA } from './Cta';
import { Footer } from './Footer';

const GlobalStyle = createGlobalStyle`
  html {
   scroll-behavior: smooth;
  }
`;

export const LandingPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Hero />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};
