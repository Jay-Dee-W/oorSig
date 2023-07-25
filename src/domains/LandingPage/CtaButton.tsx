import React from 'react';
import styled, { x } from '@xstyled/emotion';

export const CtaButton = () => {
  return <Button>Get Started</Button>;
};

const Button = styled(x.button)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: primary-200;
  border-radius: 0.4rem;
  color: #fff;
`;
