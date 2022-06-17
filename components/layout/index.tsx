import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Section = styled.section`
  /* width: 100vw; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Section>
      <Header />
      {children}
      {/* <Footer /> */}
    </Section>
  );
};

export default Layout;
