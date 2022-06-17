import styled, { css } from "styled-components";

// export const ButtonRatio = 0.3;
export const Container = styled.div<{ toastOn: boolean }>`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${({ toastOn }) =>
    toastOn &&
    css`
      .toast__icon__status {
        transition: all 0.3s ease-in-out;
        pointer-events: none;
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.gray1};

        svg {
          path {
            fill: ${(props) => props.theme.colors.gray1} !important;
          }
        }
      }
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled(Wrapper)`
  flex-direction: column;
  > div:nth-child(1) {
    .input__title__icon {
      visibility: hidden;
    }
  }
`;

export const MemberWrapper = styled(Wrapper)`
  padding-top: 1rem;
`;

export const Box = styled.div`
  width: 10rem;
  gap: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  .input__status {
    flex-direction: column;
  }
`;
export const Title = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const InputTitle = styled(Title)`
  padding-left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.51rem;
  .input__title__icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;

  padding: 0.35rem;
  background: ${(props) => props.theme.colors.white};
  border-radius: 5px;

  box-sizing: border-box;

  border: 2.5px solid #000000;
  box-shadow: 2.5px 2.5px 1px #000000;
  border-radius: 2px;

  > div,
  > span {
    flex: 1;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span:nth-child(1) {
    padding-right: 1rem;
  }
`;

export const WithdrawBtn = styled(Status)`
  /* height: 46px; */
  height: 2.8rem;
  cursor: pointer;
  justify-content: center;
  font-weight: 700;
  :active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 1px #000000;
  }
`;

export const InputStatus = styled.div`
  display: flex;
  width: 49rem;

  padding: 0.35rem;
  background: ${(props) => props.theme.colors.white};
  border-radius: 5px;

  box-sizing: border-box;

  border: 2.5px solid #000000;
  box-shadow: 2.5px 2.5px 1px #000000;
  border-radius: 2px;
  cursor: pointer;
  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const MemberContainer = styled.div`
  display: flex;
  width: 49rem;

  padding: 0.5rem 0.35rem;

  background: ${(props) => props.theme.colors.white};
  border-radius: 5px;

  box-sizing: border-box;

  border: 2.5px solid #000000;
  box-shadow: 2.5px 2.5px 1px #000000;
  border-radius: 2px;
  flex-direction: column;
  gap: 1rem;

  font-weight: 500;
`;

export const Toggle = styled.div<{ status: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    height: 30px;
    path:nth-child(1) {
      transition: 200ms ease-in-out;
      ${({ status }) =>
        status
          ? css`
              transform: translate(0px, 0);
              fill: #f1bc68;
            `
          : css`
              transform: translate(-20px, 0);
            `}
    }
    path:nth-child(2) {
      transition: 200ms ease-in-out;
      ${({ status }) =>
        status &&
        css`
          fill: #f1bc68;
        `}
    }
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
export const Stat = styled.div`
  box-sizing: border-box;
  width: 15rem;
  /* height: 150px; */
  height: 10rem;
  background: #ffffff;
  box-sizing: border-box;
  border: 2.5px solid #000000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
export const Icon = styled.div`
  svg {
    padding: 0.5rem;
    padding-bottom: 0;
    width: 30px;
    height: 30px;
  }
`;

export const Number = styled.div`
  display: flex;

  align-items: flex-end;
  justify-content: center;
  flex: 1;
  /* padding: 1rem; */
  .item1 {
    font-size: 3.5rem;
    font-weight: 700;
  }
  .item2 {
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    color: ${(props) => props.theme.colors["w-gray1"]};
    font-weight: 400;
    /* align-self: flex-end; */
  }
`;

export const StatTitle = styled.div`
  font-weight: 600;
  /* color: ${(props) => props.theme.colors.gray1}; */
  color: ${(props) => props.theme.colors["w-gray1"]};

  font-size: 1.3rem;
  display: flex;
  /* align-items: flex-start; */
  justify-content: flex-start;
  padding: 0.5rem;
  /* padding-top: 0; */
`;

export const MemberItem = styled.div`
  display: flex;
  position: relative;

  gap: 1rem;
  .member:nth-child(1) {
    font-weight: 600;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    cursor: pointer;
    right: 0;
    top: 0;
    transform: translateY(-20%);
    position: absolute;
    width: 25px;
    height: 25px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
  .wallet {
    cursor: pointer;
  }
`;
