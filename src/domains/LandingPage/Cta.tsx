import styled, { x } from '@xstyled/emotion';
import React from 'react';
import { Button, Typography } from '@oorsig/atoms';

export const CTA: React.FC = () => {
  return (
    <>
      <Container>
        <div className="graphic"></div>
        <div>
          <Typography variant="h4">
            Start visualizing <br /> your information
          </Typography>
          <Typography>
            We are excited to announce the integration of AI-powered data
            discovery on our website. With this new feature, y
          </Typography>
          <Button>Yey login</Button>
        </div>
      </Container>
    </>
  );
};

const Container = styled(x.div)`
  width: 100%;
  max-width: 1100px;
  margin: auto;

  border-radius: 0.5rem;
  padding: 2rem;
  margin-top: 3rem;
  background-color: gray-300;
  display: flex;
  gap: 6;
  align-items: center;

  div {
    flex: 1;
  }

  div.graphic {
    height: 20rem;
    background-image: url('cta.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90%;
  }

  h4 {
    font-size: 4xl;
    line-height: 4xl;
  }

  p {
    margin-top: 0.5rem;
    color: gray-50;
    margin-bottom: 1rem;
  }
`;
