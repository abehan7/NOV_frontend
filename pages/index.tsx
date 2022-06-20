import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import AutoHeightImage from "../components/common/AutoHeightImage";
import { mintingBlockCounter } from "../components/common/styles/keyframes";
import { PageSection, Wrapper } from "../components/common/styles/page";
import { useAccount } from "../contexts/AccountContext";
import { useCaver } from "../hooks/useCaver";
import useBlockNumber from "../hooks/useCurrentBlock";
import useProgressBar from "../hooks/useProgressBar";
import { media, theme } from "../styles/theme";
// import {Title}

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
  // const [blockNumber, setBlockNumber] = useState(400000);
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
const Home: NextPage = () => {
  const getAccount = useAccount()?.getAccount;
  const { publicMint, getCurrentBlock } = useCaver();
  const [percent, setPercent] = useState<number>(0);
  const [currentBlock, setCurrentBlock] = useState<number>(89090290);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  useProgressBar({ progressBarRef, percent });

  // useBlockNumber({ blockNumberRef, currentBlock });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (percent >= 100) setPercent(100);
      if (percent < 100) setPercent(percent + 10);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const init = async () => {
      setCurrentBlock(await getCurrentBlock());
      // console.log(block);
    };
    init();
  }, []);

  useEffect(() => {
    // if (currentBlock !== 0) return;
    const timer = setInterval(async () => {
      setCurrentBlock(await getCurrentBlock());
      // console.log("currentBlock:", currentBlock);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [currentBlock]);

  return (
    // <>
    <SectionEl>
      <WrapperEl>
        {/* left */}
        <Container className="item1">
          <TitleContainer>
            <Title fontSize={theme.fontSizes.font3xl}>WELCOME! I’M NOV.</Title>
          </TitleContainer>
          <div className="hero__img">
            <AutoHeightImage src="/images/hero_resized.png" />
            <HeroLogo>
              <AutoHeightImage src="/images/logo.png" />
            </HeroLogo>
          </div>
          <div className="kor__font">
            안녕! 나는 노브라고 해! <br />
            매주 월요일, 화요일, 수요일 세상에 모든 NFT 소식을 전하고 있지{" "}
            <br />
            우리 구독자들만을 위해 10,000개의 NOV 캐릭터를 준비했어! <br />
            노브레터 구독/디스코드 접속, 카이카스와 소량의 수수료만 있다면
            참여가능!{" "}
          </div>
        </Container>

        {/* right */}
        <Container className="item2">
          <Box className="box1">
            <Title fontSize={theme.fontSizes.font2xl}>free mint</Title>
            <div>
              <span>Only For Subscribers</span>
              <div
                style={{
                  maxWidth: "3.75rem",
                  transform: "translateY(6px)",
                  minHeight: "4.83rem",
                }}
                className="img__container"
              >
                <AutoHeightImage src="/images/hero_resized.png" />
              </div>
            </div>
          </Box>
          <ContentBox>
            <SubTitle>
              <div>minting block number</div>
              {/* <Circle /> */}
            </SubTitle>
            <Contents className="cube__content">
              <CubeComponent
                src="/images/block_white.png"
                title="minting block"
                desc="#89090290"
                highlight={true}
                cssBarName="--minting--block--num"
                blockNumber={100000000}
              />

              <CubeComponent
                src="/images/block_black.png"
                title="current block"
                desc="#89090290"
                highlight={false}
                cssBarName="--current--block--num"
                blockNumber={currentBlock}
              />
            </Contents>
            <div style={{ fontSize: theme.fontSizes.fontxs, fontWeight: 500 }}>
              보다 정확한 현재 블록 정보는, 클레이스코프와 클레이스왑을 참고
              바랍니다.
              <br />
              표시되는 블락과 타 사이트의 실제 블락과 차이가 있을 수 있습니다.
            </div>
          </ContentBox>
          <ContentBox>
            <SubTitle>QUANTITY & PRICE</SubTitle>
            <Contents
              style={{
                flexDirection: "column",
                padding: "0.5rem",
                paddingTop: "1.7rem",
              }}
            >
              <BarContainer>
                <div className="bar__item1">
                  <span>Remaining NFTS</span>
                  <span>
                    <span className="color__primary">0</span> / 10,000
                  </span>
                </div>
                <Bar
                  className="bar__item2"
                  percent={percent}
                  ref={progressBarRef}
                >
                  <div />
                </Bar>
                <div className="bar__item3">
                  <span>
                    <span className="color__primary">1 MINT</span> PER 1 PERSON
                  </span>
                  <span className="color__primary">WHITELIST ONLY</span>
                </div>
              </BarContainer>
              <div className="price">
                <span>PRICE :</span> 0 KLAY ( + GAS FEE )
              </div>
              <div
                style={{
                  fontSize: theme.fontSizes.fontxs,
                  padding: "0.6rem 0.3rem",
                }}
                className="kor__font"
              >
                *주의 : 소량의 가스비(수수료)가 발생할 수 있습니다. 카이카스
                지갑에 최소 수량 (약 1KLAY) 이상의 <br />
                KLAY를 보유하셔야 민팅에 참여하실 수 있습니다.
              </div>
            </Contents>
          </ContentBox>
          <Box>
            <Button>minting</Button>
          </Box>

          {/* TOP */}
          <Sticker x="50%" y="2rem" t="0" l="0" />
          <Sticker x="50%" y="1.45rem" t="0" l="0" />
          {/* BOTTOM */}
          <Sticker x="40%" y="2rem" t="100%" l="100%" />
          <Sticker x="40%" y="1.45rem" t="100%" l="100%" />
        </Container>
      </WrapperEl>
    </SectionEl>
    // </>
  );
};

export default Home;

const WrapperEl = styled(Wrapper)`
  ${media[1200]} {
    flex-direction: column;
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  max-width: 50%;
  /* min-width: 30rem; */
  ${media[1200]} {
    max-width: 100%;
  }
  ${media[768]} {
    /* min-width: 0; */
    width: 100%;
    max-width: 100%;
  }
`;

const TitleContainer = styled.div``;
const Contents = styled.div`
  display: flex;
`;

const Button = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fontxl};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  background: ${theme.colors.black};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
`;

const HeroLogo = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  width: 13rem;
  transform: translate(-50%, -50%);
  ${media[768]} {
    width: 8rem;
  }
  ${media.mobile} {
    width: 5rem;
  }
`;

const Box = styled.div`
  display: flex;
  width: 100%;
`;

const ContentBox = styled(Box)`
  padding-top: 2.5rem;
  flex-direction: column;
`;

const CubeContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;
  padding: 1.5rem 0;
`;

const Circle = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  top: 0;
  left: 0;
  /* z-index: -1; */
  transform: translateX(-1rem);
`;

const Title = styled.h2<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
  padding-bottom: 1rem;
`;

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fontxl};
  font-weight: 700;
  position: relative;
  ${Circle} {
    z-index: 1;
  }
  div:nth-child(1) {
    z-index: 10;
  }
  ${media[768]} {
    font-size: ${({ theme }) => theme.fontSizes.fontmd};
  }
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

const BarContainer = styled.div`
  > div {
    display: flex;
  }
  .bar__item1,
  .bar__item3 {
    align-items: center;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontSizes.fontsm};
    /* display: flex; */
    padding: 0 0.3rem;
  }
`;

export const Bar = styled.div<{ percent: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0.5rem 1rem; */
  padding: 1rem 0;
  transition: all 1s ease-in-out;

  > div {
    width: 100%;
    height: ${theme.fontSizes.fontsm};
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors.grayProgressBar};
    /* border: 2.25px solid ${(props) => props.theme.colors.black}; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ::before {
      content: "";
      transition: all 1s ease-in-out;

      /* width: 0%; */
      /* width: ${({ percent }) => percent}%; */
      width: var(--progress--width);

      height: 100%;
      background: ${({ theme }) => theme.colors.primary};
      /* 다 되면  */
      ${({ percent }) => percent >= 100 && `background: #5ccbf5;`}
      border-radius: 2rem;
      position: absolute;
    }
  }
`;

const Sticker = styled.div<{ x: string; y: string; t: string; l: string }>`
  position: absolute;
  width: 5.8125rem;
  height: 5px;

  background: rgba(255, 255, 255, 0.8);

  ${({ x, y, t, l }) => css`
    transform: rotate(135.87deg) translate(${x}, ${y});
    left: ${l};
    top: ${t};
  `}
  ${media.mobile} {
    display: none;
  }
`;
const CurrentBlockWraapper = styled.div`
  @property --current--block--num {
    syntax: "<integer>";
    initial-value: 89090290;
    inherits: false;
  }

  @property --init--current--block--num {
    syntax: "<integer>";
    initial-value: 89090290;
    inherits: false;
  }

  counter-reset: num var(--current--block--num);

  ::after {
    content: counter(num);
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

const NumberText = styled.div`
  @property --num {
    syntax: "<integer>";
    initial-value: 89090290;
    inherits: false;
  }

  > div {
    // go fast and slow down
    animation: counter 5s alternate ease-out;
    counter-reset: num var(--num);
    padding: 2rem;
  }
  div::after {
    content: counter(num);
  }
`;

const CubeLine = styled.div`
  height: 50px;
  width: 2px;
  background: ${({ theme }) => theme.colors.black};
`;

const SectionEl = styled(PageSection)`
  .item1 {
    .kor__font {
      font-weight: 700;
    }
    ${Title} {
      ${media[1200]} {
        font-size: ${theme.fontSizes.font2xl};
      }
      ${media[768]} {
        font-size: ${theme.fontSizes.fontxl};
      }
    }
  }
  .hero__img {
    /* width: 20rem; */
    transform: translateY(-2.75rem);
    width: 25rem;
    min-height: 32.8rem;
    position: relative;
    ${media[768]} {
      min-height: 25.7rem;
      width: 20rem;
    }
    ${media.mobile} {
      width: 14rem;
      transform: translateY(-1rem);
      min-height: 18rem;
    }
  }
  .item2 {
    border: 4px solid ${theme.colors.black};
    background: ${theme.colors.white};
    padding: 1.68rem;
    position: relative;
    /* padding: 2rem; */
    //27px
    max-width: 36rem;
    ${Title} {
      ${media[1200]} {
        font-size: ${theme.fontSizes.font2xl};
      }
      ${media[768]} {
        font-size: ${theme.fontSizes.fontxl};
      }
    }
  }
  .box1 {
    border-bottom: 2px solid ${theme.colors.black};
    padding-top: 1rem;
    div:nth-child(2) {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      text-transform: capitalize;
      color: ${theme.colors.primaryLight};
      flex: 1;
      ${media[768]} {
        /* background: red; */
        display: none;
      }
    }
  }
  .price {
    padding: 0 0.3rem;
    padding-top: 1rem;
    font-size: ${theme.fontSizes.fontmd};
    > span {
      font-size: ${theme.fontSizes.fontsm};
    }
  }
  .cube__content {
    align-items: center;
    > div:nth-child(1) {
      position: relative;
      /* align-items: center; */
      /* justify-content: center; */
      ::before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 1rem;
        width: 2px;
        height: 60%;
        background: ${theme.colors.black};
        ${media[768]} {
          width: 0;
        }
      }
    }

    ${media[768]} {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
