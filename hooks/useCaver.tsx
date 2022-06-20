import Caver, { Contract } from "caver-js";
import { useEffect, useState } from "react";
import { NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI } from "../caverConfig";

export const useCaver = () => {
  const [caver, setCaver] = useState<Caver | undefined>(undefined);
  const [nftContract, setNftContract] = useState<Contract | undefined>(
    undefined
  );

  const presaleMint = async (merkleProof: string) => {
    if (!caver || !nftContract) return;
    // console.log(window.klaytn.selectedAddress);
    const account = window.klaytn.selectedAddress;
    try {
      const response = await caver.klay.sendTransaction({
        type: "SMART_CONTRACT_EXECUTION",
        from: account,
        to: NFT_CONTRACT_ADDRESS,
        value: caver.utils.convertToPeb(0, "KLAY"),
        gas: "3000000",
        data: nftContract.methods.presaleMint(merkleProof).encodeABI(),
      });
      // value: caver.utils.convertToPeb(0, "mKLAY"),
      // console.log(response);
      return response;
    } catch (error) {
      console.error(error);
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
  };
};
