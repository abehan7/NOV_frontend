import { useState, useEffect } from "react";

interface IAccount {
  account: string;
  getAccount: () => void;
}
export const useAccount = (): IAccount => {
  const [account, setAccount] = useState<string>("");

  const getAccount = async () => {
    if (!window.klaytn) return;
    try {
      const accounts = await window.klaytn.enable();
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(account);
  }, [account]);

  //   useEffect(() => {
  //     if (window.klaytn) {
  //       getAccount();
  //     }
  //   }, []);

  return { account, getAccount };
};
