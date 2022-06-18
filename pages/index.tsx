import type { NextPage } from "next";
import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import AutoHeightImage from "../components/common/AutoHeightImage";
import { PageSection, Wrapper } from "../components/common/styles/page";
import { useAccount } from "../hooks/useAccount";
import { useCaver } from "../hooks/useCaver";
import { theme } from "../styles/theme";

interface CubeComponentProps {
  src: string;
  title: string;
  desc: string;
  highlight: boolean;
}
const CubeComponent = (props: CubeComponentProps) => {
  return (
    <CubeContainer>
      <CubeImg>
        <AutoHeightImage src={props.src} />
      </CubeImg>
      <CubeDesc highlight={props.highlight}>
        <div style={{ fontSize: theme.fontSizes.fontxs }}>{props.title}</div>
        <div style={{ fontSize: theme.fontSizes.fontlg }}>{props.desc}</div>
      </CubeDesc>
    </CubeContainer>
  );
};
const Home: NextPage = () => {
  const { getAccount } = useAccount();
  const { publicMint } = useCaver();
  const [percent, setPercent] = useState<number>(0);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  // console.log(window.klaytn.selectedAddress);
  return (
    <SectionEl>
      <Wrapper>
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
            <Contents>
              <CubeComponent
                src="/images/block_white.png"
                title="minting block"
                desc="#89090290"
                highlight={true}
              />
              <CubeComponent
                src="/images/block_black.png"
                title="current block"
                desc="#89090290"
                highlight={false}
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
                    <span className="color__primary">0</span>/10,000
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

          {/* <Sticker /> */}
          {/* <Sticker /> */}
          {/* <Sticker /> */}
          <Sticker x="50%" y="2rem" t="0" l="0" />
          <Sticker x="50%" y="1.45rem" t="0" l="0" />
          {/* borrom */}
          <Sticker x="40%" y="2rem" t="100%" l="100%" />
          <Sticker x="40%" y="1.45rem" t="100%" l="100%" />
        </Container>
      </Wrapper>
    </SectionEl>
  );
};

export default Home;
const SectionEl = styled(PageSection)`
  .item1 {
    .kor__font {
      font-weight: 700;
    }
  }
  .hero__img {
    /* width: 20rem; */
    transform: translateY(-2.75rem);
    width: 25rem;
    min-height: 32.2rem;
    position: relative;
  }
  .item2 {
    border: 4px solid ${theme.colors.black};
    background: ${theme.colors.white};
    padding: 1.68rem;
    position: relative;
    /* padding: 2rem; */
    //27px
    max-width: 36rem;
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
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  max-width: 50%;
`;

const TitleContainer = styled.div``;
const Contents = styled.div`
  /* padding: 1rem 0; */
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
`;
const CubeImg = styled.div`
  width: 4rem;
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

// const Bar = styled.div`
//   height: ${theme.fontSizes.fontsm};
//   width: 100%;
//   background-color: ${({ theme }) => theme.colors.grayProgressBar};
//   border-radius: ${theme.borderRadius.progressBar};
// `;

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
`;
