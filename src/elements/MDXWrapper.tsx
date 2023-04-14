import React from 'react';
import styled, { x } from '@xstyled/emotion';

interface Props {
  children?: React.ReactNode;
}

const Wrapper = styled(x.div)`
  font-size: 1rem;
  padding: 1.5rem;
  background-color: #fff;
  min-height: 100vh;
  > p,
  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6,
  > div {
    margin: 1rem 0;
  }
  > p {
    margin: 0 0 0.5rem 0;
    font-weight: normal;
  }
  p {
    code {
      color: #24292f;
      border-radius: 0.4rem;
      background-color: #f6f8fa;
      padding: 0.2rem 0.4rem;
    }
  }
  > h1 {
    font-size: 2.5rem;
  }
  > h2 {
    font-size: 1.5rem;
  }
  > h3 {
    font-size: 1.2rem;
  }
  button {
    margin: 0 0.2rem;
  }
  pre {
    padding: 0.75rem;
    margin: 1.5rem 0;
    border-radius: 0.5rem;
    background-color: #f6f8fa;
    overflow: auto;
    code {
      color: #24292f;
      .function,
      .operator {
        color: #cf222e;
      }
      .punctuation {
        color: #24292f;
      }
      .string {
        color: #0a3069;
      }
      .variable {
        color: #116329;
      }
    }
  }
`;

// This wrapper can be used to wrap mdx file contents to add styling as xsytled assumes no styling
// to any component
export const MDXWrapper = ({ children }: Props) => (
  <Wrapper>{children}</Wrapper>
);
