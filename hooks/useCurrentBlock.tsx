import React, { useEffect, FC } from "react";

interface BlockNumberProps {
  blockNumberRef: React.RefObject<HTMLDivElement>;
  blockNumber: number;
  cssBarName: string;
}
const useBlockNumber = (props: BlockNumberProps) => {
  // progress bar
  useEffect(() => {
    if (!props.blockNumberRef || !props.blockNumberRef.current) return;
    props.blockNumberRef.current.style.setProperty(
      props.cssBarName,
      `${props.blockNumber}`
    );

    props.blockNumberRef.current.style.setProperty(
      `--init${props.cssBarName}`,
      `${props.blockNumber}`
    );
  }, [props.blockNumber]);
};

export default useBlockNumber;
