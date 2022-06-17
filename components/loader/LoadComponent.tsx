import { FC, ReactNode } from "react";
import styled from "styled-components";
import { CIRCLE, RECT } from "../../constants";
import Loader from "./Loader";
import LoaderSvg from "./LoaderSvg";
interface Props {
  children: ReactNode;
  loaded: boolean;
  radius: number;
  type: "CIRCLE" | "RECT";
}

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  /* height: 100%; */
`;

const LoadComponent: FC<Props> = (props) => {
  const LoaderShape = () => {
    return (
      <LoaderWrapper>
        {props.type === CIRCLE && <Loader radius={props.radius} />}
        {props.type === RECT && <LoaderSvg />}
      </LoaderWrapper>
    );
  };
  return <>{props.loaded ? props.children : LoaderShape()}</>;
};

export default LoadComponent;
