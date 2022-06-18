import type { NextPage } from "next";
// import Image from "next/image";
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
            노브레터 구독/디스코드 접속, 카이카스와 소량의 수수료만 있다면{" "}
            <br />
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
                style={{ maxWidth: "3.75rem", transform: "translateY(6px)" }}
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
            <SubTitle>quantity and price</SubTitle>
            <Contents></Contents>
          </ContentBox>
          <Box>
            <Button>minting</Button>
          </Box>
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
    position: relative;
  }
  .item2 {
    border: 4px solid ${theme.colors.black};
    background: ${theme.colors.white};

    padding: 2rem;
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
  padding-top: 3rem;
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
