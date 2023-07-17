import React from 'react';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { Features } from './Features';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
    </>
  );
};
