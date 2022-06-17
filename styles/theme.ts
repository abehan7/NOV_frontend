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

    black: "#000000",
    white: "#FFFFFF",
    highlight: "#AC53FB",

    whiteRgba: "255, 255, 255",
    blackRgba: "32,32,32",
  },
  fonts: {
    kor: "IBMPlexSans",
    eng: "FugazOne",
    header: "Archivo",
  },
  fontSizes: {
    // 1em = 16px
    //15 12 10
    fontxs: "0.63rem", // 10px
    fontsm: "0.75rem", // 12px
    fontmd: "0.938rem", // 15px
    fontlg: "1.25rem", // right number 20px
    fontxl: "1.56rem", // right subtitle 25px
    font2xl: "2.5rem", // right title 40px
    font3xl: "3.5rem", // left title 56
  },
  headerHeight: "5.4rem", //86px
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
