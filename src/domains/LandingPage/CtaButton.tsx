import React from 'react';
import styled, { x } from '@xstyled/emotion';

export const CtaButton = () => {
  return <CtaBtn>Get Started</CtaBtn>;
};

export const SignInButton = () => {
  return <SignInBtn>Sign in</SignInBtn>;
};

const CtaBtn = styled(x.button)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: primary-200;
  border-radius: 0.4rem;
  color: #fff;
`;

const SignInBtn = styled(x.button)`
  background-color: green-100;
  border-radius: 2rem;
  height: 2.5rem;
  padding: 0 2rem;
  outline: none;
  outline-offset: none;
`;
