import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      gray50: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;

      primary: string;

      black: string;
      white: string;
      highlight: string;

      whiteRgba: string;
      blackRgba: string;
    };
    fonts: {
      kor: string;
      eng: string;
      header: string;
    };
    fontSizes: {
      fontxs: string;
      fontsm: string;
      fontmd: string; //1em = 16px
      fontlg: string;
      fontxl: string;
      font2xl: string;
      font3xl: string;
    };
    headerHeight: string;
  }
}
