import React, { useEffect, FC } from "react";

interface ProgressBarProps {
  progressBarRef: React.RefObject<HTMLDivElement>;
  percent: number;
}
const useProgressBar = (props: ProgressBarProps) => {
  // progress bar
  useEffect(() => {
    if (!props.progressBarRef || !props.progressBarRef.current) return;
    props.progressBarRef.current.style.setProperty(
      "--progress--width",
      `${props.percent}%`
    );
    console.log("time:", props.percent);
    // if (props.percent < 100) setIsStakingCompleted(false);
    if (props.percent >= 100) {
      console.log("props.percent is 100:", props.percent);
    }
  }, [props.percent]);
};

export default useProgressBar;
