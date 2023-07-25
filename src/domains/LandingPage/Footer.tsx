import React, { useRef } from 'react';
import Link from 'next/link';
import styled, { x } from '@xstyled/emotion';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo, Typography } from '@oorsig/atoms';

export const Footer: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-500, -300, 0]
  );

  return (
    <Container ref={ref}>
      <motion.div className="content-container" style={{ translateY }}>
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
        <x.div textAlign="right"></x.div>
      </motion.div>

      <x.div>
        <Typography textAlign="center">
          © Copyright - GitStart | Oorsig
        </Typography>
      </x.div>
    </Container>
  );
};

const Container = styled(x.footer)`
  padding: 2rem;
  background-color: #00000084;
  overflow: hidden;

  .content-container {
    width: 100%;
    max-width: 1100px;
    margin: auto;
    display: flex;
    padding-bottom: 3rem;
    border-bottom: 1px solid gray;
    margin-bottom: 2rem;

    div {
      flex: 1;
    }
  }

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

  @media (max-width: 970px) {
    .content-container {
      flex-direction: column;
      gap: 8;
    }

    svg {
      max-width: 15rem;
    }
  }
`;
