import styled, { css } from "styled-components";
import { media } from "../../../styles/theme";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  /* min-height: 100vh; */
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 90%;
  width: 100%;
  padding: 1rem 0;
  align-items: center;
  gap: 2rem;
`;

export const PageWrapper = styled(Wrapper)``;

export const PageSection = styled(Section)`
  padding: 7rem 0;
  ${({ theme: { headerHeight } }) => css`
    padding-top: calc(${headerHeight} / 2 + 7rem);
  `}
`;
