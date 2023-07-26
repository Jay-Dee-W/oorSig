import React, { useRef } from 'react';
import styled, { x } from '@xstyled/emotion';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typography } from '@oorsig/atoms';
import { CtaVector } from './CtaVector';
import { SectionContainer } from './SectionContainer';
import { CtaButton } from './CtaButton';

export const CTA: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'],
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    [-500, -200, 0, 0]
  );

  const translateXContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    [600, 200, 0, 0]
  );
  return (
    <>
      <SectionContainer>
        <Container ref={ref}>
          <motion.div className="graphic" style={{ translateX: translateX }}>
            <CtaVector w="90%" />
          </motion.div>
          <motion.div style={{ translateX: translateXContent }}>
            <Typography variant="h4">
              Start visualizing <br /> your information now
            </Typography>
            <Typography>
              Unleash data insights through interactive visualizations! Start
              now!
            </Typography>
            <CtaButton />
          </motion.div>
        </Container>
      </SectionContainer>
    </>
  );
};

const Container = styled(x.div)`
  width: 92%;
  max-width: 1100px;
  margin: auto;
  border-radius: 0.5rem;
  padding: 2rem;
  margin-top: 3rem;
  margin-bottom: 4rem;
  background-color: gray-300;
  display: flex;
  gap: 6;
  align-items: center;
  overflow: hidden;

  @media (max-width: 970px) {
    flex-direction: column;
    width: 96%;
  }

  div {
    flex: 1;
  }

  h4 {
    font-size: 4xl;
    line-height: 4xl;
  }

  p {
    margin-top: 0.5rem;
    color: gray-text;
    margin-bottom: 1rem;
  }
`;
