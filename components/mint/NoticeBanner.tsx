import React from "react";
import styled from "styled-components";
import { Section as Section_ } from "../common/styles/page";

const NoticeBanner = () => {
  return <Section></Section>;
};

export default NoticeBanner;

const Section = styled(Section_)`
  position: fixed;
  background: ${({ theme: { colors } }) => colors.primary};
`;
