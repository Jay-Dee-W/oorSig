import React, { useState } from 'react';
import Link from 'next/link';
import styled, { x } from '@xstyled/emotion';
import { Logo } from '@oorsig/atoms';
import { RoutesInterface } from '.';

export const Navigation: React.FC<{ routes: RoutesInterface[] }> = ({
  routes,
}) => {
  const [open, setOpen] = useState(false);
  const menuToggle = () => setOpen(!open);

  return (
    <Nav className={open ? 'mobile-open' : ''}>
      <div className="logo-section">
        <Logo w="8rem" />
        <button onClick={menuToggle}>{open ? 'x' : '='}</button>
      </div>
      <ul onClick={menuToggle}>
        {routes.map(route => (
          <li key={route.href}>
            <Link className="nav-link" href={route.href}>
              {route.title}
            </Link>
          </li>
        ))}
      </ul>

      <button className="action-btn">Sign in</button>
    </Nav>
  );
};

const Nav = styled(x.nav)`
  padding: 0.3rem;
  border: 1;
  border-color: gray-200;
  width: 90%;
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

  .logo-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 970px) {
    ul {
      display: none;
    }
    .action-btn {
      display: none;
    }

    .logo-section {
      width: 100%;
      display: flex;

      button {
        display: block;
      }
    }

    &.mobile-open {
      flex-direction: column;
      padding: 3rem 1rem;
      background-color: #191919d2;
      width: 90%;
      border-radius: 1rem;

      .logo-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
          display: block;
          border-bottom: 1px solid white;
        }
      }

      .action-btn {
        display: block;
      }
    }
  }
`;
