import Link from "next/link";
import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Section, Wrapper } from "../common/styles/page";
// import ConnectWalletBtn from "../common/ConnectWalletBtn";
import useScrolling from "../../hooks/useScroll";
import { cutWallet, throttle } from "../../utils/common";
import AutoHeightImage from "../common/AutoHeightImage";
// import CommonBtn from "../common/styles/button";
import { ConnectButton } from "../common/styles/button";
import { AiOutlineTwitter } from "react-icons/ai";
import Discord from "../../public/svg/discord.svg";
import { useAccount } from "../../contexts/AccountContext";
import { media, theme } from "../../styles/theme";
import Hamburger from "../header/Hamburger";
import NavMenu from "../header/NavMenu";
import { links } from "../../constants";
import { getNetworkType } from "caver-js";
interface INaveButton {
  name: string;
  href: string;
}
const NavButton = (props: INaveButton) => {
  return (
    <Link href={props.href} passHref>
      <div>{props.name}</div>
    </Link>
  );
};

// const links = {
//   twitter: "https://twitter.com/nov_letter_nft",
//   discord: "https://discord.gg/u2UQAPP6ds",
//   home: "https://nov-letter.com/",
//   contact: "https://nov-letter.com/contact",
// };

interface IHeaderContext {
  isOpen: boolean;
  toggle: () => void;
}

const HeaderContext = createContext<IHeaderContext | null>(null);
export const useHeader = () => useContext(HeaderContext);

const Header = () => {
  const getAccount = useAccount()?.getAccount;
  const account = useAccount()?.account;
  const disconnect = useAccount()?.disconnect;
  const getNetwork = useAccount()?.getNetwork;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const onClickLogo = () => (document.location.href = "/");
  const isScrollingDown = useScrolling("down");
  const onClickHamburger = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const updateSize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    const handleResize = throttle(updateSize, 100);
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!getNetwork) return;
    getNetwork();
  }, [getNetwork]);

  return (
    <HeaderContext.Provider value={{ isOpen, toggle: onClickHamburger }}>
      <HeaderSection isScrollingDown={isScrollingDown}>
        <Wrapper style={{ justifyContent: "space-between" }}>
          <Box onClick={onClickLogo}>
            <AutoHeightImage
              src="/images/logo.png"
              style={{ width: "400px", height: "400px" }}
            />
          </Box>
          <Navitation>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => window.open(links.HOME)}
            >
              Home
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => window.open(links.CONTACT)}
            >
              Contact
            </div>
            <Icon onClick={() => window.open(links.TWITTER)}>
              <AiOutlineTwitter className="icon__twitter" />
            </Icon>
            <Icon onClick={() => window.open(links.DISCORD)}>
              <Discord />
            </Icon>
          </Navitation>

          {/* <ConnectWalletBtn /> */}
          {!account ? (
            <ConnectButtonEl onClick={getAccount}>
              <div style={{ width: "1.7rem" }}>
                <AutoHeightImage src="/images/kaikas.png" />
              </div>
              <span>connect wallet</span>
            </ConnectButtonEl>
          ) : (
            <ConnectButtonEl onClick={disconnect}>
              {cutWallet(account)}
            </ConnectButtonEl>
          )}
          <Hamburger isOpen={isOpen} onClickHamburger={onClickHamburger} />
          <NavMenu isOpen={isOpen} />
        </Wrapper>
      </HeaderSection>
    </HeaderContext.Provider>
  );
};

export default Header;

const Box = styled.div`
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSizes.fontlg};
  cursor: pointer;
  width: 150px;
  /* transform: translateY(-5px); */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Navitation = styled.nav`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 6rem;
  font-weight: 500;

  > div {
    cursor: pointer;
  }

  .icon__twitter {
    font-size: 1.7rem;
  }

  ${media[1200]} {
    display: none;
  }
`;

const HeaderSection = styled(Section)<{ isScrollingDown: boolean }>`
  /* padding-top: 1rem; */
  font-family: ${({ theme }) => theme.fonts.header};
  color: ${({ theme }) => theme.colors.gray70};
  height: ${({ theme }) => theme.headerHeight};
  max-height: ${({ theme }) => theme.headerHeight};
  font-size: ${({ theme }) => theme.fontSizes.fontlg};
  .common__btn__container {
    font-size: ${({ theme }) => theme.fontSizes.fontsm};
  }
  ${media[1200]} {
    position: fixed;
    top: 0px;
    left: 0px;
  }
  width: 100%;
  z-index: 99;
  transition-property: background-color, padding;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 2rem; */
  color: ${({ theme }) => theme.colors.black};
`;

const ConnectButtonEl = styled(ConnectButton)`
  ${media[1200]} {
    display: none;
  }
`;
