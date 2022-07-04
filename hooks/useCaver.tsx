import Caver, { Contract } from "caver-js";
import { ReactNode, useEffect, useState } from "react";
import { NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI } from "../caverConfig";
import { IPhaseInfo, ITxInfo } from "../interfaces";
import { phaseInfoObj } from "../object";
import { getMerkleProof } from "../utils/merkleTree";

export const useCaver = () => {
  const [caver, setCaver] = useState<Caver | undefined>(undefined);
  const [nftContract, setNftContract] = useState<Contract | undefined>(
    undefined
  );

  //revert 넣어놓기
  const presaleMint = async (
    merkleProof: Array<string | number>
  ): Promise<{ success: boolean; status: ReactNode }> => {
    if (!caver || !nftContract) return { success: false, status: "Loading" };
    const account = window.klaytn.selectedAddress;

    if (!account) {
      return {
        success: false,
        status: "To be able to mint, you need to connect your wallet",
      };
    }

    const tx = {
      type: "SMART_CONTRACT_EXECUTION",
      from: account,
      to: NFT_CONTRACT_ADDRESS,
      value: 0,
      gas: "3000000",
      data: nftContract.methods.presaleMint(merkleProof).encodeABI(),
    };

    try {
      const txInfo = (await caver.klay.sendTransaction(
        tx
      )) as unknown as ITxInfo;
      // value: caver.utils.convertToPeb(0, "mKLAY"),
      console.log(txInfo);
      return {
        success: true,
        status: (
          <a
            href={`https://baobab.scope.klaytn.com/tx/${txInfo.transactionHash}`}
            target="_blank"
            rel="noreferrer"
          >
            <p>✅ Check out your transaction on Etherscan:</p>
            <p>{`https://baobab.scope.klaytn.com/tx/${txInfo.transactionHash}`}</p>
          </a>
        ),
      };
    } catch (error: any) {
      console.error(error);
      return {
        success: false,
        status: "😞 민팅실패:" + error.message,
      };
    }
  };

  const publicSaleMint = async () => {
    if (!caver || !nftContract) return { success: false, status: "Loading" };
    const account = window.klaytn.selectedAddress;

    if (!account) {
      return {
        success: false,
        status: "To be able to mint, you need to connect your wallet",
      };
    }

    const tx = {
      type: "SMART_CONTRACT_EXECUTION",
      from: account,
      to: NFT_CONTRACT_ADDRESS,
      value: 0,
      gas: "3000000",
      data: nftContract.methods.publicSaleMint().encodeABI(),
    };

    try {
      const txInfo = (await caver.klay.sendTransaction(
        tx
      )) as unknown as ITxInfo;
      // value: caver.utils.convertToPeb(0, "mKLAY"),
      console.log(txInfo);
      return {
        success: true,
        status: (
          <a
            href={`https://baobab.scope.klaytn.com/tx/${txInfo.transactionHash}`}
            target="_blank"
            rel="noreferrer"
          >
            <p>✅ Check out your transaction on Etherscan:</p>
            <p>{`https://baobab.scope.klaytn.com/tx/${txInfo.transactionHash}`}</p>
          </a>
        ),
      };
    } catch (error: any) {
      console.error(error);
      return {
        success: false,
        status: "😞 민팅실패:" + error.message,
      };
    }
  };

  const getCurrentBlock = async (): Promise<number> => {
    if (!caver) return 0;
    try {
      const response = await caver.klay.getBlockNumber();
      return response;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  const getIsPaused = async (): Promise<boolean> => {
    if (!caver || !nftContract) return false;
    try {
      const response = await nftContract.methods.paused().call();
      return response;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const getPresaleM = async (): Promise<boolean> => {
    if (!caver || !nftContract) return false;
    try {
      const response = await nftContract.methods.presaleM().call();
      return response;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const getPublicM = async (): Promise<boolean> => {
    if (!caver || !nftContract) return false;
    try {
      const response = await nftContract.methods.publicM().call();
      return response;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const getIsValidMerkleProof = async (wallet: string): Promise<boolean> => {
    if (!caver || !nftContract) return false;
    const proof = getMerkleProof(wallet);
    try {
      const response = await nftContract.methods
        .getIsValidMerkleProof(proof, wallet)
        .call();
      console.log(response);
      return response as boolean;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const getPublicBlockNum = async (): Promise<number> => {
    if (!caver || !nftContract) return 0;
    try {
      const response = await nftContract.methods.publicBlockNum().call();
      return response;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  const getPresaleBlockNum = async (): Promise<number> => {
    if (!caver || !nftContract) return 0;
    try {
      const response = await nftContract.methods.presaleBlockNum().call();
      return response;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  const getMintingBlockNumber = async (): Promise<number> => {
    if (!caver || !nftContract) return 0;
    try {
      const response = await nftContract.methods.mintingBlockNumber().call();
      return response;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  const getMaxSupply = async (): Promise<number> => {
    if (!caver || !nftContract) return 0;
    try {
      const response = await nftContract.methods.maxSupply().call();
      return response as number;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  // const getPhaseMaxSupply = async (): Promise<number> => {};

  // presaleBlockNum
  // publicBlockNum

  const getTotalSupply = async (): Promise<number> => {
    if (!caver || !nftContract) return 0;
    try {
      const response = await nftContract.methods.totalSupply().call();
      return response;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  const getPhaseInfo = async (phase: number): Promise<IPhaseInfo> => {
    if (!caver || !nftContract) return phaseInfoObj;
    try {
      const response = await nftContract.methods._phaseInfo(phase).call();
      return response as IPhaseInfo;
    } catch (error) {
      console.error(error);
      return phaseInfoObj;
    }
  };

  const getPresaleClaimedByPhase = async (phase: number, wallet: string) => {
    if (!caver || !nftContract) return 0;
    try {
      const response = await nftContract.methods
        ._presaleClaimedByPhase(phase, wallet)
        .call();
      return response;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  const getPublicClaimedByPhase = async (phase: number, wallet: string) => {
    if (!caver || !nftContract) return 0;
    try {
      const response = await nftContract.methods
        ._publicSaleClaimedByPhase(phase, wallet)
        .call();
      return response;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  useEffect(() => {
    if (window.klaytn) {
      // const caver = new Caver('https://api.baobab.klaytn.net:8651');
      setCaver(new Caver(window.klaytn));
    }
  }, []);

  useEffect(() => {
    if (!caver) return;

    setNftContract(
      caver.contract.create(NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS)
    );
  }, [caver]);

  return {
    caver,
    nftContract,
    presaleMint,
    getCurrentBlock,
    getIsPaused,
    getMintingBlockNumber,
    getTotalSupply,
    getPresaleM,
    getPublicM,
    getPublicBlockNum,
    getPresaleBlockNum,
    getPhaseInfo,
    getMaxSupply,
    getIsValidMerkleProof,
    getPresaleClaimedByPhase,
    getPublicClaimedByPhase,
    publicSaleMint,
  };
};
