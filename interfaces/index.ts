import { ReactNode } from "react";

export interface IIcon {
  w: number;
  h: number;
  props: ReactNode;
}

export interface IMintStatus {
  success: any;
  message: any;
}

export interface IProjectInfo {
  ObjectId?: string;
  contract_address: string;
  member_wallet: string;
}

export interface SaveContractAddressProps {
  contract_address: string;
  owner_wallet: string;
}

export interface IInputModalInfo {
  title: string;
  handleConfirm: any;
  confirmText: string;
}
export interface SetBaseURIProps {
  uri: string;
  account: string;
}
export interface SetMerkleRootProps {
  root: string;
  account: string;
}

export interface IWhitelistWallet {
  date: {
    nanoseconds: number;
    seconds: number;
  };
  id: string;
  wallet: string;
}

export interface IInputEventInfo {
  done: boolean;
  status: boolean;
}

export interface IPhaseInfo {
  phase: number;
  phaseMaxSupply: number;
  publicSalePrice: number;
  presalePrice: number;
}

export interface ITxInfo {
  blockHash: string;
  blockNumber: number;
  contractAddress: null;
  from: string;
  gas: string;
  gasPrice: string;
  gasUsed: number;
  input: string;
  logs: [any];
  logsBloom: string;
  nonce: string;
  senderTxHash: string;
  signatures: [any];
  status: true;
  to: string;
  transactionHash: string;
  transactionIndex: number;
  type: string;
  typeInt: number;
  value: string;
}

export interface IMintingTxInfo {
  status: ReactNode;
  success: boolean;
}
