import Caver, { Contract } from "caver-js";
import { CaverExtKAS } from "caver-js-ext-kas";
import { useEffect, useState } from "react";
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from "../caverConfig";
export const useCaverSocket = () => {
  const [caver, setCaver] = useState<Caver | undefined>(undefined);
  const [nftContract, setNftContract] = useState<Contract | undefined>(
    undefined
  );

  useEffect(() => {
    if (!nftContract) return;
    const accessKeyId = "{accessKeyId}";
    const secretAccessKey = "{secretAccessKey}";
    const chainId = 1001;
    // const caver = new CaverExtKAS();

    const caver = new Caver("wss://public-node-api.klaytnapi.com/v1/baobab/ws");
    // caver.initKASAPI(chainId, accessKeyId, secretAccessKey)
    // const blockNumber = await caver.rpc.klay.getBlockNumber()
    // wss://public-node-api.klaytnapi.com/v1/baobab/ws
    // const _ = nftContract.events
    // const subscription = caver.
    //   .callevent("logs", HACKR_DAO_MINT_EVENTS)
    //   .on("data", subscribeTotalMinted);
    // if (window.klaytn) {
    //   // const caver = new Caver('https://api.baobab.klaytn.net:8651');
    //   setCaver(caver);
    // }
  }, []);
  useEffect(() => {
    if (!caver) return;
    setNftContract(
      caver.contract.create(NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS)
    );
  }, [caver]);
};
