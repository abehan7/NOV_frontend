import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import { useAccount } from "../hooks/useAccount";
import { useCaver } from "../hooks/useCaver";
const Home: NextPage = () => {
  const { getAccount } = useAccount();
  const { publicMint } = useCaver();
  // console.log(window.klaytn.selectedAddress);
  return <div>NOV</div>;
};
