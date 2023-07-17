import React from 'react';
import styled, { x } from '@xstyled/emotion';
import { Typography } from '@oorsig/atoms';

export const Features: React.FC = () => {
  return (
    <FaqContainer>
      <Typography>FAQ</Typography>
    </FaqContainer>
  );
};

const FaqContainer = styled(x.div)`
  background-color: gray-100;
`;
