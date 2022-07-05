import React, { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

interface ToastProps {
  children: React.ReactNode;
  handleClose: () => void;
}
const Toast: FC<ToastProps> = ({ children, handleClose }) => {
  return (
    <Section
      initial={{ top: "-100px" }}
      animate={{ top: "0px" }}
      exit={{ top: "-100px" }}
    >
      {children}
      <div className="toast__back" onClick={handleClose}>
        <AiOutlineCloseCircle />
      </div>
    </Section>
  );
};

export default Toast;

const Section = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.header};
  color: ${({ theme }) => theme.colors.gray70};
  height: ${({ theme }) => theme.headerHeight};
  max-height: ${({ theme }) => theme.headerHeight};
  font-size: ${({ theme }) => theme.fontSizes.fontlg};
  /* background: ${({ theme }) => theme.colors.whiteAlpha600}; */
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: ${({ theme }) => theme.colors.whiteAlpha800};
  .toast__back {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
    font-size: ${({ theme }) => theme.fontSizes.font2xl};
    cursor: pointer;
  }
`;
