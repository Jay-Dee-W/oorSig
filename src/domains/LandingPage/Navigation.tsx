import React from 'react';
import Link from 'next/link';
import styled, { x } from '@xstyled/emotion';
import { Logo, Typography } from '@oorsig/atoms';

export const Navigation: React.FC = () => {
  return (
    <Nav>
      <Logo w="8rem" />
      <ul>
        <li>
          <Link href="/">
            <Typography>Home</Typography>
          </Link>
        </li>
        <li>
          <Link href="#">Features</Link>
        </li>
        <li>
          <Link href="#">FAQ</Link>
        </li>
        <li>
          <Link href="#">Sign Up</Link>
        </li>
      </ul>

      <button>Sign in</button>
    </Nav>
  );
};

const Nav = styled(x.nav)`
  padding: 0.3rem;
  border: 1;
  border-color: gray-200;
  width: 100%;
  max-width: 50rem;
  display: flex;
  align-items: center;
  align-content: space-between;
  position: fixed;
  right: 0;
  left: 0;
  margin: auto;
  top: 1rem;
  border-radius: 4rem;
  z-index: 111111;

  background-color: #4444445a;
  backdrop-filter: blur(8px);

  svg {
    height: 2rem;
    margin-left: 0.4rem;
  }

  ul {
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: center;

    li {
      align-content: center;

      a {
        color: white;
        padding: 1rem 1.2rem;

        &:hover {
          background-color: red;
        }
      }
    }
  }

  button {
    background-color: green-100;
    height: 2.5rem;
    padding: 0 2rem;
    border-radius: 2rem;
  }
`;
