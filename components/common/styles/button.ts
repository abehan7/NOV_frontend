import styled, { css } from "styled-components";

export const ConnectButton = styled.div`
  box-sizing: border-box;
  text-transform: capitalize;
  font-weight: 500;

  /* Auto layout */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 209px;
  height: 54px;

  background: rgba(203, 203, 203, 0.2);
  border: 1px solid rgba(42, 54, 59, 0.5);
  border-radius: 8px;
  /* Inside auto layout */
  order: 1;
  cursor: pointer;
`;
