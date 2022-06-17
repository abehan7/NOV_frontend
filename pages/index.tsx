import type { NextPage } from "next";
// import Image from "next/image";
import styled from "styled-components";
import AutoHeightImage from "../components/common/AutoHeightImage";
import { PageSection, Wrapper } from "../components/common/styles/page";
import { useAccount } from "../hooks/useAccount";
import { useCaver } from "../hooks/useCaver";
import { theme } from "../styles/theme";
const Home: NextPage = () => {
  const { getAccount } = useAccount();
  const { publicMint } = useCaver();
  // console.log(window.klaytn.selectedAddress);
  return (
    <SectionEl>
      <Wrapper>
        <Container className="item1">
          <TitleContainer>
            <Title fontSize={theme.fontSizes.font3xl}>WELCOME! I’M NOV.</Title>
            <div>
              <span></span>Only For Subscribers
            </div>
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
        <Container className="item2">
          <Box>
            <Title fontSize={theme.fontSizes.font2xl}>free mint</Title>
          </Box>
          <Box>
            <SubTitle>minting block number</SubTitle>
            <Contents></Contents>
          </Box>
          <Box>
            <SubTitle>quantity and price</SubTitle>
            <Contents></Contents>
          </Box>
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
    transform: translateY(-2rem);
    width: 25rem;
    position: relative;
  }
  .item2 {
    border: 4px solid ${theme.colors.black};
    background: ${theme.colors.white};
    /* width: 90%; */
    /* height: 90%; */
    padding: 2rem;
    /* width: 100%; */
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

const Box = styled.div`
  display: flex;
  width: 100%;
`;

const Title = styled.h2<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
`;
const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fontxl};
  font-weight: 500;
`;

const TitleContainer = styled.div``;
const Contents = styled.div``;
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
