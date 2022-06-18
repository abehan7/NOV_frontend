import styled from "styled-components";

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
  /* justify-content: center; */
  gap: 2rem;
`;

export const PageWrapper = styled(Wrapper)``;

export const PageSection = styled(Section)`
  /* height: 100%; */
  /* flex: 1; */
  padding: 7rem 0;
`;
