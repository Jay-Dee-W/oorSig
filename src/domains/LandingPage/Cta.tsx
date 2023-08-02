import React from 'react';
import styled, { x } from '@xstyled/emotion';
import { motion } from 'framer-motion';
import { Typography } from '@atoms/index';
import { CtaVector } from './CtaVector';
import { SectionContainer } from './SectionContainer';
import { CtaButton } from './CtaButton';

export const CTA: React.FC = () => {
  return (
    <>
      <SectionContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Container>
            <motion.div
              className="graphic"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              // style={{ translateX: translateX }}
            >
              <CtaVector w="90%" />
            </motion.div>
            <motion.div
            // style={{ translateX: translateXContent }}
            >
              <Typography variant="h4">
                Start visualizing <br /> your information now
              </Typography>
              <Typography>
                Unleash data insights through interactive visualizations! Start
                now!
              </Typography>
              <CtaButton />
            </motion.div>
          </Container>{' '}
        </motion.div>
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
