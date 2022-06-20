// import keccak256 from "keccak256";
// import { MerkleTree } from "merkletreejs";
// import fs from "fs";
// import { IMerkleJson } from "../interfaces";

// export const createTree = (wallets: Array<number | string>) => {
//   const leaves = wallets.map((x) => keccak256(x));
//   const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
//   return tree;
// };

// export const getRoot = (tree: MerkleTree) => buf2hex(tree.getRoot());

// export const getLeaf = (wallet: any) => buf2hex(keccak256(wallet));

// export const getProof = (tree: MerkleTree, leaf: string) =>
//   tree.getProof(leaf).map((x) => buf2hex(x.data));

// const buf2hex = (x: Buffer) => "0x" + x.toString("hex");

// export const createJson = (merkelJson: IMerkleJson) => {
//   fs.writeFile(
//     `merkleData/merkleInfo.json`,
//     JSON.stringify(merkelJson),
//     "utf8",
//     (e) => e
//   );
// };
export const _ = "";
