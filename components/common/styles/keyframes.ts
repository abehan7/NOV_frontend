import { keyframes } from "styled-components";

export const flash = keyframes`
0% { opacity: 0; }
5% {  opacity: 0; }
20% {  opacity: 0; }
40% {  opacity: 0; }
60% {  opacity: 0.3; }
80% {  opacity: 1; }
100% {  opacity: 1; }
`;

export const flash_v2 = keyframes`
0% { opacity: 1; }
5% {  opacity: 1; }
21% {  opacity: 1; }
40% {  opacity: 1; }
60% {  opacity: 0.3; }
80% {  opacity: 0; }
100% {  opacity: 0; }
`;

export const mintingBlockCounter = keyframes`
    0% {
      --minting--block--num: 80090250;
    }

    20% {
      --minting--block--num: 87090250;
    }

    100% {
      --minting--block--num: var(--init--minting--block--num);
    }
`;

export const currentBlockCounter = keyframes`
    0% {
      --minting--block--num: 80090250;
    }

    20% {
      --minting--block--num: 87090250;
    }

    100% {
      --minting--block--num: var(--current--block--num);
    }
`;
