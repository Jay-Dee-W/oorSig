import React, { useRef } from 'react';
import styled, { x } from '@xstyled/emotion';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button, Typography } from '@oorsig/atoms';
import { CtaVector } from './CtaVector';

export const CTA: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'],
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-500, -200, 0]
  );

  const translateXContent = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [600, 200, 0]
  );
  return (
    <>
      <Container ref={ref}>
        <motion.div className="graphic" style={{ translateX: translateX }}>
          <CtaVector w="90%" />
        </motion.div>
        <motion.div style={{ translateX: translateXContent }}>
          <Typography variant="h4">
            Start visualizing <br /> your information
          </Typography>
          <Typography>
            We are excited to announce the integration of AI-powered data
            discovery on our website. With this new feature, y
          </Typography>
          <Button>Yey login</Button>
        </motion.div>
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
  overflow: hidden;

  div {
    flex: 1;
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
