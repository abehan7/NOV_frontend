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

export const getUniqueAddresses = (arr: string[]) => {
  let uniqueAddresses: string[] = [];
  arr.forEach((item: string) => {
    //remove spaces
    const processedItem = item.toLowerCase().replace(/\s/g, "");
    if (uniqueAddresses.indexOf(processedItem) === -1)
      uniqueAddresses.push(processedItem);
  });
  return uniqueAddresses;
};
