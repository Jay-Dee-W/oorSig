import React from 'react';
import styled, { x } from '@xstyled/emotion';
import { Typography } from '@oorsig/atoms';
import { AboutVector } from './AboutVector';
import { ScrollScaleAnimation } from './ScrollScaleAnimation';
import { SectionContainer } from './SectionContainer';

export const About: React.FC = () => {
  return (
    <>
      <SectionContainer id="aboutUs">
        <ScrollScaleAnimation>
          <ContainerTransparent>
            <AboutVector />
            <ContainerTypography>
              <Typography variant="h3">
                Ask questions and get answers from your data with AI.
              </Typography>
              <Typography>
                We are excited to announce the integration of AI-powered data
                discovery on our website. With this new feature, you can now ask
                questions about your GitHub metrics and get answers in a simple
                and natural way
              </Typography>
            </ContainerTypography>
          </ContainerTransparent>
        </ScrollScaleAnimation>
      </SectionContainer>
    </>
  );
};

const ContainerTransparent = styled(x.div)`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  border-radius: 0.6rem;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 1150px) {
    width: 96%;
  }

  @media (max-width: 970px) {
    flex-direction: column;
  }
`;

const ContainerTypography = styled(x.div)`
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.6rem;
  flex: 1;

  h3 {
    font-size: 4xl;
    line-height: 4xl;
    margin-bottom: 1rem;
  }

  p {
    color: gray-text;
  }

  @media (max-width: 1150px) {
    h3 {
      font-size: 3xl;
      line-height: 3xl;
      margin-bottom: 1rem;
    }
  }
`;
