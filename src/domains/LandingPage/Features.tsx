import React from 'react';
import Image from 'next/image';
import styled, { x } from '@xstyled/emotion';
import { Typography } from '@atoms/index';
import { ScrollScaleAnimation } from './ScrollScaleAnimation';
import { AskAi } from './AskAi';
import { SectionContainer } from './SectionContainer';

export const Features: React.FC = () => {
  return (
    <>
      <SectionContainer id="features">
        <ScrollScaleAnimation>
          <Container>
            <ContainerImage>
              <Image
                src="/GraphImage.png"
                width={500}
                height={400}
                alt="Chart graphs"
              />
            </ContainerImage>
            <ContainerTypography>
              <Typography variant="h3">
                See your GitHub data in a whole new way with our easy-to-use
                visualization tools
              </Typography>
              <Typography>
                Our website provides easy-to-use visualization tools that can
                help you uncover insights and trends in your GitHub data. With
                our tools, you can quickly and easily create graphs, charts, and
                other visualizations that can help you understand your data in a
                new way. Whether you&apos;re a developer, a manager, or a
                researcher, our visualization tools can help you make better
                decisions with your GitHub data
              </Typography>
            </ContainerTypography>
          </Container>
        </ScrollScaleAnimation>

        <ScrollScaleAnimation>
          <Container>
            <ContainerTypography>
              <Typography variant="h3">
                Unify your GitHub data and track progress across multiple
                organizations.
              </Typography>
              <Typography>
                Our website can help you unify your GitHub data and track
                progress across multiple organizations. With our website, you
                can easily connect to multiple GitHub organizations and view all
                of your data in a single, unified view. This makes it easy to
                see the big picture and understand how your work is progressing
                across all of your organizations.
              </Typography>
            </ContainerTypography>
            <ContainerImage textAlign="center">
              <Image
                src="/SelectOrganization.png"
                width={400}
                height={400}
                alt="Chart graphs"
              />
            </ContainerImage>
          </Container>
        </ScrollScaleAnimation>

        <ScrollScaleAnimation>
          <Container>
            <AskAi />
            <ContainerTypography>
              <Typography variant="h3">
                Ask questions and get answers from your data with AI.
              </Typography>
              <Typography>
                We are excited to announce the integration of AI-powered data
                discovery on our website. With this new feature, you can now ask
                questions about your GitHub metrics and get answers in a simple
                and natural way.
              </Typography>
            </ContainerTypography>
          </Container>
        </ScrollScaleAnimation>
      </SectionContainer>
    </>
  );
};

const Container = styled(x.div)`
  width: 100%;
  max-width: 1100px;
  background-color: gray-300;
  margin: auto;
  display: flex;
  border-radius: 0.6rem;
  align-items: center;
  margin-top: 2rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1150px) {
    width: 96%;
  }

  @media (max-width: 970px) {
    flex-direction: column;
  }
`;

const ContainerImage = styled(x.div)`
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.6rem;
  flex: 1;
  background-color: gray-400;
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
