export const cutWallet = (wallet: String) =>
  `${wallet.substring(0, 6)}...${wallet.substring(
    wallet.length - 4,
    wallet.length
  )}`;
