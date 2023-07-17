import styled, { x } from '@xstyled/emotion';
import React from 'react';
import { motion } from 'framer-motion';
import { Button, Logo, Typography } from '@oorsig/atoms';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <Container>
      <ContentsContainer>
        <div>
          <Logo w="50%" />
        </div>
        <div>
          <Typography variant="h5">Links</Typography>
          <ul>
            <li>
              <Link href="/">
                <Typography>Home</Typography>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Typography>About</Typography>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Typography>FAQ</Typography>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Typography variant="h5">Features</Typography>
          <ul>
            <li>
              <Link href="/#">
                <Typography>Visualization</Typography>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <Typography>Organizations</Typography>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <Typography>Ask AI</Typography>
              </Link>
            </li>
          </ul>
        </div>
        <x.div textAlign="right">
          <Button>Start process</Button>
        </x.div>
      </ContentsContainer>

      <x.div>
        <Typography textAlign="center">
          © Copyright - XStyled Emotion Template by @janvier
        </Typography>
      </x.div>
    </Container>
  );
};

const Container = styled(x.footer)`
  padding: 2rem;
  background-color: gray-900;
  margin-top: 2rem;

  h5 {
    font-size: 2xl;
    color: gray-50;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 3;
  }

  li {
    color: gray-50;

    &:hover {
      color: white;
    }
  }
`;

const ContentsContainer = styled(x.div)`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  padding-bottom: 2rem;
  border-bottom: 1px solid gray;
  margin-bottom: 2rem;

  div {
    flex: 1;
  }
`;
