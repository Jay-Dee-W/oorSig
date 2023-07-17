import React, { useRef } from 'react';
import styled, { x } from '@xstyled/emotion';
import { Typography } from '@oorsig/atoms';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AskAi } from './AskAi';
import { About } from './About';

const FeatureSectionAnimation: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'center start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.6]);
  return (
    <motion.div ref={ref} style={{ scale }}>
      {children}
    </motion.div>
  );
};

export const Features: React.FC = () => {
  return (
    <x.div bg="gray-400" pt="2rem" zIndex="1111" position="relative">
      <FeatureSectionAnimation>
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
            <Typography variant="h3" size="4xl" lineHeight="4xl" mb="1rem">
              See your GitHub data in a whole new way with our easy-to-use
              visualization tools
            </Typography>
            <Typography>
              Our website provides easy-to-use visualization tools that can help
              you uncover insights and trends in your GitHub data. With our
              tools, you can quickly and easily create graphs, charts, and other
              visualizations that can help you understand your data in a new
              way. Whether you&apos;re a developer, a manager, or a researcher,
              our visualization tools can help you make better decisions with
              your GitHub data
            </Typography>
          </ContainerTypography>
        </Container>
      </FeatureSectionAnimation>

      <FeatureSectionAnimation>
        <Container>
          <ContainerTypography>
            <Typography variant="h3" size="4xl" lineHeight="4xl" mb="1rem">
              Unify your GitHub data and track progress across multiple
              organizations.
            </Typography>
            <Typography>
              Our website can help you unify your GitHub data and track progress
              across multiple organizations. With our website, you can easily
              connect to multiple GitHub organizations and view all of your data
              in a single, unified view. This makes it easy to see the big
              picture and understand how your work is progressing across all of
              your organizations.
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
      </FeatureSectionAnimation>

      <FeatureSectionAnimation>
        <Container>
          {/* <ContainerImage> */}
          <AskAi />
          {/* </ContainerImage> */}
          <ContainerTypography>
            <Typography variant="h3" size="4xl" lineHeight="4xl" mb="1rem">
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
      </FeatureSectionAnimation>

      <FeatureSectionAnimation>
        <ContainerTransparent>
          <About />
          <ContainerTypography>
            <Typography variant="h3" size="4xl" lineHeight="4xl" mb="1rem">
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
      </FeatureSectionAnimation>
    </x.div>
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
`;

const Container = styled(x.div)`
  width: 100%;
  max-width: 1100px;
  background-color: gray-300;
  margin: auto;
  display: flex;
  border-radius: 0.6rem;
  align-items: center;
  margin-top: 2rem;
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
`;
