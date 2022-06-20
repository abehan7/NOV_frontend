import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";
import { useAccount } from "../../contexts/AccountContext";
import Footer from "./Footer";
import Header from "./Header";
import NoticeBanner from "./NoticeBanner";
import { NETWORKS } from "../../constants";

interface LayoutProps {
  children: ReactNode;
}

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const isTestnet = router.pathname === "/testnet";
  const network = useAccount()?.network;
  // const

  const HomeBannerComponent = () => {
    if (network !== NETWORKS.MAIN_NET)
      return <NoticeBanner>🛑메인 네트워크에 연결해주세요</NoticeBanner>;
  };
  const TestnetBannerComponent = () => {
    if (network !== NETWORKS.TEST_NET)
      return (
        <NoticeBanner>🛑Baobab 테스트 네트워크에 연결해주세요</NoticeBanner>
      );
  };

  return (
    <Section>
      <Header />
      {isHome && HomeBannerComponent()}
      {isTestnet && TestnetBannerComponent()}
      {children}
      {/* <Footer /> */}
    </Section>
  );
};

export default Layout;
