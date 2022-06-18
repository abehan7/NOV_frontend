import Link from "next/link";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { useAccount } from "../../contexts/AccountContext";
// import { cutAccount } from "../hooks";
import { media } from "../../styles/theme";
import { useHeader } from "../layout/Header";
import { ConnectButton2 } from "../common/styles/button";
import { cutWallet } from "../../utils/common";

interface NavMenuProps {
  isOpen: boolean;
}

const NavMenu: FC<NavMenuProps> = ({ isOpen }) => {
  const getAccount = useAccount()?.getAccount;
  const account = useAccount()?.account;
  return (
    <NavMenuEl className="nav__menu show-menu" id="nav-menu" isOpen={isOpen}>
      <ul className="nav__list">
        <NavBtn href="/">Home</NavBtn>
        <NavBtn href="/#performance">Contact</NavBtn>
        <NavBtn href="/#roadmap">twitter</NavBtn>
        <NavBtn href="/#nft">discord</NavBtn>
        {account ? (
          <ConnectButton2 style={{ cursor: "default" }}>
            {cutWallet(account)}
          </ConnectButton2>
        ) : (
          <ConnectButton2 onClick={getAccount}>Connect Wallet</ConnectButton2>
        )}
      </ul>
      <div className="nav__close" id="nav-close">
        <i className="bx bx-x"></i>
      </div>
    </NavMenuEl>
  );
};

export default NavMenu;

interface NavBtnProps {
  href: string;
  children: ReactNode;
}

const NavBtn: FC<NavBtnProps> = ({ href, children }) => {
  const toggle = useHeader()?.toggle;
  return (
    <li className="nav__item" onClick={toggle}>
      <Link href={href}>
        <a className="nav__link"> {children}</a>
      </Link>
    </li>
  );
};

const NavMenuEl = styled.div<{ isOpen: boolean }>`
  display: none;
  ${media[1200]} {
    display: block;
  }
  position: fixed;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  top: ${({ isOpen }) => (isOpen ? "0" : "-150%")};
  left: 0;
  padding: 3.5rem 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  z-index: 100;
  border-radius: 0 0 1.5rem 1.5rem;

  .nav__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 1.5rem;
    row-gap: 1.5rem;
    justify-content: center;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .nav__link {
    text-transform: uppercase;
    font-weight: 900;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .active-link {
    position: relative;
  }

  .button {
    cursor: pointer;
    display: inline-block;
    background-color: #f4511f;
    color: #fff;
    color: var(--title-color);
    padding: 1rem 1.75rem;
    border-radius: 0.5rem;
    font-weight: 500;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  .button.isConnected {
    cursor: default;
  }

  .button--ghost {
    border: 2px solid;
    background: transparent;
    border-radius: 3rem;
    padding: 0.75rem 1.5rem;
  }
`;
