import { FC } from "react";
import { memo } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

interface LoaderProps {
  radius: number;
}

const Loader: FC<LoaderProps> = ({ radius }) => {
  return (
    <LoaderWrap className="loader--wrap">
      <ReactLoading
        type="spin"
        color="#A593E0"
        width={radius}
        height={radius}
      />
    </LoaderWrap>
  );
};

export default memo(Loader);
