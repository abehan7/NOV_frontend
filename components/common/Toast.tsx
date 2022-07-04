import React, { FC } from "react";
import styled from "styled-components";
import { Section } from "../layout/NoticeBanner";

interface ToastProps {
  children: React.ReactNode;
}
const Toast: FC<ToastProps> = ({ children }) => {
  return <SectionEl>{children}</SectionEl>;
};

export default Toast;

const SectionEl = styled(Section)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: ${({ theme }) => theme.colors.whiteAlpha800};
`;
