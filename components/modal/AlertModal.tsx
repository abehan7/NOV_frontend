import React, { FC } from "react";
import styled, { css } from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import ErrorSvg from "../Icons/ErrorSvg";
import CheckSvg from "../Icons/CheckSvg";
import LoaderSvg from "../Icons/LoaderSvg";

const widthRatio = 800 / 350;
const heightRatio = 1;
const multiple = 140;

const Overlay = styled.div<{ isOpen: boolean }>`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  /* display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; */
  align-items: center;
  justify-content: center;
  font-family: "Montserrat";
`;

const Window = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(${widthRatio}px * ${multiple});
  height: calc(${heightRatio}px * ${multiple});
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  > div {
    width: 80%;
  }
`;
const Header = styled.div`
  font-weight: 800;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.fontmd};
  /* transform: translateY(10px); */
`;

const Body = styled.div`
  font-size: ${(props) => props.theme.fontSizes.fontmd};

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const Btn = styled.div<{ isDark: boolean }>`
  cursor: pointer;
  border-radius: 0.7rem;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  font-weight: 500;
  ${({ isDark }) =>
    isDark
      ? css`
          background-color: #000;
          color: #fff;
        `
      : css`
          background-color: #fff;
          color: #000;
          font-weight: 300;
        `};
`;

const InputStatus = styled.div`
  display: flex;
  width: 100%;

  padding: 0.35rem;
  background: ${(props) => props.theme.colors.black};
  border-radius: 5px;

  box-sizing: border-box;

  border: 2.5px solid #000000;
  box-shadow: 2px 2px 1px #000000;
  border-radius: 2px;
  input {
    width: 100%;
    border: none;
    background: transparent;
    height: 100%;
    :focus {
      outline: none;
    }
  }
`;
const IconWrapper = styled.div`
  width: fit-content !important;
  margin: 0.81rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.5em;
  cursor: pointer;
`;

interface Props {
  isOpen: boolean;
}

const AlertModal: FC<Props> = (props) => {
  const onClickMint = () => {};
  const onClickClose = () => {};

  const LoadingComponent = () => {
    return (
      <>
        <Header>ON PROGRESS</Header>
        <Body style={{ paddingTop: "1rem" }}>
          <LoaderSvg />
        </Body>
      </>
    );
  };

  const SuccessComponent = () => {
    return (
      <>
        <Header>Successfully done!</Header>
        <IconWrapper onClick={onClickClose}>
          <IoCloseOutline />
        </IconWrapper>
        <Body>
          <CheckSvg />
        </Body>
        <Footer></Footer>
      </>
    );
  };

  const ErrorComponent = () => {
    return (
      <>
        <Header style={{ color: "red" }}>Error</Header>
        <IconWrapper onClick={onClickClose}>
          <IoCloseOutline />
        </IconWrapper>
        <Body>
          <ErrorSvg />
        </Body>
        <Footer>something went wrong</Footer>
      </>
    );
  };
  return (
    <Overlay isOpen={props.isOpen}>
      <Window>
        <Header>Confirm your GMS purchase</Header>
        <Body></Body>
        <Footer>
          <Btn onClick={onClickMint} isDark={true}>
            CHANGE
          </Btn>
          <Btn onClick={onClickClose} isDark={false}>
            Close
          </Btn>
        </Footer>
      </Window>
    </Overlay>
  );
};

export default AlertModal;
