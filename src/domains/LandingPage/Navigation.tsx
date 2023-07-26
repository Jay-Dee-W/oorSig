import React, { useState } from 'react';
import Link from 'next/link';
import styled, { x } from '@xstyled/emotion';
import { Logo } from '@oorsig/atoms';
import { RoutesInterface } from '.';

const CloseIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.6291 3.045C23.271 2.40315 23.271 1.3625 22.6291 0.720647C21.9873 0.0787948 20.9466 0.0787948 20.3048 0.720647L11.6055 9.41986L2.90633 0.720647C2.26447 0.0787948 1.22383 0.0787948 0.581975 0.720647C-0.0598771 1.3625 -0.0598771 2.40315 0.581975 3.045L9.28119 11.7442L0.581975 20.4434C-0.0598771 21.0853 -0.0598771 22.1259 0.581975 22.7678C1.22383 23.4096 2.26447 23.4096 2.90633 22.7678L11.6055 14.0686L20.3048 22.7678C20.9466 23.4096 21.9873 23.4096 22.6291 22.7678C23.271 22.1259 23.271 21.0853 22.6291 20.4434L13.9299 11.7442L22.6291 3.045Z"
      fill="white"
    />
  </svg>
);

const BurgerIcon = (
  <svg
    width="35"
    height="25"
    viewBox="0 0 35 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.00195312 2.54816C0.00195312 1.59551 0.774226 0.823242 1.72687 0.823242H32.7754C33.7281 0.823242 34.5003 1.59551 34.5003 2.54816C34.5003 3.50081 33.7281 4.27308 32.7754 4.27308H1.72687C0.774226 4.27308 0.00195312 3.50081 0.00195312 2.54816ZM0.00195312 12.8976C0.00195312 11.945 0.774226 11.1727 1.72687 11.1727H32.7754C33.7281 11.1727 34.5003 11.945 34.5003 12.8976C34.5003 13.8503 33.7281 14.6226 32.7754 14.6226H1.72687C0.774226 14.6226 0.00195312 13.8503 0.00195312 12.8976ZM1.72687 21.5223C0.774226 21.5223 0.00195312 22.2946 0.00195312 23.2473C0.00195312 24.1999 0.774226 24.9722 1.72687 24.9722H32.7754C33.7281 24.9722 34.5003 24.1999 34.5003 23.2473C34.5003 22.2946 33.7281 21.5223 32.7754 21.5223H1.72687Z"
      fill="white"
    />
  </svg>
);

export const Navigation: React.FC<{ routes: RoutesInterface[] }> = ({
  routes,
}) => {
  const [open, setOpen] = useState(false);
  const menuToggle = () => setOpen(!open);

  return (
    <>
      <Nav className={open ? 'mobile-open' : ''}>
        <div className="logo-section">
          <Logo w="8rem" />
          <button onClick={menuToggle}>{open ? CloseIcon : BurgerIcon}</button>
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
    </>
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
    height: 2.5rem;
    padding: 0 2rem;
    background-color: transparent;
    outline: non;
    outline-offset: none;
  }

  .action-btn {
    background-color: green-100;
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
