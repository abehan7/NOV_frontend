import Link from "next/link";

import styled from "styled-components";

const Box = styled.div``;
const SubTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;
const DeployComponent = () => {
  const onClickDeploy = async () => {
    // moralis에 contract deploy한 address랑 contract address넣기
    // 그리고 teamMember라는 필드 하나 만들어주기
  };
  return (
    <Box>
      <div className="card card--accent">
        <SubTitle>deploy your smart contract</SubTitle>
        <div className="button-group">
          <button onClick={onClickDeploy}>Deploy</button>
          <Link href="/">
            <button type="reset">back</button>
          </Link>
        </div>
      </div>
    </Box>
  );
};
export default DeployComponent;
