import React from 'react';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { Features } from './Features';
import { FAQ } from './Faq';
import { CTA } from './Cta';
import { Footer } from './Footer';
import { SectionContainer } from './SectionContainer';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <SectionContainer>
        <Features />
        <FAQ />
        <CTA />
      </SectionContainer>
      <Footer />
    </>
  );
};
