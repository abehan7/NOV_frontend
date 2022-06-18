import Link from "next/link";
import React, { useEffect, useState } from "react";
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
import { theme } from "../../styles/theme";
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

const links = {
  twitter: "https://twitter.com/nov_letter_nft",
  discord: "https://discord.gg/u2UQAPP6ds",
  home: "",
  contact: "https://nov-letter.com/contact",
};

const Header = () => {
  const getAccount = useAccount()?.getAccount;
  const account = useAccount()?.account;
  const disconnect = useAccount()?.disconnect;

  const onClickLogo = () => (document.location.href = "/");
  const isScrollingDown = useScrolling("down");
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  return (
    <HeaderSection isScrollingDown={isScrollingDown}>
      <Wrapper style={{ justifyContent: "space-between" }}>
        <Box onClick={onClickLogo}>
          <AutoHeightImage
            src="/images/logo.png"
            style={{ width: "400px", height: "400px" }}
          />
        </Box>
        <Navitation>
          <NavButton name="Home" href="/#Home" />
          {/* <NavButton name="Contact" href="/#Contact" /> */}
          <div
            style={{ cursor: "pointer" }}
            onClick={() => window.open(links.contact)}
          >
            Contact
          </div>
          <Icon onClick={() => window.open(links.twitter)}>
            <AiOutlineTwitter className="icon__twitter" />
          </Icon>
          <Icon onClick={() => window.open(links.discord)}>
            <Discord />
          </Icon>
        </Navitation>

        {/* <ConnectWalletBtn /> */}
        {!account ? (
          <ConnectButton onClick={getAccount}>
            <div style={{ width: "1.7rem" }}>
              <AutoHeightImage src="/images/kaikas.png" />
            </div>
            <span>connect wallet</span>
          </ConnectButton>
        ) : (
          <ConnectButton onClick={disconnect}>
            {cutWallet(account)}
          </ConnectButton>
        )}
      </Wrapper>
    </HeaderSection>
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
  /* position: fixed; */
  /* top: 0px; */
  /* left: 0px; */
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
