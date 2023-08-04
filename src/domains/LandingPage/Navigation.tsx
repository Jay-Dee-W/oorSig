import React, { useState } from 'react';
import Link from 'next/link';
import styled, { x } from '@xstyled/emotion';
import { MdClose, MdMenu } from 'react-icons/md';
import { Logo } from '@atoms/index';
import { RoutesInterface } from '.';
import { SignInButton } from './CtaButton';

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
          <x.button className="nav-toggle-btn" onClick={menuToggle}>
            {open ? <MdClose /> : <MdMenu />}
          </x.button>
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

        <SignInButton />
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

  .nav-toggle-btn {
    background-color: transparent;
  }

  .nav-toggle-btn {
    color: white;
    font-size: 3xl;
    outline: none;
    border-radius: 2rem;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: gray-100;
    }
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

    .sign-in-button {
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

      .sign-in-button {
        display: block;
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
          border-bottom: 1px solid;
          border-color: gray-100;
        }
      }

      .action-btn {
        display: block;
      }
    }
  }
`;
