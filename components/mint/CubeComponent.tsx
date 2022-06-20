import { useRef } from "react";
import styled, { css } from "styled-components";
import useBlockNumber from "../../hooks/useCurrentBlock";
import { theme } from "../../styles/theme";
import AutoHeightImage from "../common/AutoHeightImage";
import { mintingBlockCounter } from "../common/styles/keyframes";

interface CubeComponentProps {
  src: string;
  title: string;
  desc: string;
  highlight: boolean;
  cssBarName: string;
  blockNumber: number;
}
const CubeComponent = (props: CubeComponentProps) => {
  const blockNumberRef = useRef<HTMLDivElement | null>(null);
  useBlockNumber({
    blockNumberRef,
    blockNumber: props.blockNumber,
    cssBarName: "--minting--block--num",
  });
  return (
    <CubeContainer>
      <CubeImg>
        <AutoHeightImage src={props.src} />
      </CubeImg>
      <CubeDesc highlight={props.highlight}>
        <div
          style={{ fontSize: theme.fontSizes.fontxs, padding: "0.4rem 1rem" }}
        >
          {props.title}
        </div>
        {props.blockNumber === 0 && (
          <MintingBlockWrapper
            ref={blockNumberRef}
            blockNumber={90000000}
            isLoading={true}
          />
        )}
        {props.blockNumber !== 0 && (
          <MintingBlockWrapper
            ref={blockNumberRef}
            blockNumber={props.blockNumber}
          />
        )}
      </CubeDesc>
    </CubeContainer>
  );
};
export default CubeComponent;
const CubeContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;
  padding: 1.5rem 0;
`;
const CubeImg = styled.div`
  width: 4rem;
  height: 4rem;
`;
const CubeDesc = styled.div<{ highlight: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:nth-child(2) {
    ${({ highlight }) =>
      highlight &&
      css`
        text-shadow: -2px 0 #f5d061, 0 2px #f5d061, 2px 0 #f5d061,
          0 -2px #f5d061;
      `}
  }
`;

const MintingBlockWrapper = styled.div<{
  blockNumber: number;
  isLoading?: boolean;
}>`
  @property --minting--block--num {
    syntax: "<integer>";
    initial-value: 80090250;
    inherits: false;
  }
  @property --init--minting--block--num {
    syntax: "<integer>";
    initial-value: ${({ blockNumber }) => blockNumber};
    inherits: false;
  }

  animation: ${mintingBlockCounter} 3s alternate ease-out;
  counter-reset: num var(--minting--block--num);

  ::after {
    font-size: ${({ theme }) => theme.fontSizes.fontlg};
    content: counter(num);
    ${({ isLoading }) =>
      isLoading &&
      css`
        content: "Loading...";
      `}
  }
`;
