import React from 'react';
import { createGlobalStyle } from '@xstyled/emotion';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { Features } from './Features';
import { FAQ } from './Faq';
import { CTA } from './Cta';
import { Footer } from './Footer';
import { About } from './About';

const GlobalStyle = createGlobalStyle`
  html {
   scroll-behavior: smooth;
  }
`;

export interface RoutesInterface {
  title: string;
  href: string;
}

const routes: RoutesInterface[] = [
  {
    title: 'Home',
    href: '#hero',
  },
  {
    title: 'Features',
    href: '#features',
  },
  {
    title: 'About',
    href: '#aboutUs',
  },
  {
    title: 'FAQ',
    href: '#faq',
  },
];

export const LandingPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation routes={routes} />
      <Hero />
      <Features />
      <FAQ />
      <About />
      <CTA />
      <Footer routes={routes} />
    </>
  );
};
