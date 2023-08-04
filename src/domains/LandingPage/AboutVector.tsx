import React from 'react';
import styled, { x, useTheme, Theme } from '@xstyled/emotion';
import { motion } from 'framer-motion';

export const AboutVector: React.FC = () => {
  const theme: Theme = useTheme();

  return (
    <Container>
      <motion.div
        style={{
          borderColor: theme.colors['green-100'],
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: 'linear',
        }}
      >
        <motion.div
          style={{
            borderColor: theme.colors['secondary-100'],
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
        >
          <motion.div
            style={{
              borderColor: theme.colors['primary-100'],
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

const Container = styled(x.div)`
  padding: 2rem;
  margin: 0.5rem;
  border-radius: 0.6rem;
  flex: 1;
  height: 30rem;
  width: 30rem;
  background-image: url('/aboutLogo.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;

  div {
    border-top: 1px dashed #fff;
    border-bottom: 1px dashed #fff;
    border-radius: 50%;
    padding: 2rem;
    width: 100%;
    height: 100%;
    opacity: 70%;
  }
`;
