import React, { useRef } from 'react';
import Link from 'next/link';
import styled, { x } from '@xstyled/emotion';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo, Typography } from '@atoms/index';
import { RoutesInterface } from '.';

export const Footer: React.FC<{ routes: RoutesInterface[] }> = ({ routes }) => {
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
          <Typography variant="h5">Navigation</Typography>
          <ul>
            {routes.map(route => (
              <li key={route.href}>
                <Link href={route.href}>{route.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Typography variant="h5">Others links</Typography>
          <ul>
            <li>
              <Link href="https://gitstart.com" target="_blank" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  GitStart
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/GitStart" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  GitStart (Twitter)
                </a>
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

    a {
      color: #fff;
      display: block;

      &:hover {
        text-decoration: underline;
      }
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

    a {
      padding: 0.5rem 0;
    }
  }
`;
