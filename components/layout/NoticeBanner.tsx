import React, { FC } from "react";
import styled from "styled-components";

interface BannerProps {
  children: React.ReactNode;
}
const NoticeBanner: FC<BannerProps> = ({ children }) => {
  return <Section>{children}</Section>;
};

export default NoticeBanner;

export const Section = styled.div`
  font-family: ${({ theme }) => theme.fonts.header};
  color: ${({ theme }) => theme.colors.gray70};
  height: ${({ theme }) => theme.headerHeight};
  max-height: ${({ theme }) => theme.headerHeight};
  font-size: ${({ theme }) => theme.fontSizes.fontlg};
  background: ${({ theme }) => theme.colors.whiteAlpha600};
  display: flex;
  align-items: center;
  justify-content: center;
`;
