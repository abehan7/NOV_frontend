import Caver, { Contract } from "caver-js";
import { ReactNode, useEffect, useState } from "react";
import { NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI } from "../caverConfig";

export const useCaver = () => {
  const [caver, setCaver] = useState<Caver | undefined>(undefined);
  const [nftContract, setNftContract] = useState<Contract | undefined>(
    undefined
  );

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
      const txHash = await caver.klay.sendTransaction(tx);
      // value: caver.utils.convertToPeb(0, "mKLAY"),
      return {
        success: true,
        status: (
          <a
            href={`https://rinkeby.etherscan.io/tx/${txHash}`}
            target="_blank"
            rel="noreferrer"
          >
            <p>✅ Check out your transaction on Etherscan:</p>
            <p>{`https://rinkeby.etherscan.io/tx/${txHash}`}</p>
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

  useEffect(() => {
    if (window.klaytn) {
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
  };
};
