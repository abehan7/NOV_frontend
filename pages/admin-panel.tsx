import { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
// import { useAccount } from "../contexts/AccountContext";
// import { IProjectInfo } from "../interfaces";
// import DeployComponent from "../components/dashboard/DeployComponent";
import DashboardComponent from "../components/dashboard/DashboardComponent";
import { Toaster } from "react-hot-toast";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useAccount } from "../hooks/useAccount";
import { IProjectInfo } from "../interfaces";
const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  background: #eeedde;
  padding: 2rem 0;
  /* FIXME: */
  /*  build mode START */
  /* zoom: 110%; */
  /* -moz-transform: scale(1.1); */
  /* build mode END */

  mark {
    background: var(--color-accent);
    color: var(--color-text);
    font-weight: bold;
    padding: 0 0.2em;
  }

  .card {
    display: flex;
    flex-direction: column;
    background: var(--color-background);
    padding: calc(4 * var(--size-bezel));
    /* padding-top: 0.4rem; */
    margin-top: calc(4 * var(--size-bezel));

    border-radius: var(--size-radius);
    border: 3px solid var(--color-shadow, currentColor);
    box-shadow: 0.5rem 0.5rem 0 var(--color-shadow, currentColor);
    padding-bottom: 1rem;
    &--accent {
      --color-background: var(--color-light);
      --color-accent: var(--color-light);
      color: var(--color-dark);
    }

    *:first-child {
      margin-top: 0;
    }
  }

  .l-design-widht {
    max-width: 40rem;
    padding: 1rem;
  }

  .button-group {
    margin-top: calc(var(--size-bezel) * 2.5);
    /* padding-top: 1rem; */

    button {
      cursor: pointer;
    }
    > button {
      /* border: 1.5px solid gray; */
    }
  }

  button {
    color: currentColor;
    padding: var(--size-bezel) calc(var(--size-bezel) * 2);
    background: var(--color-accent);
    border: none;
    border-radius: var(--size-radius);
    font-weight: 900;

    &[type="reset"] {
      background: var(--color-background);
      font-weight: 500;
      color: ${(props) => props.theme.colors.black};
    }
  }

  button + button {
    margin-left: calc(var(--size-bezel) * 2);
  }

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
  }

  .hidden {
    display: none;
  }
`;

const Title = styled.h2`
  /* padding: 1rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 49rem;
`;
const Content = styled.div`
  /* flex: 1; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackIcon = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  font-size: 1.5rem;
  cursor: pointer;
`;
export const AdminContext = createContext<IProjectInfo | null>(null);
export const useAdmin = (): IProjectInfo | null => useContext(AdminContext);

const AdminDashboard = () => {
  const account = useAccount()?.account;
  const [projectInfo, setProjectInfo] = useState<IProjectInfo | null>(null);

  //TODO: 이제 여기서 moralis추가해서 컨트렉 어드레스 넣기

  const isDeployed = projectInfo?.contract_address;

  // useEffect(() => {
  //   console.log(projectInfo);
  // }, [projectInfo]);
  return (
    <AdminContext.Provider value={projectInfo}>
      <Section>
        <Title>
          <BackIcon className="item1">
            <Link href="/">
              <IoIosArrowBack />
            </Link>
          </BackIcon>
          Admin Panel
        </Title>

        <Content>
          {/* {!isDeployed && <DeployComponent />} */}
          {/* {isDeployed && <DashboardComponent />} */}
          <DashboardComponent />
        </Content>
        <Toaster />
      </Section>
    </AdminContext.Provider>
  );
};

export default AdminDashboard;
