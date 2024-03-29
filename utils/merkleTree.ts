import keccak256 from "keccak256";
import { MerkleTree } from "merkletreejs";
import { whitelist } from "../data/whitelist";

export const createTree = (wallets: Array<number | string>) => {
  const leaves = wallets.map((x) => keccak256(x));
  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  return tree;
};

export const getRoot = (tree: MerkleTree) => buf2hex(tree.getRoot());

export const getLeaf = (wallet: any) => buf2hex(keccak256(wallet));

export const getProof = (tree: MerkleTree, leaf: string) =>
  tree.getProof(leaf).map((x) => buf2hex(x.data));

const buf2hex = (x: Buffer) => "0x" + x.toString("hex");

export const getMerkleProof = (wallet: string): Array<string | number> => {
  const tree = createTree(whitelist);
  const leaf = getLeaf(wallet);
  const proof = getProof(tree, leaf);
  return proof;
};

export const isWhitelistedWallet = (wallet: string): boolean => {
  const tree = createTree(whitelist);
  const leaf = getLeaf(wallet);
  const proof = getProof(tree, leaf);
  const root = getRoot(tree);
  const isValid = tree.verify(proof, leaf, root);
  return isValid;
};
