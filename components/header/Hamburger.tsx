import { FC } from "react";
import styled from "styled-components";
import { media } from "../../styles/theme";

interface HamburgerProps {
  isOpen: boolean;
  onClickHamburger: () => void;
}

const Hamburger: FC<HamburgerProps> = ({ isOpen, onClickHamburger }) => {
  return (
    <HamburgerWrapper>
      <Hamberger onClick={onClickHamburger} className={isOpen ? "open" : ""}>
        <HambergerStick />
      </Hamberger>
    </HamburgerWrapper>
  );
};

export default Hamburger;

const Hamberger = styled.div``;
const HambergerStick = styled.div``;

const HamburgerWrapper = styled.div`
  z-index: 101;

  display: none;
  padding-right: 1rem;
  ${media[1200]} {
    display: flex;
  }
  ${Hamberger} {
    /* opacity: 0.5; */
    cursor: pointer;
    transition: opacity 0.25s linear;
    width: clamp(1.5rem, 2vw + 1.1rem, 6rem);
    height: clamp(2rem, 1.4vw + 1.7rem, 5rem);
    display: flex;
    align-items: center;
  }
  ${Hamberger}:hover {
    /* opacity: 1; */
  }
  ${Hamberger} div,
  ${Hamberger} div:after,
  ${Hamberger} div:before {
    background-color: ${({ theme }) => theme.colors.gray70};
    border-radius: 10px;
    width: clamp(1.5rem, 2vw + 1.1rem, 6rem);
    height: clamp(0.2rem, 0.3vw + 0.1rem, 0.8rem);
    transition: all 0.15s linear;
  }

  ${Hamberger} div:before,
  ${Hamberger} div:after {
    content: "";
    position: absolute;
  }

  ${Hamberger} div:before {
    transform: translateY(-200%);
  }

  ${Hamberger} div:after {
    transform: translateY(200%);
  }

  ${Hamberger}.open div {
    background: transparent;
  }

  ${Hamberger}.open div:before {
    transform: rotate(45deg);
  }

  ${Hamberger}.open div:after {
    transform: rotate(-45deg);
  }
`;
