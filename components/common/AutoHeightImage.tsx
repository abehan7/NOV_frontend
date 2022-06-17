// AutoHeightImage.tsx

import React, { memo, useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";
// import equal from "fast-deep-equal";
import styled, { keyframes } from "styled-components";
import { flash } from "./styles/keyframes";

const AutoHeightImage = ({ ...props }: ImageProps): React.ReactElement => {
  return (
    <AutoHeightImageWrapper className="autoImage__wrapper">
      <Image layout="fill" className="autoImage" {...props} alt="img" />
    </AutoHeightImageWrapper>
  );
};

export default AutoHeightImage;

const AutoHeightImageWrapper = styled.div`
  width: 100%;
  & > span {
    position: unset !important;
    animation: ${flash} 1.6s linear;

    & .autoImage {
      object-fit: cover !important;
      position: relative !important;
      height: auto !important;
      animation: ${flash} 1.6s linear;
    }
  }
  img {
    animation: ${flash} 1.6s linear;
  }
`;
