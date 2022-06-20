// import { ethers } from "ethers";
import { ReactElement } from "react";
import { FC } from "react";
import { ReactNode } from "react";
import { useContext, useEffect, useState, createContext } from "react";

interface IAccountContext {
  account: string;
  getAccount: () => Promise<void>;
  disconnect: () => void;
  getNetwork: () => void;
  network: number;
}
export const AccountContext = createContext<IAccountContext | null>(null);

export const useAccount = () => useContext(AccountContext);
interface IAccountProviderProps {
  children: ReactNode;
}

export const AccountProvider: FC<IAccountProviderProps> = ({
  children,
}): ReactElement => {
  const [account, setAccount] = useState<string>("");
  const [network, setNetwork] = useState<number>(0);
  // 1001 테스트넷
  // 메인넷 8217

  const getAccount = async () => {
    if (!window.klaytn) return;
    try {
      const accounts = await window.klaytn.enable();
      // window.klaytn.networkVersion

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getNetwork = async () => {
    if (!window.klaytn) return;
    try {
      const _network = window.klaytn.networkVersion;
      setNetwork(_network);
    } catch (error) {
      console.error(error);
    }
  };

  const disconnect = () => {
    console.log("disconnect");
    setAccount("");
  };

  const value = { account, getAccount, disconnect, getNetwork, network };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};
