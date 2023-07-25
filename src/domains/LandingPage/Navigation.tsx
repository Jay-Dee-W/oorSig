import React, { useState } from 'react';
import Link from 'next/link';
import styled, { x } from '@xstyled/emotion';
import { Logo } from '@oorsig/atoms';

export const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuToggle = () => setOpen(!open);

  return (
    <Nav className={open ? 'mobile-open' : ''}>
      <div className="logo-section">
        <Logo w="8rem" />
        <button onClick={menuToggle}>{open ? 'x' : '='}</button>
      </div>
      <ul>
        <li>
          <Link className="nav-link" href="/">
            Home
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
          background-color: primary-300;
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

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  .logo-section {
    button {
      display: none;
    }
  }

  @media (max-width: 970px) {
    ul {
      display: none;
    }
    /* height: 42rem; */
    &.mobile-open {
      flex-direction: column;
      padding: 3rem 1rem;
      background-color: #191919d2;
      width: 90%;
      border-radius: 1rem;

      .logo-section {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      & > button {
        display: none;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 2;
        margin: 2rem;
        width: 90%;
        text-align: left;
        font-size: xl;

        a {
          /* padding: 2rem 1rem; */
          display: block;
          /* background-color: red; */
          border-bottom: 1px solid white;
        }
      }
    }

    .logo-section {
      display: flex;

      button {
        display: block;
      }
    }
  }
`;
