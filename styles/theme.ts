import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    gray50: "#F7FAFC",
    gray100: "#EDF2F7",
    gray200: "#E2E8F0",
    gray300: "#CBD5E0",
    gray400: "#A0AEC0",
    gray500: "#718096",
    gray600: "#4A5568",
    gray700: "#2D3748",
    gray800: "#1A202C",
    gray900: "#171923",

    primary: "#F5D061",

    black: "#3E3E3E",
    white: "#FFFFFF",
    highlight: "#AC53FB",

    whiteRgba: "255, 255, 255",
    blackRgba: "32,32,32",
  },
  fonts: {
    kor: "IBMPlexSans",
    eng: "Fugaz",
    header: "Archivo",
  },
  fontSizes: {
    fontxs: "0.75em",
    fontsm: "0.875em",
    fontmd: "1em", // 1em = 16px
    fontlg: "1.25em",
    fontxl: "2em",
    font2xl: "3em",
    font3xl: "4em",
  },
  headerHeight: "130px",
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;
const mobileMediaQuery = (minWidth: number, maxWidth: number): string =>
  `@media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  1440: customMediaQuery(1440),
  1200: customMediaQuery(1200),
  768: customMediaQuery(768),
  mobile: mobileMediaQuery(320, 600),
};
