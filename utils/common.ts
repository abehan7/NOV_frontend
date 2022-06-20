export const cutWallet = (wallet: String) =>
  `${wallet.substring(0, 6)}...${wallet.substring(
    wallet.length - 4,
    wallet.length
  )}`;

export const throttle = (callback: Function, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return () => {
    if (timer) return;
    timer = setTimeout(() => {
      callback();
      timer = null;
    }, delay);
  };
};

export const setNumberDot = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
