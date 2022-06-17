import { useState, useEffect, FC } from "react";
import styled from "styled-components";
import LoaderSvg from "./LoaderSvg";
import Loader from "./Loader";
const Image = styled.img``;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .loader--wrap {
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const CIRCLE = "CIRCLE";
const RECT = "RECT";
interface Props {
  src: string;
  radius: number;
  type: "CIRCLE" | "RECT";
}

export const FallbackLoader: FC<Props> = ({ src, radius = 30, type }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const onLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) =>
    (e.currentTarget.src = src);

  const style: React.CSSProperties | undefined = {
    visibility: loaded ? "visible" : "hidden",
    borderRadius: "10px",
  };

  const LoaderShape = () => {
    return (
      <LoaderWrapper>
        {type === CIRCLE && <Loader radius={radius} />}
        {type === RECT && <LoaderSvg />}
      </LoaderWrapper>
    );
  };

  return (
    <Wrapper className="fallback--wrapper">
      {/* {!loaded && <LoaderSvg />} */}
      {!loaded && LoaderShape()}
      <Image
        alt="Loading"
        src={src}
        onLoad={onLoad}
        style={style}
        className="loader--image"
      />
    </Wrapper>
  );
};

export default FallbackLoader;
