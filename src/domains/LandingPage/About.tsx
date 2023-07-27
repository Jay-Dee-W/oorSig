import React from 'react';
import styled, { x } from '@xstyled/emotion';
import { Typography } from '@atoms/index';
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
              <Typography variant="h3">About Oorsig.</Typography>
              <Typography>
                Oorsig is an innovative and powerful platform designed to
                revolutionize GitHub data visualization and performance
                monitoring. <br />
                <br />
                It offers developers and project managers a comprehensive
                solution to access, analyze, and understand their GitHub data in
                a whole new way.
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
